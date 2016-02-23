package org.crystal.jmeter.test;

import org.apache.jmeter.config.Arguments;
import org.apache.jmeter.protocol.java.sampler.JavaSamplerClient;
import org.apache.jmeter.protocol.java.sampler.JavaSamplerContext;
import org.apache.jmeter.samplers.SampleResult;
import org.apache.jorphan.logging.LoggingManager;
import org.apache.log.Logger;
import org.json.simple.JSONArray;
import org.json.simple.JSONObject;

import java.io.*;
import java.net.InetAddress;
import java.net.UnknownHostException;
import java.nio.ByteBuffer;
import java.nio.MappedByteBuffer;
import java.nio.channels.FileChannel;
import java.text.SimpleDateFormat;
import java.util.Calendar;


import static java.lang.Integer.MAX_VALUE;
import static java.lang.System.out;
import static java.nio.channels.FileChannel.MapMode.READ_ONLY;
import static java.nio.channels.FileChannel.MapMode.READ_WRITE;


public class TestSeqIOPerfIndexes8gb implements JavaSamplerClient {
    private static final Logger logger = LoggingManager.getLoggerForClass();
    public static final int PAGE_SIZE = 1024 * 4;
    public static final long FILE_SIZE = PAGE_SIZE * 2000L * 1000L;
    public static final String FILE_NAME = "testIndexesIO8gb.dat";
    public static final byte[] BLANK_PAGE = new byte[PAGE_SIZE];
    public static  String indexFileSystemPath = "";
    public static  String resultsDirectory = "";
    private static JSONObject resultObj = new JSONObject();
    public static final String OUTPUT_JSON_FILE_NAME = "IoResultsIndexes8gb.json";

    public Arguments getDefaultParameters() {
        Arguments defaultParameters = new Arguments();
        defaultParameters.addArgument("indexfilesystem.path", "${indexfilesystem.path}");
        defaultParameters.addArgument("resultsDirectory", "${resultsDirectory}");
        return defaultParameters;
    }


    private static void preallocateTestFile(final String fileName) throws Exception
    {
        // Create the file on the Indexes Disk and pre-allocate size
        RandomAccessFile file = new RandomAccessFile(indexFileSystemPath + "/" + fileName, "rw");
        for (long i = 0; i < FILE_SIZE; i += PAGE_SIZE)
        {
            file.write(BLANK_PAGE, 0, PAGE_SIZE);
        }
        file.close();

    }



    private static void deleteFile(final String testFileName) throws Exception
    {
        File file = new File(testFileName);
        if (!file.delete())
        {
            out.println("Failed to delete test file=" + testFileName);
            out.println("Windows does not allow mapped files to be deleted.");
        }
    }

    public abstract static class PerfTestCase
    {
        public enum Type { READ, WRITE }

        private final String name;
        private int checkSum;

        public PerfTestCase(final String name)
        {
            this.name = name;
        }

        public String getName()
        {
            return name;
        }

        public long test(final Type type, final String fileName)
        {
            long start = System.currentTimeMillis();

            try
            {
                switch (type)
                {
                    case WRITE:
                    {
                        checkSum = testWrite(fileName);
                        break;
                    }

                    case READ:
                    {
                        final int checkSum = testRead(fileName);
                        if (checkSum != this.checkSum)
                        {
                            final String msg = getName() +
                                    " expected=" + this.checkSum +
                                    " got=" + checkSum;
                            throw new IllegalStateException(msg);
                        }
                        break;
                    }
                }
            }
            catch (Exception ex)
            {
                ex.printStackTrace();
            }

            return System.currentTimeMillis() - start;
        }

        public abstract int testWrite(final String fileName) throws Exception;
        public abstract int testRead(final String fileName) throws Exception;
    }

    private static PerfTestCase[] testCases =
            {
                    new PerfTestCase("RandomAccessFile")
                    {
                        public int testWrite(final String fileName) throws Exception
                        {
                            RandomAccessFile file = new RandomAccessFile(fileName, "rw");
                            final byte[] buffer = new byte[PAGE_SIZE];
                            int pos = 0;
                            int checkSum = 0;

                            for (long i = 0; i < FILE_SIZE; i++)
                            {
                                byte b = (byte)i;
                                checkSum += b;

                                buffer[pos++] = b;
                                if (PAGE_SIZE == pos)
                                {
                                    file.write(buffer, 0, PAGE_SIZE);
                                    pos = 0;
                                }
                            }

                            file.close();

                            return checkSum;
                        }

                        public int testRead(final String fileName) throws Exception
                        {
                            RandomAccessFile file = new RandomAccessFile(fileName, "r");
                            final byte[] buffer = new byte[PAGE_SIZE];
                            int checkSum = 0;
                            int bytesRead;

                            while (-1 != (bytesRead = file.read(buffer)))
                            {
                                for (int i = 0; i < bytesRead; i++)
                                {
                                    checkSum += buffer[i];
                                }
                            }

                            file.close();

                            return checkSum;
                        }
                    },

                    new PerfTestCase("BufferedStreamFile")
                    {
                        public int testWrite(final String fileName) throws Exception
                        {
                            int checkSum = 0;
                            OutputStream out =
                                    new BufferedOutputStream(new FileOutputStream(fileName));

                            for (long i = 0; i < FILE_SIZE; i++)
                            {
                                byte b = (byte)i;
                                checkSum += b;
                                out.write(b);
                            }

                            out.close();

                            return checkSum;
                        }

                        public int testRead(final String fileName) throws Exception
                        {
                            int checkSum = 0;
                            InputStream in =
                                    new BufferedInputStream(new FileInputStream(fileName));

                            int b;
                            while (-1 != (b = in.read()))
                            {
                                checkSum += (byte)b;
                            }

                            in.close();

                            return checkSum;
                        }
                    },

                    new PerfTestCase("BufferedChannelFile")
                    {
                        public int testWrite(final String fileName) throws Exception
                        {
                            FileChannel channel =
                                    new RandomAccessFile(fileName, "rw").getChannel();
                            ByteBuffer buffer = ByteBuffer.allocate(PAGE_SIZE);
                            int checkSum = 0;

                            for (long i = 0; i < FILE_SIZE; i++)
                            {
                                byte b = (byte)i;
                                checkSum += b;
                                buffer.put(b);

                                if (!buffer.hasRemaining())
                                {
                                    buffer.flip();
                                    channel.write(buffer);
                                    buffer.clear();
                                }
                            }

                            channel.close();

                            return checkSum;
                        }

                        public int testRead(final String fileName) throws Exception
                        {
                            FileChannel channel =
                                    new RandomAccessFile(fileName, "rw").getChannel();
                            ByteBuffer buffer = ByteBuffer.allocate(PAGE_SIZE);
                            int checkSum = 0;

                            while (-1 != (channel.read(buffer)))
                            {
                                buffer.flip();

                                while (buffer.hasRemaining())
                                {
                                    checkSum += buffer.get();
                                }

                                buffer.clear();
                            }

                            return checkSum;
                        }
                    },

                    new PerfTestCase("MemoryMappedFile")
                    {
                        public int testWrite(final String fileName) throws Exception
                        {
                            FileChannel channel =
                                    new RandomAccessFile(fileName, "rw").getChannel();
                            MappedByteBuffer buffer =
                                    channel.map(READ_WRITE, 0,
                                            Math.min(channel.size(), MAX_VALUE));
                            int checkSum = 0;

                            for (long i = 0; i < FILE_SIZE; i++)
                            {
                                if (!buffer.hasRemaining())
                                {
                                    buffer =
                                            channel.map(READ_WRITE, i,
                                                    Math.min(channel.size() - i , MAX_VALUE));
                                }

                                byte b = (byte)i;
                                checkSum += b;
                                buffer.put(b);
                            }

                            channel.close();

                            return checkSum;
                        }

                        public int testRead(final String fileName) throws Exception
                        {
                            FileChannel channel =
                                    new RandomAccessFile(fileName, "rw").getChannel();
                            MappedByteBuffer buffer =
                                    channel.map(READ_ONLY, 0,
                                            Math.min(channel.size(), MAX_VALUE));
                            int checkSum = 0;

                            for (long i = 0; i < FILE_SIZE; i++)
                            {
                                if (!buffer.hasRemaining())
                                {
                                    buffer =
                                            channel.map(READ_WRITE, i,
                                                    Math.min(channel.size() - i , MAX_VALUE));
                                }

                                checkSum += buffer.get();
                            }

                            channel.close();

                            return checkSum;
                        }
                    },
            };

    public SampleResult runTest(JavaSamplerContext runTestContext) {
        String indexFileSystemPath = runTestContext.getParameter("indexfilesystem.path");


        String timeStamp = new SimpleDateFormat("yyyy/MM/dd HH:mm:ss").format(Calendar.getInstance().getTime());
        resultObj.put("Date and Execution Time", timeStamp);

        resultObj.put("Execution Plan", "Sequential Performance of Indexes FS");
        try {
            resultObj.put("Host", InetAddress.getLocalHost().getHostAddress());
        } catch (UnknownHostException e) {
            e.printStackTrace();
        }

        SampleResult result = new SampleResult();

        try{
            result.sampleStart();
            preallocateTestFile(FILE_NAME);

            for (final PerfTestCase testCase : testCases)
            {
                JSONArray readDuration = new JSONArray();
                JSONArray bytesRead = new JSONArray();
                JSONArray bytesWrite = new JSONArray();
                for (int i = 0; i < 5; i++)
                {
                    System.gc();
                    long writeDurationMs = testCase.test(PerfTestCase.Type.WRITE, FILE_NAME);
                    System.gc();
                    long readDurationMs = testCase.test(PerfTestCase.Type.READ,FILE_NAME);
                    long bytesReadPerSec = (FILE_SIZE * 1000L) / readDurationMs;
                    long bytesWrittenPerSec = (FILE_SIZE * 1000L) / writeDurationMs;
                    readDuration.add(readDurationMs);
                    bytesRead.add(bytesReadPerSec);
                    bytesWrite.add(bytesWrittenPerSec);


                    out.format("%s\twrite=%,d\tread=%,d bytes/sec\n",testCase.getName(), bytesWrittenPerSec, bytesReadPerSec);



                    String output =  out.format("%s\twrite=%,d\tread=%,d bytes/sec\n",testCase.getName(),bytesWrittenPerSec, bytesReadPerSec).toString();
                    result.setSamplerData(testCase.getName() + "-- IO RESULTS --- " + output );
                    //resultIo.setSamplerData(testCase.getName() + "-- Writen Bytes per second:" + bytesWrittenPerSec + "-- Read Bytes per second:" + bytesReadPerSec);
                    result.addSubResult(result);

                }

                resultObj.put(testCase.getName(),readDuration);
                resultObj.put(testCase.getName(),bytesRead);
                resultObj.put(testCase.getName(),bytesWrite);
            }

            deleteFile(indexFileSystemPath + "/" + FILE_NAME);

            try {

                FileWriter file = new FileWriter(resultsDirectory + "/" + OUTPUT_JSON_FILE_NAME);
                file.write(resultObj.toJSONString());
                file.flush();
                file.close();

            } catch (IOException e) {
                e.printStackTrace();
            }

            result.sampleEnd();
            result.setSuccessful(true);
            logger.info("Successfully Tested Index Disk IO  at path: " + indexFileSystemPath);
            result.setResponseMessage("Successfully Tested IO at  Indexes Disk");
            result.setResponseCodeOK();
        }
        catch(Exception e){
            result.sampleEnd();
            result.setSuccessful(false);
            result.setResponseMessage("Failed to TestIO: " + e);
            StringWriter stringWriter = new StringWriter();
            e.printStackTrace( new PrintWriter(stringWriter));
            result.setResponseData(stringWriter.toString().getBytes());
            result.setDataType(SampleResult.TEXT);
            result.setResponseCode("500");
        }
        return result;
    }

    public void setupTest(JavaSamplerContext setupContext) {
        indexFileSystemPath = setupContext.getParameter("indexfilesystem.path");
        resultsDirectory = setupContext.getParameter("resultsDirectory");
        logger.info("Successfully retrieved indexFileSystemPath.");

    }

    public void teardownTest(JavaSamplerContext teardownContext) {
        String indexFileSystemPath = teardownContext.getParameter("indexfilesystem.path");
        String resultsDirectory = teardownContext.getParameter("resultsDirectory");


    }
}
