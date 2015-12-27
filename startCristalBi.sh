#!/bin/sh
### ====================================================================== ###
##                                                                          ##
##  Crystal Start Script                                                    ##
##                                                                          ##
### ====================================================================== ###

DIR_REL=`dirname $0`
cd $DIR_REL
DIR=`pwd`

cd Dependencies/biserver-ce

sh start-pentaho.sh

