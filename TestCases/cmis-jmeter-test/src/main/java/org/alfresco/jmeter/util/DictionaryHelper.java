

package org.alfresco.jmeter.util;

import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStream;
import java.io.InputStreamReader;
import java.net.URL;
import java.util.LinkedList;
import java.util.List;
import java.util.Random;

public class DictionaryHelper {    
    protected List<String> words = new LinkedList<String>();

    protected Random generator;

    protected int wordCount;

    public DictionaryHelper() throws Exception {
        generator = new Random(System.currentTimeMillis());
    }

    public void init() throws Exception {
    	loadDictionary("en_US.dic");
        wordCount = words.size();
    }

    protected void loadDictionary(String dicName) throws Exception {

        URL url = Thread.currentThread().getContextClassLoader().getResource(
                dicName);

        BufferedReader reader = null;
        try {
            InputStream in = url.openStream();
            reader = new BufferedReader(new InputStreamReader(in));
            String line;
            while ((line = reader.readLine()) != null) {
                int idx = line.indexOf("/");
                if (idx > 0) {
                    String word = line.substring(0, idx);
                    words.add(word + " ");
                } else {
                    words.add(line + " ");
                }
            }
        } finally {
            if (reader != null) {
                try {
                    reader.close();
                } catch (IOException e) {
                }
            }
        }
    }

  
    public int getWordCount() {
        return wordCount;
    }

 
    public String getRandomWord() {
        int idx = generator.nextInt(wordCount);
        return words.get(idx);
    }

}
