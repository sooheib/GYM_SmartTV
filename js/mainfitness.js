var current_item=0;
var total_item=8;

window.onload = function () {
    // TODO:: Do your initialization job

    // add eventListener for tizenhwkey
    document.addEventListener('tizenhwkey', function(e) {
        if(e.keyName == "back")
            try {
                //tizen.application.getCurrentApplication().exit();
            } catch (ignore) {
            }
    });

    navigation("DOWN");

    document.addEventListener('keydown', function(e) {
        switch(e.keyCode){

            case TvKeyCode.KEY_BACK: //BACK button
                console.log("TvKeyCode.KEY_BACK");
                parent.location="course.html";
                break;

            case TvKeyCode.KEY_LEFT: //LEFT arrow
                break;
            case TvKeyCode.KEY_UP: //UP arrow
               // navigation("UP");
                console.log("UP");

                break;
            case TvKeyCode.KEY_RIGHT : //RIGHT arrow
              //  navigation1("RIGHT");
                console.log("RIGHT");


                break;
            case TvKeyCode.KEY_DOWN: //DOWN arrow
                //navigation("DOWN");
                console.log("DOWN");

                break;
            case TvKeyCode.KEY_ENTER: //OK button
                go_to(current_item);
                console.log("ENTER Button");
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
        parent.location="home.html";
    if(current_item==2){
        console.log("redirection");
        parent.location="course.html";
    }
    if(current_item==3){
        console.log("redirection");
        parent.location="exercise.html";
    }
    if(current_item==4){
        console.log("redirection");
        parent.location="schedule.html";
    }
    if(current_item==5){
        console.log("redirection");
        parent.location="about.html";
    }
    if(current_item==6){
        parent.location="login.html";
    }
    if(current_item==7){
        parent.location="fitness.html";
    }
    if(current_item==8){
        parent.location="exer.html";
    }

    if(current_item==9){
        parent.location="login.html";
        //parent.location="contact.html";
    }
    if(current_item==10){
        parent.location="login.html";
        //parent.location="contact.html";
    }

};
