    var misc = [];
    var tops = [];
    var bottoms = [];
    var shoes = [];

    var topsbrand = ["expired girl chloe blouse", "thrifted", "heron preston camou", "aritzia reso sweater", "sandy liang haribo top", "thrifted", "aritzia tuesday button-up ", "justpeachy miffy tee"];
    var bottomsbrand = ["expired girl check skirt", "la apparel tennis skirt", "wegangyoung purin skirt", "mymummadeit skirt", "aritzia ascendant pant", "uniqlo wide pant", "theory high waisted pant", "aritzia effortless pant"];
    var shoesbrand =["buffalo classic lows", "af1 cracked leather", "af1 smile", "melissa x lazy oaf kick-off"];


    for(var i = 0; i < 8; i++){
        tops.push("imgs/game/tops/" + i + ".png");
    }

    for(var i = 0; i < 8; i++){
        bottoms.push("imgs/game/bottoms/" + i + ".png");
    }

    for(var i = 0; i < 4; i++){
        shoes.push("imgs/game/shoes/" + i + ".png");
    }

    for(var i = 0; i < 4; i++){
        misc.push("imgs/game/misc/" + i + ".png");
    }


    document.getElementById("base").ondragstart = function() { return false; };
    document.getElementById("misc-img").ondragstart = function() { return false; };
    document.getElementById("tops-img").ondragstart = function() { return false; };
    document.getElementById("bottoms-img").ondragstart = function() { return false; };
    document.getElementById("shoes-img").ondragstart = function() { return false; };



function miscchange(x){
    document.getElementById("misc-img").src = misc[x];
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

// function misccategory(){
//     document.getElementById("misccategory").style = "font-weight: 600";
//     document.getElementById("topscategory").style = "font-weight: 400";
//     document.getElementById("bottomscategory").style = "font-weight: 400";
//     document.getElementById("shoescategory").style = "font-weight: 400";

//     document.getElementById("misc").style = "display: block;";
//     document.getElementById("tops").style = "display: none;";
//     document.getElementById("bottoms").style = "display: none";
//     document.getElementById("shoes").style = "display: none";
// }

function topscategory(){
    // document.getElementById("misccategory").style = "font-weight: 400";
    document.getElementById("topscategory").style = "font-weight: 600";
    document.getElementById("bottomscategory").style = "font-weight: 400";
    document.getElementById("shoescategory").style = "font-weight: 400";

    // document.getElementById("misc").style = "display: none;";
    document.getElementById("tops").style = "display: block;";
    document.getElementById("bottoms").style = "display: none";
    document.getElementById("shoes").style = "display: none";
}

function bottomscategory(){
    // document.getElementById("misccategory").style = "font-weight: 400";
    document.getElementById("topscategory").style = "font-weight: 400";
    document.getElementById("bottomscategory").style = "font-weight: 600";
    document.getElementById("shoescategory").style = "font-weight: 400";

    // document.getElementById("misc").style = "display: none;";
    document.getElementById("tops").style = "display: none;";
    document.getElementById("bottoms").style = "display: block";
    document.getElementById("shoes").style = "display: none";
}

function shoescategory(){
    // document.getElementById("misccategory").style = "font-weight: 400";
    document.getElementById("topscategory").style = "font-weight: 400";
    document.getElementById("bottomscategory").style = "font-weight: 400";
    document.getElementById("shoescategory").style = "font-weight: 600";

    // document.getElementById("misc").style = "display: none;";
    document.getElementById("tops").style = "display: none;";
    document.getElementById("bottoms").style = "display: none";
    document.getElementById("shoes").style = "display: block";
}



function delay (URL) {
    setTimeout( function() { window.location = URL }, 500 );
}