var slideIndex = 1;
//var expanded = false;

//var workTab = true;
//var playTab = false;
//var aboutTab = false;

function plusSlides(n) {
    showSlides(slideIndex += n);
}

function currentSlide(n) {
    showSlides(slideIndex = n);
}

function showSlides(n) {
    var i;
    var slides = document.getElementsByClassName("mySlides");
    var dots = document.getElementsByClassName("dot");
    if (n > slides.length) {slideIndex = 1}    
    if (n < 1) {slideIndex = slides.length}
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";  
    }
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }
    slides[slideIndex-1].style.display = "block";  
    dots[slideIndex-1].className += " active";
}




var slideIndex2 = 1;

function plusSlides2(n) {
    showSlides2(slideIndex2 += n);
}

function currentSlide2(n) {
    showSlides2(slideIndex2 = n);
}

function showSlides2(n) {
    var i;
    var slides2 = document.getElementsByClassName("mySlides2");
    var dots2 = document.getElementsByClassName("dot2");
    if (n > slides2.length) {slideIndex2 = 1}    
    if (n < 1) {slideIndex2 = slides2.length}
    for (i = 0; i < slides2.length; i++) {
        slides2[i].style.display = "none";  
    }
    for (i = 0; i < dots2.length; i++) {
        dots2[i].className = dots2[i].className.replace(" active", "");
    }
    slides2[slideIndex2-1].style.display = "block";  
    dots2[slideIndex2-1].className += " active";
}





var slideIndex3 = 1;

function plusSlides3(n) {
    showSlides3(slideIndex3 += n);
}

function currentSlide3(n) {
    showSlides3(slideIndex3 = n);
}

function showSlides3(n) {
    var i;
    var slides3 = document.getElementsByClassName("mySlides3");
    var dots3 = document.getElementsByClassName("dot3");
    if (n > slides3.length) {slideIndex3 = 1}    
    if (n < 1) {slideIndex3 = slides3.length}
    for (i = 0; i < slides3.length; i++) {
        slides3[i].style.display = "none";  
    }
    for (i = 0; i < dots3.length; i++) {
        dots3[i].className = dots3[i].className.replace(" active", "");
    }
    slides3[slideIndex3-1].style.display = "block";  
    dots3[slideIndex3-1].className += " active";
}




var slideIndex3 = 1;

function plusSlides3(n) {
    showSlides3(slideIndex3 += n);
}

function currentSlide3(n) {
    showSlides3(slideIndex3 = n);
}

function showSlides3(n) {
    var i;
    var slides3 = document.getElementsByClassName("mySlides3");
    var dots3 = document.getElementsByClassName("dot3");
    if (n > slides3.length) {slideIndex3 = 1}    
    if (n < 1) {slideIndex3 = slides3.length}
    for (i = 0; i < slides3.length; i++) {
        slides3[i].style.display = "none";  
    }
    for (i = 0; i < dots3.length; i++) {
        dots3[i].className = dots3[i].className.replace(" active", "");
    }
    slides3[slideIndex3-1].style.display = "block";  
    dots3[slideIndex3-1].className += " active";
}
//
//function work(){
//    workTab = true;
//    playTab = false;
//    aboutTab = false;
//}
//
//function play(){
//    workTab = false;
//    playTab = true;
//    aboutTab = false;
//}
//
//function about(){
//    workTab = false;
//    playTab = false;
//    aboutTab = true;
//}
//
//
//function updateContent(){
//    if(workTab == true){
//        document.getElementById("workLink").style.background = "#000";
//        document.getElementById("workLink").style.color = "#eee";
//        document.getElementById("playLink").style.background = "#eee";
//        document.getElementById("playLink").style.color = "#000";
//        document.getElementById("aboutLink").style.background = "#eee";
//        document.getElementById("aboutLink").style.color = "#000";
//
//        document.getElementById("work-tab").style.display="block";
//        document.getElementById("play-tab").style.display="none";
//        document.getElementById("about-tab").style.display="none";
//    } else if(playTab == true){
//        document.getElementById("workLink").style.background = "#eee";
//        document.getElementById("workLink").style.color = "#000";
//        document.getElementById("playLink").style.background = "#000";
//        document.getElementById("playLink").style.color = "#eee";
//        document.getElementById("aboutLink").style.background = "#eee";
//        document.getElementById("aboutLink").style.color = "#000";
//
//        document.getElementById("work-tab").style.display="none";
//        document.getElementById("play-tab").style.display="block";
//        document.getElementById("about-tab").style.display="none";
//    } else if(aboutTab == true){
//        document.getElementById("workLink").style.background = "#eee";
//        document.getElementById("workLink").style.color = "#000";
//        document.getElementById("playLink").style.background = "#eee";
//        document.getElementById("playLink").style.color = "#000";
//        document.getElementById("aboutLink").style.background = "#000";
//        document.getElementById("aboutLink").style.color = "#eee";
//
//        document.getElementById("work-tab").style.display="none";
//        document.getElementById("play-tab").style.display="none";
//        document.getElementById("about-tab").style.display="block";
//    }
//}