    var stickerImages = [];

    for(var i = 0; i < 16; i++){
        stickerImages.push("imgs/stickers/" + i + ".png");
    }


console.log("starting " + stickerImages);

function abbiStickers(){
    var position = [];
    var stickerPosition = ["s1", "s2", "s3", "s4", "s5", "s6"];

    for(var i = 0; i < 4; i++){
        var randomPosition = Math.floor(Math.random() * stickerPosition.length);
        position.push(stickerPosition[randomPosition]);
        stickerPosition.splice(randomPosition, 1);
    }
    var stickers = [];
    for(var i = 0; i < 4; i++){
        var randomSticker = Math.floor(Math.random() * stickerImages.length);
        stickers.push(stickerImages[randomSticker]);
        stickerImages.splice(randomSticker, 1);
    }
    document.getElementById("abbi-stickers").innerHTML = ""; 
    for (var i = 0; i < 4; i++){
        var stickerImg = document.createElement("img");
        stickerImg.setAttribute("src", stickers[i]);
        stickerImg.setAttribute("class", position[i]);
        stickerImg.classList.add("stickers");
        var stickerList = document.getElementById("abbi-stickers");
        stickerList.append(stickerImg);
    }
    
    console.log("after abbi " + stickerImages);
}

function twitterStickers(){
    var position = [];
    var stickerPosition = ["s1", "s2", "s3", "s4", "s5", "s6"];

    for(var i = 0; i < 4; i++){
        var randomPosition = Math.floor(Math.random() * stickerPosition.length);
        position.push(stickerPosition[randomPosition]);
        stickerPosition.splice(randomPosition, 1);
    }
    var stickers = [];
    for(var i = 0; i < 4; i++){
        var randomSticker = Math.floor(Math.random() * stickerImages.length);
        stickers.push(stickerImages[randomSticker]);
        stickerImages.splice(randomSticker, 1);
    }
    document.getElementById("twitter-stickers").innerHTML = ""; 
    for (var i = 0; i < 4; i++){
        var stickerImg = document.createElement("img");
        stickerImg.setAttribute("src", stickers[i]);
        stickerImg.setAttribute("class", position[i]);
        stickerImg.classList.add("stickers");
        var stickerList = document.getElementById("twitter-stickers");
        stickerList.append(stickerImg);
    }
}


function finalStickers(){
    var position = [];
    var stickerPosition = ["s1", "s2", "s3", "s4", "s5", "s6"];

    for(var i = 0; i < 4; i++){
        var randomPosition = Math.floor(Math.random() * stickerPosition.length);
        position.push(stickerPosition[randomPosition]);
        stickerPosition.splice(randomPosition, 1);
    }
    var stickers = [];
    for(var i = 0; i < 4; i++){
        var randomSticker = Math.floor(Math.random() * stickerImages.length);
        stickers.push(stickerImages[randomSticker]);
        stickerImages.splice(randomSticker, 1);
    }
    document.getElementById("final-stickers").innerHTML = ""; 
    for (var i = 0; i < 4; i++){
        var stickerImg = document.createElement("img");
        stickerImg.setAttribute("src", stickers[i]);
        stickerImg.setAttribute("class", position[i]);
        stickerImg.classList.add("stickers");
        var stickerList = document.getElementById("final-stickers");
        stickerList.append(stickerImg);
    }
}



function aigaStickers(){
    var position = [];
    var stickerPosition = ["s1", "s2", "s3", "s4", "s5", "s6"];

    for(var i = 0; i < 4; i++){
        var randomPosition = Math.floor(Math.random() * stickerPosition.length);
        position.push(stickerPosition[randomPosition]);
        stickerPosition.splice(randomPosition, 1);
    }
    var stickers = [];
    for(var i = 0; i < 4; i++){
        var randomSticker = Math.floor(Math.random() * stickerImages.length);
        stickers.push(stickerImages[randomSticker]);
        stickerImages.splice(randomSticker, 1);
    }
    document.getElementById("aiga-stickers").innerHTML = ""; 
    for (var i = 0; i < 4; i++){
        var stickerImg = document.createElement("img");
        stickerImg.setAttribute("src", stickers[i]);
        stickerImg.setAttribute("class", position[i]);
        stickerImg.classList.add("stickers");
        var stickerList = document.getElementById("aiga-stickers");
        stickerList.append(stickerImg);
    }
}


function populateNav(){
    document.getElementById("link1").innerHTML = "work"; 
    document.getElementById("link1").href = "index"; 
//    document.getElementById("link2").innerHTML = "play"; 
//    document.getElementById("link2").href = "play"; 
    document.getElementById("link3").innerHTML = "about"; 
    document.getElementById("link3").href = "about"; 
}


function addStickers(){
    abbiStickers();
    twitterStickers();
    finalStickers();
    aigaStickers();
    populateNav();
}

function populatePage(){
    populateNav();
}













