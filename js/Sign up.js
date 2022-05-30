function myFuction (){

    if(document.getElementById("check").checked){
        document.getElementById("uls").style.left = "40%"
        document.getElementById("uls").style.top = "68px"
        document.getElementById("uls").style.transition = ".4s"
        document.getElementById("li0").style.transition = ".6s"
        document.getElementById("li1").style.transition = ".6s"
        document.getElementById("li2").style.transition = ".6s"
        document.getElementById("down").style.transition = ".6s"
        document.getElementById("hr").style.transition = ".6s"
        document.getElementById("li0").style.transform = "translatex(0%)"
        document.getElementById("li1").style.transform = "translatex(0%)"
        document.getElementById("li2").style.transform = "translatex(0%)"
        document.getElementById("hr").style.transform = "translatex(0%)"
        document.getElementById("down").style.transform = "translatex(0%)"


    }

    else{
        document.getElementById("uls").style.top = "68px"
        document.getElementById("uls").style.left = "100%"
        document.getElementById("uls").style.transition = ".6s"
        document.getElementById("li0").style.transition = ".6s"
        document.getElementById("li1").style.transition = ".6s"
        document.getElementById("li2").style.transition = ".6s"
        document.getElementById("down").style.transition = ".6s"
        document.getElementById("hr").style.transition = ".6s"
        document.getElementById("li0").style.transform = "translatex(50%)"
        document.getElementById("li1").style.transform = "translatex(100%)"
        document.getElementById("li2").style.transform = "translatex(150%)"
        document.getElementById("hr").style.transform = "translatex(200%)"
        document.getElementById("down").style.transform = "translatex(250%)"
    }
}

function check (){
    if( document.getElementById("confirm_password").value ==
     document.getElementById("password").value){

        document.getElementById("ok").style.display = "block";
        document.getElementById("error").style.display = "none";
        document.getElementById("btn_login").style.cursor = "pointer";
        document.getElementById("btn_login").removeAttribute("disabled")
        document.getElementById("btn_login").style.width = "80%";
        document.getElementById("btn_login").style.color = "#0986e0";
        document.getElementById("btn_login").style.border = "solid 2px #0986e0";
        document.getElementById("btn_login").style.boxShadow = "0px 0px 15px #0986e057";
        document.getElementById("btn_login").style.backgroundColor = "#1b2441";
        document.getElementById("btn_login").style.transition = "all .3s";
        
    }

    else{
        document.getElementById("ok").style.display = "none";
        document.getElementById("error").style.display = "block";
        document.getElementById("btn_login").style.cursor = "not-allowed";
        document.getElementById("btn_login").style.width = "60%";
        document.getElementById("btn_login").style.color = "#505465";
        document.getElementById("btn_login").style.border = "solid 3px #505465";
        document.getElementById("btn_login").style.boxShadow = "0px 0px 0px #50546500";
        document.getElementById("btn_login").style.backgroundColor = "transparent";
        document.getElementById("btn_login").style.transition = "all .3s";
        document.getElementById("btn_login").setAttribute("disabled" , true)
    }
}

function Show (){

    var x = document.getElementById("password");
    var y = document.getElementById("hide1");
    var z = document.getElementById("hide2");

    if(x.type === "password"){
        x.type = "text";
        y.style.display = "none";
        z.style.display = "block";
    }

    else{
        x.type = "password";
        y.style.display = "block";
        z.style.display = "none";
    }

}

function chks (){

    if(document.getElementById("concordo").checked){
        document.getElementById("i_check").style.display = "block";
    }

    else{
        document.getElementById("i_check").style.display = "none";
        document.getElementById("i_check").style.textShadow = "0px 0px 7px #ffffff5b";
    }

}

/*-------------------------*/

function foca (){
    document.getElementById("label_1").style.top = "-9px";
    document.getElementById("label_1").style.fontSize = "12px";
    document.getElementById("label_1").style.transition = ".2s"; 
}

function bluru (){
    if(document.getElementById("inpo").value > ""){
        document.getElementById("label_1").style.top = "-9px";
        document.getElementById("label_1").style.fontSize = "12px";  
        document.getElementById("label_1").style.transition = ".2s";              
    }

    else{
        document.getElementById("label_1").style.top = "7px";
        document.getElementById("label_1").style.fontSize = "15px";
        document.getElementById("label_1").style.transition = ".2s";              
    }
    
}

function valid (){
    if(document.getElementById("inpo").value >=  ""){
        document.getElementById("labllabel_1_1").style.top = "-9px";
        document.getElementById("label_1").style.fontSize = "12px";
        document.getElementById("label_1").style.transition = ".2s";              
    }

    else{
        document.getElementById("label_1").style.top = "12px";
        document.getElementById("label_1").style.fontSize = "15px";
        document.getElementById("label_1").style.transition = ".2s";              
    }
}

/*-------------------------*/

function foca1 (){
    document.getElementById("label_2").style.top = "-9px";
    document.getElementById("label_2").style.fontSize = "12px";
    document.getElementById("label_2").style.transition = ".2s"; 
}

function bluru1 (){
    if(document.getElementById("email").value > ""){
        document.getElementById("label_2").style.top = "-9px";
        document.getElementById("label_2").style.fontSize = "12px";  
        document.getElementById("label_2").style.transition = ".2s";              
    }

    else{
        document.getElementById("label_2").style.top = "7px";
        document.getElementById("label_2").style.fontSize = "15px";
        document.getElementById("label_2").style.transition = ".2s";              
    }
    
}

function valid1 (){
    if(document.getElementById("email").value >=  ""){
        document.getElementById("label_2").style.top = "-9px";
        document.getElementById("label_2").style.fontSize = "12px";
        document.getElementById("label_2").style.transition = ".2s";              
    }

    else{
        document.getElementById("label_2").style.top = "12px";
        document.getElementById("label_2").style.fontSize = "15px";
        document.getElementById("label_2").style.transition = ".2s";              
    }
}

/*-------------------------*/

function foca2 (){
    document.getElementById("label_3").style.top = "-9px";
    document.getElementById("label_3").style.fontSize = "12px";
    document.getElementById("label_3").style.transition = ".2s"; 
}

function bluru2 (){
    if(document.getElementById("password").value > ""){
        document.getElementById("label_3").style.top = "-9px";
        document.getElementById("label_3").style.fontSize = "12px";  
        document.getElementById("label_3").style.transition = ".2s";              
    }

    else{
        document.getElementById("label_3").style.top = "7px";
        document.getElementById("label_3").style.fontSize = "15px";
        document.getElementById("label_3").style.transition = ".2s";              
    }
    
}

function valid2 (){
    if(document.getElementById("password").value >=  ""){
        document.getElementById("label_3").style.top = "-9px";
        document.getElementById("label_3").style.fontSize = "12px";
        document.getElementById("label_3").style.transition = ".2s";              
    }

    else{
        document.getElementById("label_3").style.top = "12px";
        document.getElementById("label_3").style.fontSize = "15px";
        document.getElementById("label_3").style.transition = ".2s";              
    }
}

/*-------------------------*/

function foca3 (){
    document.getElementById("label_4").style.top = "-9px";
    document.getElementById("label_4").style.fontSize = "12px";
    document.getElementById("label_4").style.transition = ".2s"; 
}

function bluru3 (){
    if(document.getElementById("confirm_password").value > ""){
        document.getElementById("label_4").style.top = "-9px";
        document.getElementById("label_4").style.fontSize = "12px";  
        document.getElementById("label_4").style.transition = ".2s";              
    }

    else{
        document.getElementById("label_4").style.top = "7px";
        document.getElementById("label_4").style.fontSize = "15px";
        document.getElementById("label_4").style.transition = ".2s";              
    }
    
}

function valid3 (){
    if(document.getElementById("confirm_password").value >=  ""){
        document.getElementById("label_4").style.top = "-9px";
        document.getElementById("label_4").style.fontSize = "12px";
        document.getElementById("label_4").style.transition = ".2s";              
    }

    else{
        document.getElementById("label_4").style.top = "12px";
        document.getElementById("label_4").style.fontSize = "15px";
        document.getElementById("label_4").style.transition = ".2s";              
    }
}