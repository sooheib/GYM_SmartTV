var Data =
{
    classNames : [ ],
    classURLs : [ ],
    classDescriptions : [ ]
}

Data.setClassNames = function(list)
{
    this.classNames = list;
}

Data.setClassURLs = function(list)
{
    this.classURLs = list;
}

Data.setClassDescriptions = function(list)
{
    this.classDescriptions = list;
}

Data.getClassURL = function(index)
{
    var url = this.classURLs[index];
    
    if (url)    // Check for undefined entry (outside of valid array)
    {
        return url;
    }
    else
    {
        return null;
    }
}

Data.getClassCount = function()
{
    return this.classURLs.length;
}

Data.getClassNames = function()
{
    return this.classNames;
}

Data.getClassDescription = function(index)
{
    var description = this.classDescriptions[index];
    
    if (description)    // Check for undefined entry (outside of valid array)
    {
        return description;
    }
    else
    {
        return "No description";
    }
}
