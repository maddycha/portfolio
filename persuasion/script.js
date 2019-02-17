function showrhd(){
    document.getElementById("rhd").style.opacity = 1;
}

function showmacd(){
    document.getElementById("macd").style.opacity = 1;
}

function showswitchd(){
    document.getElementById("switchd").style.opacity = 1;
}

function showgbd(){
    document.getElementById("gbd").style.opacity = 1;
}

function showkatamarid(){
    document.getElementById("katamarid").style.opacity = 1;
}

function show3dsd(){
    document.getElementById("3dsd").style.opacity = 1;
}

function showssbd(){
    document.getElementById("ssbd").style.opacity = 1;
}

function showacd(){
    document.getElementById("acd").style.opacity = 1;
}

function showAbout(){
    document.getElementById("rect").style.opacity = 0.9;
    document.getElementById("rect").style.zIndex = 100;
    document.getElementById("about").style.zIndex = 101;
        document.getElementById("about").style.opacity = 1;
}

function hideAbout(){
    document.getElementById("rect").style.opacity = 0;
        document.getElementById("about").style.opacity = 0;
    document.getElementById("rect").style.transition = "opacity 0.4s, z-index 0.4s";
        document.getElementById("about").style.transition = "opacity 0.4s, z-index 0.4s";
        document.getElementById("rect").style.zIndex = -10;
    document.getElementById("about").style.zIndex = -10;
}