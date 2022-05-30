let nav = document.getElementById("nav")
let img = document.getElementById("img3")
let list = document.getElementById("list")
let title = document.getElementById("title3")
let img2 = document.getElementById("imgss")
const star1 = document.getElementById("star1")
const star2 = document.getElementById("star2")
const star3 = document.getElementById("star3")
const star4 = document.getElementById("star4")
const star5 = document.getElementById("star5")
const stars1 = document.getElementById("stars1")
const stars2 = document.getElementById("stars2")
const stars3 = document.getElementById("stars3")
const stars4 = document.getElementById("stars4")
const stars5= document.getElementById("stars5")
const stars6 = document.getElementById("stars6")
const tks = document.getElementById("tks")
const h4 = document.getElementById("h4")

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

window.addEventListener("scroll", scrol)

function scrol(){
    if(window.scrollY > 200){
        nav.style.backgroundColor = "#1e88e512";
        nav.style.backdropFilter = " blur(5px)";
        nav.style.boxShadow = "0px 3px 15px #03123748";
        nav.style.borderBottom = "solid 3px #1e88e526"
        nav.style.transition = ".2s";
        nav.style.width = "100vw";
    }

    else{
        nav.style.backgroundColor = "#1e88e500";
        nav.style.width = "100vw";
        nav.style.backdropFilter = " blur(0px)";
        nav.style.boxShadow = "0px 3px 15px #1e88e500";
        nav.style.borderBottom = "solid 3px #1e88e500"
    }

    if(window.scrollY > 165){
        img.style.opacity = "100%";
        img.style.display = "flex";
        img.style.transform = "translateX(0%)";
        img.style.transition = ".3s";
        list.style.display = "flex";
        list.style.opacity = "100%";
        list.style.transform = "translateX(0%)";
        list.style.transition = ".3s";
    }
    else{
        img.style.opacity = "0"
        img.style.display = "hidden";
        img.style.transform = "translateX(10%)";
        list.style.opacity = "0"
        list.style.display = "hidden";
        list.style.transform = "translateX(10%)";
    }



    if(window.scrollY > 765){
        img2.style.opacity = "100%";
        img2.style.transform = "translateY(0%)";
        img2.style.transition = ".5s";
        title.style.opacity = "100%";
        title.style.transform = "translateY(0%)";
        title.style.transition = ".5s";
    }

    else{
        img2.style.opacity = "0%";
        img2.style.transform = "translateY(20%)";
        title.style.opacity = "0%";
        title.style.transform = "translateY(20%)";
    }

    if(window.scrollY > 1050){
        stars1.style.opacity = "100%";
        stars1.style.transform = "translateY(0%)";
        stars1.style.transition = ".5s";

        stars2.style.opacity = "100%";
        stars2.style.transform = "translateY(0%)";
        stars2.style.transition = ".5s";

        stars3.style.opacity = "100%";
        stars3.style.transform = "translateY(0%)";
        stars3.style.transition = ".5s";

        stars4.style.opacity = "100%";
        stars4.style.transform = "translateY(0%)";
        stars4.style.transition = ".5s";

        stars5.style.opacity = "100%";
        stars5.style.transform = "translateY(0%)";
        stars5.style.transition = ".5s";

        stars6.style.opacity = "100%";
        stars6.style.transform = "translateY(0%)";
        stars6.style.transition = ".5s";

        h4.style.opacity = "100%";
        h4.style.transform = "translateY(0%)";
        h4.style.transition = ".5s";
    }

    else{
        stars1.style.opacity = "0%";
        stars1.style.transform = "translateY(30%)";

        stars2.style.opacity = "0%";
        stars2.style.transform = "translateY(30%)";

        stars3.style.opacity = "0%";
        stars3.style.transform = "translateY(30%)";

        stars4.style.opacity = "0%";
        stars4.style.transform = "translateY(30%)";

        stars5.style.opacity = "0%";
        stars5.style.transform = "translateY(30%)";

        stars6.style.opacity = "0%";
        stars6.style.transform = "translateY(30%)";

        h4.style.opacity = "0%";
        h4.style.transform = "translateY(30%)";
    }


}

const tk = () =>{
    tks.style.opacity = "100%"
    tks.style.transition = ".2s"
    setTimeout(()=>{
        tks.style.opacity = "0%";
    }, 3000)
}

star1.addEventListener("mouseover", () =>{
    star1.style.color = "gold";
})

star1.addEventListener("mouseout", () =>{
    star1.style.color = "#999";
})

//---------------

star2.addEventListener("mouseover", () =>{
    star1.style.color = "gold";
    star2.style.color = "gold";
})

star2.addEventListener("mouseout", () =>{
    star1.style.color = "#999";
    star2.style.color = "#999";
})

//---------------

star3.addEventListener("mouseover", () =>{
    star1.style.color = "gold";
    star2.style.color = "gold";
    star3.style.color = "gold";
})

star3.addEventListener("mouseout", () =>{
    star1.style.color = "#999";
    star2.style.color = "#999";
    star3.style.color = "#999";
})

//---------------

star4.addEventListener("mouseover", () =>{
    star1.style.color = "gold";
    star2.style.color = "gold";
    star3.style.color = "gold";
    star4.style.color = "gold";
})

star4.addEventListener("mouseout", () =>{
    star1.style.color = "#999";
    star2.style.color = "#999";
    star3.style.color = "#999";
    star4.style.color = "#999";
})

//---------------

star5.addEventListener("mouseover", () =>{
    star1.style.color = "gold";
    star2.style.color = "gold";
    star3.style.color = "gold";
    star4.style.color = "gold";
    star5.style.color = "gold";
})

star5.addEventListener("mouseout", () =>{
    star1.style.color = "#999";
    star2.style.color = "#999";
    star3.style.color = "#999";
    star4.style.color = "#999";
    star5.style.color = "#999";
})

//================================

star1.addEventListener("click", () =>{
    stars1.style.display = "none";
    stars2.style.display = "flex";
    tk()
})

star2.addEventListener("click", () =>{
    stars1.style.display = "none";
    stars2.style.display = "none";
    stars3.style.display = "flex";
    tk()
})

star3.addEventListener("click", () =>{
    stars1.style.display = "none";
    stars2.style.display = "none";
    stars3.style.display = "none";
    stars4.style.display = "flex";
    tk()
})

star4.addEventListener("click", () =>{
    stars1.style.display = "none";
    stars2.style.display = "none";
    stars3.style.display = "none";
    stars4.style.display = "none";
    stars5.style.display = "flex";
    tk()
})

star5.addEventListener("click", () =>{
    stars1.style.display = "none";
    stars2.style.display = "none";
    stars3.style.display = "none";
    stars4.style.display = "none";
    stars5.style.display = "none";
    stars6.style.display = "flex";
    tk()
})

