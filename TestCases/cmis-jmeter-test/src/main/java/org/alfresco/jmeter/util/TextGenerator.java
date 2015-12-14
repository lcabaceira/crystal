
package org.alfresco.jmeter.util;

import java.io.BufferedWriter;
import java.io.File;
import java.io.FileWriter;
import java.util.HashMap;
import java.util.Map;
import java.util.Random;

import org.apache.jorphan.logging.LoggingManager;
import org.apache.log.Logger;

public class TextGenerator {
    private static final Logger logger = LoggingManager.getLoggerForClass();

    protected DictionaryHelper dictionaryHelper;
    protected Map<String, String> paragraphHashMap = new HashMap<String, String>();
    protected Map<String, String> pageHashMap = new HashMap<String, String>();
    protected Map<String, String> blockHashMap = new HashMap<String, String>();
    protected static final int PARAGRAPH_SIZE = 40;
    protected static final int PARAGRAPH_HIT = 40;
    protected static final int PAGE_SIZE = 50;
    protected static final int PAGE_HIT = 30;
    protected static final int BLOCK_CACHE_SIZE = 30;
    protected static final int BLOCK_HIT = 20;
    protected static final int BLOCK_SIZE = 10 * 1024;
    protected static final int WORDS_PER_LINE = 20;
    protected static final int LINES_PER_PARAGRAPH = 40;
    protected static final int PARAGRAPH_PER_PAGE = 8;
    protected static final int PAGE_PER_BLOCK = 3;
    
    protected Random generator;

    public TextGenerator() {
    }
    
    public void createFiles(String sampleFileDir, int totalFileCount, int minFileSize, int maxFileSize){

    	try {

			this.populateHashMaps();
	    	for(int i=1; i <= totalFileCount; i++){
		    	int size = (int) (Math.random() * (maxFileSize - minFileSize));
		    	String filename = sampleFileDir + "/test-" + i + ".txt";
		    	
		    	File file = new File(filename);
		    	FileWriter fileWriter = new FileWriter(file.getAbsoluteFile());
				BufferedWriter bufferedWriter = new BufferedWriter(fileWriter);
				bufferedWriter.write(this.getRandomText(size));
				bufferedWriter.close();
				logger.info("Generated file: " + filename + " with size: " + size);
			}
		} catch (Exception e) {
			logger.error("Failed to generate files.", e);
			e.printStackTrace();
		}

    }

    protected int getTargetPageMaxSizeB() {
        return (int) (1.2 * (BLOCK_SIZE / PAGE_PER_BLOCK));
    }

    protected int getTargetParagraphMaxSizeB() {
        return (int) (1.2 * (getTargetPageMaxSizeB() / PARAGRAPH_PER_PAGE));
    }

    public String getRandomLine() {
        int wordsPerLine = 10 + generator.nextInt(WORDS_PER_LINE);
        StringBuffer stringBuffer = new StringBuffer();

        for (int i = 0; i < wordsPerLine; i++) {
            stringBuffer.append(dictionaryHelper.getRandomWord());
        }
        stringBuffer.append(".\n");
        return stringBuffer.toString();
    }

    public String createParagraph() {
        int linePerParagraph = 10 + generator.nextInt(LINES_PER_PARAGRAPH);
        StringBuffer stringBuffer = new StringBuffer();

        int maxSize = getTargetParagraphMaxSizeB();

        for (int i = 0; i < linePerParagraph; i++) {
            stringBuffer.append(getRandomLine());
            if (stringBuffer.length() > maxSize) {
                break;
            }
        }
        stringBuffer.append("\n\n");
        return stringBuffer.toString();
    }

    public void populateHashMaps() throws Exception {
        generator = new Random(System.currentTimeMillis());
		dictionaryHelper = new DictionaryHelper();
        dictionaryHelper.init();

        for (int i = 0; i < PARAGRAPH_SIZE; i++) {
            paragraphHashMap.put("P" + i, createParagraph());
        }
        for (int i = 0; i < PAGE_SIZE; i++) {
            String page = createPage();
            pageHashMap.put("P" + i, page);
        }
        for (int i = 0; i < BLOCK_CACHE_SIZE; i++) {
            String page = createBloc();
            blockHashMap.put("B" + i, page);
        }

    }

    public String getRandomParagraph() {
        int randomInt = generator.nextInt();
        int paragraphSize = generator.nextInt(PARAGRAPH_SIZE);
        String paragraph = null;
        if (randomInt % PARAGRAPH_HIT != 0) {
            paragraph = paragraphHashMap.get("P" + paragraphSize);
        }
        if (paragraph == null) {
            paragraph = createParagraph();
            paragraphHashMap.put("P" + paragraphSize, paragraph);
        }
        return paragraph;
    }

    public String createPage() {
        int paragraphPerPage = generator.nextInt(PARAGRAPH_PER_PAGE) + 1;
        StringBuffer stringBuffer = new StringBuffer();

        int maxTargetPageSize = getTargetPageMaxSizeB();
        for (int i = 0; i < paragraphPerPage; i++) {
            stringBuffer.append(getRandomParagraph());
            if (stringBuffer.length() > maxTargetPageSize) {
                break;
            }
        }
        stringBuffer.append("\n\n");
        return stringBuffer.toString();
    }

    public String getRandomPage() {
        int randomInt = generator.nextInt();
        int pageSize = generator.nextInt(PAGE_SIZE);
        String page = null;
        if (randomInt % PAGE_HIT != 0) {
            page = pageHashMap.get("P" + pageSize);
        }
        if (page == null) {
            page = createPage();
            pageHashMap.put("P" + pageSize, page);
        }
        return page;
    }

    public String createBloc() {
        StringBuffer stringBuffer = new StringBuffer();

        while (stringBuffer.length() < BLOCK_SIZE) {
            stringBuffer.append(getRandomPage());
        }
        return stringBuffer.toString();
    }

    public String getRandomBlock() {
        int randomInt = generator.nextInt();
        int blockSize = generator.nextInt(BLOCK_CACHE_SIZE);
        String block = null;
        if (randomInt % BLOCK_HIT != 0) {
            block = blockHashMap.get("B" + blockSize);
        }
        if (block == null) {
            block = createBloc();
            blockHashMap.put("B" + blockSize, block);
        }
        return block;
    }

    public String getRandomText(int size) {
        StringBuffer stringBuffer = new StringBuffer();
        int minSize = (int) (size * 1024 * (0.8 + 0.4 * generator.nextFloat()));
        while (stringBuffer.length() < (minSize - BLOCK_SIZE)) {
            String block = getRandomBlock();
            stringBuffer.append(block);
        }
        while (stringBuffer.length() < minSize) {
            String page = getRandomPage();
            stringBuffer.append(page);
        }
        return stringBuffer.toString();
    }

    public String getRandomText() {
        int size = generator.nextInt(500) + 1;
        return getRandomText(size);
    }

}
