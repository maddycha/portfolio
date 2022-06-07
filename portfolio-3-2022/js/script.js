    var hair = [];
    var tops = [];
    var bottoms = [];
    var shoes = [];

    var topsbrand = ["oak + fort", "daily paper", "sandy liang", "sami miro vintage", "heron preston", "aritzia", "wegangyoung", "kith"];
    var bottomsbrand = ["aritzia", "uniqlo", "aritzia", "la apparel", "urban outfitters", "wegangyoung", "aritzia", "theory"];
    var shoesbrand =["af1 cracked leather", "af1 smile", "lazy oaf x melissa", "adilette slides"];


    for(var i = 0; i < 4; i++){
        hair.push("imgs/game/hair/" + i + ".png");
    }

    for(var i = 0; i < 8; i++){
        tops.push("imgs/game/tops/" + i + ".png");
    }

    for(var i = 0; i < 8; i++){
        bottoms.push("imgs/game/bottoms/" + i + ".png");
    }

    for(var i = 0; i < 4; i++){
        shoes.push("imgs/game/shoes/" + i + ".png");
    }


    document.getElementById("base").ondragstart = function() { return false; };
    document.getElementById("hair-img").ondragstart = function() { return false; };
    document.getElementById("tops-img").ondragstart = function() { return false; };
    document.getElementById("bottoms-img").ondragstart = function() { return false; };
    document.getElementById("shoes-img").ondragstart = function() { return false; };
    document.getElementById("maddycha").ondragstart = function() { return false; };



function hairchange(x){
    document.getElementById("hair-img").src = hair[x];
}

function topschange(x){
    document.getElementById("tops-img").src = tops[x];
    document.getElementById("topstext").innerHTML = topsbrand[x];
}

function bottomschange(x){
    document.getElementById("bottoms-img").src = bottoms[x];
    document.getElementById("bottomstext").innerHTML = bottomsbrand[x];

}

function shoeschange(x){
    document.getElementById("shoes-img").src = shoes[x];
    document.getElementById("shoestext").innerHTML = shoesbrand[x];
}

function haircategory(){
    document.getElementById("haircategory").style = "font-weight: 600";
    document.getElementById("topscategory").style = "font-weight: 400";
    document.getElementById("bottomscategory").style = "font-weight: 400";
    document.getElementById("shoescategory").style = "font-weight: 400";

    document.getElementById("hair").style = "display: block;";
    document.getElementById("tops").style = "display: none;";
    document.getElementById("bottoms").style = "display: none";
    document.getElementById("shoes").style = "display: none";
}

function topscategory(){
    document.getElementById("haircategory").style = "font-weight: 400";
    document.getElementById("topscategory").style = "font-weight: 600";
    document.getElementById("bottomscategory").style = "font-weight: 400";
    document.getElementById("shoescategory").style = "font-weight: 400";

    document.getElementById("hair").style = "display: none;";
    document.getElementById("tops").style = "display: block;";
    document.getElementById("bottoms").style = "display: none";
    document.getElementById("shoes").style = "display: none";
}

function bottomscategory(){
    document.getElementById("haircategory").style = "font-weight: 400";
    document.getElementById("topscategory").style = "font-weight: 400";
    document.getElementById("bottomscategory").style = "font-weight: 600";
    document.getElementById("shoescategory").style = "font-weight: 400";

    document.getElementById("hair").style = "display: none;";
    document.getElementById("tops").style = "display: none;";
    document.getElementById("bottoms").style = "display: block";
    document.getElementById("shoes").style = "display: none";
}

function shoescategory(){
    document.getElementById("haircategory").style = "font-weight: 400";
    document.getElementById("topscategory").style = "font-weight: 400";
    document.getElementById("bottomscategory").style = "font-weight: 400";
    document.getElementById("shoescategory").style = "font-weight: 600";

    document.getElementById("hair").style = "display: none;";
    document.getElementById("tops").style = "display: none;";
    document.getElementById("bottoms").style = "display: none";
    document.getElementById("shoes").style = "display: block";
}



function delay (URL) {
    setTimeout( function() { window.location = URL }, 500 );
}