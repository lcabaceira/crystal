package org.alfresco.consulting.tools.content.creator.agents;

import java.io.*;
import java.text.DateFormat;
import java.text.SimpleDateFormat;
import java.util.Calendar;
import java.util.Properties;
import java.util.Random;

import org.alfresco.consulting.locator.PropertiesLocator;
import org.alfresco.consulting.tools.content.creator.BulkImportManifestCreator;
import org.alfresco.consulting.words.RandomWords;
import org.apache.poi.util.IOUtils;
import org.apache.poi.xslf.usermodel.*;

public class MSPowerPointAgent {
    /**
     * @param args
     * @throws java.io.IOException
     */

    private static String files_deployment_location;
    private static String images_location;



    public MSPowerPointAgent(String _max_files_per_folder, String _files_deployment_location, String _images_location) {
        this.files_deployment_location = _files_deployment_location;
        this.images_location = _images_location;
      }




    private static int findNumberOfFiles(String dir, String ext) {
        File file = new File(dir);
        if(!file.exists()) System.out.println(dir + " Directory doesn't exists");
        File[] listFiles = file.listFiles(new MyFileNameFilter(ext));
        if(listFiles.length ==0){
            System.out.println(dir + "doesn't have any file with extension "+ext);
            return 0;
        }else{
            for(File f : listFiles)
                System.out.println("File: "+dir+File.separator+f.getName());
            return listFiles.length;
        }
    }

    //FileNameFilter implementation
    public static class MyFileNameFilter implements FilenameFilter{

        private String ext;

        public MyFileNameFilter(String ext){
            this.ext = ext.toLowerCase();
        }
        @Override
        public boolean accept(File dir, String name) {
            return name.toLowerCase().endsWith(ext);
        }

    }


	public String execute()
    {
        String returnValue="";
        RandomWords.init();
        DateFormat dateFormat = new SimpleDateFormat("yyyy/MM/dd HH:mm:ss");
        Calendar cal = Calendar.getInstance();
        XMLSlideShow ppt = new XMLSlideShow();
        File imagesFolder = new File(images_location);
        File[] files =   imagesFolder.listFiles();
        int size = files.length;

        // there can be multiple masters each referencing a number of layouts
        // for demonstration purposes we use the first (default) slide master
        XSLFSlideMaster defaultMaster = ppt.getSlideMasters()[0];
        // title and content
        XSLFSlideLayout titleBodyLayout = defaultMaster.getLayout(SlideLayout.TITLE_AND_CONTENT);
        XSLFSlide slide2 = ppt.createSlide(titleBodyLayout);
        XSLFTextShape title2 = slide2.getPlaceholder(0);
        title2.setText("ppt document created by SSMR");

        XSLFTextShape body2 = slide2.getPlaceholder(1);
        body2.clearText(); // unset any existing text
        body2.addNewTextParagraph().addNewTextRun().setText(RandomWords.getWords(200));
        body2.addNewTextParagraph().addNewTextRun().setText(RandomWords.getWords(200));
        body2.addNewTextParagraph().addNewTextRun().setText(RandomWords.getWords(200));

       // XSLFSlide slide[]  = {ppt.createSlide(),ppt.createSlide(),ppt.createSlide(),ppt.createSlide(),ppt.createSlide(),ppt.createSlide()};
        // random image
//        for (int i=0;i<6;i++) {
//            Random rand = new Random();
//            int number = rand.nextInt(size);
//            File randomImage = files[number];
//            byte[] pictureData = new byte[0];
//            try {
//                pictureData = IOUtils.toByteArray(new FileInputStream(randomImage));
//            } catch (IOException e) {
//                e.printStackTrace();
//            }
//            int idx = ppt.addPicture(pictureData, XSLFPictureData.PICTURE_TYPE_PNG);
//            XSLFPictureShape pic = slide[i].createPicture(idx);
//        }
        FileOutputStream outStream = null;

        String fileName =  cal.getTimeInMillis() +"_MSpowerpointSSMR.ppt";

        try {
            File deploymentFolder = new File(files_deployment_location);
            File[] deploymentfiles =   deploymentFolder.listFiles();
            int total_deployment_size = deploymentfiles.length;
            Calendar calendar = Calendar.getInstance();
            FileOutputStream out = null;
            // checking if the deployment location is full (more than max_files_per_folder files)
//            if (total_deployment_size>Integer.valueOf(max_files_per_folder)) {
//                String dir_name = files_deployment_location + "/" + calendar.getTimeInMillis();
//                boolean success = (new File(dir_name)).mkdirs();
//                this.files_deployment_location = dir_name;
//                if (!success) {
//                    System.out.println("Failed to create directory " + dir_name );
//                }
//                this.files_deployment_location=dir_name;
//                 out = new FileOutputStream(files_deployment_location + "/" + fileName);
//                 BulkImportManifestCreator.createBulkManifest(fileName,files_deployment_location, properties);
//            } else {
                out = new FileOutputStream(files_deployment_location + "/" + fileName);
            BulkImportManifestCreator bmc = new BulkImportManifestCreator(files_deployment_location);
                BulkImportManifestCreator.createBulkManifest(fileName,files_deployment_location);
            ppt.write(out);
            out.close();
            returnValue = files_deployment_location + "/" + fileName;
            return returnValue;
        } catch (IOException e) {
            e.printStackTrace();
        }


        return returnValue;


    }

}
