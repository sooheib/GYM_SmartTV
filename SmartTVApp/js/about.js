window.onload = function () {
    // TODO:: Do your initialization job
   document.addEventListener('keydown', function(e) {
    	switch(e.keyCode){
    	case TvKeyCode.KEY_LEFT: //LEFT arrow 	  	
    		break;
    	case TvKeyCode.KEY_UP: //UP arrow
    		/*TO DO 2 : NAVIGATION */
   
    		break;
    	case TvKeyCode.KEY_RIGHT : //RIGHT arrow 		
    		break;
    	case TvKeyCode.KEY_DOWN: //DOWN arrow
    		/*TO DO 3 : NAVIGATION */ 	
    		
    		break;
    	case TvKeyCode.KEY_ENTER: //OK button
    		/*TO DO : Redirection */
    		
    		break;
    	case TvKeyCode.KEY_BACK:
    		/*TO DO : Redirection */
    		window.location.href = "home.html" ;
    	default:
    		console.log("Key code : " + e.keyCode);
    		break;
    		
    	}
    });
        
};


