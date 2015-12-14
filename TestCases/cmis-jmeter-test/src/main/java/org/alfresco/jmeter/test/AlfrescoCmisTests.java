package org.alfresco.jmeter.test;



import java.io.*;
import java.math.BigInteger;
import java.nio.file.Files;
import java.nio.file.Path;
import java.nio.file.Paths;
import java.text.SimpleDateFormat;
import java.util.*;

import org.alfresco.jmeter.supersize.SuperSizeHelper;
import org.alfresco.jmeter.util.CmisHelper;
import org.apache.chemistry.opencmis.client.api.Document;
import org.apache.chemistry.opencmis.client.api.Folder;
import org.apache.chemistry.opencmis.commons.PropertyIds;
import org.apache.chemistry.opencmis.commons.data.ContentStream;
import org.apache.chemistry.opencmis.commons.impl.dataobjects.ContentStreamImpl;
import org.apache.commons.httpclient.*;
import org.apache.commons.httpclient.methods.*;
import org.apache.jmeter.config.Arguments;
import org.apache.jmeter.protocol.java.sampler.JavaSamplerClient;
import org.apache.jmeter.protocol.java.sampler.JavaSamplerContext;
import org.apache.jmeter.samplers.SampleResult;
import org.apache.jorphan.logging.LoggingManager;
import org.apache.log.Logger;


import org.apache.commons.httpclient.HttpClient;


public class AlfrescoCmisTests implements JavaSamplerClient {

    private CmisHelper cmis;
    private SuperSizeHelper supersizer;
    private static final Logger logger = LoggingManager.getLoggerForClass();





    public Arguments getDefaultParameters() {
        Arguments defaultParameters = new Arguments();
        defaultParameters.addArgument("cmis.username", "${cmis.username}");
        defaultParameters.addArgument("cmis.password", "${cmis.password}");
        defaultParameters.addArgument("cmis.host", "${cmis.host}");
        defaultParameters.addArgument("cmis.port", "${cmis.port}");
        defaultParameters.addArgument("cmis.url", "${cmis.protocol}://${cmis.host}:${cmis.port}/${cmis.url.context}");
        defaultParameters.addArgument("cmis.folder.path", "${cmis.folder.path}");
        defaultParameters.addArgument("sample.file.dir", "${sample.file.dir}");
        defaultParameters.addArgument("loginEveryIteration", "${loginEveryIteration}");
        defaultParameters.addArgument("max_files_per_folder", "${max_files_per_folder}");
        defaultParameters.addArgument("files_deployment_location", "${files_deployment_location}");
        defaultParameters.addArgument("images_location", "${images_location}");
        defaultParameters.addArgument("files_per_folder", "${files_per_folder}");
        return defaultParameters;
    }

    public SampleResult runTest(JavaSamplerContext runTestContext) {

        BufferedWriter testsFolderCreationTimesOut=null;
        String cmisFolderPath = runTestContext.getParameter("cmis.folder.path");
        String adminuser = runTestContext.getParameter("cmis.username");
        String adminpass = runTestContext.getParameter("cmis.password");
        String alfHost = runTestContext.getParameter("cmis.host");
        String alfPort = runTestContext.getParameter("cmis.port");
        String loginEveryIteration = runTestContext.getParameter("loginEveryIteration");


        SampleResult result = new SampleResult();
        List<String> pptFilesList= new ArrayList<String>();
        List<String> wordFilesList= new ArrayList<String>();
        List<String> xlsFilesList= new ArrayList<String>();
        List<String> pdfFilesList= new ArrayList<String>();
        try{
            result.sampleStart();
            logger.info("Consulting CMIS Tests Started" );
            String creds = adminuser + ":" + adminpass;
            Calendar cal = Calendar.getInstance();
            //  Creating a unique name for the Folder
            Random random = new Random();
            int randomNo = random.nextInt(1000);
            String folderName = "alf-consulting-test-yes"+randomNo;
            long s_cmis_create=System.currentTimeMillis();
            long startedcmiscreateAt=new Date().getTime();
            if (loginEveryIteration.equals("true"))  { // If flag is set , Each iteration run executes a login ands get a login ticket
                String alfrescoTiccketURL = "http://" + alfHost + ":" + alfPort + "/alfresco"+"/service/api/login?u="+adminuser+"&pw="+adminpass;
                String ticketURLResponse = invokeWebScriptgetRequest(alfrescoTiccketURL);
                int startindex= ticketURLResponse.indexOf("<ticket>")+8;
                int endindex = ticketURLResponse.indexOf("</ticket>");
                ticketURLResponse = ticketURLResponse.substring(startindex, endindex);
                System.out.println("Got the login ticket at:  "+ new Date());
                logger.info("Got the login ticket at:  "+ new Date());
            }
            /*************************************************************
             Cmis Creating a new folder under the main test-folder  Home
             ************************************************************/
            try {

                System.out.println(" Root Folder Path is  "+ cmis.getRootFolder());
                Folder newFolder=cmis.createCmisFolder(cmis.getRootFolder() +  cmisFolderPath,folderName);

                /*************************************************************
                 Cmis Creating PPT Files under this folder
                 ************************************************************/
                System.out.println(" Creating PPT files ");
                pptFilesList = supersizer.createPowerPointFiles();
                logger.info("PPT files created are " + pptFilesList);
                logger.info("Importing PPT files via CMIS...");
                Iterator it = pptFilesList.iterator();
                 while (it.hasNext()) {
                     Map<String, Object> lProperties = new HashMap<String, Object>();
                     String name = (String) it.next();
                     Path path = Paths.get(name);
                     lProperties.put(PropertyIds.OBJECT_TYPE_ID, "cmis:document");
                     lProperties.put(PropertyIds.NAME, path.getFileName().toString());
                     lProperties.put(PropertyIds.DESCRIPTION, "Consulting Jmeter Tests Created this Pptx document");
                     lProperties.put(PropertyIds.CREATED_BY, "admin");
                     lProperties.put(PropertyIds.CREATION_DATE, new Date().toString());

                     byte[] content = Files.readAllBytes(path);
                     InputStream stream = new ByteArrayInputStream(content);
                     ContentStream contentStream = new ContentStreamImpl(name, new BigInteger(content), "application/vnd.openxmlformats-officedocument.presentationml.presentation", stream);
                     Document newContent1 =  newFolder.createDocument(lProperties, contentStream, null);
                     System.out.println("Document created: " + newContent1.getId());
                 }

                 /*************************************************************
                 End Cmis Creating PPT Files under the folder
                 ************************************************************/

                /*************************************************************
                 Cmis Creating Word Files under this folder
                 ************************************************************/
                System.out.println(" Creating Ms Word files ");
                wordFilesList = supersizer.createWordFiles();
                logger.info("PPT files created are " + wordFilesList);
                logger.info("Importing PPT files via CMIS...");
                Iterator itWord = wordFilesList.iterator();
                while (itWord.hasNext()) {
                    Map<String, Object> lProperties = new HashMap<String, Object>();
                    String name = (String) itWord.next();
                    Path path = Paths.get(name);
                    lProperties.put(PropertyIds.OBJECT_TYPE_ID, "cmis:document");
                    lProperties.put(PropertyIds.NAME, path.getFileName().toString());
                    lProperties.put(PropertyIds.DESCRIPTION, "Consulting Jmeter Tests Created this Word document");
                    lProperties.put(PropertyIds.CREATED_BY, "admin");
                    lProperties.put(PropertyIds.CREATION_DATE, new Date().toString());
                    byte[] content = Files.readAllBytes(path);
                    InputStream stream = new ByteArrayInputStream(content);
                    ContentStream contentStream = new ContentStreamImpl(name, new BigInteger(content), "application/vnd.openxmlformats-officedocument.wordprocessingml.document", stream);
                    Document newContent1 =  newFolder.createDocument(lProperties, contentStream, null);
                    System.out.println("Document created: " + newContent1.getId());
                }

                /*************************************************************
                 End Cmis Creating World Files under the folder
                 ************************************************************/

                /*************************************************************
                 Cmis Creating Xls Files under this folder
                 ************************************************************/
                System.out.println(" Creating Ms Excell files ");
                xlsFilesList = supersizer.createExcellFiles();
                logger.info("PPT files created are " + xlsFilesList);
                logger.info("Importing PPT files via CMIS...");
                Iterator itXls = xlsFilesList.iterator();
                while (itXls.hasNext()) {
                    Map<String, Object> lProperties = new HashMap<String, Object>();
                    String name = (String) itXls.next();
                    Path path = Paths.get(name);
                    lProperties.put(PropertyIds.OBJECT_TYPE_ID, "cmis:document");
                    lProperties.put(PropertyIds.NAME, path.getFileName().toString());
                    lProperties.put(PropertyIds.DESCRIPTION, "Consulting Jmeter Tests Created this Excell document");
                    lProperties.put(PropertyIds.CREATED_BY, "admin");
                    lProperties.put(PropertyIds.CREATION_DATE, new Date().toString());
                    byte[] content = Files.readAllBytes(path);
                    InputStream stream = new ByteArrayInputStream(content);
                    ContentStream contentStream = new ContentStreamImpl(name, new BigInteger(content), "application/vnd.ms-excel", stream);
                    Document newContent1 =  newFolder.createDocument(lProperties, contentStream, null);
                    System.out.println("Document created: " + newContent1.getId());
                }

                /*************************************************************
                 End Cmis Creating Xls Files under the folder
                 ************************************************************/


                /*************************************************************
                 Cmis Creating Pdf Files under this folder
                 ************************************************************/
                System.out.println(" Creating Pdf files ");
                 pdfFilesList = supersizer.createPdfFiles();
                logger.info("PPT files created are " + pdfFilesList);
                logger.info("Importing PPT files via CMIS...");
                Iterator itPdfs = pdfFilesList.iterator();
                while (itPdfs.hasNext()) {
                    Map<String, Object> lProperties = new HashMap<String, Object>();
                    String name = (String) itPdfs.next();
                    Path path = Paths.get(name);
                    lProperties.put(PropertyIds.OBJECT_TYPE_ID, "cmis:document");
                    lProperties.put(PropertyIds.NAME, path.getFileName().toString());
                    lProperties.put(PropertyIds.DESCRIPTION, "Consulting Jmeter Tests Created this Pdf document");
                    lProperties.put(PropertyIds.CREATED_BY, "admin");
                    lProperties.put(PropertyIds.CREATION_DATE, new Date().toString());
                    byte[] content = Files.readAllBytes(path);
                    InputStream stream = new ByteArrayInputStream(content);
                    ContentStream contentStream = new ContentStreamImpl(name, new BigInteger(content), "application/pdf", stream);
                    Document newContent1 =  newFolder.createDocument(lProperties, contentStream, null);
                    System.out.println("Document created: " + newContent1.getId());
                }

                /*************************************************************
                 End Cmis Creating Pdf Files under the folder
                 ************************************************************/

            } catch (Exception e) {
                e.printStackTrace();
            }

            long endedcmiscreateAt=new Date().getTime();
            long difference=endedcmiscreateAt - startedcmiscreateAt;
            System.out.println("Test 1 - Folder Creation Jmeter Result Alfresco took: " + difference + " ms to create the " + folderName + "folder" );
            long cmis_create_result=System.currentTimeMillis()-s_cmis_create;
            System.out.println(" Time to Query for Main Tests Directory "+ cmis_create_result);
            SimpleDateFormat sdf = new SimpleDateFormat("yyyy-MM-dd HH:mm:ss");

            try {
                testsFolderCreationTimesOut.write(sdf.format(cal.getTime()) + "|" + cmis_create_result + "\n");
                testsFolderCreationTimesOut.flush();
            } catch (IOException e) {
                e.printStackTrace();
            }


            result.sampleEnd();
            result.setSuccessful(true);
            result.setResponseMessage("Successfully created cmis document at path: ");
            result.setResponseCodeOK();

        }
        catch(Exception e){
            result.sampleEnd();
            result.setSuccessful(false);
            result.setResponseMessage("Failed to execute consulting cmis tests: " + e);
            StringWriter stringWriter = new StringWriter();
            e.printStackTrace( new PrintWriter(stringWriter));
            result.setResponseData(stringWriter.toString().getBytes());
            result.setDataType(SampleResult.TEXT);
            result.setResponseCode("500");
        }
        return result;
    }

    public void setupTest(JavaSamplerContext setupContext) {

        String username = setupContext.getParameter("cmis.username");
        String password = setupContext.getParameter("cmis.password");
        String cmisUrl = setupContext.getParameter("cmis.url");
        String cmisFolderPath = setupContext.getParameter("cmis.folder.path");
        String max_files_per_folder = setupContext.getParameter("max_files_per_folder");
        String files_deployment_location = setupContext.getParameter("files_deployment_location");
        String images_location = setupContext.getParameter("images_location");
        String files_per_folder = setupContext.getParameter("files_per_folder");
        cmis = new CmisHelper(username, password, cmisUrl);
        supersizer = new SuperSizeHelper(max_files_per_folder,files_deployment_location,images_location,files_per_folder);
        String rootFolder = cmis.getRootFolder();
        logger.info("Successfully retrieved root folder.");

        boolean exists = cmis.folderExistsAtPath(rootFolder + cmisFolderPath);
        logger.info("Folder exists at path? " + exists);


        if(!exists){
            String folderPath = cmis.createFolder(rootFolder, cmisFolderPath);
            logger.info("Folder created with path: " + folderPath);
            logger.info("Expecting: " + rootFolder + cmisFolderPath);
        }
        else{

            logger.info("Root folder exists, no need to create it " );
        }
    }

    public void teardownTest(JavaSamplerContext teardownContext) {
        String sampleFileDir = teardownContext.getParameter("sample.file.dir");

//        try {
//            FileUtils.deleteDirectory(new File(sampleFileDir));
//            logger.info("Successfully cleaned up sample files directory.");
//        } catch (IOException e) {
//            logger.error("Failed to clean up sample files directory.", e);
//        }
    }




    public static String invokeWebScriptgetRequest(String url){

// Create an instance of HttpClient.
        HttpClient client = new HttpClient();
// Create a method instance.
        GetMethod method = new GetMethod(url);
        String response = null;
        try {
        // Execute the method.
            int statusCode = client.executeMethod(method);

            if (statusCode != HttpStatus.SC_OK) {
                System.err.println("Method failed: " + method.getStatusLine());
            }

// Read the response body.
            byte[] responseBody = method.getResponseBody();

// Deal with the response.
// Use caution: ensure correct character encoding and is not binary data
            response = new String(responseBody);
            System.out.println(response);

        } catch (HttpException e) {
            System.err.println("Fatal protocol violation: " + e.getMessage());
            e.printStackTrace();
        } catch (IOException e) {
            System.err.println("Fatal transport error: " + e.getMessage());
            e.printStackTrace();
        } finally {
// Release the connection.
            method.releaseConnection();
        }
        return response;

    }




}
