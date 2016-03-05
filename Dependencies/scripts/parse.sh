#!/bin/bash

# Remove * as they are hard to parse
sed -i.bak s/*/SELECT_ALL/g $1 

while IFS='' GLOBIGNORE='*' read -r line || [[ -n $line ]]
do
  # Search for sql statement
  if [[ $line == *"Preparing:"* ]]
  then
    statement=`echo "$line" | awk -F 'Preparing:' '{print $2}'`
    statement=`echo "$statement" | sed '/ insert/d'`
    statement=`echo "$statement" | sed '/ delete/d'`
    statement=`echo "$statement" | sed '/ update/d'`
  fi

  # Search for parameters
  if [[ $line == *"Parameters:"* && ! -z $statement ]]
  then
    parameters=`echo $line | awk -F'Parameters:' '{print $2}'`
    # Remove spaces temporarily
    parameters=`echo $parameters | sed 's/\ /XXSPACEXX/g'`

    for element in $(echo $parameters | tr "," "\n")
    do
      # Recover spaces
      element=`echo $element | sed 's/XXSPACEXX/\ /g'`
      # Remove comma
      element=`echo $element | sed "s/,//g"`

      # Substitue ? with parameter values
      # These parameters need quoting
      if [[ $line == *"(String)"* || $line == *"(Timestamp)"* ]]
      then
        statement=`echo "$statement" | sed "s#\?#\'$element\'#"`
      else  
        statement=`echo "$statement" | sed "s#\?#$element#"`
      fi
    done

    # Need to remove parameter tag
    statement=`echo "$statement" | sed "s/(Long)//g"`
    statement=`echo "$statement" | sed "s/(Integer)//g"`
    statement=`echo "$statement" | sed "s/(Timestamp)//g"`
    statement=`echo "$statement" | sed "s/(String)//g"`
    statement=`echo "$statement" | sed "s/(Boolean)//g"`
    statement=`echo "$statement" | sed "s/(ByteArrayInputStream)//g"`

    # Put the * back on it
    statement=`echo "${statement}" | sed "s/SELECT_ALL/\*/g"`

    echo "${statement}"
  fi
done < "$1"


mv $1".bak" $1
