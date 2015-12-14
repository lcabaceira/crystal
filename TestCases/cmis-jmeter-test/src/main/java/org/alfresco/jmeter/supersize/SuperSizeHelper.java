package org.alfresco.jmeter.supersize;

import org.alfresco.consulting.locator.PropertiesLocator;
import org.alfresco.consulting.tools.content.creator.agents.*;
import org.apache.chemistry.opencmis.client.api.Repository;
import org.apache.chemistry.opencmis.client.api.Session;
import org.apache.chemistry.opencmis.client.api.SessionFactory;
import org.apache.chemistry.opencmis.client.runtime.SessionFactoryImpl;
import org.apache.chemistry.opencmis.commons.SessionParameter;
import org.apache.chemistry.opencmis.commons.enums.BindingType;
import org.apache.jorphan.logging.LoggingManager;
import org.apache.log.Logger;

import java.util.*;
import java.util.concurrent.ExecutorService;
import java.util.concurrent.Executors;
import java.util.concurrent.TimeUnit;

public class SuperSizeHelper {

    private static final Logger logger = LoggingManager.getLoggerForClass();

    private MSPowerPointAgent pptAgent;
    private MSWordAgent wordAgent;
    private MSExcelAgent xlsAgent;
    private PdfAgent pdfAgent;

    private String maxFiles = "";
    private String deployPath = "";
    private String images =  "";
    private String files_per_folder = "";

    public SuperSizeHelper(String maxFiles, String deployPath,String images,String files_per_folder)
    {
        logger.debug("Creating SuperSizer client");
        this.files_per_folder=files_per_folder;
        this.deployPath=deployPath;
        this.images=images;
        this.maxFiles=maxFiles;
    }

    public List<String> createPowerPointFiles()
    {
        pptAgent = new MSPowerPointAgent(maxFiles,deployPath, images);
        List<String> returnList= new ArrayList<String>();
        int iterations = Integer.valueOf(files_per_folder);
        logger.debug("Creating " + iterations + " Powerpoint Files Now");
        for (int j=0;j<=iterations;j++) {
              String fileName=pptAgent.execute();
              returnList.add(fileName);
        }
        return returnList;
    }

    public List<String> createWordFiles()
    {
        wordAgent = new MSWordAgent(maxFiles,deployPath, images);
        List<String> returnList= new ArrayList<String>();
        int iterations = Integer.valueOf(files_per_folder);
        logger.debug("Creating " + iterations + " Word Files Now");
        for (int j=0;j<=iterations;j++) {
            String fileName=wordAgent.execute();
            returnList.add(fileName);
        }
        return returnList;
    }


    public List<String> createExcellFiles()
    {
        xlsAgent = new MSExcelAgent(maxFiles,deployPath, images);
        List<String> returnList= new ArrayList<String>();
        int iterations = Integer.valueOf(files_per_folder);
        logger.debug("Creating " + iterations + " Excel Files Now");
        for (int j=0;j<=iterations;j++) {
            String fileName=xlsAgent.execute();
            returnList.add(fileName);
        }
        return returnList;

    }

    public List<String> createPdfFiles()
    {
        pdfAgent = new PdfAgent(deployPath, images);
        List<String> returnList= new ArrayList<String>();
        int iterations = Integer.valueOf(files_per_folder);
        logger.debug("Creating " + iterations + " Pdf Files Now");
        for (int j=0;j<=iterations;j++) {
            String fileName=pdfAgent.execute();
            returnList.add(fileName);
        }
        return returnList;

    }

//    public List<String> createJpgFiles()
//    {
//        List<String> returnList= new ArrayList<String>();
//        int iterations = Integer.valueOf(files_per_folder);
//        logger.debug("Creating " + iterations + " Pdf Files Now");
//        for (int j=0;j<=iterations;j++) {
//            String fileName=pdfAgent.execute();
//            returnList.add(fileName);
//        }
//        return returnList;
//
//    }







}
