var ServerClasses =
{
    /* Callback function to be set by client */
    dataReceivedCallback : null,
    
    XHRObj : null,
    url : "XML/classes.xml"
}

ServerClasses.init = function()
{
    var success = true;

    if (this.XHRObj)
    {
        this.XHRObj.destroy();  // Save memory
        this.XHRObj = null;
    }
    
    return success;
}

ServerClasses.fetchClassList = function()
{
    if (this.XHRObj == null)
    {

        this.XHRObj = new XMLHttpRequest();
    }
    
    if (this.XHRObj)
    {
        this.XHRObj.onreadystatechange = function()
            {
        	console.log("is good");
                if (ServerClasses.XHRObj.readyState == 4)
                {
                	ServerClasses.createClassList();
                }
            }
            
        this.XHRObj.open("GET", this.url, true);
        this.XHRObj.send(null);
     }
    else
    {
        alert("Failed to create XHR");
    }
}

ServerClasses.createClassList = function()
{
    if (this.XHRObj.status != 200)
    {
        alert("XML Parser Error " + this.XHRObj.status);
    }
    else
    {
        var xmlElement = this.XHRObj.responseXML.documentElement;
        
        if (!xmlElement)
        {
            alert("Failed to get valid XML");
        }
        else
        {
            // Parse RSS
            // Get all "item" elements
            var items = xmlElement.getElementsByTagName("item");
            
            var classeNames = [ ];
            var classeURLs = [ ];
            var classeDescriptions = [ ];
            
            for (var index = 0; index < items.length; index++)
            {
                var titleElement = items[index].getElementsByTagName("title")[0];
                var descriptionElement = items[index].getElementsByTagName("description")[0];
                var linkElement = items[index].getElementsByTagName("link")[0];
                
                if (titleElement && descriptionElement && linkElement)
                {
                    classeNames[index] = titleElement.firstChild.data;
                    classeURLs[index] = linkElement.firstChild.data;
                    classeDescriptions[index] = descriptionElement.firstChild.data;
                }
            }
        
            Data.setClassNames(classeNames);
            Data.setClassURLs(classeURLs);
            Data.setClassDescriptions(classeDescriptions);
            
            if (this.dataReceivedCallback)
            {
                this.dataReceivedCallback();    /* Notify all data is received and stored */
            }
        }
    }
}
