var DataNews = {
    titles : [ ],
    dates : [ ],
    descriptions : [ ]
}

DataNews.setTitles = function(list) {
  //to do 1
	
	this.titles=list;
	
	
}

DataNews.setDates = function(list) {
   //to do 2
	
	this.dates=list;
	
}

DataNews.setDescriptions = function(list) {
    this.descriptions = list;
}

DataNews.getTitle = function(index) {    
    var title = this.titles[index];
    
    if (title) {   // Check for undefined entry (outside of valid array)
        return title;
    }
    else {
        return null;
    }
}

DataNews.getDate = function(index) {    
    var date = this.dates[index];
    
    if (date) {   // Check for undefined entry (outside of valid array)
        return date;
    }
    else {
        return null;
    }
}

DataNews.getDescription = function(index) {    
    var description = this.descriptions[index];
    
    if (description) {   // Check for undefined entry (outside of valid array)
        return description;
    }
    else {
        return null;
    }
}

DataNews.getCount = function() {
   //to do 3
	return this.titles.length;
	
}
DataNews.getTitles = function() {
    return this.titles;
}

DataNews.getDates = function() {
    return this.dates;
}

DataNews.getDescriptions = function() {
    return this.descriptions;
}
