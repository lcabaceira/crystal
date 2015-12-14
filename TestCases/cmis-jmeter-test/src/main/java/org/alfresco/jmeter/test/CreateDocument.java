package org.alfresco.jmeter.test;

import java.io.File;
import java.io.IOException;
import java.io.PrintWriter;
import java.io.StringWriter;
import java.util.Collection;
import java.util.Random;

import org.alfresco.jmeter.util.CmisHelper;
import org.alfresco.jmeter.util.TextGenerator;
import org.apache.chemistry.opencmis.client.api.Folder;
import org.apache.commons.io.FileUtils;
import org.apache.commons.io.filefilter.SuffixFileFilter;
import org.apache.commons.io.filefilter.TrueFileFilter;
import org.apache.jmeter.config.Arguments;
import org.apache.jmeter.protocol.java.sampler.JavaSamplerClient;
import org.apache.jmeter.protocol.java.sampler.JavaSamplerContext;
import org.apache.jmeter.samplers.SampleResult;
import org.apache.jorphan.logging.LoggingManager;
import org.apache.log.Logger;


public class CreateDocument implements JavaSamplerClient{
    private static final Logger logger = LoggingManager.getLoggerForClass();
    
    private CmisHelper cmis;
    private Folder parentFolder = null;


	public Arguments getDefaultParameters() {
		Arguments defaultParameters = new Arguments();
        defaultParameters.addArgument("sample.file.dir", "${sample.file.dir}");
        defaultParameters.addArgument("total.file.count", "${total.file.count}");
        defaultParameters.addArgument("min.file.size", "${min.file.size}");
        defaultParameters.addArgument("max.file.size", "${max.file.size}");
        defaultParameters.addArgument("processing.file.dir", "${sample.file.dir}/${processing.file.dir}");
        defaultParameters.addArgument("completed.file.dir", "${sample.file.dir}/${completed.file.dir}");

        defaultParameters.addArgument("cmis.username", "${cmis.username}");
        defaultParameters.addArgument("cmis.password", "${cmis.password}");
        defaultParameters.addArgument("cmis.url", "${cmis.protocol}://${cmis.host}:${cmis.port}/${cmis.url.context}");	
        defaultParameters.addArgument("cmis.folder.path", "${cmis.folder.path}");
        
		return defaultParameters;
	}

	public SampleResult runTest(JavaSamplerContext runTestContext) {
		String cmisFolderPath = runTestContext.getParameter("cmis.folder.path");
		String sampleFileDir = runTestContext.getParameter("sample.file.dir");
		String processingFileDir = runTestContext.getParameter("processing.file.dir");
		String completedFileDir = runTestContext.getParameter("completed.file.dir");

        SampleResult result = new SampleResult();
		try{
			File sampleFiles = new File(sampleFileDir);
	        Collection<File> fileCollection = FileUtils.listFiles(sampleFiles , new SuffixFileFilter("txt"), TrueFileFilter.INSTANCE);
	        logger.info("File count: " + fileCollection.size());
            System.out.println("File count: " + fileCollection.size());

	        Random generator = new Random();
	        int randomIndex = generator.nextInt(fileCollection.size());
	        File file = (File) fileCollection.toArray()[randomIndex];
	        String documentName = file.getName();
	        byte[] content = FileUtils.readFileToByteArray(file);
	        File processingDir = new File(processingFileDir); 
	        FileUtils.moveFileToDirectory(file, processingDir, true);
			result.sampleStart();
	        parentFolder = (Folder) cmis.getObjectByPath("/" + cmisFolderPath);
	        String documentPath = cmis.createDocument(parentFolder, documentName, content);
	        File completeDir = new File(completedFileDir);
	        File processingFile = new File(processingFileDir + "/" + documentName);
	        FileUtils.moveFileToDirectory(processingFile, completeDir, true);
	        logger.info("Successfully created document at path: " + documentPath);

	        
	        result.sampleEnd();
	        result.setSuccessful(true);
	        result.setResponseMessage("Successfully created cmis document at path: " + documentPath);
	        result.setResponseCodeOK();
	        
		}
		catch(Exception e){
			result.sampleEnd();
            result.setSuccessful(false);
            result.setResponseMessage("Failed to create cmis document: " + e);
            
            StringWriter stringWriter = new StringWriter();
            e.printStackTrace( new PrintWriter(stringWriter));
            result.setResponseData(stringWriter.toString().getBytes());
            result.setDataType(SampleResult.TEXT);
            result.setResponseCode("500");
		}
			
        return result;
	}

	public void setupTest(JavaSamplerContext setupContext) {
		String sampleFileDir = setupContext.getParameter("sample.file.dir");
		int totalFileCount = setupContext.getIntParameter("total.file.count");
		int minFileSize = setupContext.getIntParameter("min.file.size");
		int maxFileSize = setupContext.getIntParameter("max.file.size");
		String username = setupContext.getParameter("cmis.username");
		String password = setupContext.getParameter("cmis.password");
		String cmisUrl = setupContext.getParameter("cmis.url");
		String cmisFolderPath = setupContext.getParameter("cmis.folder.path");

		File sampleFiles = new File(sampleFileDir);
		
		if(!(sampleFiles.isDirectory() || sampleFiles.exists())){
			logger.info("Generating sample files...");
			try {
				FileUtils.forceMkdir(sampleFiles);
				
			} catch (IOException e) {
				e.printStackTrace();
			}
		}
		TextGenerator generate = new TextGenerator(); 
    	generate.createFiles(sampleFileDir, totalFileCount, minFileSize, maxFileSize); 
        cmis = new CmisHelper(username, password, cmisUrl);
        
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
        	parentFolder = (Folder) cmis.getObjectByPath(rootFolder + cmisFolderPath);
        	logger.info("Successfully retreived folder: " + parentFolder.getPath());
        }   
	}

	public void teardownTest(JavaSamplerContext teardownContext) {
//		String sampleFileDir = teardownContext.getParameter("sample.file.dir");
//
//        try {
//             FileUtils.deleteDirectory(new File(sampleFileDir));
//	        logger.info("Successfully cleaned up sample files directory.");
//		} catch (IOException e) {
//			logger.error("Failed to clean up sample files directory.", e);
//		}
	}
}
