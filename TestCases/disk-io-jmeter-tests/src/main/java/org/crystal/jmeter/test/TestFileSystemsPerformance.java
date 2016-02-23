package org.crystal.jmeter.test;

import java.io.*;
import java.util.*;


import org.apache.jmeter.config.Arguments;
import org.apache.jmeter.protocol.java.sampler.JavaSamplerClient;
import org.apache.jmeter.protocol.java.sampler.JavaSamplerContext;
import org.apache.jmeter.samplers.SampleResult;
import org.apache.jorphan.logging.LoggingManager;
import org.apache.log.Logger;


public class TestFileSystemsPerformance implements JavaSamplerClient{
    private static final Logger logger = LoggingManager.getLoggerForClass();
    



	public Arguments getDefaultParameters() {
		Arguments defaultParameters = new Arguments();
        defaultParameters.addArgument("indexfilesystem.path", "${indexfilesystem.path}");
        defaultParameters.addArgument("contentfilesystem.path", "${contentfilesystem.path}");
		return defaultParameters;
	}


    /*  Fill an 8 Gb file with a repeating sequence of 1024 bytes using a BufferedOutputStream with 32K buffer size.
      Data will be written in a loop, no extra processing is done inside the loop ( testWriteNoProcessing method). */

    private static void testWriteNoProcessing( final long fileSize ) throws IOException {
        final File outFile = File.createTempFile("tmp", ".tmp");
        final long segments = fileSize / 1024;
        final byte[] buf = new byte[ 1024 ];
        //generate initial data
        new Random( 1000 ).nextBytes( buf );
        //write durations
        final long[] writes = new long[(int) segments];

        final long start = System.currentTimeMillis();
        final OutputStream os = new BufferedOutputStream( new FileOutputStream( outFile ), 32768 );
        try
        {
            for ( long count = 0; count < segments; ++count )
            {
                final long before = System.currentTimeMillis();
                os.write( buf );
                final long after = System.currentTimeMillis();
                writes[((int) count)] = after - before;
            }
        }
        finally {
            final long beforeClose = System.currentTimeMillis();
            os.close();
            final long time = System.currentTimeMillis();
            System.out.println( "File size = " + outFile.length() / 1024 / 1024 / 1024 + " G");
            System.out.println( "Time to close a file = " + ((time - beforeClose) / 1000.0) + " sec" );
            System.out.println( "Time to write a file with size = " + ( fileSize / 1024 / 1024 / 1024) + " G = " +
                    ( (time - start) / 1000.0) + " sec "
            );
            outFile.delete();
        }

        long min = Long.MAX_VALUE;
        long max = Long.MIN_VALUE;
        long total = 0;
        int cnt = 0;
        List<Long> lst = new ArrayList<Long>( 1024 );
        for (final long len : writes) {
            if (len != 0) {
                if (len < min) min = len;
                if (len > max) max = len;
                cnt++;
                total += len;
                lst.add(len);
            }
        }
        System.out.println( "Expected count = " + writes.length / 32 + " Actual count = " + cnt );
        System.out.println( "Min duration = " + min + " Max duration = " + max );
        System.out.println( "Avg duration = " + ( total / cnt ) );

        Collections.sort(lst);
        System.out.println("Median duration = " + lst.get(lst.size() / 2));
        System.out.println("75% duration = " + lst.get(lst.size() * 3 / 4));
        System.out.println("90% duration = " + lst.get(lst.size() * 9 / 10));
        System.out.println("95% duration = " + lst.get(lst.size() * 19 / 20));
        System.out.println( "99% duration = " + lst.get( lst.size() * 99 / 100 ) );

        for ( int i = 0 ; i < lst.size(); ++i )
            if ( lst.get( i ) != 1 )
                System.out.println( "writes[" + i + "] = " + lst.get( i ) );
    }

    /*  Fill an 8 Gb file with a sequence of 1024 bytes which is recomputed before writing it on the every iteration.
      Data will be written using a BufferedOutputStream with 32K buffer size ( testWriteSimple ).  */

    private static void testWriteSimple( final long fileSize ) throws IOException {
        final File outFile = File.createTempFile( "tmp", ".tmp" );
        final long segments = fileSize / 1024;
        final byte[] buf = new byte[ 1024 ];
        //generate initial data
        new Random( 1000 ).nextBytes( buf );
        //write durations
        final long[] writes = new long[(int) segments];

        final long start = System.currentTimeMillis();
        final OutputStream os = new BufferedOutputStream( new FileOutputStream( outFile ), 32768 );
        try
        {
            for ( long count = 0; count < segments; ++count )
            {
                //some calculation before each write
                for ( int i = 0; i < 1024; ++i )
                    buf[ i ] = (byte) (buf[ i ] * buf[ i ] / 3);
                final long before = System.currentTimeMillis();
                os.write( buf );
                final long after = System.currentTimeMillis();
                writes[((int) count)] = after - before;
            }
        }
        finally {
            final long beforeClose = System.currentTimeMillis();
            os.close();
            final long time = System.currentTimeMillis();
            System.out.println( "File size = " + outFile.length() / 1024 / 1024 / 1024 + " G");
            System.out.println( "Time to close a file = " + ((time - beforeClose) / 1000.0) + " sec" );
            System.out.println( "Time to write a file with size = " + ( fileSize / 1024 / 1024 / 1024) + " G = " +
                    ( (time - start) / 1000.0) + " sec "
            );
            outFile.delete();
        }

        long min = Long.MAX_VALUE;
        long max = Long.MIN_VALUE;
        long total = 0;
        int cnt = 0;
        List<Long> lst = new ArrayList<Long>( 1024 );
        for (final long len : writes) {
            if (len != 0) {
                if (len < min) min = len;
                if (len > max) max = len;
                cnt++;
                total += len;
                lst.add(len);
            }
        }
        System.out.println( "Expected count = " + writes.length / 32 + " Actual count = " + cnt );
        System.out.println( "Min duration = " + min + " Max duration = " + max );
        System.out.println( "Avg duration = " + ( total / cnt ) );

        Collections.sort( lst );
        System.out.println("Median duration = " + lst.get(lst.size() / 2));
        System.out.println("75% duration = " + lst.get(lst.size() * 3 / 4));
        System.out.println("90% duration = " + lst.get(lst.size() * 9 / 10));
        System.out.println("95% duration = " + lst.get(lst.size() * 19 / 20));
        System.out.println( "99% duration = " + lst.get( lst.size() * 99 / 100 ) );

        for ( int i = 0 ; i < lst.size(); ++i )
            if ( lst.get( i ) != 1 )
                System.out.println( "writes[" + i + "] = " + lst.get( i ) );
    }

    /* Same as previous test, but data will not be written to disk. This test will estimate how long does it take to prepare the data to write.  */

    private static void testInMemoryProcessing( final long fileSize ) throws IOException {
        final long segments = fileSize / 1024;
        final byte[] buf = new byte[ 1024 ];
        //generate initial data
        new Random( 1000 ).nextBytes( buf );

        long sum = 0;
        final long start = System.currentTimeMillis();
        try
        {
            for ( long count = 0; count < segments; ++count )
            {
                //some calculation before each write
                for ( int i = 0; i < 1024; ++i )
                    buf[ i ] = (byte) (buf[ i ] * buf[ i ] / 3);
                for ( int i = 0; i < 1024; ++i )
                    sum += buf[ i ];
            }
        }
        finally {
            System.out.println( sum );
            final long time = System.currentTimeMillis();
            System.out.println( "Time to generate data for a file with size = " + ( fileSize / 1024 / 1024 / 1024) + " G = " +
                    ( (time - start) / 1000.0) + " sec "
            );
        }
    }

    private static void writeLinkedFile(final File file, final int segments ) throws IOException {
        //create a shuffled list
        final List<Integer> lst = new ArrayList<Integer>( segments );
        for ( int i = 1; i <= segments; ++i )
            lst.add( i );
        Collections.shuffle( lst, new Random( 1000 ) );
        //now create a file. A file contains a number of segments. Each segment starts with int ID (a number from
        //previous list), followed by a long offset - pointer to the next record, followed by 1K - 12 byte padding.
        //the first record has ID=0 and points to a record with ID = 1
        //map from value [1 ; segments] to its shuffled position
        final int[] positions = new int[ segments + 1 ];
        for ( int i = 0; i < lst.size(); ++i )
            positions[ lst.get( i ) ] = i;

        final byte[] padding = new byte[ 1024 - 8 - 4 ];

        if ( file.exists() )
            file.delete();
        final DataOutputStream dos = new DataOutputStream( new BufferedOutputStream( new FileOutputStream( file ), 64 * 1024 ) );
        try
        {
            dos.writeInt(0);//ID
            dos.writeLong(1024L * (positions[1] + 1) ); //+1 due to an added record with id=0
            dos.write(padding);
            for ( int i = 0; i < segments; ++i )
            {
                final Integer id = lst.get(i);
                dos.writeInt(id); //ID (it is in the shuffled list)
                if ( id == segments )
                    dos.writeLong( -1L );
                else
                {
                    final Integer nextId = positions[ id + 1 ] + 1; //index: +1 due to an added record with id=0
                    dos.writeLong(1024L * nextId);
                }
                dos.write(padding);
            }
        }
        finally {
            dos.close();
        }
    }

    private static void followLinkedFile( final File file ) throws IOException {
        int expectedId = 0;
        long offset = 0;
        final long start = System.currentTimeMillis();
        int cnt = 0;
        long prevTs = System.currentTimeMillis();

        final RandomAccessFile raf = new RandomAccessFile( file, "r" );
        try
        {
            while ( offset >= 0 )
            {
                raf.seek( offset );
                final int id = raf.readInt();
                if ( id != expectedId )
                    throw new AssertionError( "File is broken! Expected " + expectedId + ", but got " + id );
                offset = raf.readLong();
                expectedId = id + 1;
                cnt++;
                if ( cnt == 10000 )
                {
                    final long curTs = System.currentTimeMillis();
                    final double oneSeek = 1.0 * (curTs - prevTs) / cnt;
                    System.out.println( expectedId + " speed = " + 1000.0 / oneSeek + " seeks/sec" );
                    cnt = 0;
                    prevTs = curTs;
                }
            }
        }
        finally {
            raf.close();
        }
        final long time = System.currentTimeMillis() - start;
        System.out.println( "Time to read till id =" + expectedId + " = " + ( time / 1000.0) + " sec");
    }


    public SampleResult runTest(JavaSamplerContext runTestContext) {
		String indexFileSystemPath = runTestContext.getParameter("indexfilesystem.path");
		String contentFileSystemPath = runTestContext.getParameter("contentfilesystemPath.path");
        SampleResult result = new SampleResult();
		try{
	        logger.info("Successfully Tested Index Disk IO  at path: " + indexFileSystemPath);
	        logger.info("Successfully Tested Content Store Disk IO at path: " + contentFileSystemPath);
            result.sampleStart();
            testWriteNoProcessing(8000000000L);
            testWriteSimple(8000000000L);
            testInMemoryProcessing(8000000000L);




	        result.sampleEnd();
	        result.setSuccessful(true);
	        result.setResponseMessage("Successfully Tested IO at both Indexes Disk and Content Store");
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
		String indexFileSystemPath = setupContext.getParameter("indexfilesystem.path");
		String contentFileSystemPath = setupContext.getParameter("contentfilesystem.path");
        logger.info("Successfully retrieved indexFileSystemPath.");
        logger.info("Successfully retrieved contentFileSystemPath.");

	}

	public void teardownTest(JavaSamplerContext teardownContext) {
		String indexFileSystemPath = teardownContext.getParameter("indexfilesystem.path");
		String contentFileSystemPath = teardownContext.getParameter("contentfilesystem.path");

	}
}
