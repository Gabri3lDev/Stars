const uls = document.getElementById("uls")
const li0 = document.getElementById("li0")
const li1 = document.getElementById("li1")
const li2 = document.getElementById("li2")
const down = document.getElementById("dow")
const hr = document.getElementById("hr")
const btn_login = document.getElementById("btn_login")
const label_1 = document.getElementById("label_1")
const label_2 = document.getElementById("label_2")
const label_3 = document.getElementById("label_3")
const label_4 = document.getElementById("label_4")

function myFuction (){
    if(document.getElementById("check").checked){
        uls.style.left = "40%"
        uls.style.top = "68px"
        uls.style.transition = ".4s"
        li0.style.transition = ".6s"
        li1.style.transition = ".6s"
        li2.style.transition = ".6s"
        down.style.transition = ".6s"
        hr.style.transition = ".6s"
        li0.style.transform = "translatex(0%)"
        li1.style.transform = "translatex(0%)"
        li2.style.transform = "translatex(0%)"
        hr.style.transform = "translatex(0%)"
        down.style.transform = "translatex(0%)"
    }else{
        uls.style.top = "68px"
        uls.style.left = "100%"
        uls.style.transition = ".6s"
        li0.style.transition = ".6s"
        li1.style.transition = ".6s"
        li2.style.transition = ".6s"
        down.style.transition = ".6s"
        hr.style.transition = ".6s"
        li0.style.transform = "translatex(50%)"
        li1.style.transform = "translatex(100%)"
        li2.style.transform = "translatex(150%)"
        hr.style.transform = "translatex(200%)"
        down.style.transform = "translatex(250%)"
    }
}

function check (){
    if( document.getElementById("confirm_password").value ==
     document.getElementById("password").value){
        document.getElementById("ok").style.display = "block";
        document.getElementById("error").style.display = "none";
        btn_login.style.cursor = "pointer";
        btn_login.removeAttribute("disabled")
        btn_login.style.width = "80%";
        btn_login.style.color = "#0986e0";
        btn_login.style.border = "solid 2px #0986e0";
        btn_login.style.boxShadow = "0px 0px 15px #0986e057";
        btn_login.style.backgroundColor = "#1b2441";
        btn_login.style.transition = "all .3s";
    }else{
        document.getElementById("ok").style.display = "none";
        document.getElementById("error").style.display = "block";
        btn_login.style.cursor = "not-allowed";
        btn_login.style.width = "60%";
        btn_login.style.color = "#505465";
        btn_login.style.border = "solid 3px #505465";
        btn_login.style.boxShadow = "0px 0px 0px #50546500";
        btn_login.style.backgroundColor = "transparent";
        btn_login.style.transition = "all .3s";
        btn_login.setAttribute("disabled" , true)
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
    }else{
        x.type = "password";
        y.style.display = "block";
        z.style.display = "none";
    }
}

function chks (){
    if(document.getElementById("concordo").checked){
        document.getElementById("i_check").style.display = "block";
    }else{
        document.getElementById("i_check").style.display = "none";
        document.getElementById("i_check").style.textShadow = "0px 0px 7px #ffffff5b";
    }
}

/*-------------------------*/

function foca (){
    label_1.style.top = "-9px";
    label_1.style.fontSize = "12px";
    label_1.style.transition = ".2s"; 
}

function bluru (){
    if(document.getElementById("inpo").value > ""){
        label_1.style.top = "-9px";
        label_1.style.fontSize = "12px";  
        label_1.style.transition = ".2s";              
    }else{
        label_1.style.top = "7px";
        label_1.style.fontSize = "15px";
        label_1.style.transition = ".2s";              
    }
}

function valid (){
    if(document.getElementById("inpo").value >=  ""){
        label_1.style.top = "-9px";
        label_1.style.fontSize = "12px";
        label_1.style.transition = ".2s";              
    }

    else{
        label_1.style.top = "12px";
        label_1.style.fontSize = "15px";
        label_1.style.transition = ".2s";              
    }
}

/*-------------------------*/

function foca1 (){
    label_2.style.top = "-9px";
    label_2.style.fontSize = "12px";
    label_2.style.transition = ".2s"; 
}

function bluru1 (){
    if(document.getElementById("email").value > ""){
        label_2.style.top = "-9px";
        label_2.style.fontSize = "12px";  
        label_2.style.transition = ".2s";              
    }else{
        label_2.style.top = "7px";
        label_2.style.fontSize = "15px";
        label_2.style.transition = ".2s";              
    }
}

function valid1 (){
    if(document.getElementById("email").value >=  ""){
        label_2.style.top = "-9px";
        label_2.style.fontSize = "12px";
        label_2.style.transition = ".2s";              
    }else{
        label_2.style.top = "12px";
        label_2.style.fontSize = "15px";
        label_2.style.transition = ".2s";              
    }
}

/*-------------------------*/

function foca2 (){
    label_3.style.top = "-9px";
    label_3.style.fontSize = "12px";
    label_3.style.transition = ".2s"; 
}

function bluru2 (){
    if(document.getElementById("password").value > ""){
        label_3.style.top = "-9px";
        label_3.style.fontSize = "12px";  
        label_3.style.transition = ".2s";              
    }else{
        label_3.style.top = "7px";
        label_3.style.fontSize = "15px";
        label_3.style.transition = ".2s";              
    }
}

function valid2 (){
    if(document.getElementById("password").value >=  ""){
        label_3.style.top = "-9px";
        label_3.style.fontSize = "12px";
        label_3.style.transition = ".2s";              
    }else{
        label_3.style.top = "12px";
        label_3.style.fontSize = "15px";
        label_3.style.transition = ".2s";              
    }
}

/*-------------------------*/

function foca3 (){
    label_4.style.top = "-9px";
    label_4.style.fontSize = "12px";
    label_4.style.transition = ".2s"; 
}

function bluru3 (){
    if(document.getElementById("confirm_password").value > ""){
        label_4.style.top = "-9px";
        label_4.style.fontSize = "12px";  
        label_4.style.transition = ".2s";              
    }else{
        label_4.style.top = "7px";
        label_4.style.fontSize = "15px";
        label_4.style.transition = ".2s";              
    }
}

function valid3 (){
    if(document.getElementById("confirm_password").value >=  ""){
        label_4.style.top = "-9px";
        label_4.style.fontSize = "12px";
        label_4.style.transition = ".2s";              
    }else{
        label_4.style.top = "12px";
        label_4.style.fontSize = "15px";
        label_4.style.transition = ".2s";              
    }
}