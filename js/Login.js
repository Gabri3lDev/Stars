const lblPsw = document.getElementById("label_psw")
const lblser = document.getElementById("lbluser")
const inputEmail = document.getElementById("inpo")
const uls = document.getElementById("uls")
const li0 = document.getElementById("uls")
const li1 = document.getElementById("uls")
const li2 = document.getElementById("uls")
const down = document.getElementById("uls")
const hr = document.getElementById("uls")

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
    }

    else{
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

function Show () {

    var x = document.getElementById("password");
    var y = document.getElementById("hide1");
    var z = document.getElementById("hide2");

    if(x.type === "password") {
        x.type = "text";
        y.style.display = "none";
        z.style.display = "inline-block";
    }

    else{
        x.type = "password";
        y.style.display = "inline-block";
        z.style.display = "none";
    }
}

/*--------------*/

function foca (){
    lblser.style.top = "-9px";
    lblser.style.fontSize = "12px";
    lblser.style.transition = ".2s"; 
}

function bluru (){
    if(document.getElementById("inpo").value > ""){
        lblser.style.top = "-9px";
        lblser.style.fontSize = "12px";  
        lblser.style.transition = ".2s";              
    }

    else{
        lblser.style.top = "7px";
        lblser.style.fontSize = "15px";
        lblser.style.transition = ".2s";              
    }
    
}

function valid (){
    if(document.getElementById("inpo").value >=  ""){
        lblser.style.top = "-9px";
        lblser.style.fontSize = "12px";
        lblser.style.transition = ".2s";              
    }

    else{
        lblser.style.top = "12px";
        lblser.style.fontSize = "15px";
        lblser.style.transition = ".2s";              
    }
}


/*--------------*/

function foca1 (){
    lblPsw.style.top = "-9px";
    lblPsw.style.fontSize = "12px";
    lblPsw.style.transition = ".2s"; 
}

function bluru1 (){
    if(document.getElementById("password").value > ""){
        lblPsw.style.top = "-9px";
        lblPsw.style.fontSize = "12px";  
        lblPsw.style.transition = ".2s";              
    }

    else{
        lblPsw.style.top = "7px";
        lblPsw.style.fontSize = "15px";
        lblPsw.style.transition = ".2s";              
    }
    
}

function valid1 (){
    if(document.getElementById("password").value >=  ""){
        lblPsw.style.top = "-9px";
        lblPsw.style.fontSize = "12px";
        lblPsw.style.transition = ".2s";              
    }

    else{
        lblPsw.style.top = "12px";
        lblPsw.style.fontSize = "15px";
        lblPsw.style.transition = ".2s";              
    }
}