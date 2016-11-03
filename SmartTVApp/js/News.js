var backEventListener = null;
var unregister = function() {
    if ( backEventListener !== null ) {
        document.removeEventListener( 'tizenhwkey', backEventListener );
        backEventListener = null;
        window.tizen.application.getCurrentApplication().exit();
    }
}
var init = function () {
    // TODO:: Do your initialization job
    console.log("init() called");  
    fetchNews();
    // add eventListener for keydown
   
    document.addEventListener('keydown', function(e) {
    	//if(true)alert(e.keyCode);
    	switch(e.keyCode){
    	case TvKeyCode.KEY_LEFT: //LEFT arrow 	
    		alert("testtttt");
    		break;
    	case TvKeyCode.KEY_UP: //UP arrow
    		
    		break;
    	case TvKeyCode.KEY_RIGHT : //RIGHT arrow 		
    		break;
    	case TvKeyCode.KEY_DOWN: //DOWN arrow
    		
    		break;
    	case 13: //OK button
    		
    		break;
    	case 10009: //RETURN button
    		

    		parent.location="index.html";
    		break;
    	default:
    		console.log("Key code : " + e.keyCode);
    		break;
    	}
    });
};

window.onload = init;

function fetchNews(){

if ( ParserNews.init()) {
      
        ParserNews.dataReceivedCallback = function() {
		//to do 7
        	prepareNewsList()
        	
        }
        //to do 8
        ParserNews.fetchDatas();
   
		}


};

function prepareNewsList(){
	
	var i;
	for(i=0; i<DataNews.getCount(); i++){
		// to do 9
	//$(".news").append(....);
		
		//$(".news").append(DataNews.getTitle(i));
		//$(".news").append("<div>"<DataNews.getTitle(i))
		//$(".news").append("<div>"<DataNews.getTitle(i))
		$(".news").append("<div id='title'>"+DataNews.getTitle(i)+"</div><br>");
	}			
			subTotalItem = DataNews.getCount();
}