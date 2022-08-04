const uls = document.getElementById("uls")
const li0 = document.getElementById("li0")
const li1 = document.getElementById("li1")
const li2 = document.getElementById("li2")
const down = document.getElementById("dow")
const hr = document.getElementById("hr")

const cartaodiv = document.getElementById("cartaodiv")
const pixdiv = document.getElementById("pixdiv")
const paypaldiv = document.getElementById("paypaldiv")
const labl_1 = document.getElementById("labl_1")
const labl_2 = document.getElementById("labl_2")
const labl3 = document.getElementById("labl3")
const labl_4 = document.getElementById("labl_4")
const labl_5 = document.getElementById("labl_5")
const btn = document.getElementById("btn")

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

function FuctionSelect1 () {
    if(pixdiv.click){
        cartaodiv.style.color = "#ccd0e679";
        cartaodiv.style.border = "solid 2px #6470a054";
        cartaodiv.style.textShadow = "0px 0px 0px #00000000";
        cartaodiv.style.boxShadow = "0px 0px 0px #00000000";

        pixdiv.style.color = "#0986e0";
        pixdiv.style.border = "solid 2px #0986e0";
        pixdiv.style.textShadow = "0px 0px 8px #0986e047";
        pixdiv.style.boxShadow = "0px 0px 10px #0986e060";

        paypaldiv.style.color = "#ccd0e679";
        paypaldiv.style.border = "solid 2px #6470a054";
        paypaldiv.style.textShadow = "0px 0px 0px #00000000";
        paypaldiv.style.boxShadow = "0px 0px 0px #00000000";

        btn.textContent= "Prosseguir";
        document.getElementById("form_pagamento").style.display= "none";
        document.getElementById("cards").style.display= "none";
        document.getElementById("containers").style.height= "540px";                
    }
}


function FuctionSelect2 () {
    if(paypaldiv.click){
        cartaodiv.style.color = "#ccd0e679";
        cartaodiv.style.border = "solid 2px #6470a054";
        cartaodiv.style.textShadow = "0px 0px 0px #00000000";
        cartaodiv.style.boxShadow = "0px 0px 0px #00000000";

        paypaldiv.style.color = "#0986e0";
        paypaldiv.style.border = "solid 2px #0986e0";
        paypaldiv.style.textShadow = "0px 0px 8px #0986e047";
        paypaldiv.style.boxShadow = "0px 0px 10px #0986e060";
    
        pixdiv.style.color = "#ccd0e679";
        pixdiv.style.border = "solid 2px #6470a054";
        pixdiv.style.textShadow = "0px 0px 0px #00000000";
        pixdiv.style.boxShadow = "0px 0px 0px #00000000";

        btn.textContent= "Prosseguir";
        document.getElementById("form_pagamento").style.display= "none";
        document.getElementById("cards").style.display= "none";
        document.getElementById("containers").style.height= "540px";
    }
}

function FuctionSelect () {

if(document.getElementById("cartaodiv").click){

    paypaldiv.style.color = "#ccd0e679";
    paypaldiv.style.border = "solid 2px #6470a054";
    paypaldiv.style.textShadow = "0px 0px 0px #00000000";
    paypaldiv.style.boxShadow = "0px 0px 0px #00000000";

    cartaodiv.style.color = "#0986e0";
    cartaodiv.style.border = "solid 2px #0986e0";
    cartaodiv.style.textShadow = "0px 0px 8px #0986e047";
    cartaodiv.style.boxShadow = "0px 0px 10px #0986e060";

    pixdiv.style.color = "#ccd0e679";
    pixdiv.style.border = "solid 2px #6470a054";
    pixdiv.style.textShadow = "0px 0px 0px #00000000";
    pixdiv.style.boxShadow = "0px 0px 0px #00000000";

    btn.textContent= "Pagar agora";
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
    labl_1.style.top = "-9px";
    labl_1.style.fontSize = "12px";
    labl_1.style.transition = ".2s";              
}

function bluru (){
    if(document.getElementById("fullname").value > ""){
        labl_1.style.top = "-9px";
        labl_1.style.fontSize = "12px";  
        labl_1.style.transition = ".2s";              
    }else{
        labl_1.style.top = "7px";
        labl_1.style.fontSize = "15px";
        labl_1.style.transition = ".2s";              
    }
}

function valid (){
    if(document.getElementById("fullname").value >=  ""){
        labl_1.style.top = "-9px";
        labl_1.style.fontSize = "12px";
        labl_1.style.transition = ".2s";              
    }else{
        labl_1.style.top = "12px";
        labl_1.style.fontSize = "15px";
        labl_1.style.transition = ".2s";              
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
        labl_2.style.top = "-9px";
        labl_2.style.fontSize = "12px";  
        labl_2.style.transition = ".2s";              
    }else{
        labl_2.style.top = "7px";
        labl_2.style.fontSize = "15px";
        labl_2.style.transition = ".2s";              
    }
}

function valid1 (){
    if(document.getElementById("idemail").value >=  ""){
        labl_2.style.top = "-9px";
        labl_2.style.fontSize = "12px";
        labl_2.style.transition = ".2s";              
    }else{
        labl_2.style.top = "12px";
        labl_2.style.fontSize = "15px";
        labl_2.style.transition = ".2s";              
    }
}

/*------------------------------------*/

function foca2 (){
    labl3.style.top = "-9px";
    labl3.style.fontSize = "12px";
    labl3.style.transition = ".2s"; 
}

function bluru2 (){
    if(document.getElementById("id_confirm_email").value > ""){
        labl3.style.top = "-9px";
        labl3.style.fontSize = "12px";  
        labl3.style.transition = ".2s";              
    }else{
        labl3.style.top = "7px";
        labl3.style.fontSize = "15px";
        labl3.style.transition = ".2s";              
    }
}

function valid2 (){
    if(document.getElementById("id_confirm_email").value >=  ""){
        labl3.style.top = "-9px";
        labl3.style.fontSize = "12px";
        labl3.style.transition = ".2s";              
    }else{
        labl3.style.top = "12px";
        labl3.style.fontSize = "15px";
        labl3.style.transition = ".2s";              
    }
}

/*--------------*/

function foca3 (){
    labl_4.style.top = "-9px";
    labl_4.style.fontSize = "12px";
    labl_4.style.transition = ".2s"; 
}

function bluru3 (){
    if(document.getElementById("id_number_card").value > ""){
        labl_4.style.top = "-9px";
        labl_4.style.fontSize = "12px";  
        labl_4.style.transition = ".2s";              
    }else{
        labl_4.style.top = "7px";
        labl_4.style.fontSize = "15px";
        labl_4.style.transition = ".2s";              
    }
}

function valid3 (){
    if(document.getElementById("id_number_card").value >=  ""){
        labl_4.style.top = "-9px";
        labl_4.style.fontSize = "12px";
        labl_4.style.transition = ".2s";              
    }else{
        labl_4.style.top = "12px";
        labl_4.style.fontSize = "15px";
        labl_4.style.transition = ".2s";              
    }
}

/*--------------*/

function foca4 (){
    labl_5.style.top = "-9px";
    labl_5.style.fontSize = "12px";
    labl_5.style.transition = ".2s"; 
}

function bluru4 (){
    if(document.getElementById("id_nome_titular").value > ""){
        labl_5.style.top = "-9px";
        labl_5.style.fontSize = "12px";  
        labl_5.style.transition = ".2s";              
    }else{
        labl_5.style.top = "7px";
        labl_5.style.fontSize = "15px";
        labl_5.style.transition = ".2s";              
    }
}

function valid4 (){
    if(document.getElementById("id_nome_titular").value >=  ""){
        labl_5.style.top = "-9px";
        labl_5.style.fontSize = "12px";
        labl_5.style.transition = ".2s";              
    }else{
        labl_5.style.top = "12px";
        labl_5.style.fontSize = "15px";
        labl_5.style.transition = ".2s";              
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
        btn.removeAttribute("disabled");
    }else{
        btn
        document.getElementById("id_confirm_email").style.border = "2px solid red";
        btn.setAttribute("disabled", true);
    }
}

function DesabilitarInput (){
    if(document.getElementById("id_cvv").value.length == 3){
        console.log("Sucesso")
        document.getElementById("id_cvv").style.border = "2px solid #0986e0";
        btn.removeAttribute("disabled");
    }else{
        document.getElementById("id_cvv").style.border = "2px solid red";
        btn.setAttribute("disabled" , true);

    }
}

function DesabilitarInput2 (){
    if(document.getElementById("id_ano").value.length == 2){
        document.getElementById("id_ano").style.border = "2px solid #0986e0";
        btn.removeAttribute("disabled");
    }else{
        document.getElementById("id_ano").style.border = "2px solid red";
        btn.setAttribute("disabled" , true);
    }
}

function DesabilitarInput3 (){
    if(document.getElementById("id_mes").value.length == 2){
        document.getElementById("id_mes").style.border = "2px solid #0986e0";
        btn.removeAttribute("disabled");
    }else{
        document.getElementById("id_mes").style.border = "2px solid red";
        btn.setAttribute("disabled" , true);
    }
}

function DesabilitarInput4 (){
    if(document.getElementById("id_number_card").value.length == 16){
        document.getElementById("id_number_card").style.border = "2px solid #0986e0";
        btn.removeAttribute("disabled");
    }else{
        document.getElementById("id_number_card").style.border = "2px solid red";
        btn.setAttribute("disabled" , true);
    }
}