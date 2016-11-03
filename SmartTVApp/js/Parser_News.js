var ParserNews = {
    /* Callback function to be set by client */
    dataReceivedCallback : null,
    
    XHRObj : null,
    //url : "XML/datas.xml"
	
	url : "http://tunisie14.tn/actualites.xml"
				
};

ParserNews.init = function() {
    var success = true;

    if (this.XHRObj) {
        this.XHRObj.destroy();  // Save memory
        this.XHRObj = null;
    }
    
    return success;
};

ParserNews.fetchDatas = function() {

    if (this.XHRObj == null) {
        this.XHRObj = new XMLHttpRequest();
    }
    
    if (this.XHRObj) {
        this.XHRObj.onreadystatechange = function() {
           if (ParserNews.XHRObj.readyState == 4) {
           //to do 4     
        	  ParserNews.createDatas();   	   
           }
        }
            
        this.XHRObj.open("GET", this.url, true);
        this.XHRObj.send(null);
    } else {
        alert("Failed to create XHR");
    }
};

ParserNews.createDatas = function() {
    if (this.XHRObj.status != 200) {
       alert("XML Parser Error " + this.XHRObj.status);
    }
    else {
        var xmlElement = this.XHRObj.responseXML.documentElement;
        
        if (!xmlElement) {
            alert("Failed to get valid XML");
        }
        else {
            // Parse RSS
            // Get all "item" elements
            var items = xmlElement.getElementsByTagName("item");
            
            var Titles = [ ];
         
            var Descriptions = [ ];
            
            for (var index = 0; index < items.length; index++) {
          // TODO
               // var titleElement =             	
            
            	var titleElement=items[index].getElementsByTagName("title")[0];
            	var descriptionElement=items[index].getElementsByTagName("description")[0];
            	// var descriptionElement =...
                
               // to do 5
               //     Titles[index] = ...
            	Titles[index]=titleElement.firstChild.data;
               
                //    Descriptions[index] = ...
             
            	Descriptions[index]=descriptionElement.firstChild.data;
            }
        
            //to do 6
            
          //  DataNews.setTitles(...);
            
            
           
            DataNews.setTitles(Titles);
            // var DataNews dt = new DataNews();
            
            
                    
       //     DataNews.setDescriptions(...);
            
            DataNews.setDescriptions(Descriptions);
            
            if (this.dataReceivedCallback) {
                this.dataReceivedCallback();    /* Notify all data is received and stored */
				
            }
        }
    }
};
