package org.alfresco.consulting.benchmark.locator.exceptions;

/**
 * Created by Luis Cabaceira.
 * User: Administrator
 * Date: 28/Out/2004
 * Time: 16:49:46
 * Project : Tmn Wcm
 */
public class PropertiesLocatorException  extends RuntimeException {

/**
* Constructs a new PropertiesLocatorException with a message and an exception.
*
* @param message the exception message.
* @param ex      the exception to be encapsulated.
*/
public PropertiesLocatorException(String message, Exception ex)
{
super(message, ex);
}

/**
* Constructs a new PropertiesLocatorException with an encapsulated exception.
*
* @param ex the exception to be encapsulated.
*/
public PropertiesLocatorException(Exception ex)
{
super(ex);
}
    
}
