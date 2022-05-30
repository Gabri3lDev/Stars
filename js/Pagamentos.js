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

function FuctionSelect1 () {

    if(document.getElementById("pixdiv").click){

        document.getElementById("cartaodiv").style.color = "#ccd0e679";
        document.getElementById("cartaodiv").style.border = "solid 2px #6470a054";
        document.getElementById("cartaodiv").style.textShadow = "0px 0px 0px #00000000";
        document.getElementById("cartaodiv").style.boxShadow = "0px 0px 0px #00000000";



        document.getElementById("pixdiv").style.color = "#0986e0";
        document.getElementById("pixdiv").style.border = "solid 2px #0986e0";
        document.getElementById("pixdiv").style.textShadow = "0px 0px 8px #0986e047";
        document.getElementById("pixdiv").style.boxShadow = "0px 0px 10px #0986e060";



        document.getElementById("paypaldiv").style.color = "#ccd0e679";
        document.getElementById("paypaldiv").style.border = "solid 2px #6470a054";
        document.getElementById("paypaldiv").style.textShadow = "0px 0px 0px #00000000";
        document.getElementById("paypaldiv").style.boxShadow = "0px 0px 0px #00000000";



        document.getElementById("btn").textContent= "Prosseguir";


        document.getElementById("form_pagamento").style.display= "none";
        document.getElementById("cards").style.display= "none";



        document.getElementById("containers").style.height= "540px";                
    }

}


function FuctionSelect2 () {

    if(document.getElementById("paypaldiv").click){

        document.getElementById("cartaodiv").style.color = "#ccd0e679";
        document.getElementById("cartaodiv").style.border = "solid 2px #6470a054";
        document.getElementById("cartaodiv").style.textShadow = "0px 0px 0px #00000000";
        document.getElementById("cartaodiv").style.boxShadow = "0px 0px 0px #00000000";


        document.getElementById("paypaldiv").style.color = "#0986e0";
        document.getElementById("paypaldiv").style.border = "solid 2px #0986e0";
        document.getElementById("paypaldiv").style.textShadow = "0px 0px 8px #0986e047";
        document.getElementById("paypaldiv").style.boxShadow = "0px 0px 10px #0986e060";

        
        document.getElementById("pixdiv").style.color = "#ccd0e679";
        document.getElementById("pixdiv").style.border = "solid 2px #6470a054";
        document.getElementById("pixdiv").style.textShadow = "0px 0px 0px #00000000";
        document.getElementById("pixdiv").style.boxShadow = "0px 0px 0px #00000000";



        document.getElementById("btn").textContent= "Prosseguir";


        document.getElementById("form_pagamento").style.display= "none";
        document.getElementById("cards").style.display= "none";




        document.getElementById("containers").style.height= "540px";
    }

}


function FuctionSelect () {

if(document.getElementById("cartaodiv").click){

    document.getElementById("paypaldiv").style.color = "#ccd0e679";
    document.getElementById("paypaldiv").style.border = "solid 2px #6470a054";
    document.getElementById("paypaldiv").style.textShadow = "0px 0px 0px #00000000";
    document.getElementById("paypaldiv").style.boxShadow = "0px 0px 0px #00000000";


    document.getElementById("cartaodiv").style.color = "#0986e0";
    document.getElementById("cartaodiv").style.border = "solid 2px #0986e0";
    document.getElementById("cartaodiv").style.textShadow = "0px 0px 8px #0986e047";
    document.getElementById("cartaodiv").style.boxShadow = "0px 0px 10px #0986e060";

    
    document.getElementById("pixdiv").style.color = "#ccd0e679";
    document.getElementById("pixdiv").style.border = "solid 2px #6470a054";
    document.getElementById("pixdiv").style.textShadow = "0px 0px 0px #00000000";
    document.getElementById("pixdiv").style.boxShadow = "0px 0px 0px #00000000";



    document.getElementById("btn").textContent= "Pagar agora";


    document.getElementById("form_pagamento").style.display= "block";
    document.getElementById("cards").style.display= "flex";




    document.getElementById("containers").style.height= "970px";

}

}

document.querySelector("#id_number_card").oninput = () =>{
document.querySelector(".card_number").textContent =
document.querySelector("#id_number_card").value;
}

document.querySelector("#id_nome_titular").oninput = () =>{
document.querySelector(".card_name").textContent =
document.querySelector("#id_nome_titular").value;
}

document.querySelector("#id_mes").oninput = () =>{
document.querySelector(".card_month").textContent =
document.querySelector("#id_mes").value;
}

document.querySelector("#id_ano").oninput = () =>{
document.querySelector(".card_year").textContent =
document.querySelector("#id_ano").value;
}

document.querySelector("#id_cvv").oninput = () =>{
document.querySelector(".card_cvv").textContent =
document.querySelector("#id_cvv").value;
}

/*-----------------LABEL + INPUT-------------------*/

function foca (){
    document.getElementById("labl_1").style.top = "-9px";
    document.getElementById("labl_1").style.fontSize = "12px";
    document.getElementById("labl_1").style.transition = ".2s";              
}

function bluru (){
    if(document.getElementById("fullname").value > ""){
        document.getElementById("labl_1").style.top = "-9px";
        document.getElementById("labl_1").style.fontSize = "12px";  
        document.getElementById("labl_1").style.transition = ".2s";              
    }

    else{
        document.getElementById("labl_1").style.top = "7px";
        document.getElementById("labl_1").style.fontSize = "15px";
        document.getElementById("labl_1").style.transition = ".2s";              
    }
    
}

function valid (){
    if(document.getElementById("fullname").value >=  ""){
        document.getElementById("labl_1").style.top = "-9px";
        document.getElementById("labl_1").style.fontSize = "12px";
        document.getElementById("labl_1").style.transition = ".2s";              
    }

    else{
        document.getElementById("labl_1").style.top = "12px";
        document.getElementById("labl_1").style.fontSize = "15px";
        document.getElementById("labl_1").style.transition = ".2s";              
    }
}

/*------------------------------------*/

function foca1 (){
    document.getElementById("labl_2").style.top = "-9px";
    document.getElementById("labl_2").style.fontSize = "12px";
    document.getElementById("labl_2").style.transition = ".2s"; 
}

function bluru1 (){
    if(document.getElementById("idemail").value > ""){
        document.getElementById("labl_2").style.top = "-9px";
        document.getElementById("labl_2").style.fontSize = "12px";  
        document.getElementById("labl_2").style.transition = ".2s";              
    }

    else{
        document.getElementById("labl_2").style.top = "7px";
        document.getElementById("labl_2").style.fontSize = "15px";
        document.getElementById("labl_2").style.transition = ".2s";              
    }
    
}

function valid1 (){
    if(document.getElementById("idemail").value >=  ""){
        document.getElementById("labl_2").style.top = "-9px";
        document.getElementById("labl_2").style.fontSize = "12px";
        document.getElementById("labl_2").style.transition = ".2s";              
    }

    else{
        document.getElementById("labl_2").style.top = "12px";
        document.getElementById("labl_2").style.fontSize = "15px";
        document.getElementById("labl_2").style.transition = ".2s";              
    }
}
/*------------------------------------*/

function foca2 (){
    document.getElementById("labl3").style.top = "-9px";
    document.getElementById("labl3").style.fontSize = "12px";
    document.getElementById("labl3").style.transition = ".2s"; 
}

function bluru2 (){
    if(document.getElementById("id_confirm_email").value > ""){
        document.getElementById("labl3").style.top = "-9px";
        document.getElementById("labl3").style.fontSize = "12px";  
        document.getElementById("labl3").style.transition = ".2s";              
    }

    else{
        document.getElementById("labl3").style.top = "7px";
        document.getElementById("labl3").style.fontSize = "15px";
        document.getElementById("labl3").style.transition = ".2s";              
    }
    
}

function valid2 (){
    if(document.getElementById("id_confirm_email").value >=  ""){
        document.getElementById("labl3").style.top = "-9px";
        document.getElementById("labl3").style.fontSize = "12px";
        document.getElementById("labl3").style.transition = ".2s";              
    }

    else{
        document.getElementById("labl3").style.top = "12px";
        document.getElementById("labl3").style.fontSize = "15px";
        document.getElementById("labl3").style.transition = ".2s";              
    }
}

/*--------------*/

function foca3 (){
    document.getElementById("labl_4").style.top = "-9px";
    document.getElementById("labl_4").style.fontSize = "12px";
    document.getElementById("labl_4").style.transition = ".2s"; 
}

function bluru3 (){
    if(document.getElementById("id_number_card").value > ""){
        document.getElementById("labl_4").style.top = "-9px";
        document.getElementById("labl_4").style.fontSize = "12px";  
        document.getElementById("labl_4").style.transition = ".2s";              
    }

    else{
        document.getElementById("labl_4").style.top = "7px";
        document.getElementById("labl_4").style.fontSize = "15px";
        document.getElementById("labl_4").style.transition = ".2s";              
    }
    
}

function valid3 (){
    if(document.getElementById("id_number_card").value >=  ""){
        document.getElementById("labl_4").style.top = "-9px";
        document.getElementById("labl_4").style.fontSize = "12px";
        document.getElementById("labl_4").style.transition = ".2s";              
    }

    else{
        document.getElementById("labl_4").style.top = "12px";
        document.getElementById("labl_4").style.fontSize = "15px";
        document.getElementById("labl_4").style.transition = ".2s";              
    }
}

/*--------------*/

function foca4 (){
    document.getElementById("labl_5").style.top = "-9px";
    document.getElementById("labl_5").style.fontSize = "12px";
    document.getElementById("labl_5").style.transition = ".2s"; 
}

function bluru4 (){
    if(document.getElementById("id_nome_titular").value > ""){
        document.getElementById("labl_5").style.top = "-9px";
        document.getElementById("labl_5").style.fontSize = "12px";  
        document.getElementById("labl_5").style.transition = ".2s";              
    }

    else{
        document.getElementById("labl_5").style.top = "7px";
        document.getElementById("labl_5").style.fontSize = "15px";
        document.getElementById("labl_5").style.transition = ".2s";              
    }
    
}

function valid4 (){
    if(document.getElementById("id_nome_titular").value >=  ""){
        document.getElementById("labl_5").style.top = "-9px";
        document.getElementById("labl_5").style.fontSize = "12px";
        document.getElementById("labl_5").style.transition = ".2s";              
    }

    else{
        document.getElementById("labl_5").style.top = "12px";
        document.getElementById("labl_5").style.fontSize = "15px";
        document.getElementById("labl_5").style.transition = ".2s";              
    }
}

/*----------------------CARD FLIPER--------------------*/

function FocusCard (){
    document.getElementById("cards").style.transition = "all .6s";
    document.getElementById("cards").style.transform = "perspective(700px)  rotatey(180deg)";
    document.getElementById("card_front").style.zIndex = "0";
}

function BlurCard (){
    document.getElementById("cards").style.transition = "all .6s";
    document.getElementById("cards").style.transform = "perspective(700px) rotatey(0deg)";            
    document.getElementById("card_front").style.zIndex = "4";
}

/*-------------*/

function check (){

    if(document.getElementById("id_confirm_email").value ==
    document.getElementById("idemail").value){

        document.getElementById("id_confirm_email").style.border = "2px solid #0986e0";
        document.getElementById("btn").removeAttribute("disabled");
    }

    else{
        btn
        document.getElementById("id_confirm_email").style.border = "2px solid red";
        document.getElementById("btn").setAttribute("disabled", true);
    }

}

function DesabilitarInput (){
    if(document.getElementById("id_cvv").value.length == 3){
        console.log("Sucesso")
        document.getElementById("id_cvv").style.border = "2px solid #0986e0";
        document.getElementById("btn").removeAttribute("disabled");

    }

    else{
        document.getElementById("id_cvv").style.border = "2px solid red";
        document.getElementById("btn").setAttribute("disabled" , true);

    }
}

function DesabilitarInput2 (){
    if(document.getElementById("id_ano").value.length == 2){
        document.getElementById("id_ano").style.border = "2px solid #0986e0";
        document.getElementById("btn").removeAttribute("disabled");

    }

    else{
        document.getElementById("id_ano").style.border = "2px solid red";
        document.getElementById("btn").setAttribute("disabled" , true);

    }
}

function DesabilitarInput3 (){
    if(document.getElementById("id_mes").value.length == 2){
        document.getElementById("id_mes").style.border = "2px solid #0986e0";
        document.getElementById("btn").removeAttribute("disabled");

    }

    else{
        document.getElementById("id_mes").style.border = "2px solid red";
        document.getElementById("btn").setAttribute("disabled" , true);

    }
}

function DesabilitarInput4 (){
    if(document.getElementById("id_number_card").value.length == 16){
        document.getElementById("id_number_card").style.border = "2px solid #0986e0";
        document.getElementById("btn").removeAttribute("disabled");

    }

    else{
        document.getElementById("id_number_card").style.border = "2px solid red";
        document.getElementById("btn").setAttribute("disabled" , true);

    }
}