package org.alfresco.consulting.benchmark.cmis;

import org.apache.chemistry.opencmis.client.api.CmisObject;
import org.apache.chemistry.opencmis.client.api.Folder;
import org.apache.chemistry.opencmis.client.api.ItemIterable;
import org.apache.chemistry.opencmis.commons.PropertyIds;
import org.apache.chemistry.opencmis.client.api.Document;
import org.apache.chemistry.opencmis.client.api.Folder;

import java.util.HashMap;
import java.util.Map;


public class CopyFolder {

    public void copyFolder(Folder destinationFolder, Folder toCopyFolder) {
        Map<String, Object> folderProperties = new HashMap<String, Object>();
        folderProperties.put(PropertyIds.NAME, toCopyFolder.getName());
        folderProperties.put(PropertyIds.OBJECT_TYPE_ID, toCopyFolder.getBaseTypeId().value());
        Folder newFolder = destinationFolder.createFolder(folderProperties);
        copyChildren(newFolder, toCopyFolder);
    }

    public void copyChildren(Folder destinationFolder, Folder toCopyFolder) {
        ItemIterable<CmisObject> immediateChildren = toCopyFolder.getChildren();
        for (CmisObject child : immediateChildren) {
            if (child instanceof Document) {
                ((Document) child).copy(destinationFolder);
            } else if (child instanceof Folder) {
                copyFolder(destinationFolder, (Folder) child);
            }
        }
    }
}
