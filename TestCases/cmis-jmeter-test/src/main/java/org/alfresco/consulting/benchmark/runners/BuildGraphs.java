package org.alfresco.consulting.benchmark.runners;



import org.alfresco.consulting.benchmark.graphs.*;
import org.alfresco.consulting.benchmark.locator.PropertiesLocator;

import java.io.IOException;
import java.util.Properties;


public class BuildGraphs {

    private static Properties props = PropertiesLocator.getProperties("alfresco-consulting-tests.properties");
    private static String buildGraphsOption = props.getProperty("buildGraphsOption");


    public static void execute() {

        if (buildGraphsOption.contains("upload"))           BuildCmisUploadGraph.buid("cmis_upload_times.txt", "cmisUploadTimes.jpg");
        if (buildGraphsOption.contains("update"))           BuildCmisUpdateGraph.buid("cmis_update_times.txt", "cmisUpdateTimes.jpg");
        if (buildGraphsOption.contains("checkin"))          BuildCmisCheckinGraph.buid("cmis_checkin_times.txt", "cmisCheckinTimes.jpg");
        if (buildGraphsOption.contains("checkout"))         BuildCmisCheckoutGraph.buid("cmis_checkout_times.txt", "cmisCheckoutTimes.jpg");
        if (buildGraphsOption.contains("foldercreation"))   BuildFolderCreationGraph.buid("folder_creation_times.txt","folderCreationTimes.jpg");
        if (buildGraphsOption.contains("login"))            BuildLoginActionGraph.buid("base_folder_creation_times.txt","loginTimes.jpg");

    }


    public static void main(String[] args) {



        if (buildGraphsOption.contains("upload"))   BuildCmisUploadGraph.buid("cmis_upload_times.txt", "cmisUploadTimes.jpg");
        if (buildGraphsOption.contains("update"))       BuildCmisUpdateGraph.buid("cmis_update_times.txt", "cmisUpdateTimes.jpg");
        if (buildGraphsOption.contains("checkin"))          BuildCmisCheckinGraph.buid("cmis_checkin_times.txt", "cmisCheckinTimes.jpg");
        if (buildGraphsOption.contains("checkout"))    BuildCmisCheckoutGraph.buid("cmis_checkout_times.txt", "cmisCheckoutTimes.jpg");
        if (buildGraphsOption.contains("foldercreation"))  BuildFolderCreationGraph.buid("folder_creation_times.txt","folderCreationTimes.jpg");
        if (buildGraphsOption.contains("login"))    BuildLoginActionGraph.buid("base_folder_creation_times.txt","loginTimes.jpg");


    }

}


