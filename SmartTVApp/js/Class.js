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
    fetchClass();
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
    		parent.location="Home.html";
    		break;
    	default:
    		console.log("Key code : " + e.keyCode);
    		break;
    	}
    });
};

window.onload = init;

function fetchClass(){

if ( ServerClasses.init()) {
      
	ServerClasses.dataReceivedCallback = function() {
		//to do 7
        	prepareClassList()
        	
        }
        //to do 8
	ServerClasses.fetchClassList();
	
    console.log("ServerClasses.fetchClassList() called");  
	
		}

};

function prepareClassList(){
	
	var i;
	for(i=0; i<Data.getClassCount(); i++){
		// to do 9
	//$(".news").append(....);
		
		//$(".news").append(DataNews.getTitle(i));
		//$(".news").append("<div>"<DataNews.getTitle(i))
		//$(".news").append("<div>"<DataNews.getTitle(i))
		$(".classe").append("<div id='title'>"+Data.getClassNames(i)+
				"</div><br>"+"<div id='image'>"+Data.getClassURL(i)+"</div><br>"+
				"</div><br>"+"<div id='desc'>"+Data.getClassDescription(i)+"</div><br>"+
				"</div><br>"+"<div id='desc'>"+hhhhhhhhh+"</div><br>"
		);
	}			
			subTotalItem = Data.getClassCount();
}