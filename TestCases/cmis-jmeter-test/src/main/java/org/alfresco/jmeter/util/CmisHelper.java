package org.alfresco.jmeter.util;

import java.io.ByteArrayInputStream;
import java.io.IOException;
import java.io.InputStream;
import java.io.InputStreamReader;
import java.io.Reader;
import java.math.BigInteger;
import java.util.Calendar;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

import org.apache.chemistry.opencmis.client.api.CmisObject;
import org.apache.chemistry.opencmis.client.api.Document;
import org.apache.chemistry.opencmis.client.api.Folder;
import org.apache.chemistry.opencmis.client.api.ItemIterable;
import org.apache.chemistry.opencmis.client.api.OperationContext;
import org.apache.chemistry.opencmis.client.api.Repository;
import org.apache.chemistry.opencmis.client.api.Session;
import org.apache.chemistry.opencmis.client.api.SessionFactory;
import org.apache.chemistry.opencmis.client.runtime.SessionFactoryImpl;
import org.apache.chemistry.opencmis.commons.PropertyIds;
import org.apache.chemistry.opencmis.commons.SessionParameter;
import org.apache.chemistry.opencmis.commons.data.ContentStream;
import org.apache.chemistry.opencmis.commons.enums.BindingType;
import org.apache.chemistry.opencmis.commons.enums.IncludeRelationships;
import org.apache.chemistry.opencmis.commons.impl.dataobjects.ContentStreamImpl;
import org.apache.jorphan.logging.LoggingManager;
import org.apache.log.Logger;

public class CmisHelper {
    private static final Logger logger = LoggingManager.getLoggerForClass();

    private String username;
    private String password;
    private String cmisUrl;
    private Session session;

    public CmisHelper(String username, String password, String baseUrl) {
    	logger.debug("Creating cmis client");

    	this.username = username;
        this.password = password;
        this.cmisUrl = baseUrl;
        // create a session
        SessionFactory factory = SessionFactoryImpl.newInstance();
        Map<String, String> parameterMap = new HashMap<String, String>();
        parameterMap.put(SessionParameter.USER, username);
        parameterMap.put(SessionParameter.PASSWORD, password);
        parameterMap.put(SessionParameter.ATOMPUB_URL, baseUrl);
        parameterMap.put(SessionParameter.BINDING_TYPE,
                BindingType.ATOMPUB.value());
        // Use the first repository
        List<Repository> repositories = factory.getRepositories(parameterMap);
        Session session = repositories.get(0).createSession();
        logger.info("Repo Id: " + repositories.get(0).getId());

        this.session = session;
        session.getDefaultContext().setCacheEnabled(false);
    }
    
    public Session getCmisSession(){
    	return this.session;
    }

    public String getRootFolder() {
        return this.session.getRootFolder().getPath();
    }

    public String createFolder(String parentPath, String name) {
        
    	Folder parent = (Folder) session.getObjectByPath(parentPath);
        Map<String, Object> properties = new HashMap<String, Object>();
        properties.put(PropertyIds.NAME, name);
        properties.put(PropertyIds.OBJECT_TYPE_ID, "cmis:folder");
        Folder folder = parent.createFolder(properties);
        logger.info("Folder path: " + folder.getPath());
        return folder.getPath();
    }

    public Folder createCmisFolder(String parentPath, String name) {

        Folder parent = (Folder) session.getObjectByPath(parentPath);
        Map<String, Object> properties = new HashMap<String, Object>();
        properties.put(PropertyIds.NAME, name);
        properties.put(PropertyIds.OBJECT_TYPE_ID, "cmis:folder");
        Folder folder = parent.createFolder(properties);
        logger.info("Folder path: " + folder.getPath());
        return folder;
    }


    public String createDocument(Folder parentFolder, String name, byte[] content) {
    	logger.debug("Preparing to create document");
        Document document = null;
        try{
        	Map<String, Object> properties = new HashMap<String, Object>();
            properties.put(PropertyIds.NAME, name);
            properties.put(PropertyIds.OBJECT_TYPE_ID, "cmis:document");
            InputStream stream = new ByteArrayInputStream(content);
            ContentStream contentStream = new ContentStreamImpl(name,
                    BigInteger.valueOf(content.length), "text/plain", stream);


            logger.info("Creating document in path: " + parentFolder.getPath());
            document = parentFolder.createDocument(properties, contentStream, null);
            logger.info("Document path: " + document.getPaths().get(0));
        }
        catch(Exception e){
        	logger.error("Failed to create document.", e);
        }
        
        return document.getPaths().get(0);
    }

    public int getChildren(String parentPath) {
        
        Folder parent = (Folder) session.getObjectByPath(parentPath);
        ItemIterable<CmisObject> children = parent.getChildren();
        
        
        return (int) children.getTotalNumItems();
    }
    
    public CmisObject getObjectByPath(String objectPath){
    	CmisObject cmisObject = null;
    	try{
    		cmisObject = session.getObjectByPath(objectPath);
    	}
    	catch(Exception e){
    		logger.error("Failed to get object by path.", e);
    	}
    	return cmisObject;
    }
    
    public Document getFirstChild(Folder parentFolder){
    	Document firstChild = null;
    	
    	try{
	        firstChild = (Document) parentFolder.getChildren(this.getMinimalOperationContext()).iterator().next();

    	}
    	catch(Exception e){
    		logger.error("Failed to get first child.", e);
    	}
    	return firstChild;
    }
    
    public Document checkOut(Document document){
    	Document privateWorkingCopy = null;
    	try{
            privateWorkingCopy = (Document) session.getObject(document.checkOut());
    	}
    	catch(Exception e){
    		logger.error("Failed to check out document.", e);
    	}
    	return privateWorkingCopy;
    }
    
    public ContentStream appendToContentStream(ContentStream contentStream, String documentName, String mimeType){
    	ContentStream updatedContentStream = null;
    	try{
    		String contentStreamAsString = this.getContentAsString(contentStream);
	        
	        String updatedContent = contentStreamAsString + "\n This is my new text";
	        byte[] updatedContentByteArray = updatedContent.getBytes();
	        ByteArrayInputStream byteArrayInputStream = new ByteArrayInputStream(updatedContentByteArray);
	        updatedContentStream = session.getObjectFactory().createContentStream(documentName,
	        		updatedContentByteArray.length, 
	        		mimeType, 
	        		byteArrayInputStream);
    	}
    	catch(Exception e){
    		logger.error("Failed to add text to content stream.", e);
    	}
    	return updatedContentStream;
    }

    public boolean folderExistsAtPath(String folderPath){
    	boolean folderExists = false;
    	try{
    		Folder folder = (Folder) session.getObjectByPath(folderPath);
    		
    		if(folder != null)
    			folderExists = true;	
    	}
    	catch(Exception e){
    		logger.error("Cmis object does not exists in path!");
    	}
    	
    	return folderExists;
    }
    
    public OperationContext getMinimalOperationContext(){
    	OperationContext operationContext = session.createOperationContext();
    	
    	operationContext.setCacheEnabled(false);
    	operationContext.setIncludeAcls(false);
    	operationContext.setIncludeAllowableActions(false);
    	operationContext.setIncludePathSegments(false);
    	operationContext.setIncludePolicies(false);
    	operationContext.setIncludeRelationships(IncludeRelationships.NONE);
    	
    	return operationContext;
    }
    
    public boolean documentExistsAtPath(String documentPath){
    	boolean documentExists = false;
    	try{
    		Document document = (Document) session.getObjectByPath(documentPath);
    		
    		if(document != null)
    			documentExists = true;
    	}
    	catch(Exception e){
    		logger.error("Failed to determine if cmis object exists in path.", e);
    	}
    	
    	return documentExists;
    }
    
	public String getContentAsString(ContentStream stream) throws IOException {
        StringBuilder sb = new StringBuilder();
        Reader reader = new InputStreamReader(stream.getStream(), "UTF-8");

        try {
            final char[] buffer = new char[4 * 1024];
            int b;
            while (true) {
                b = reader.read(buffer, 0, buffer.length);
                if (b > 0) {
                    sb.append(buffer, 0, b);
                } else if (b == -1) {
                    break;
                }
            }
        } finally {
            reader.close();
        }

        return sb.toString();
    }
    
    public void setUsername(String username) {
        this.username = username;
    }

    public String getUsername() {
        return username;
    }

    public void setPassword(String password) {
        this.password = password;
    }

    public String getPassword() {
        return password;
    }
    
    public String getCmisUrl() {
		return cmisUrl;
	}

	public void setCmisUrl(String cmisUrl) {
		this.cmisUrl = cmisUrl;
	}

	public String getTimeInMillis(){
        Calendar calendarDateTime = Calendar.getInstance();
        
		return String.valueOf(calendarDateTime.getTimeInMillis());
    }
}
