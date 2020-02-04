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


function loadSidebar(){

    document.body.style.visibility='visible';


    var introP = document.createElement("p");
    var introText = document.createTextNode("hi i'm maddy :—)");
    var introText2 = document.createTextNode("welcome 2 my portfolio*~*~");
    introP.appendChild(introText);
    introP.appendChild(document.createElement("br"));
    introP.appendChild(introText2);


    var sidebar = document.getElementById("intronew");
    sidebar.appendChild(introP);

    //expP holds all text in sidebar
    var expP = document.createElement("p");
    //bold studies @ line
    var expSpan = document.createElement("span");
    expSpan.setAttribute("class", "bold");
    var expSpanText = document.createTextNode("studies @");
    expSpan.appendChild(expSpanText);
    expP.appendChild(expSpan);
    expP.appendChild(document.createElement("br"));
    //studies @ content
    var expEduText1 = document.createTextNode("carnegie mellon");
    expP.appendChild(expEduText1);
    expP.appendChild(document.createElement("br"));
    var expEduText2 = document.createTextNode("design + hci");
    expP.appendChild(expEduText2);
    expP.appendChild(document.createElement("br"));
    expP.appendChild(document.createElement("br"));

    //bold worked @ line
    var expSpan2 = document.createElement("span");
    expSpan2.setAttribute("class", "bold");
    var expSpanText2 = document.createTextNode("worked @");
    expSpan2.appendChild(expSpanText2);
    expP.appendChild(expSpan2);
    expP.appendChild(document.createElement("br"));

    //worked @ line 1
    var expWorkText = document.createTextNode("twitter — ");
    var expWorkSpan = document.createElement("span");
    expWorkSpan.setAttribute("class", "light");
    var expWorkSpanText = document.createTextNode("summer 2019");
    expWorkSpan.appendChild(expWorkSpanText);
    expP.appendChild(expWorkText);
    expP.appendChild(expWorkSpan);
    expP.appendChild(document.createElement("br"));

    //worked @ line 2
    var expWorkText2 = document.createTextNode("livity — ");
    var expWorkSpan2 = document.createElement("span");
    expWorkSpan2.setAttribute("class", "light");
    var expWorkSpanText2 = document.createTextNode("summer 2018");
    expWorkSpan2.appendChild(expWorkSpanText2);
    expP.appendChild(expWorkText2);
    expP.appendChild(expWorkSpan2); 
    expP.appendChild(document.createElement("br"));


    //worked @ line 3
    var expWorkText2 = document.createTextNode("nvidia — ");
    var expWorkSpan2 = document.createElement("span");
    expWorkSpan2.setAttribute("class", "light");
    var expWorkSpanText2 = document.createTextNode("summer 2018");
    expWorkSpan2.appendChild(expWorkSpanText2);
    expP.appendChild(expWorkText2);
    expP.appendChild(expWorkSpan2); 
    expP.appendChild(document.createElement("br"));

    //copyright line
    var copyright = document.createElement("div");
    copyright.setAttribute("class", "copyright");
    var copyrightP = document.createElement("p");
    var copyrightPText = document.createTextNode("© maddy cha 2020");
    copyrightP.appendChild(copyrightPText);
    copyright.appendChild(copyrightP);
    expP.appendChild(copyright);


    var sidebarExp = document.getElementById("exp");
    sidebarExp.appendChild(expP);

    //mobile text
    var sidebarMobile = document.getElementById("intro-text-mobile");
    var sidebarMobileP = document.createElement("p");
    var sidebarMobilePText = document.createTextNode("hi i'm maddy :—)");
    sidebarMobileP.appendChild(sidebarMobilePText);
    sidebarMobileP.appendChild(document.createElement("br"));
    sidebarMobilePText2 = document.createTextNode("welcome 2 my portfolio");
    sidebarMobileP.appendChild(sidebarMobilePText2);
    sidebarMobile.appendChild(sidebarMobileP);

}
