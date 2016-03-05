--- Test Description ----

Alfresco heavily depends on the underlying database engine. T

This tests collects the most common queries by parsing the query log file and builds a stress test that uses a thread group to stress the target 
database using the parsed queries.

The first thing to do is to enable the query logs on your Alfresco installation and redirect their output into a specific file that will be parsed.


# Activiti queries logger
log4j.logger.org.activiti.engine.impl.persistence.entity=debug,sqlTestAppender
log4j.additivity.org.activiti.engine.impl.persistence.entity=false

log4j.logger.alfresco.lock=debug,sqlTestAppender
log4j.additivity.alfresco.lock=false
log4j.logger.alfresco.solr=debug,sqlTestAppender
log4j.additivity.alfresco.solr=false
log4j.logger.alfresco.permissions=debug,sqlTestAppender
log4j.additivity.alfresco.permissions=false
log4j.logger.alfresco.node=debug,sqlTestAppender
log4j.additivity.alfresco.node=false
log4j.logger.alfresco.activities=debug,sqlTestAppender
log4j.additivity.alfresco.activities=false


log4j.appender.sqlTestAppender=org.apache.log4j.DailyRollingFileAppender
log4j.appender.sqlTestAppender.datePattern='-'dd'.log'
log4j.appender.sqlTestAppender.File=log/sqlExtracts.log
log4j.appender.sqlTestAppender.layout=org.apache.log4j.PatternLayout
log4j.appender.sqlTestAppender.layout.ConversionPattern=%-6r %d{ISO8601} %-5p %40.40c %x - %m\n


Once you have the query logs (referring to your alfresco installation and your specific use cases) this test comes with a parsing utility script.

parse.sh is a utility script that will parse your log file and will generate queries ready to stress your database engine with Jmeter. You find this script under Dependencis/scripts in Crystal.

./parse.sh sqlqueries.log > results.sql


NOTE : This parse will only work on linux based systems that have sed installed.


--- Test Configuration Parameters ----

This tests has the following configuration parameters



References :

  - http://


---- Include the driver for your database -----

Our test currently supports Oracle, MySQL, PostGres and MS SQL Server and it contains the most common drivers.
If your database uses a specific driver, make sure you copy it to the jmeter/lib folder

