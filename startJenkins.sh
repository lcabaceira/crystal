export CATALINA_OPTS="-XX:NewSize=512M -Dcom.sun.management.jmxremote=true -DJENKINS_HOME=./jenkins"
./jenkins/tomcat7/bin/catalina.sh start
