const lblPsw = document.getElementById("label_psw")
const lblser = document.getElementById("lbluser")
const inputEmail = document.getElementById("inpo")

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