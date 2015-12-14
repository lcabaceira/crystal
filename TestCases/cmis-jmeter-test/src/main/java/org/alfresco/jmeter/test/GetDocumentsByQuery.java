package org.alfresco.jmeter.test;

import java.io.PrintWriter;
import java.io.StringWriter;

import org.alfresco.jmeter.util.CmisHelper;
import org.apache.chemistry.opencmis.client.api.ItemIterable;
import org.apache.chemistry.opencmis.client.api.QueryResult;
import org.apache.jmeter.config.Arguments;
import org.apache.jmeter.protocol.java.sampler.JavaSamplerClient;
import org.apache.jmeter.protocol.java.sampler.JavaSamplerContext;
import org.apache.jmeter.samplers.SampleResult;
import org.apache.jorphan.logging.LoggingManager;
import org.apache.log.Logger;


public class GetDocumentsByQuery implements JavaSamplerClient{
    private static final Logger logger = LoggingManager.getLoggerForClass();
    
    private CmisHelper cmis;

	public Arguments getDefaultParameters() {
		Arguments defaultParameters = new Arguments();
        defaultParameters.addArgument("cmis.username", "${cmis.username}");
        defaultParameters.addArgument("cmis.password", "${cmis.password}");
        defaultParameters.addArgument("cmis.url", "${cmis.protocol}://${cmis.host}:${cmis.port}/${cmis.url.context}");	
        defaultParameters.addArgument("cmis.query", "${cmis.query}");

        
		return defaultParameters;
	}

	public SampleResult runTest(JavaSamplerContext runTestContext) {
		String cmisQuery = runTestContext.getParameter("cmis.query");
		
		SampleResult result = new SampleResult();
		result.sampleStart();
		try{
			logger.info("Executing cmis query with string: " + cmisQuery);
			ItemIterable<QueryResult> queryResults = cmis.getCmisSession().query(cmisQuery, false, cmis.getMinimalOperationContext());
	        
			logger.info("Retrieved query results with count: " + queryResults.getTotalNumItems());
			logger.info("First result found: " + queryResults.iterator().next().getPropertyByQueryName("cmis:name").getFirstValue());
			
	        result.sampleEnd();
	        result.setSuccessful(true);
	        result.setResponseMessage("Successfully retrieved cmis documents by query.");
	        result.setResponseCodeOK();
	        
		}
		catch(Exception e){
			result.sampleEnd();
            result.setSuccessful(false);
            result.setResponseMessage("Failed to retrieve cmis documents by query: " + e);
            
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

        cmis = new CmisHelper(username, password, cmisUrl);
	}

	public void teardownTest(JavaSamplerContext teardownContext) {
		
		
	}
}
