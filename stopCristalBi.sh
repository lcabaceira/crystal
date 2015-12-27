#!/bin/sh
### ====================================================================== ###
##                                                                          ##
##  Crystal Stop Script                                                    ##
##                                                                          ##
### ====================================================================== ###

DIR_REL=`dirname $0`
cd $DIR_REL
DIR=`pwd`

cd Dependencies/biserver-ce

sh stop-pentaho.sh

