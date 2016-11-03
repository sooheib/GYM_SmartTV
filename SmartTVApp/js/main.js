var current_item=0;
var total_item=5;

window.onload = function () {
    // TODO:: Do your initialization job

    // add eventListener for tizenhwkey
    document.addEventListener('tizenhwkey', function(e) {
        if(e.keyName == "back")
	try {
	    tizen.application.getCurrentApplication().exit();
	} catch (ignore) {
	}
    });

    navigation("DOWN");
   
   document.addEventListener('keydown', function(e) {
    	switch(e.keyCode){
    	case TvKeyCode.KEY_LEFT: //LEFT arrow 	  	
    		break;
    	case TvKeyCode.KEY_UP: //UP arrow
    		navigation("UP");
    		break;
    	case TvKeyCode.KEY_RIGHT : //RIGHT arrow 	
    		navigation1("RIGHT");   		

    		break;
    	case TvKeyCode.KEY_DOWN: //DOWN arrow
    		navigation("DOWN");   		
    		break;
    	case TvKeyCode.KEY_ENTER: //OK button
    		go_to(current_item);
    		console.log("ENTER Button");
    		break;
    	case TvKeyCode.KEY_BACK: //OK button
    		//go_to(current_item);
    		parent.location="Home.html";
    		
    		break;
    	default:
    		console.log("Key code : " + e.keyCode);
    		break;   		
    	}
    });
        
};

function tester(){
	console.log("TESTTTTTTT");
};

function navigation(direction){
	$("#btn_"+current_item).removeClass("selected_btn");
	if(direction == "UP"){
		if(current_item == 1)
			current_item = total_item;
		else
			current_item--;
	
	}else if(direction == "DOWN"){
		if(current_item == total_item)
			current_item = 1;
		else
			current_item++;
	}
	$("#btn_"+current_item).addClass("selected_btn");
};



function go_to(current_item){
	sessionStorage.setItem("key", current_item);
	if(current_item==1)
		parent.location="classes.html";
	if(current_item==2){
		console.log("redirection");
		parent.location="exercises.html";
	}
	if(current_item==3){
		console.log("redirection");
		parent.location="events.html";
	}
	if(current_item==4){
		console.log("redirection");
		parent.location="about.html";
	}
	if(current_item==5){
		console.log("redirection");
		parent.location="contact.html";
	}
};
