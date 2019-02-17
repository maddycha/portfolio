var q1 = 0;
var q2 = 0;
var q3 = 0;
var q4 = 0;
var q5 = 0;
var q6 = 0;

var v = document.getElementById('myVideo');

function showMonster() {
    document.getElementById('introrect').style.top = "-100%";
    document.getElementById('createyourmonster').style.opacity = 0;
    document.getElementById('createyourmonster').style.zIndex = -10;
    document.getElementById('monsterlink').style.zIndex = -10;
    document.getElementById('createyourmonster').style.cursor = "default";
    document.getElemenyById('myVideo').pause();
}

function showAbout(){
    if(document.getElementById('aboutpage').getAttribute("class") == "true"){
        document.getElementById('rect').style.zIndex = 20;
        document.getElementById('rect').style.left = 0;
        document.getElementById('aboutpage').style.zIndex = 200;
        document.getElementById('aboutpage').style.color = "#ffffff";
        document.getElementById('aboutpage').innerHTML = "return home";
        document.getElementById('aboutpage').setAttribute("class","false");
        document.getElementById('aboutpage').style.transitionDelay = "2s";
        document.getElementById('hideexplorelink').style.opacity = 0;
    }
    else{
        document.getElementById('rect').style.left = "100%";
        document.getElementById('aboutpage').style.zIndex = 200;
        document.getElementById('aboutpage').style.color = "#333";
        document.getElementById("aboutpage").innerHTML = "check us out";
        document.getElementById('aboutpage').setAttribute("class","true");
        document.getElementById('aboutpage').style.transitionDelay = "0s";
        document.getElementById('hideexplorelink').style.opacity = 0;
    }
}

function q1next(){
    if(document.getElementById('q1a1c').checked) {
        document.getElementById('q1a1').style.opacity = 1;
        document.getElementById('question1').style.opacity = 0;
        document.getElementById('question2').style.opacity = 1;
        document.getElementById('question2answers').style.zIndex = 2;
        document.getElementById('next1').style.display = "none";
        document.getElementById('next2').style.display = "block"; 
        document.getElementById('numdesigners').setAttribute("data-count", "2914");
        q1 = 1;
    }
    if(document.getElementById('q1a2c').checked) {
        document.getElementById('q1a2').style.opacity = 1;
        document.getElementById('question1').style.opacity = 0;
        document.getElementById('question2').style.opacity = 1;
        document.getElementById('question2answers').style.zIndex = 2;
        document.getElementById('next1').style.display = "none";
        document.getElementById('next2').style.display = "block"; 
        document.getElementById('numdesigners').setAttribute("data-count", "7991");
        q1 = 2;
    }
    if(document.getElementById('q1a3c').checked) {
        document.getElementById('q1a3').style.opacity = 1;
        document.getElementById('question1').style.opacity = 0;
        document.getElementById('question2').style.opacity = 1;
        document.getElementById('question2answers').style.zIndex = 2;
        document.getElementById('next1').style.display = "none";
        document.getElementById('next2').style.display = "block"; 
        document.getElementById('numdesigners').setAttribute("data-count", "2077");
        q1 = 3;
    }

    if(document.getElementById('q1a4c').checked) {
        document.getElementById('q1a4').style.opacity = 1;
        document.getElementById('question1').style.opacity = 0;
        document.getElementById('question2').style.opacity = 1;
        document.getElementById('question2answers').style.zIndex = 2;
        document.getElementById('next1').style.display = "none";
        document.getElementById('next2').style.display = "block";
        document.getElementById('numdesigners').setAttribute("data-count", "176");
        q1 = 4;
    }
}

function q2next(){
    if(document.getElementById('q2a1c').checked) {
        document.getElementById('q2a1').style.opacity = 1;
        document.getElementById('question2').style.opacity = 0;
        document.getElementById('question3').style.opacity = 1;
        document.getElementById('question3answers').style.zIndex = 2;
        document.getElementById('next2').style.display = "none";
        document.getElementById('next3').style.display = "block"; 
        q2 = 1;
        if(q1 == 1){
            document.getElementById('numdesigners').setAttribute("data-count", "45");
        }
        if(q1 == 2){
            document.getElementById('numdesigners').setAttribute("data-count", "101");
        }
        if(q1 == 3){
            document.getElementById('numdesigners').setAttribute("data-count", "17");
        }
        if(q1 == 4){
            document.getElementById('numdesigners').setAttribute("data-count", "0");
        }
    }
    if(document.getElementById('q2a2c').checked) {
        document.getElementById('q2a2').style.opacity = 1;
        document.getElementById('question2').style.opacity = 0;
        document.getElementById('question3').style.opacity = 1;
        document.getElementById('question3answers').style.zIndex = 2;
        document.getElementById('next2').style.display = "none";
        document.getElementById('next3').style.display = "block"; 
        q2 = 2;
        if(q1 == 1){
            document.getElementById('numdesigners').setAttribute("data-count", "436");
        }
        if(q1 == 2){
            document.getElementById('numdesigners').setAttribute("data-count", "1251");
        }
        if(q1 == 3){
            document.getElementById('numdesigners').setAttribute("data-count", "274");
        }
        if(q1 == 4){
            document.getElementById('numdesigners').setAttribute("data-count", "10");
        }
    }
    if(document.getElementById('q2a3c').checked) {
        document.getElementById('q2a3').style.opacity = 1;
        document.getElementById('question2').style.opacity = 0;
        document.getElementById('question3').style.opacity = 1;
        document.getElementById('question3answers').style.zIndex = 2;
        document.getElementById('next2').style.display = "none";
        document.getElementById('next3').style.display = "block"; 
        q2 = 3;
        if(q1 == 1){            
            document.getElementById('numdesigners').setAttribute("data-count", "68");
        }
        if(q1 == 2){
            document.getElementById('numdesigners').setAttribute("data-count", "112");
        }
        if(q1 == 3){            
            document.getElementById('numdesigners').setAttribute("data-count", "29");
        }
        if(q1 == 4){
            document.getElementById('numdesigners').setAttribute("data-count", "2");
        }
    }
    if(document.getElementById('q2a4c').checked) {
        document.getElementById('q2a4').style.opacity = 1;
        document.getElementById('question2').style.opacity = 0;
        document.getElementById('question3').style.opacity = 1;
        document.getElementById('question3answers').style.zIndex = 2;
        document.getElementById('next2').style.display = "none";
        document.getElementById('next3').style.display = "block"; 
        q2 = 4;
        if(q1 == 1){            
            document.getElementById('numdesigners').setAttribute("data-count", "1742");
        }
        if(q1 == 2){
            document.getElementById('numdesigners').setAttribute("data-count", "5040");
        }
        if(q1 == 3){            
            document.getElementById('numdesigners').setAttribute("data-count", "1292");
        }
        if(q1 == 4){
            document.getElementById('numdesigners').setAttribute("data-count", "101");
        }
    }
    if(document.getElementById('q2a5c').checked) {
        document.getElementById('q2a5').style.opacity = 1;
        document.getElementById('question2').style.opacity = 0;
        document.getElementById('question3').style.opacity = 1;
        document.getElementById('question3answers').style.zIndex = 2;
        document.getElementById('next2').style.display = "none";
        document.getElementById('next3').style.display = "block"; 
        q2 = 5;
        if(q1 == 1){            
            document.getElementById('numdesigners').setAttribute("data-count", "448");
        }
        if(q1 == 2){
            document.getElementById('numdesigners').setAttribute("data-count", "1322");
        }
        if(q1 == 3){            

            document.getElementById('numdesigners').setAttribute("data-count", "419");
        }
        if(q1 == 4){
            document.getElementById('numdesigners').setAttribute("data-count", "50");
        }
    }
}

function q3next(){
    if(document.getElementById('q3a1c').checked) {
        document.getElementById('q3a1').style.opacity = 1;
        document.getElementById('question3').style.opacity = 0;
        document.getElementById('question4').style.opacity = 1;
        document.getElementById('question4answers').style.zIndex = 3;
        document.getElementById('next3').style.display = "none";
        document.getElementById('next4').style.display = "block"; 
        q3 = 1;

        if(q1 == 1){
            if(q2 == 1){
                document.getElementById('numdesigners').setAttribute("data-count", "5");
            }
            if(q2 == 2){
                document.getElementById('numdesigners').setAttribute("data-count", "91");
            }
            if(q2 == 3){
                document.getElementById('numdesigners').setAttribute("data-count", "36");
            }
            if(q2 == 4){
                document.getElementById('numdesigners').setAttribute("data-count", "329");
            }
            if(q2 == 5){
                document.getElementById('numdesigners').setAttribute("data-count", "76");
            }
        }
        if(q1 == 2){
            if(q2 == 1){
                document.getElementById('numdesigners').setAttribute("data-count", "16");
            }
            if(q2 == 2){
                document.getElementById('numdesigners').setAttribute("data-count", "149");
            }
            if(q2 == 3){
                document.getElementById('numdesigners').setAttribute("data-count", "30");
            }
            if(q2 == 4){
                document.getElementById('numdesigners').setAttribute("data-count", "631");
            }
            if(q2 == 5){
                document.getElementById('numdesigners').setAttribute("data-count", "208");
            }
        }
        if(q1 == 3){
            if(q2 == 1){
                document.getElementById('numdesigners').setAttribute("data-count", "3");
            }
            if(q2 == 2){
                document.getElementById('numdesigners').setAttribute("data-count", "53");
            }
            if(q2 == 3){
                document.getElementById('numdesigners').setAttribute("data-count", "13");
            }
            if(q2 == 4){
                document.getElementById('numdesigners').setAttribute("data-count", "223");
            }
            if(q2 == 5){
                document.getElementById('numdesigners').setAttribute("data-count", "80");
            } 
        }
        if(q1 == 4){
            if(q1 == 1){
                document.getElementById('numdesigners').setAttribute("data-count", "0");
            }
            if(q1 == 2){
                document.getElementById('numdesigners').setAttribute("data-count", "2");
            }
            if(q1 == 3){
                document.getElementById('numdesigners').setAttribute("data-count", "1");
            }
            if(q1 == 4){
                document.getElementById('numdesigners').setAttribute("data-count", "34");
            }
            if(q1 == 5){
                document.getElementById('numdesigners').setAttribute("data-count", "11");
            }
        }


    }
    if(document.getElementById('q3a2c').checked) {
        document.getElementById('q3a2').style.opacity = 1;
        document.getElementById('question3').style.opacity = 0;
        document.getElementById('question4').style.opacity = 1;
        document.getElementById('question4answers').style.zIndex = 3;
        document.getElementById('next3').style.display = "none";
        document.getElementById('next4').style.display = "block"; 
        q3 = 2;
        if(q1 == 1){
            if(q2 == 1){
                document.getElementById('numdesigners').setAttribute("data-count", "27");
            }
            if(q2 == 2){
                document.getElementById('numdesigners').setAttribute("data-count", "204");
            }
            if(q2 == 3){
                document.getElementById('numdesigners').setAttribute("data-count", "19");
            }
            if(q2 == 4){
                document.getElementById('numdesigners').setAttribute("data-count", "817");
            }
            if(q2 == 5){
                document.getElementById('numdesigners').setAttribute("data-count", "188");
            }
        }
        if(q1 == 2){
            if(q2 == 1){
                document.getElementById('numdesigners').setAttribute("data-count", "45");
            }
            if(q2 == 2){
                document.getElementById('numdesigners').setAttribute("data-count", "642");
            }
            if(q2 == 3){
                document.getElementById('numdesigners').setAttribute("data-count", "42");
            }
            if(q2 == 4){
                document.getElementById('numdesigners').setAttribute("data-count", "2388");
            }
            if(q2 == 5){
                document.getElementById('numdesigners').setAttribute("data-count", "530");
            }
        }
        if(q1 == 3){
            if(q2 == 1){
                document.getElementById('numdesigners').setAttribute("data-count", "7");
            }
            if(q2 == 2){
                document.getElementById('numdesigners').setAttribute("data-count", "96");
            }
            if(q2 == 3){
                document.getElementById('numdesigners').setAttribute("data-count", "3");
            }
            if(q2 == 4){
                document.getElementById('numdesigners').setAttribute("data-count", "475");
            }
            if(q2 == 5){
                document.getElementById('numdesigners').setAttribute("data-count", "108");
            } 
        }
        if(q1 == 4){
            if(q1 == 1){
                document.getElementById('numdesigners').setAttribute("data-count", "0");
            }
            if(q1 == 2){
                document.getElementById('numdesigners').setAttribute("data-count", "1");
            }
            if(q1 == 3){
                document.getElementById('numdesigners').setAttribute("data-count", "0");
            }
            if(q1 == 4){
                document.getElementById('numdesigners').setAttribute("data-count", "24");
            }
            if(q1 == 5){
                document.getElementById('numdesigners').setAttribute("data-count", "11");
            }
        }
    }
    if(document.getElementById('q3a3c').checked) {
        document.getElementById('q3a3').style.opacity = 1;
        document.getElementById('question3').style.opacity = 0;
        document.getElementById('question4').style.opacity = 1;
        document.getElementById('question4answers').style.zIndex = 3;
        document.getElementById('next3').style.display = "none";
        document.getElementById('next4').style.display = "block"; 
        q3 = 3;
        if(q1 == 1){
            if(q2 == 1){
                document.getElementById('numdesigners').setAttribute("data-count", "8");
            }
            if(q2 == 2){
                document.getElementById('numdesigners').setAttribute("data-count", "124");
            }
            if(q2 == 3){
                document.getElementById('numdesigners').setAttribute("data-count", "9");
            }
            if(q2 == 4){
                document.getElementById('numdesigners').setAttribute("data-count", "524");
            }
            if(q2 == 5){
                document.getElementById('numdesigners').setAttribute("data-count", "143");
            }
        }
        if(q1 == 2){
            if(q2 == 1){
                document.getElementById('numdesigners').setAttribute("data-count", "33");
            }
            if(q2 == 2){
                document.getElementById('numdesigners').setAttribute("data-count", "393");
            }
            if(q2 == 3){
                document.getElementById('numdesigners').setAttribute("data-count", "28");
            }
            if(q2 == 4){
                document.getElementById('numdesigners').setAttribute("data-count", "1686");
            }
            if(q2 == 5){
                document.getElementById('numdesigners').setAttribute("data-count", "443");
            }
        }
        if(q1 == 3){
            if(q2 == 1){
                document.getElementById('numdesigners').setAttribute("data-count", "3");
            }
            if(q2 == 2){
                document.getElementById('numdesigners').setAttribute("data-count", "97");
            }
            if(q2 == 3){
                document.getElementById('numdesigners').setAttribute("data-count", "4");
            }
            if(q2 == 4){
                document.getElementById('numdesigners').setAttribute("data-count", "456");
            }
            if(q2 == 5){
                document.getElementById('numdesigners').setAttribute("data-count", "151");
            } 
        }
        if(q1 == 4){
            if(q2 == 1){
                document.getElementById('numdesigners').setAttribute("data-count", "0");
            }
            if(q2 == 2){
                document.getElementById('numdesigners').setAttribute("data-count", "1");
            }
            if(q2 == 3){
                document.getElementById('numdesigners').setAttribute("data-count", "0");
            }
            if(q2 == 4){
                document.getElementById('numdesigners').setAttribute("data-count", "29");
            }
            if(q2 == 5){
                document.getElementById('numdesigners').setAttribute("data-count", "16");
            }
        }
    }
    if(document.getElementById('q3a4c').checked) {
        document.getElementById('q3a4').style.opacity = 1;
        document.getElementById('question3').style.opacity = 0;
        document.getElementById('question4').style.opacity = 1;
        document.getElementById('question4answers').style.zIndex = 3;
        document.getElementById('next3').style.display = "none";
        document.getElementById('next4').style.display = "block"; 
        q3 = 4;
        if(q1 == 1){
            if(q2 == 1){
                document.getElementById('numdesigners').setAttribute("data-count", "5");
            }
            if(q2 == 2){
                document.getElementById('numdesigners').setAttribute("data-count", "17");
            }
            if(q2 == 3){
                document.getElementById('numdesigners').setAttribute("data-count", "4");
            }
            if(q2 == 4){
                document.getElementById('numdesigners').setAttribute("data-count", "72");
            }
            if(q2 == 5){
                document.getElementById('numdesigners').setAttribute("data-count", "41");
            }
        }
        if(q1 == 2){
            if(q2 == 1){
                document.getElementById('numdesigners').setAttribute("data-count", "6");
            }
            if(q2 == 2){
                document.getElementById('numdesigners').setAttribute("data-count", "67");
            }
            if(q2 == 3){
                document.getElementById('numdesigners').setAttribute("data-count", "12");
            }
            if(q2 == 4){
                document.getElementById('numdesigners').setAttribute("data-count", "335");
            }
            if(q2 == 5){
                document.getElementById('numdesigners').setAttribute("data-count", "140");
            }
        }
        if(q1 == 3){
            if(q2 == 1){
                document.getElementById('numdesigners').setAttribute("data-count", "4");
            }
            if(q2 == 2){
                document.getElementById('numdesigners').setAttribute("data-count", "28");
            }
            if(q2 == 3){
                document.getElementById('numdesigners').setAttribute("data-count", "9");
            }
            if(q2 == 4){
                document.getElementById('numdesigners').setAttribute("data-count", "138");
            }
            if(q2 == 5){
                document.getElementById('numdesigners').setAttribute("data-count", "80");
            } 
        }
        if(q1 == 4){
            if(q2 == 1){
                document.getElementById('numdesigners').setAttribute("data-count", "0");


            }
            if(q2 == 2){
                document.getElementById('numdesigners').setAttribute("data-count", "3");
            }
            if(q2 == 3){
                document.getElementById('numdesigners').setAttribute("data-count", "1");
            }
            if(q2 == 4){
                document.getElementById('numdesigners').setAttribute("data-count", "14");

            }
            if(q2 == 5){
                document.getElementById('numdesigners').setAttribute("data-count", "13");
            }
        }
    }
}

function q4next(){
    if(document.getElementById('q4a1c').checked) {
        //        document.getElementById('q4a1').style.opacity = 1;
        document.getElementById('question4').style.opacity = 0;
        document.getElementById('question5').style.opacity = 1;
        document.getElementById('question5answers').style.zIndex = 4;
        document.getElementById('next4').style.display = "none";
        document.getElementById('next5').style.display = "block"; 

        document.getElementById('q1a1').setAttribute("class", "theworst");
        document.getElementById('q1a2').setAttribute("class", "theworst");
        document.getElementById('q1a3').setAttribute("class", "theworst");
        document.getElementById('q1a4').setAttribute("class", "theworst");
        document.getElementById('q2a1').setAttribute("class", "theworst");
        document.getElementById('q2a2').setAttribute("class", "theworst");
        document.getElementById('q2a3').setAttribute("class", "theworst");
        document.getElementById('q2a4').setAttribute("class", "theworst");
        document.getElementById('q2a5').setAttribute("class", "theworst");
        document.getElementById('q3a1').setAttribute("class", "theworst");
        document.getElementById('q3a2').setAttribute("class", "theworst");
        document.getElementById('q3a3').setAttribute("class", "theworst");
        document.getElementById('q3a4').setAttribute("class", "theworst");
        document.getElementById('q6a1').setAttribute("class", "theworst");
        document.getElementById('q6a2').setAttribute("class", "theworst");
        document.getElementById('q6a3').setAttribute("class", "theworst");
        document.getElementById('q6a4').setAttribute("class", "theworst");
        document.getElementById('q6a5').setAttribute("class", "theworst");
        document.getElementById('q6a6').setAttribute("class", "theworst");
        document.getElementById('q6a7').setAttribute("class", "theworst");
        document.getElementById('q6a8').setAttribute("class", "theworst");
        document.getElementById('q6a9').setAttribute("class", "theworst");
        document.getElementById('q6a10').setAttribute("class", "theworst");




        q4 = 1;
        if(q1 == 1){
            if (q2 == 1){
                if(q3 == 1){
                    document.getElementById('numdesigners').setAttribute("data-count", "1");
                }
                if(q3 == 2){
                    document.getElementById('numdesigners').setAttribute("data-count", "4");
                }
                if(q3 == 3){
                    document.getElementById('numdesigners').setAttribute("data-count", "2");
                }
                if(q3 == 4){
                    document.getElementById('numdesigners').setAttribute("data-count", "1");
                }
            }
            if (q2 == 2){
                if(q3 == 1){
                    document.getElementById('numdesigners').setAttribute("data-count", "18");
                }
                if(q3 == 2){
                    document.getElementById('numdesigners').setAttribute("data-count", "16");
                }
                if(q3 == 3){
                    document.getElementById('numdesigners').setAttribute("data-count", "9");
                }
                if(q3 == 4){
                    document.getElementById('numdesigners').setAttribute("data-count", "2");
                }
            }
            if (q2 == 3){
                if(q3 == 1){
                    document.getElementById('numdesigners').setAttribute("data-count", "19");
                }
                if(q3 == 2){
                    document.getElementById('numdesigners').setAttribute("data-count", "2");
                }
                if(q3 == 3){
                    document.getElementById('numdesigners').setAttribute("data-count", "1");
                }
                if(q3 == 4){
                    document.getElementById('numdesigners').setAttribute("data-count", "3");
                }
            }
            if (q2 == 4){
                if(q3 == 1){
                    document.getElementById('numdesigners').setAttribute("data-count", "70");
                }
                if(q3 == 2){
                    document.getElementById('numdesigners').setAttribute("data-count", "132");
                }
                if(q3 == 3){
                    document.getElementById('numdesigners').setAttribute("data-count", "52");
                }
                if(q3 == 4){
                    document.getElementById('numdesigners').setAttribute("data-count", "8");
                }
            }
            if (q2 == 5){
                if(q3 == 1){
                    document.getElementById('numdesigners').setAttribute("data-count", "15");
                }
                if(q3 == 2){
                    document.getElementById('numdesigners').setAttribute("data-count", "29");
                }
                if(q3 == 3){
                    document.getElementById('numdesigners').setAttribute("data-count", "18");
                }
                if(q3 == 4){
                    document.getElementById('numdesigners').setAttribute("data-count", "2");
                }
            }
        }

        if(q1 == 2){
            if (q2 == 1){
                if(q3 == 1){
                    document.getElementById('numdesigners').setAttribute("data-count", "1");
                }
                if(q3 == 2){
                    document.getElementById('numdesigners').setAttribute("data-count", "2");                }
                if(q3 == 3){
                    document.getElementById('numdesigners').setAttribute("data-count", "0");                }
                if(q3 == 4){
                    document.getElementById('numdesigners').setAttribute("data-count", "0");                }
            }
            if (q2 == 2){
                if(q3 == 1){
                    document.getElementById('numdesigners').setAttribute("data-count", "10");
                }
                if(q3 == 2){
                    document.getElementById('numdesigners').setAttribute("data-count", "20");
                }
                if(q3 == 3){
                    document.getElementById('numdesigners').setAttribute("data-count", "3");
                }
                if(q3 == 4){
                    document.getElementById('numdesigners').setAttribute("data-count", "2");
                }
            }
            if (q2 == 3){
                if(q3 == 1){
                    document.getElementById('numdesigners').setAttribute("data-count", "5");
                }
                if(q3 == 2){
                    document.getElementById('numdesigners').setAttribute("data-count", "4");
                }
                if(q3 == 3){
                    document.getElementById('numdesigners').setAttribute("data-count", "0");
                }
                if(q3 == 4){
                    document.getElementById('numdesigners').setAttribute("data-count", "1");
                }
            }
            if (q2 == 4){
                if(q3 == 1){
                    document.getElementById('numdesigners').setAttribute("data-count", "28");
                }
                if(q3 == 2){
                    document.getElementById('numdesigners').setAttribute("data-count", "38");
                }
                if(q3 == 3){
                    document.getElementById('numdesigners').setAttribute("data-count", "22");
                }
                if(q3 == 4){
                    document.getElementById('numdesigners').setAttribute("data-count", "3");
                }
            }
            if (q2 == 5){
                if(q3 == 1){
                    document.getElementById('numdesigners').setAttribute("data-count", "7");
                }
                if(q3 == 2){
                    document.getElementById('numdesigners').setAttribute("data-count", "18");
                }
                if(q3 == 3){
                    document.getElementById('numdesigners').setAttribute("data-count", "5");
                }
                if(q3 == 4){
                    document.getElementById('numdesigners').setAttribute("data-count", "2");
                }
            }
        }

        if(q1 == 3){
            if (q2 == 1){
                if(q3 == 1){
                    document.getElementById('numdesigners').setAttribute("data-count", "0");
                }
                if(q3 == 2){
                    document.getElementById('numdesigners').setAttribute("data-count", "0");
                }
                if(q3 == 3){
                    document.getElementById('numdesigners').setAttribute("data-count", "0");
                }
                if(q3 == 4){
                    document.getElementById('numdesigners').setAttribute("data-count", "0");
                }
            }
            if (q2 == 2){
                if(q3 == 1){
                    document.getElementById('numdesigners').setAttribute("data-count", "1");
                }
                if(q3 == 2){
                    document.getElementById('numdesigners').setAttribute("data-count", "1");
                }
                if(q3 == 3){
                    document.getElementById('numdesigners').setAttribute("data-count", "0");
                }
                if(q3 == 4){
                    document.getElementById('numdesigners').setAttribute("data-count", "0");
                }
            }
            if (q2 == 3){
                if(q3 == 1){
                    document.getElementById('numdesigners').setAttribute("data-count", "1");
                }
                if(q3 == 2){
                    document.getElementById('numdesigners').setAttribute("data-count", "0");
                }
                if(q3 == 3){
                    document.getElementById('numdesigners').setAttribute("data-count", "0");
                }
                if(q3 == 4){
                    document.getElementById('numdesigners').setAttribute("data-count", "0");
                }
            }
            if (q2 == 4){
                if(q3 == 1){
                    document.getElementById('numdesigners').setAttribute("data-count", "2");
                }
                if(q3 == 2){
                    document.getElementById('numdesigners').setAttribute("data-count", "3");
                }
                if(q3 == 3){
                    document.getElementById('numdesigners').setAttribute("data-count", "3");
                }
                if(q3 == 4){
                    document.getElementById('numdesigners').setAttribute("data-count", "0");
                }
            }
            if (q2 == 5){
                if(q3 == 1){
                    document.getElementById('numdesigners').setAttribute("data-count", "4");
                }
                if(q3 == 2){
                    document.getElementById('numdesigners').setAttribute("data-count", "1");
                }
                if(q3 == 3){
                    document.getElementById('numdesigners').setAttribute("data-count", "1");
                }
                if(q3 == 4){
                    document.getElementById('numdesigners').setAttribute("data-count", "0");
                }
            }
        }

        if(q1 == 4){
            if (q2 == 1){
                if(q3 == 1){
                    document.getElementById('numdesigners').setAttribute("data-count", "0");
                }
                if(q3 == 2){
                    document.getElementById('numdesigners').setAttribute("data-count", "0");
                }
                if(q3 == 3){
                    document.getElementById('numdesigners').setAttribute("data-count", "0");
                }
                if(q3 == 4){
                    document.getElementById('numdesigners').setAttribute("data-count", "0");
                }
            }
            if (q2 == 2){
                if(q3 == 1){
                    document.getElementById('numdesigners').setAttribute("data-count", "0");
                }
                if(q3 == 2){
                    document.getElementById('numdesigners').setAttribute("data-count", "0");
                }
                if(q3 == 3){
                    document.getElementById('numdesigners').setAttribute("data-count", "0");
                }
                if(q3 == 4){
                    document.getElementById('numdesigners').setAttribute("data-count", "0");
                }
            }
            if (q2 == 3){
                if(q3 == 1){
                    document.getElementById('numdesigners').setAttribute("data-count", "0");
                }
                if(q3 == 2){
                    document.getElementById('numdesigners').setAttribute("data-count", "0");
                }
                if(q3 == 3){
                    document.getElementById('numdesigners').setAttribute("data-count", "0");
                }
                if(q3 == 4){
                    document.getElementById('numdesigners').setAttribute("data-count", "0");
                }
            }
            if (q2 == 4){
                if(q3 == 1){
                    document.getElementById('numdesigners').setAttribute("data-count", "0");
                }
                if(q3 == 2){
                    document.getElementById('numdesigners').setAttribute("data-count", "0");
                }
                if(q3 == 3){
                    document.getElementById('numdesigners').setAttribute("data-count", "0");
                }
                if(q3 == 4){
                    document.getElementById('numdesigners').setAttribute("data-count", "0");
                }
            }
            if (q2 == 5){
                if(q3 == 1){
                    document.getElementById('numdesigners').setAttribute("data-count", "0");
                }
                if(q3 == 2){
                    document.getElementById('numdesigners').setAttribute("data-count", "0");
                }
                if(q3 == 3){
                    document.getElementById('numdesigners').setAttribute("data-count", "0");
                }
                if(q3 == 4){
                    document.getElementById('numdesigners').setAttribute("data-count", "0");
                }
            }
        }

    }
    if(document.getElementById('q4a2c').checked) {
        //        document.getElementById('q4a2').style.opacity = 1;
        document.getElementById('question4').style.opacity = 0;
        document.getElementById('question5').style.opacity = 1;
        document.getElementById('question5answers').style.zIndex = 4;
        document.getElementById('next4').style.display = "none";
        document.getElementById('next5').style.display = "block"; 



        document.getElementById('q1a1').setAttribute("class", "notgreat");
        document.getElementById('q1a2').setAttribute("class", "notgreat");
        document.getElementById('q1a3').setAttribute("class", "notgreat");
        document.getElementById('q1a4').setAttribute("class", "notgreat");
        document.getElementById('q2a1').setAttribute("class", "notgreat");
        document.getElementById('q2a2').setAttribute("class", "notgreat");
        document.getElementById('q2a3').setAttribute("class", "notgreat");
        document.getElementById('q2a4').setAttribute("class", "notgreat");
        document.getElementById('q2a5').setAttribute("class", "notgreat");
        document.getElementById('q2a2').setAttribute("class", "notgreat");
        document.getElementById('q3a1').setAttribute("class", "notgreat");
        document.getElementById('q3a2').setAttribute("class", "notgreat");
        document.getElementById('q3a3').setAttribute("class", "notgreat");
        document.getElementById('q3a4').setAttribute("class", "notgreat");
        //        document.getElementById('q4a1').setAttribute("class", "notgreat");
        //        document.getElementById('q4a2').setAttribute("class", "notgreat");
        //        document.getElementById('q4a3').setAttribute("class", "notgreat");
        //        document.getElementById('q4a4').setAttribute("class", "notgreat");


        //        document.getElementById('q5a1').setAttribute("class", "notgreat");
        //        document.getElementById('q5a2').setAttribute("class", "notgreat");
        //        document.getElementById('q5a3').setAttribute("class", "notgreat");
        //        document.getElementById('q5a4').setAttribute("class", "notgreat"); document.getElementById('q5a5').setAttribute("class","notgreat");
        document.getElementById('q6a1').setAttribute("class", "notgreat");
        document.getElementById('q6a2').setAttribute("class", "notgreat");
        document.getElementById('q6a3').setAttribute("class", "notgreat");
        document.getElementById('q6a4').setAttribute("class", "notgreat");
        document.getElementById('q6a5').setAttribute("class", "notgreat");
        document.getElementById('q6a6').setAttribute("class", "notgreat");
        document.getElementById('q6a7').setAttribute("class", "notgreat");
        document.getElementById('q6a8').setAttribute("class", "notgreat");
        document.getElementById('q6a9').setAttribute("class", "notgreat");
        document.getElementById('q6a10').setAttribute("class", "notgreat");




        q4 = 2;

        if(q1 == 1){
            if (q2 == 1){
                if(q3 == 1){
                    document.getElementById('numdesigners').setAttribute("data-count", "3");
                }
                if(q3 == 2){
                    document.getElementById('numdesigners').setAttribute("data-count", "19");
                }
                if(q3 == 3){
                    document.getElementById('numdesigners').setAttribute("data-count", "6");
                }
                if(q3 == 4){
                    document.getElementById('numdesigners').setAttribute("data-count", "2");
                }
            }
            if (q2 == 2){
                if(q3 == 1){
                    document.getElementById('numdesigners').setAttribute("data-count", "68");
                }
                if(q3 == 2){
                    document.getElementById('numdesigners').setAttribute("data-count", "171");
                }
                if(q3 == 3){
                    document.getElementById('numdesigners').setAttribute("data-count", "105");
                }
                if(q3 == 4){
                    document.getElementById('numdesigners').setAttribute("data-count", "13");
                }
            }
            if (q2 == 3){
                if(q3 == 1){
                    document.getElementById('numdesigners').setAttribute("data-count", "15");
                }
                if(q3 == 2){
                    document.getElementById('numdesigners').setAttribute("data-count", "16");
                }
                if(q3 == 3){
                    document.getElementById('numdesigners').setAttribute("data-count", "7");
                }
                if(q3 == 4){
                    document.getElementById('numdesigners').setAttribute("data-count", "1");
                }
            }
            if (q2 == 4){
                if(q3 == 1){
                    document.getElementById('numdesigners').setAttribute("data-count", "227");
                }
                if(q3 == 2){
                    document.getElementById('numdesigners').setAttribute("data-count", "613");
                }
                if(q3 == 3){
                    document.getElementById('numdesigners').setAttribute("data-count", "423");
                }
                if(q3 == 4){
                    document.getElementById('numdesigners').setAttribute("data-count", "50");
                }
            }
            if (q2 == 5){
                if(q3 == 1){
                    document.getElementById('numdesigners').setAttribute("data-count", "51");
                }
                if(q3 == 2){
                    document.getElementById('numdesigners').setAttribute("data-count", "139");
                }
                if(q3 == 3){
                    document.getElementById('numdesigners').setAttribute("data-count", "104");
                }
                if(q3 == 4){
                    document.getElementById('numdesigners').setAttribute("data-count", "33");
                }
            }
        }

        if(q1 == 2){
            if (q2 == 1){
                if(q3 == 1){
                    document.getElementById('numdesigners').setAttribute("data-count", "8");
                }
                if(q3 == 2){
                    document.getElementById('numdesigners').setAttribute("data-count", "13");
                }
                if(q3 == 3){
                    document.getElementById('numdesigners').setAttribute("data-count", "9");
                }
                if(q3 == 4){
                    document.getElementById('numdesigners').setAttribute("data-count", "1");
                }
            }
            if (q2 == 2){
                if(q3 == 1){
                    document.getElementById('numdesigners').setAttribute("data-count", "48");
                }
                if(q3 == 2){
                    document.getElementById('numdesigners').setAttribute("data-count", "194");
                }
                if(q3 == 3){
                    document.getElementById('numdesigners').setAttribute("data-count", "91");
                }
                if(q3 == 4){
                    document.getElementById('numdesigners').setAttribute("data-count", "9");
                }
            }
            if (q2 == 3){
                if(q3 == 1){
                    document.getElementById('numdesigners').setAttribute("data-count", "10");
                }
                if(q3 == 2){
                    document.getElementById('numdesigners').setAttribute("data-count", "11");
                }
                if(q3 == 3){
                    document.getElementById('numdesigners').setAttribute("data-count", "12");
                }
                if(q3 == 4){
                    document.getElementById('numdesigners').setAttribute("data-count", "2");
                }
            }
            if (q2 == 4){
                if(q3 == 1){
                    document.getElementById('numdesigners').setAttribute("data-count", "148");
                }
                if(q3 == 2){
                    document.getElementById('numdesigners').setAttribute("data-count", "634");
                }
                if(q3 == 3){
                    document.getElementById('numdesigners').setAttribute("data-count", "379");
                }
                if(q3 == 4){
                    document.getElementById('numdesigners').setAttribute("data-count", "44");
                }
            }
            if (q2 == 5){
                if(q3 == 1){
                    document.getElementById('numdesigners').setAttribute("data-count", "45");
                }
                if(q3 == 2){
                    document.getElementById('numdesigners').setAttribute("data-count", "123");
                }
                if(q3 == 3){
                    document.getElementById('numdesigners').setAttribute("data-count", "93");
                }
                if(q3 == 4){
                    document.getElementById('numdesigners').setAttribute("data-count", "21");
                }
            }
        }

        if(q1 == 3){
            if (q2 == 1){
                if(q3 == 1){
                    document.getElementById('numdesigners').setAttribute("data-count", "0");
                }
                if(q3 == 2){
                    document.getElementById('numdesigners').setAttribute("data-count", "1");
                }
                if(q3 == 3){
                    document.getElementById('numdesigners').setAttribute("data-count", "0");
                }
                if(q3 == 4){
                    document.getElementById('numdesigners').setAttribute("data-count", "0");
                }
            }
            if (q2 == 2){
                if(q3 == 1){
                    document.getElementById('numdesigners').setAttribute("data-count", "2");
                }
                if(q3 == 2){
                    document.getElementById('numdesigners').setAttribute("data-count", "5");
                }
                if(q3 == 3){
                    document.getElementById('numdesigners').setAttribute("data-count", "3");
                }
                if(q3 == 4){
                    document.getElementById('numdesigners').setAttribute("data-count", "0");
                }
            }
            if (q2 == 3){
                if(q3 == 1){
                    document.getElementById('numdesigners').setAttribute("data-count", "0");
                }
                if(q3 == 2){
                    document.getElementById('numdesigners').setAttribute("data-count", "0");
                }
                if(q3 == 3){
                    document.getElementById('numdesigners').setAttribute("data-count", "0");
                }
                if(q3 == 4){
                    document.getElementById('numdesigners').setAttribute("data-count", "0");
                }
            }
            if (q2 == 4){
                if(q3 == 1){
                    document.getElementById('numdesigners').setAttribute("data-count", "15");
                }
                if(q3 == 2){
                    document.getElementById('numdesigners').setAttribute("data-count", "13");
                }
                if(q3 == 3){
                    document.getElementById('numdesigners').setAttribute("data-count", "7");
                }
                if(q3 == 4){
                    document.getElementById('numdesigners').setAttribute("data-count", "3");
                }
            }
            if (q2 == 5){
                if(q3 == 1){
                    document.getElementById('numdesigners').setAttribute("data-count", "3");
                }
                if(q3 == 2){
                    document.getElementById('numdesigners').setAttribute("data-count", "2");
                }
                if(q3 == 3){
                    document.getElementById('numdesigners').setAttribute("data-count", "1");
                }
                if(q3 == 4){
                    document.getElementById('numdesigners').setAttribute("data-count", "0");
                }
            }
        }

        if(q1 == 4){
            if (q2 == 1){
                if(q3 == 1){
                    document.getElementById('numdesigners').setAttribute("data-count", "0");
                }
                if(q3 == 2){
                    document.getElementById('numdesigners').setAttribute("data-count", "0");
                }
                if(q3 == 3){ document.getElementById('numdesigners').setAttribute("data-count", "0");

                           }
                if(q3 == 4){ document.getElementById('numdesigners').setAttribute("data-count", "0");

                           }
            }
            if (q2 == 2){
                if(q3 == 1){
                    document.getElementById('numdesigners').setAttribute("data-count", "0");
                }
                if(q3 == 2){
                    document.getElementById('numdesigners').setAttribute("data-count", "0");
                }
                if(q3 == 3){
                    document.getElementById('numdesigners').setAttribute("data-count", "0");
                }
                if(q3 == 4){
                    document.getElementById('numdesigners').setAttribute("data-count", "0");
                }
            }
            if (q2 == 3){
                if(q3 == 1){
                    document.getElementById('numdesigners').setAttribute("data-count", "0");
                }
                if(q3 == 2){
                    document.getElementById('numdesigners').setAttribute("data-count", "0");
                }
                if(q3 == 3){
                    document.getElementById('numdesigners').setAttribute("data-count", "0");
                }
                if(q3 == 4){
                    document.getElementById('numdesigners').setAttribute("data-count", "0");
                }
            }
            if (q2 == 4){
                if(q3 == 1){
                    document.getElementById('numdesigners').setAttribute("data-count", "0");
                }
                if(q3 == 2){
                    document.getElementById('numdesigners').setAttribute("data-count", "0");
                }
                if(q3 == 3){
                    document.getElementById('numdesigners').setAttribute("data-count", "0");
                }
                if(q3 == 4){
                    document.getElementById('numdesigners').setAttribute("data-count", "0");
                }
            }
            if (q2 == 5){
                if(q3 == 1){
                    document.getElementById('numdesigners').setAttribute("data-count", "0");
                }
                if(q3 == 2){
                    document.getElementById('numdesigners').setAttribute("data-count", "0");
                }
                if(q3 == 3){
                    document.getElementById('numdesigners').setAttribute("data-count", "0");
                }
                if(q3 == 4){
                    document.getElementById('numdesigners').setAttribute("data-count", "0");
                }
            }
        }
    }
    if(document.getElementById('q4a3c').checked) {
        //        document.getElementById('q4a3').style.opacity = 1;
        document.getElementById('question4').style.opacity = 0;
        document.getElementById('question5').style.opacity = 1;
        document.getElementById('question5answers').style.zIndex = 4;
        document.getElementById('next4').style.display = "none";
        document.getElementById('next5').style.display = "block"; 



        document.getElementById('q1a1').setAttribute("class", "notsure");
        document.getElementById('q1a2').setAttribute("class", "notsure");
        document.getElementById('q1a3').setAttribute("class", "notsure");
        document.getElementById('q1a4').setAttribute("class", "notsure");
        document.getElementById('q2a1').setAttribute("class", "notsure");
        document.getElementById('q2a2').setAttribute("class", "notsure");
        document.getElementById('q2a3').setAttribute("class", "notsure");
        document.getElementById('q2a4').setAttribute("class", "notsure");
        document.getElementById('q2a5').setAttribute("class", "notsure");
        document.getElementById('q3a1').setAttribute("class", "notsure");
        document.getElementById('q3a2').setAttribute("class", "notsure");
        document.getElementById('q3a3').setAttribute("class", "notsure");
        document.getElementById('q3a4').setAttribute("class", "notsure");
        //        document.getElementById('q4a1').setAttribute("class", "notsure");
        //        document.getElementById('q4a2').setAttribute("class", "notsure");
        //        document.getElementById('q4a3').setAttribute("class", "notsure");
        //        document.getElementById('q4a4').setAttribute("class", "notsure");

        //        
        //        document.getElementById('q5a1').setAttribute("class", "notsure");
        //        document.getElementById('q5a2').setAttribute("class", "notsure");
        //        document.getElementById('q5a3').setAttribute("class", "notsure");
        //        document.getElementById('q5a4').setAttribute("class", "notsure");
        //        document.getElementById('q5a5').setAttribute("class", "notsure");

        document.getElementById('q6a1').setAttribute("class", "notsure");
        document.getElementById('q6a2').setAttribute("class", "notsure");
        document.getElementById('q6a3').setAttribute("class", "notsure");
        document.getElementById('q6a4').setAttribute("class", "notsure");
        document.getElementById('q6a5').setAttribute("class", "notsure");
        document.getElementById('q6a6').setAttribute("class", "notsure");
        document.getElementById('q6a7').setAttribute("class", "notsure");
        document.getElementById('q6a8').setAttribute("class", "notsure");
        document.getElementById('q6a9').setAttribute("class", "notsure");
        document.getElementById('q6a10').setAttribute("class", "notsure");


        q4 = 3;
        if(q1 == 1){
            if (q2 == 1){
                if(q3 == 1){
                    document.getElementById('numdesigners').setAttribute("data-count", "1");

                }
                if(q3 == 2){
                    document.getElementById('numdesigners').setAttribute("data-count", "4");

                }
                if(q3 == 3){
                    document.getElementById('numdesigners').setAttribute("data-count", "0");

                }
                if(q3 == 4){
                    document.getElementById('numdesigners').setAttribute("data-count", "2");

                }
            }
            if (q2 == 2){
                if(q3 == 1){
                    document.getElementById('numdesigners').setAttribute("data-count", "5");

                }
                if(q3 == 2){
                    document.getElementById('numdesigners').setAttribute("data-count", "16");

                }
                if(q3 == 3){
                    document.getElementById('numdesigners').setAttribute("data-count", "9");

                }
                if(q3 == 4){
                    document.getElementById('numdesigners').setAttribute("data-count", "2");

                }
            }
            if (q2 == 3){
                if(q3 == 1){
                    document.getElementById('numdesigners').setAttribute("data-count", "2");

                }
                if(q3 == 2){
                    document.getElementById('numdesigners').setAttribute("data-count", "1");

                }
                if(q3 == 3){
                    document.getElementById('numdesigners').setAttribute("data-count", "1");

                }
                if(q3 == 4){
                    document.getElementById('numdesigners').setAttribute("data-count", "0");

                }
            }
            if (q2 == 4){
                if(q3 == 1){
                    document.getElementById('numdesigners').setAttribute("data-count", "32");

                }
                if(q3 == 2){
                    document.getElementById('numdesigners').setAttribute("data-count", "69");

                }
                if(q3 == 3){
                    document.getElementById('numdesigners').setAttribute("data-count", "46");

                }
                if(q3 == 4){
                    document.getElementById('numdesigners').setAttribute("data-count", "11");

                }
            }
            if (q2 == 5){
                if(q3 == 1){

                    document.getElementById('numdesigners').setAttribute("data-count", "9");
                }
                if(q3 == 2){

                    document.getElementById('numdesigners').setAttribute("data-count", "20");
                }
                if(q3 == 3){

                    document.getElementById('numdesigners').setAttribute("data-count", "21");
                }
                if(q3 == 4){
                    document.getElementById('numdesigners').setAttribute("data-count", "6");

                }
            }
        }
        if(q1 == 2){
            if (q2 == 1){
                if(q3 == 1){
                    document.getElementById('numdesigners').setAttribute("data-count", "5");

                }
                if(q3 == 2){
                    document.getElementById('numdesigners').setAttribute("data-count", "19");

                }
                if(q3 == 3){
                    document.getElementById('numdesigners').setAttribute("data-count", "19");

                }
                if(q3 == 4){
                    document.getElementById('numdesigners').setAttribute("data-count", "5");

                }
            }
            if (q2 == 2){
                if(q3 == 1){
                    document.getElementById('numdesigners').setAttribute("data-count", "54");

                }
                if(q3 == 2){
                    document.getElementById('numdesigners').setAttribute("data-count", "279");

                }
                if(q3 == 3){
                    document.getElementById('numdesigners').setAttribute("data-count", "188");

                }
                if(q3 == 4){
                    document.getElementById('numdesigners').setAttribute("data-count", "31");

                }
            }
            if (q2 == 3){
                if(q3 == 1){
                    document.getElementById('numdesigners').setAttribute("data-count", "9");

                }
                if(q3 == 2){
                    document.getElementById('numdesigners').setAttribute("data-count", "19");

                }
                if(q3 == 3){
                    document.getElementById('numdesigners').setAttribute("data-count", "7");

                }
                if(q3 == 4){
                    document.getElementById('numdesigners').setAttribute("data-count", "2");

                }
            }
            if (q2 == 4){
                if(q3 == 1){
                    document.getElementById('numdesigners').setAttribute("data-count", "250");

                }
                if(q3 == 2){
                    document.getElementById('numdesigners').setAttribute("data-count", "1036");

                }
                if(q3 == 3){
                    document.getElementById('numdesigners').setAttribute("data-count", "703");

                }
                if(q3 == 4){
                    document.getElementById('numdesigners').setAttribute("data-count", "130");

                }
            }
            if (q2 == 5){
                if(q3 == 1){
                    document.getElementById('numdesigners').setAttribute("data-count", "74");

                }
                if(q3 == 2){
                    document.getElementById('numdesigners').setAttribute("data-count", "219");

                }
                if(q3 == 3){
                    document.getElementById('numdesigners').setAttribute("data-count", "190");

                }
                if(q3 == 4){
                    document.getElementById('numdesigners').setAttribute("data-count", "52");

                }
            }
        }
        if(q1 == 3){
            if (q2 == 1){
                if(q3 == 1){
                    document.getElementById('numdesigners').setAttribute("data-count", "1");

                }
                if(q3 == 2){
                    document.getElementById('numdesigners').setAttribute("data-count", "0");

                }
                if(q3 == 3){
                    document.getElementById('numdesigners').setAttribute("data-count", "0");

                }
                if(q3 == 4){
                    document.getElementById('numdesigners').setAttribute("data-count", "0");

                }
            }
            if (q2 == 2){
                if(q3 == 1){
                    document.getElementById('numdesigners').setAttribute("data-count", "6");

                }
                if(q3 == 2){
                    document.getElementById('numdesigners').setAttribute("data-count", "6");

                }
                if(q3 == 3){
                    document.getElementById('numdesigners').setAttribute("data-count", "8");

                }
                if(q3 == 4){
                    document.getElementById('numdesigners').setAttribute("data-count", "2");

                }
            }
            if (q2 == 3){
                if(q3 == 1){
                    document.getElementById('numdesigners').setAttribute("data-count", "2");

                }
                if(q3 == 2){
                    document.getElementById('numdesigners').setAttribute("data-count", "0");

                }
                if(q3 == 3){
                    document.getElementById('numdesigners').setAttribute("data-count", "0");

                }
                if(q3 == 4){
                    document.getElementById('numdesigners').setAttribute("data-count", "2");

                }
            }
            if (q2 == 4){
                if(q3 == 1){
                    document.getElementById('numdesigners').setAttribute("data-count", "6");

                }
                if(q3 == 2){
                    document.getElementById('numdesigners').setAttribute("data-count", "22");

                }
                if(q3 == 3){
                    document.getElementById('numdesigners').setAttribute("data-count", "15");

                }
                if(q3 == 4){
                    document.getElementById('numdesigners').setAttribute("data-count", "3");

                }
            }
            if (q2 == 5){
                if(q3 == 1){
                    document.getElementById('numdesigners').setAttribute("data-count", "2");

                }
                if(q3 == 2){
                    document.getElementById('numdesigners').setAttribute("data-count", "4");

                }
                if(q3 == 3){
                    document.getElementById('numdesigners').setAttribute("data-count", "2");

                }
                if(q3 == 4){
                    document.getElementById('numdesigners').setAttribute("data-count", "1");

                }
            }
        }
        if(q1 == 4){
            if (q2 == 1){
                if(q3 == 1){
                    document.getElementById('numdesigners').setAttribute("data-count", "0");

                }
                if(q3 == 2){
                    document.getElementById('numdesigners').setAttribute("data-count", "0");

                }
                if(q3 == 3){
                    document.getElementById('numdesigners').setAttribute("data-count", "0");

                }
                if(q3 == 4){
                    document.getElementById('numdesigners').setAttribute("data-count", "0");

                }
            }
            if (q2 == 2){
                if(q3 == 1){
                    document.getElementById('numdesigners').setAttribute("data-count", "0");

                }
                if(q3 == 2){
                    document.getElementById('numdesigners').setAttribute("data-count", "0");

                }
                if(q3 == 3){
                    document.getElementById('numdesigners').setAttribute("data-count", "0");

                }
                if(q3 == 4){
                    document.getElementById('numdesigners').setAttribute("data-count", "0");

                }
            }
            if (q2 == 3){
                if(q3 == 1){
                    document.getElementById('numdesigners').setAttribute("data-count", "0");

                }
                if(q3 == 2){
                    document.getElementById('numdesigners').setAttribute("data-count", "0");

                }
                if(q3 == 3){
                    document.getElementById('numdesigners').setAttribute("data-count", "0");

                }
                if(q3 == 4){
                    document.getElementById('numdesigners').setAttribute("data-count", "0");

                }
            }
            if (q2 == 4){
                if(q3 == 1){
                    document.getElementById('numdesigners').setAttribute("data-count", "0");

                }
                if(q3 == 2){
                    document.getElementById('numdesigners').setAttribute("data-count", "0");

                }
                if(q3 == 3){
                    document.getElementById('numdesigners').setAttribute("data-count", "0");

                }
                if(q3 == 4){
                    document.getElementById('numdesigners').setAttribute("data-count", "0");

                }
            }
            if (q2 == 5){
                if(q3 == 1){
                    document.getElementById('numdesigners').setAttribute("data-count", "0");

                }
                if(q3 == 2){
                    document.getElementById('numdesigners').setAttribute("data-count", "0");

                }
                if(q3 == 3){
                    document.getElementById('numdesigners').setAttribute("data-count", "0");

                }
                if(q3 == 4){
                    document.getElementById('numdesigners').setAttribute("data-count", "1");

                }
            }
        }
    }
    if(document.getElementById('q4a4c').checked) {
        //        document.getElementById('q4a4').style.opacity = 1;
        document.getElementById('question4').style.opacity = 0;
        document.getElementById('question5').style.opacity = 1;
        document.getElementById('question5answers').style.zIndex = 4;
        document.getElementById('next4').style.display = "none";
        document.getElementById('next5').style.display = "block";


        document.getElementById('q1a1').setAttribute("class", "prettygood");
        document.getElementById('q1a2').setAttribute("class", "prettygood");
        document.getElementById('q1a3').setAttribute("class", "prettygood");
        document.getElementById('q1a4').setAttribute("class", "prettygood");
        document.getElementById('q2a1').setAttribute("class", "prettygood");
        document.getElementById('q2a2').setAttribute("class", "prettygood");
        document.getElementById('q2a3').setAttribute("class", "prettygood");
        document.getElementById('q2a4').setAttribute("class", "prettygood");
        document.getElementById('q2a5').setAttribute("class", "prettygood");
        document.getElementById('q3a1').setAttribute("class", "prettygood");
        document.getElementById('q3a2').setAttribute("class", "prettygood");
        document.getElementById('q3a3').setAttribute("class", "prettygood");
        document.getElementById('q3a4').setAttribute("class", "prettygood");
        //        document.getElementById('q4a1').setAttribute("class", "prettygood");
        //        document.getElementById('q4a2').setAttribute("class", "prettygood");
        //        document.getElementById('q4a3').setAttribute("class", "prettygood");
        //        document.getElementById('q4a4').setAttribute("class", "prettygood");



        //        document.getElementById('q5a1').setAttribute("class", "prettygood");
        //        document.getElementById('q5a2').setAttribute("class", "prettygood");
        //        document.getElementById('q5a3').setAttribute("class", "prettygood");
        //        document.getElementById('q5a4').setAttribute("class", "prettygood");
        //        document.getElementById('q5a5').setAttribute("class", "prettygood");


        document.getElementById('q6a1').setAttribute("class", "prettygood");
        document.getElementById('q6a2').setAttribute("class", "prettygood");
        document.getElementById('q6a3').setAttribute("class", "prettygood");
        document.getElementById('q6a4').setAttribute("class", "prettygood");
        document.getElementById('q6a5').setAttribute("class", "prettygood");
        document.getElementById('q6a6').setAttribute("class", "prettygood");
        document.getElementById('q6a7').setAttribute("class", "prettygood");
        document.getElementById('q6a8').setAttribute("class", "prettygood");
        document.getElementById('q6a9').setAttribute("class", "prettygood");
        document.getElementById('q6a10').setAttribute("class", "prettygood");


        q4 = 4;

        if(q1 == 1){
            if (q2 == 1){
                if(q3 == 1){
                    document.getElementById('numdesigners').setAttribute("data-count", "0");

                }
                if(q3 == 2){
                    document.getElementById('numdesigners').setAttribute("data-count", "0");

                }
                if(q3 == 3){
                    document.getElementById('numdesigners').setAttribute("data-count", "0");

                }
                if(q3 == 4){
                    document.getElementById('numdesigners').setAttribute("data-count", "0");

                }
            }
            if (q2 == 2){
                if(q3 == 1){
                    document.getElementById('numdesigners').setAttribute("data-count", "0");

                }
                if(q3 == 2){
                    document.getElementById('numdesigners').setAttribute("data-count", "1");

                }
                if(q3 == 3){
                    document.getElementById('numdesigners').setAttribute("data-count", "1");

                }
                if(q3 == 4){
                    document.getElementById('numdesigners').setAttribute("data-count", "0");

                }
            }
            if (q2 == 3){
                if(q3 == 1){
                    document.getElementById('numdesigners').setAttribute("data-count", "0");

                }
                if(q3 == 2){
                    document.getElementById('numdesigners').setAttribute("data-count", "0");

                }
                if(q3 == 3){
                    document.getElementById('numdesigners').setAttribute("data-count", "0");

                }
                if(q3 == 4){
                    document.getElementById('numdesigners').setAttribute("data-count", "0");

                }
            }
            if (q2 == 4){
                if(q3 == 1){
                    document.getElementById('numdesigners').setAttribute("data-count", "0");

                }
                if(q3 == 2){
                    document.getElementById('numdesigners').setAttribute("data-count", "3");

                }
                if(q3 == 3){
                    document.getElementById('numdesigners').setAttribute("data-count", "3");

                }
                if(q3 == 4){
                    document.getElementById('numdesigners').setAttribute("data-count", "3");

                }
            }
            if (q2 == 5){
                if(q3 == 1){

                    document.getElementById('numdesigners').setAttribute("data-count", "1");
                }
                if(q3 == 2){

                    document.getElementById('numdesigners').setAttribute("data-count", "0");
                }
                if(q3 == 3){

                    document.getElementById('numdesigners').setAttribute("data-count", "0");
                }
                if(q3 == 4){
                    document.getElementById('numdesigners').setAttribute("data-count", "0");

                }
            }
        }
        if(q1 == 2){
            if (q2 == 1){
                if(q3 == 1){
                    document.getElementById('numdesigners').setAttribute("data-count", "2");

                }
                if(q3 == 2){
                    document.getElementById('numdesigners').setAttribute("data-count", "11");

                }
                if(q3 == 3){
                    document.getElementById('numdesigners').setAttribute("data-count", "5");

                }
                if(q3 == 4){
                    document.getElementById('numdesigners').setAttribute("data-count", "0");

                }
            }
            if (q2 == 2){
                if(q3 == 1){
                    document.getElementById('numdesigners').setAttribute("data-count", "37");

                }
                if(q3 == 2){
                    document.getElementById('numdesigners').setAttribute("data-count", "149");

                }
                if(q3 == 3){
                    document.getElementById('numdesigners').setAttribute("data-count", "111");

                }
                if(q3 == 4){
                    document.getElementById('numdesigners').setAttribute("data-count", "25");

                }
            }
            if (q2 == 3){
                if(q3 == 1){
                    document.getElementById('numdesigners').setAttribute("data-count", "6");

                }
                if(q3 == 2){
                    document.getElementById('numdesigners').setAttribute("data-count", "8");

                }
                if(q3 == 3){
                    document.getElementById('numdesigners').setAttribute("data-count", "9");

                }
                if(q3 == 4){
                    document.getElementById('numdesigners').setAttribute("data-count", "7");

                }
            }
            if (q2 == 4){
                if(q3 == 1){
                    document.getElementById('numdesigners').setAttribute("data-count", "205");

                }
                if(q3 == 2){
                    document.getElementById('numdesigners').setAttribute("data-count", "680");

                }
                if(q3 == 3){
                    document.getElementById('numdesigners').setAttribute("data-count", "582");

                }
                if(q3 == 4){
                    document.getElementById('numdesigners').setAttribute("data-count", "158");

                }
            }
            if (q2 == 5){
                if(q3 == 1){
                    document.getElementById('numdesigners').setAttribute("data-count", "82");

                }
                if(q3 == 2){
                    document.getElementById('numdesigners').setAttribute("data-count", "170");

                }
                if(q3 == 3){
                    document.getElementById('numdesigners').setAttribute("data-count", "155");

                }
                if(q3 == 4){
                    document.getElementById('numdesigners').setAttribute("data-count", "65");

                }
            }
        }
        if(q1 == 3){
            if (q2 == 1){
                if(q3 == 1){
                    document.getElementById('numdesigners').setAttribute("data-count", "2");

                }
                if(q3 == 2){
                    document.getElementById('numdesigners').setAttribute("data-count", "6");

                }
                if(q3 == 3){
                    document.getElementById('numdesigners').setAttribute("data-count", "3");

                }
                if(q3 == 4){
                    document.getElementById('numdesigners').setAttribute("data-count", "4");

                }
            }
            if (q2 == 2){
                if(q3 == 1){
                    document.getElementById('numdesigners').setAttribute("data-count", "44");

                }
                if(q3 == 2){
                    document.getElementById('numdesigners').setAttribute("data-count", "84");

                }
                if(q3 == 3){
                    document.getElementById('numdesigners').setAttribute("data-count", "86");

                }
                if(q3 == 4){
                    document.getElementById('numdesigners').setAttribute("data-count", "26");

                }
            }
            if (q2 == 3){
                if(q3 == 1){
                    document.getElementById('numdesigners').setAttribute("data-count", "10");

                }
                if(q3 == 2){
                    document.getElementById('numdesigners').setAttribute("data-count", "3");

                }
                if(q3 == 3){
                    document.getElementById('numdesigners').setAttribute("data-count", "4");

                }
                if(q3 == 4){
                    document.getElementById('numdesigners').setAttribute("data-count", "7");

                }
            }
            if (q2 == 4){
                if(q3 == 1){
                    document.getElementById('numdesigners').setAttribute("data-count", "200");

                }
                if(q3 == 2){
                    document.getElementById('numdesigners').setAttribute("data-count", "437");

                }
                if(q3 == 3){
                    document.getElementById('numdesigners').setAttribute("data-count", "431");

                }
                if(q3 == 4){
                    document.getElementById('numdesigners').setAttribute("data-count", "132");

                }
            }
            if (q2 == 5){
                if(q3 == 1){
                    document.getElementById('numdesigners').setAttribute("data-count", "71");

                }
                if(q3 == 2){
                    document.getElementById('numdesigners').setAttribute("data-count", "101");

                }
                if(q3 == 3){
                    document.getElementById('numdesigners').setAttribute("data-count", "147");

                }
                if(q3 == 4){
                    document.getElementById('numdesigners').setAttribute("data-count", "79");

                }
            }
        }
        if(q1 == 4){
            if (q2 == 1){
                if(q3 == 1){
                    document.getElementById('numdesigners').setAttribute("data-count", "0");

                }
                if(q3 == 2){
                    document.getElementById('numdesigners').setAttribute("data-count", "0");

                }
                if(q3 == 3){
                    document.getElementById('numdesigners').setAttribute("data-count", "0");

                }
                if(q3 == 4){
                    document.getElementById('numdesigners').setAttribute("data-count", "0");

                }
            }
            if (q2 == 2){
                if(q3 == 1){
                    document.getElementById('numdesigners').setAttribute("data-count", "2");

                }
                if(q3 == 2){
                    document.getElementById('numdesigners').setAttribute("data-count", "1");

                }
                if(q3 == 3){
                    document.getElementById('numdesigners').setAttribute("data-count", "3");

                }
                if(q3 == 4){
                    document.getElementById('numdesigners').setAttribute("data-count", "4");

                }
            }
            if (q2 == 3){
                if(q3 == 1){
                    document.getElementById('numdesigners').setAttribute("data-count", "1");

                }
                if(q3 == 2){
                    document.getElementById('numdesigners').setAttribute("data-count", "0");

                }
                if(q3 == 3){
                    document.getElementById('numdesigners').setAttribute("data-count", "0");

                }
                if(q3 == 4){
                    document.getElementById('numdesigners').setAttribute("data-count", "1");

                }
            }
            if (q2 == 4){
                if(q3 == 1){
                    document.getElementById('numdesigners').setAttribute("data-count", "34");

                }
                if(q3 == 2){
                    document.getElementById('numdesigners').setAttribute("data-count", "24");

                }
                if(q3 == 3){
                    document.getElementById('numdesigners').setAttribute("data-count", "29");

                }
                if(q3 == 4){
                    document.getElementById('numdesigners').setAttribute("data-count", "14");

                }
            }
            if (q2 == 5){
                if(q3 == 1){
                    document.getElementById('numdesigners').setAttribute("data-count", "13");

                }
                if(q3 == 2){
                    document.getElementById('numdesigners').setAttribute("data-count", "16");

                }
                if(q3 == 3){
                    document.getElementById('numdesigners').setAttribute("data-count", "10");

                }
                if(q3 == 4){
                    document.getElementById('numdesigners').setAttribute("data-count", "10");

                }
            }
        }
    }
}

function q5next(){
    if(document.getElementById('q5a1c').checked) {
        document.getElementById('q5a1').style.opacity = 1;
        document.getElementById('question5').style.opacity = 0;
        document.getElementById('question6').style.opacity = 1;
        document.getElementById('question6answers').style.zIndex = 6;
        document.getElementById('next5').style.display = "none";
        document.getElementById('next6').style.display = "block"; 
        q5 = 1;
        if(q1 == 1){
            if (q2 == 1){
                if(q3 == 1){
                    if(q4 == 1){
                        document.getElementById('numdesigners').setAttribute("data-count", "0");
                    }
                    if(q4 == 2){
                        document.getElementById('numdesigners').setAttribute("data-count", "1");
                    }
                    if(q4 == 3){
                        document.getElementById('numdesigners').setAttribute("data-count", "0");
                    }
                    if(q4 == 4){
                        document.getElementById('numdesigners').setAttribute("data-count", "0");
                    }
                }
                if(q3 == 2){
                    if(q4 == 1){
                        document.getElementById('numdesigners').setAttribute("data-count", "2");
                    }
                    if(q4 == 2){
                        document.getElementById('numdesigners').setAttribute("data-count", "11");
                    }
                    if(q4 == 3){
                        document.getElementById('numdesigners').setAttribute("data-count", "0");
                    }
                    if(q4 == 4){
                        document.getElementById('numdesigners').setAttribute("data-count", "0");
                    }
                }
                if(q3 == 3){
                    if(q4 == 1){
                        document.getElementById('numdesigners').setAttribute("data-count", "1");
                    }
                    if(q4 == 2){
                        document.getElementById('numdesigners').setAttribute("data-count", "5");
                    }
                    if(q4 == 3){
                        document.getElementById('numdesigners').setAttribute("data-count", "0");
                    }
                    if(q4 == 4){
                        document.getElementById('numdesigners').setAttribute("data-count", "0");
                    }
                }
                if(q3 == 4){
                    if(q4 == 1){
                        document.getElementById('numdesigners').setAttribute("data-count", "0");
                    }
                    if(q4 == 2){
                        document.getElementById('numdesigners').setAttribute("data-count", "1");
                    }
                    if(q4 == 3){
                        document.getElementById('numdesigners').setAttribute("data-count", "0");
                    }
                    if(q4 == 4){
                        document.getElementById('numdesigners').setAttribute("data-count", "0");
                    }
                }
            }
            if (q2 == 2){
                if(q3 == 1){
                    if(q4 == 1){
                        document.getElementById('numdesigners').setAttribute("data-count", "6");
                    }
                    if(q4 == 2){
                        document.getElementById('numdesigners').setAttribute("data-count", "30");
                    }
                    if(q4 == 3){
                        document.getElementById('numdesigners').setAttribute("data-count", "1");
                    }
                    if(q4 == 4){
                        document.getElementById('numdesigners').setAttribute("data-count", "0");
                    }
                }
                if(q3 == 2){
                    if(q4 == 1){
                        document.getElementById('numdesigners').setAttribute("data-count", "9");
                    }
                    if(q4 == 2){
                        document.getElementById('numdesigners').setAttribute("data-count", "79");
                    }
                    if(q4 == 3){
                        document.getElementById('numdesigners').setAttribute("data-count", "8");
                    }
                    if(q4 == 4){
                        document.getElementById('numdesigners').setAttribute("data-count", "1");
                    }
                }
                if(q3 == 3){
                    if(q4 == 1){
                        document.getElementById('numdesigners').setAttribute("data-count", "3");
                    }
                    if(q4 == 2){
                        document.getElementById('numdesigners').setAttribute("data-count", "49");
                    }
                    if(q4 == 3){
                        document.getElementById('numdesigners').setAttribute("data-count", "4");
                    }
                    if(q4 == 4){
                        document.getElementById('numdesigners').setAttribute("data-count", "0");
                    }
                }
                if(q3 == 4){
                    if(q4 == 1){
                        document.getElementById('numdesigners').setAttribute("data-count", "0");
                    }
                    if(q4 == 2){
                        document.getElementById('numdesigners').setAttribute("data-count", "6");
                    }
                    if(q4 == 3){
                        document.getElementById('numdesigners').setAttribute("data-count", "0");
                    }
                    if(q4 == 4){
                        document.getElementById('numdesigners').setAttribute("data-count", "0");
                    }
                }
            }
            if (q2 == 3){
                if(q3 == 1){
                    if(q4 == 1){
                        document.getElementById('numdesigners').setAttribute("data-count", "8");
                    }
                    if(q4 == 2){
                        document.getElementById('numdesigners').setAttribute("data-count", "4");
                    }
                    if(q4 == 3){
                        document.getElementById('numdesigners').setAttribute("data-count", "0");
                    }
                    if(q4 == 4){
                        document.getElementById('numdesigners').setAttribute("data-count", "0");
                    }
                }
                if(q3 == 2){
                    if(q4 == 1){
                        document.getElementById('numdesigners').setAttribute("data-count", "1");
                    }
                    if(q4 == 2){
                        document.getElementById('numdesigners').setAttribute("data-count", "10");
                    }
                    if(q4 == 3){
                        document.getElementById('numdesigners').setAttribute("data-count", "0");
                    }
                    if(q4 == 4){
                        document.getElementById('numdesigners').setAttribute("data-count", "0");
                    }
                }
                if(q3 == 3){
                    if(q4 == 1){
                        document.getElementById('numdesigners').setAttribute("data-count", "1");
                    }
                    if(q4 == 2){
                        document.getElementById('numdesigners').setAttribute("data-count", "2");
                    }
                    if(q4 == 3){
                        document.getElementById('numdesigners').setAttribute("data-count", "0");
                    }
                    if(q4 == 4){
                        document.getElementById('numdesigners').setAttribute("data-count", "0");
                    }
                }
                if(q3 == 4){
                    if(q4 == 1){
                        document.getElementById('numdesigners').setAttribute("data-count", "0");
                    }
                    if(q4 == 2){
                        document.getElementById('numdesigners').setAttribute("data-count", "1");
                    }
                    if(q4 == 3){
                        document.getElementById('numdesigners').setAttribute("data-count", "0");
                    }
                    if(q4 == 4){
                        document.getElementById('numdesigners').setAttribute("data-count", "0");
                    }
                }
            }
            if (q2 == 4){
                if(q3 == 1){
                    if(q4 == 1){
                        document.getElementById('numdesigners').setAttribute("data-count", "30");
                    }
                    if(q4 == 2){
                        document.getElementById('numdesigners').setAttribute("data-count", "105");
                    }
                    if(q4 == 3){
                        document.getElementById('numdesigners').setAttribute("data-count", "13");
                    }
                    if(q4 == 4){
                        document.getElementById('numdesigners').setAttribute("data-count", "0");
                    }
                }
                if(q3 == 2){
                    if(q4 == 1){
                        document.getElementById('numdesigners').setAttribute("data-count", "68");
                    }
                    if(q4 == 2){
                        document.getElementById('numdesigners').setAttribute("data-count", "310");
                    }
                    if(q4 == 3){
                        document.getElementById('numdesigners').setAttribute("data-count", "35");
                    }
                    if(q4 == 4){
                        document.getElementById('numdesigners').setAttribute("data-count", "0");
                    }
                }
                if(q3 == 3){
                    if(q4 == 1){
                        document.getElementById('numdesigners').setAttribute("data-count", "23");
                    }
                    if(q4 == 2){
                        document.getElementById('numdesigners').setAttribute("data-count", "206");
                    }
                    if(q4 == 3){
                        document.getElementById('numdesigners').setAttribute("data-count", "26");
                    }
                    if(q4 == 4){
                        document.getElementById('numdesigners').setAttribute("data-count", "1");
                    }
                }
                if(q3 == 4){
                    if(q4 == 1){
                        document.getElementById('numdesigners').setAttribute("data-count", "5");
                    }
                    if(q4 == 2){
                        document.getElementById('numdesigners').setAttribute("data-count", "23");
                    }
                    if(q4 == 3){
                        document.getElementById('numdesigners').setAttribute("data-count", "2");
                    }
                    if(q4 == 4){
                        document.getElementById('numdesigners').setAttribute("data-count", "0");
                    }
                }
            }
            if (q2 == 5){
                if(q3 == 1){
                    if(q4 == 1){
                        document.getElementById('numdesigners').setAttribute("data-count", "7");
                    }
                    if(q4 == 2){
                        document.getElementById('numdesigners').setAttribute("data-count", "26");
                    }
                    if(q4 == 3){
                        document.getElementById('numdesigners').setAttribute("data-count", "1");
                    }
                    if(q4 == 4){
                        document.getElementById('numdesigners').setAttribute("data-count", "1");
                    }
                }
                if(q3 == 2){
                    if(q4 == 1){
                        document.getElementById('numdesigners').setAttribute("data-count", "18");
                    }
                    if(q4 == 2){
                        document.getElementById('numdesigners').setAttribute("data-count", "68");
                    }
                    if(q4 == 3){
                        document.getElementById('numdesigners').setAttribute("data-count", "8");
                    }
                    if(q4 == 4){
                        document.getElementById('numdesigners').setAttribute("data-count", "0");
                    }
                }
                if(q3 == 3){
                    if(q4 == 1){
                        document.getElementById('numdesigners').setAttribute("data-count", "11");
                    }
                    if(q4 == 2){
                        document.getElementById('numdesigners').setAttribute("data-count", "53");
                    }
                    if(q4 == 3){
                        document.getElementById('numdesigners').setAttribute("data-count", "9");
                    }
                    if(q4 == 4){
                        document.getElementById('numdesigners').setAttribute("data-count", "0");
                    }
                }
                if(q3 == 4){
                    if(q4 == 1){
                        document.getElementById('numdesigners').setAttribute("data-count", "1");
                    }
                    if(q4 == 2){
                        document.getElementById('numdesigners').setAttribute("data-count", "11");
                    }
                    if(q4 == 3){
                        document.getElementById('numdesigners').setAttribute("data-count", "4");
                    }
                    if(q4 == 4){
                        document.getElementById('numdesigners').setAttribute("data-count", "0");
                    }
                }
            }
        }
        if(q1 == 2){
            if (q2 == 1){
                if(q3 == 1){
                    if(q4 == 1){
                        document.getElementById('numdesigners').setAttribute("data-count", "1");
                    }
                    if(q4 == 2){
                        document.getElementById('numdesigners').setAttribute("data-count", "3");
                    }
                    if(q4 == 3){
                        document.getElementById('numdesigners').setAttribute("data-count", "2");
                    }
                    if(q4 == 4){
                        document.getElementById('numdesigners').setAttribute("data-count", "1");
                    }
                }
                if(q3 == 2){
                    if(q4 == 1){
                        document.getElementById('numdesigners').setAttribute("data-count", "2");
                    }
                    if(q4 == 2){
                        document.getElementById('numdesigners').setAttribute("data-count", "8");
                    }
                    if(q4 == 3){
                        document.getElementById('numdesigners').setAttribute("data-count", "8");
                    }
                    if(q4 == 4){
                        document.getElementById('numdesigners').setAttribute("data-count", "4");
                    }
                }
                if(q3 == 3){
                    if(q4 == 1){
                        document.getElementById('numdesigners').setAttribute("data-count", "0");
                    }
                    if(q4 == 2){
                        document.getElementById('numdesigners').setAttribute("data-count", "2");
                    }
                    if(q4 == 3){
                        document.getElementById('numdesigners').setAttribute("data-count", "12");
                    }
                    if(q4 == 4){
                        document.getElementById('numdesigners').setAttribute("data-count", "2");
                    }
                }
                if(q3 == 4){
                    if(q4 == 1){
                        document.getElementById('numdesigners').setAttribute("data-count", "0");
                    }
                    if(q4 == 2){
                        document.getElementById('numdesigners').setAttribute("data-count", "1");
                    }
                    if(q4 == 3){
                        document.getElementById('numdesigners').setAttribute("data-count", "1");
                    }
                    if(q4 == 4){
                        document.getElementById('numdesigners').setAttribute("data-count", "0");
                    }
                }
            }
            if (q2 == 2){
                if(q3 == 1){
                    if(q4 == 1){
                        document.getElementById('numdesigners').setAttribute("data-count", "3");
                    }
                    if(q4 == 2){
                        document.getElementById('numdesigners').setAttribute("data-count", "24");
                    }
                    if(q4 == 3){
                        document.getElementById('numdesigners').setAttribute("data-count", "21");
                    }
                    if(q4 == 4){
                        document.getElementById('numdesigners').setAttribute("data-count", "13");
                    }
                }
                if(q3 == 2){
                    if(q4 == 1){
                        document.getElementById('numdesigners').setAttribute("data-count", "8");
                    }
                    if(q4 == 2){
                        document.getElementById('numdesigners').setAttribute("data-count", "81");
                    }
                    if(q4 == 3){
                        document.getElementById('numdesigners').setAttribute("data-count", "145");
                    }
                    if(q4 == 4){
                        document.getElementById('numdesigners').setAttribute("data-count", "69");
                    }
                }
                if(q3 == 3){
                    if(q4 == 1){
                        document.getElementById('numdesigners').setAttribute("data-count", "1");
                    }
                    if(q4 == 2){
                        document.getElementById('numdesigners').setAttribute("data-count", "42");
                    }
                    if(q4 == 3){
                        document.getElementById('numdesigners').setAttribute("data-count", "98");
                    }
                    if(q4 == 4){
                        document.getElementById('numdesigners').setAttribute("data-count", "46");
                    }
                }
                if(q3 == 4){
                    if(q4 == 1){
                        document.getElementById('numdesigners').setAttribute("data-count", "0");
                    }
                    if(q4 == 2){
                        document.getElementById('numdesigners').setAttribute("data-count", "2");
                    }
                    if(q4 == 3){
                        document.getElementById('numdesigners').setAttribute("data-count", "14");
                    }
                    if(q4 == 4){
                        document.getElementById('numdesigners').setAttribute("data-count", "11");
                    }
                }
            }
            if (q2 == 3){
                if(q3 == 1){
                    if(q4 == 1){
                        document.getElementById('numdesigners').setAttribute("data-count", "0");
                    }
                    if(q4 == 2){
                        document.getElementById('numdesigners').setAttribute("data-count", "6");
                    }
                    if(q4 == 3){
                        document.getElementById('numdesigners').setAttribute("data-count", "7");
                    }
                    if(q4 == 4){
                        document.getElementById('numdesigners').setAttribute("data-count", "3");
                    }
                }
                if(q3 == 2){
                    if(q4 == 1){
                        document.getElementById('numdesigners').setAttribute("data-count", "2");
                    }
                    if(q4 == 2){
                        document.getElementById('numdesigners').setAttribute("data-count", "4");
                    }
                    if(q4 == 3){
                        document.getElementById('numdesigners').setAttribute("data-count", "7");
                    }
                    if(q4 == 4){
                        document.getElementById('numdesigners').setAttribute("data-count", "4");
                    }
                }
                if(q3 == 3){
                    if(q4 == 1){
                        document.getElementById('numdesigners').setAttribute("data-count", "0");
                    }
                    if(q4 == 2){
                        document.getElementById('numdesigners').setAttribute("data-count", "6");
                    }
                    if(q4 == 3){
                        document.getElementById('numdesigners').setAttribute("data-count", "1");
                    }
                    if(q4 == 4){
                        document.getElementById('numdesigners').setAttribute("data-count", "5");
                    }
                }
                if(q3 == 4){
                    if(q4 == 1){
                        document.getElementById('numdesigners').setAttribute("data-count", "0");
                    }
                    if(q4 == 2){
                        document.getElementById('numdesigners').setAttribute("data-count", "1");
                    }
                    if(q4 == 3){
                        document.getElementById('numdesigners').setAttribute("data-count", "1");
                    }
                    if(q4 == 4){
                        document.getElementById('numdesigners').setAttribute("data-count", "3");
                    }
                }
            }
            if (q2 == 4){
                if(q3 == 1){
                    if(q4 == 1){
                        document.getElementById('numdesigners').setAttribute("data-count", "13");
                    }
                    if(q4 == 2){
                        document.getElementById('numdesigners').setAttribute("data-count", "75");
                    }
                    if(q4 == 3){
                        document.getElementById('numdesigners').setAttribute("data-count", "111");
                    }
                    if(q4 == 4){
                        document.getElementById('numdesigners').setAttribute("data-count", "100");
                    }
                }
                if(q3 == 2){
                    if(q4 == 1){
                        document.getElementById('numdesigners').setAttribute("data-count", "17");
                    }
                    if(q4 == 2){
                        document.getElementById('numdesigners').setAttribute("data-count", "314");
                    }
                    if(q4 == 3){
                        document.getElementById('numdesigners').setAttribute("data-count", "523");
                    }
                    if(q4 == 4){
                        document.getElementById('numdesigners').setAttribute("data-count", "369");
                    }
                }
                if(q3 == 3){
                    if(q4 == 1){
                        document.getElementById('numdesigners').setAttribute("data-count", "10");
                    }
                    if(q4 == 2){
                        document.getElementById('numdesigners').setAttribute("data-count", "191");
                    }
                    if(q4 == 3){
                        document.getElementById('numdesigners').setAttribute("data-count", "379");
                    }
                    if(q4 == 4){
                        document.getElementById('numdesigners').setAttribute("data-count", "291");
                    }
                }
                if(q3 == 4){
                    if(q4 == 1){
                        document.getElementById('numdesigners').setAttribute("data-count", "1");
                    }
                    if(q4 == 2){
                        document.getElementById('numdesigners').setAttribute("data-count", "21");
                    }
                    if(q4 == 3){
                        document.getElementById('numdesigners').setAttribute("data-count", "54");
                    }
                    if(q4 == 4){
                        document.getElementById('numdesigners').setAttribute("data-count", "64");
                    }
                }
            }
            if (q2 == 5){
                if(q3 == 1){
                    if(q4 == 1){
                        document.getElementById('numdesigners').setAttribute("data-count", "4");
                    }
                    if(q4 == 2){
                        document.getElementById('numdesigners').setAttribute("data-count", "18");
                    }
                    if(q4 == 3){
                        document.getElementById('numdesigners').setAttribute("data-count", "37");
                    }
                    if(q4 == 4){
                        document.getElementById('numdesigners').setAttribute("data-count", "35");
                    }
                }
                if(q3 == 2){
                    if(q4 == 1){
                        document.getElementById('numdesigners').setAttribute("data-count", "8");
                    }
                    if(q4 == 2){
                        document.getElementById('numdesigners').setAttribute("data-count", "60");
                    }
                    if(q4 == 3){
                        document.getElementById('numdesigners').setAttribute("data-count", "114");
                    }
                    if(q4 == 4){
                        document.getElementById('numdesigners').setAttribute("data-count", "92");
                    }
                }
                if(q3 == 3){
                    if(q4 == 1){
                        document.getElementById('numdesigners').setAttribute("data-count", "1");
                    }
                    if(q4 == 2){
                        document.getElementById('numdesigners').setAttribute("data-count", "42");
                    }
                    if(q4 == 3){
                        document.getElementById('numdesigners').setAttribute("data-count", "87");
                    }
                    if(q4 == 4){
                        document.getElementById('numdesigners').setAttribute("data-count", "72");
                    }
                }
                if(q3 == 4){
                    if(q4 == 1){
                        document.getElementById('numdesigners').setAttribute("data-count", "1");
                    }
                    if(q4 == 2){
                        document.getElementById('numdesigners').setAttribute("data-count", "7");
                    }
                    if(q4 == 3){
                        document.getElementById('numdesigners').setAttribute("data-count", "18");
                    }
                    if(q4 == 4){
                        document.getElementById('numdesigners').setAttribute("data-count", "21");
                    }
                }
            }
        }
        if(q1 == 3){
            if (q2 == 1){
                if(q3 == 1){
                    if(q4 == 1){
                        document.getElementById('numdesigners').setAttribute("data-count", "0");
                    }
                    if(q4 == 2){
                        document.getElementById('numdesigners').setAttribute("data-count", "0");
                    }
                    if(q4 == 3){
                        document.getElementById('numdesigners').setAttribute("data-count", "1");
                    }
                    if(q4 == 4){
                        document.getElementById('numdesigners').setAttribute("data-count", "1");
                    }
                }
                if(q3 == 2){
                    if(q4 == 1){
                        document.getElementById('numdesigners').setAttribute("data-count", "0");
                    }
                    if(q4 == 2){
                        document.getElementById('numdesigners').setAttribute("data-count", "0");
                    }
                    if(q4 == 3){
                        document.getElementById('numdesigners').setAttribute("data-count", "0");
                    }
                    if(q4 == 4){
                        document.getElementById('numdesigners').setAttribute("data-count", "2");
                    }
                }
                if(q3 == 3){
                    if(q4 == 1){
                        document.getElementById('numdesigners').setAttribute("data-count", "0");
                    }
                    if(q4 == 2){
                        document.getElementById('numdesigners').setAttribute("data-count", "0");
                    }
                    if(q4 == 3){
                        document.getElementById('numdesigners').setAttribute("data-count", "0");
                    }
                    if(q4 == 4){
                        document.getElementById('numdesigners').setAttribute("data-count", "1");
                    }
                }
                if(q3 == 4){
                    if(q4 == 1){
                        document.getElementById('numdesigners').setAttribute("data-count", "0");
                    }
                    if(q4 == 2){
                        document.getElementById('numdesigners').setAttribute("data-count", "0");
                    }
                    if(q4 == 3){
                        document.getElementById('numdesigners').setAttribute("data-count", "0");
                    }
                    if(q4 == 4){
                        document.getElementById('numdesigners').setAttribute("data-count", "3");
                    }
                }
            }
            if (q2 == 2){
                if(q3 == 1){
                    if(q4 == 1){
                        document.getElementById('numdesigners').setAttribute("data-count", "0");
                    }
                    if(q4 == 2){
                        document.getElementById('numdesigners').setAttribute("data-count", "1");
                    }
                    if(q4 == 3){
                        document.getElementById('numdesigners').setAttribute("data-count", "3");
                    }
                    if(q4 == 4){
                        document.getElementById('numdesigners').setAttribute("data-count", "24");
                    }
                }
                if(q3 == 2){
                    if(q4 == 1){
                        document.getElementById('numdesigners').setAttribute("data-count", "0");
                    }
                    if(q4 == 2){
                        document.getElementById('numdesigners').setAttribute("data-count", "4");
                    }
                    if(q4 == 3){
                        document.getElementById('numdesigners').setAttribute("data-count", "2");
                    }
                    if(q4 == 4){
                        document.getElementById('numdesigners').setAttribute("data-count", "36");
                    }
                }
                if(q3 == 3){
                    if(q4 == 1){
                        document.getElementById('numdesigners').setAttribute("data-count", "0");
                    }
                    if(q4 == 2){
                        document.getElementById('numdesigners').setAttribute("data-count", "3");
                    }
                    if(q4 == 3){
                        document.getElementById('numdesigners').setAttribute("data-count", "5");
                    }
                    if(q4 == 4){
                        document.getElementById('numdesigners').setAttribute("data-count", "41");
                    }
                }
                if(q3 == 4){
                    if(q4 == 1){
                        document.getElementById('numdesigners').setAttribute("data-count", "0");
                    }
                    if(q4 == 2){
                        document.getElementById('numdesigners').setAttribute("data-count", "0");
                    }
                    if(q4 == 3){
                        document.getElementById('numdesigners').setAttribute("data-count", "1");
                    }
                    if(q4 == 4){
                        document.getElementById('numdesigners').setAttribute("data-count", "15");
                    }
                }
            }
            if (q2 == 3){
                if(q3 == 1){
                    if(q4 == 1){
                        document.getElementById('numdesigners').setAttribute("data-count", "1");
                    }
                    if(q4 == 2){
                        document.getElementById('numdesigners').setAttribute("data-count", "0");
                    }
                    if(q4 == 3){
                        document.getElementById('numdesigners').setAttribute("data-count", "1");
                    }
                    if(q4 == 4){
                        document.getElementById('numdesigners').setAttribute("data-count", "4");
                    }
                }
                if(q3 == 2){
                    if(q4 == 1){
                        document.getElementById('numdesigners').setAttribute("data-count", "0");
                    }
                    if(q4 == 2){
                        document.getElementById('numdesigners').setAttribute("data-count", "0");
                    }
                    if(q4 == 3){
                        document.getElementById('numdesigners').setAttribute("data-count", "0");
                    }
                    if(q4 == 4){
                        document.getElementById('numdesigners').setAttribute("data-count", "3");
                    }
                }
                if(q3 == 3){
                    if(q4 == 1){
                        document.getElementById('numdesigners').setAttribute("data-count", "0");
                    }
                    if(q4 == 2){
                        document.getElementById('numdesigners').setAttribute("data-count", "0");
                    }
                    if(q4 == 3){
                        document.getElementById('numdesigners').setAttribute("data-count", "0");
                    }
                    if(q4 == 4){
                        document.getElementById('numdesigners').setAttribute("data-count", "2");
                    }
                }
                if(q3 == 4){
                    if(q4 == 1){
                        document.getElementById('numdesigners').setAttribute("data-count", "0");
                    }
                    if(q4 == 2){
                        document.getElementById('numdesigners').setAttribute("data-count", "0");
                    }
                    if(q4 == 3){
                        document.getElementById('numdesigners').setAttribute("data-count", "2");
                    }
                    if(q4 == 4){
                        document.getElementById('numdesigners').setAttribute("data-count", "3");
                    }
                }
            }
            if (q2 == 4){
                if(q3 == 1){
                    if(q4 == 1){
                        document.getElementById('numdesigners').setAttribute("data-count", "1");
                    }
                    if(q4 == 2){
                        document.getElementById('numdesigners').setAttribute("data-count", "4");
                    }
                    if(q4 == 3){
                        document.getElementById('numdesigners').setAttribute("data-count", "5");
                    }
                    if(q4 == 4){
                        document.getElementById('numdesigners').setAttribute("data-count", "100");
                    }
                }
                if(q3 == 2){
                    if(q4 == 1){
                        document.getElementById('numdesigners').setAttribute("data-count", "2");
                    }
                    if(q4 == 2){
                        document.getElementById('numdesigners').setAttribute("data-count", "5");
                    }
                    if(q4 == 3){
                        document.getElementById('numdesigners').setAttribute("data-count", "8");
                    }
                    if(q4 == 4){
                        document.getElementById('numdesigners').setAttribute("data-count", "183");
                    }
                }
                if(q3 == 3){
                    if(q4 == 1){
                        document.getElementById('numdesigners').setAttribute("data-count", "0");
                    }
                    if(q4 == 2){
                        document.getElementById('numdesigners').setAttribute("data-count", "5");
                    }
                    if(q4 == 3){
                        document.getElementById('numdesigners').setAttribute("data-count", "7");
                    }
                    if(q4 == 4){
                        document.getElementById('numdesigners').setAttribute("data-count", "190");
                    }
                }
                if(q3 == 4){
                    if(q4 == 1){
                        document.getElementById('numdesigners').setAttribute("data-count", "0");
                    }
                    if(q4 == 2){
                        document.getElementById('numdesigners').setAttribute("data-count", "1");
                    }
                    if(q4 == 3){
                        document.getElementById('numdesigners').setAttribute("data-count", "1");
                    }
                    if(q4 == 4){
                        document.getElementById('numdesigners').setAttribute("data-count", "55");
                    }
                }
            }
            if (q2 == 5){
                if(q3 == 1){
                    if(q4 == 1){
                        document.getElementById('numdesigners').setAttribute("data-count", "2");
                    }
                    if(q4 == 2){
                        document.getElementById('numdesigners').setAttribute("data-count", "1");
                    }
                    if(q4 == 3){
                        document.getElementById('numdesigners').setAttribute("data-count", "0");
                    }
                    if(q4 == 4){
                        document.getElementById('numdesigners').setAttribute("data-count", "29");
                    }
                }
                if(q3 == 2){
                    if(q4 == 1){
                        document.getElementById('numdesigners').setAttribute("data-count", "1");
                    }
                    if(q4 == 2){
                        document.getElementById('numdesigners').setAttribute("data-count", "1");
                    }
                    if(q4 == 3){
                        document.getElementById('numdesigners').setAttribute("data-count", "3");
                    }
                    if(q4 == 4){
                        document.getElementById('numdesigners').setAttribute("data-count", "48");
                    }
                }
                if(q3 == 3){
                    if(q4 == 1){
                        document.getElementById('numdesigners').setAttribute("data-count", "0");
                    }
                    if(q4 == 2){
                        document.getElementById('numdesigners').setAttribute("data-count", "0");
                    }
                    if(q4 == 3){
                        document.getElementById('numdesigners').setAttribute("data-count", "1");
                    }
                    if(q4 == 4){
                        document.getElementById('numdesigners').setAttribute("data-count", "56");
                    }
                }
                if(q3 == 4){
                    if(q4 == 1){
                        document.getElementById('numdesigners').setAttribute("data-count", "0");
                    }
                    if(q4 == 2){
                        document.getElementById('numdesigners').setAttribute("data-count", "0");
                    }
                    if(q4 == 3){
                        document.getElementById('numdesigners').setAttribute("data-count", "0");
                    }
                    if(q4 == 4){
                        document.getElementById('numdesigners').setAttribute("data-count", "34");
                    }
                }
            }
        }
        if(q1 == 4){
            if (q2 == 1){
                if(q3 == 1){
                    if(q4 == 1){
                        document.getElementById('numdesigners').setAttribute("data-count", "0");
                    }
                    if(q4 == 2){
                        document.getElementById('numdesigners').setAttribute("data-count", "0");
                    }
                    if(q4 == 3){
                        document.getElementById('numdesigners').setAttribute("data-count", "0");
                    }
                    if(q4 == 4){
                        document.getElementById('numdesigners').setAttribute("data-count", "0");
                    }
                }
                if(q3 == 2){
                    if(q4 == 1){
                        document.getElementById('numdesigners').setAttribute("data-count", "0");
                    }
                    if(q4 == 2){
                        document.getElementById('numdesigners').setAttribute("data-count", "0");
                    }
                    if(q4 == 3){
                        document.getElementById('numdesigners').setAttribute("data-count", "0");
                    }
                    if(q4 == 4){
                        document.getElementById('numdesigners').setAttribute("data-count", "0");
                    }
                }
                if(q3 == 3){
                    if(q4 == 1){
                        document.getElementById('numdesigners').setAttribute("data-count", "0");
                    }
                    if(q4 == 2){
                        document.getElementById('numdesigners').setAttribute("data-count", "0");
                    }
                    if(q4 == 3){
                        document.getElementById('numdesigners').setAttribute("data-count", "0");
                    }
                    if(q4 == 4){
                        document.getElementById('numdesigners').setAttribute("data-count", "0");
                    }
                }
                if(q3 == 4){
                    if(q4 == 1){
                        document.getElementById('numdesigners').setAttribute("data-count", "0");
                    }
                    if(q4 == 2){
                        document.getElementById('numdesigners').setAttribute("data-count", "0");
                    }
                    if(q4 == 3){
                        document.getElementById('numdesigners').setAttribute("data-count", "0");
                    }
                    if(q4 == 4){
                        document.getElementById('numdesigners').setAttribute("data-count", "0");
                    }
                }
            }
            if (q2 == 2){
                if(q3 == 1){
                    if(q4 == 1){
                        document.getElementById('numdesigners').setAttribute("data-count", "0");
                    }
                    if(q4 == 2){
                        document.getElementById('numdesigners').setAttribute("data-count", "0");
                    }
                    if(q4 == 3){
                        document.getElementById('numdesigners').setAttribute("data-count", "0");  
                    }
                    if(q4 == 4){
                        document.getElementById('numdesigners').setAttribute("data-count", "1");
                    }
                }
                if(q3 == 2){
                    if(q4 == 1){
                        document.getElementById('numdesigners').setAttribute("data-count", "0");
                    }
                    if(q4 == 2){
                        document.getElementById('numdesigners').setAttribute("data-count", "0");
                    }
                    if(q4 == 3){
                        document.getElementById('numdesigners').setAttribute("data-count", "0");
                    }
                    if(q4 == 4){
                        document.getElementById('numdesigners').setAttribute("data-count", "0");
                    }
                }
                if(q3 == 3){
                    if(q4 == 1){
                        document.getElementById('numdesigners').setAttribute("data-count", "1");
                    }
                    if(q4 == 2){
                        document.getElementById('numdesigners').setAttribute("data-count", "0");
                    }
                    if(q4 == 3){
                        document.getElementById('numdesigners').setAttribute("data-count", "0");
                    }
                    if(q4 == 4){
                        document.getElementById('numdesigners').setAttribute("data-count", "0");
                    }
                }
                if(q3 == 4){
                    if(q4 == 1){
                        document.getElementById('numdesigners').setAttribute("data-count", "0");
                    }
                    if(q4 == 2){
                        document.getElementById('numdesigners').setAttribute("data-count", "0");
                    }
                    if(q4 == 3){
                        document.getElementById('numdesigners').setAttribute("data-count", "0");
                    }
                    if(q4 == 4){
                        document.getElementById('numdesigners').setAttribute("data-count", "1");
                    }
                }
            }
            if (q2 == 3){
                if(q3 == 1){
                    if(q4 == 1){
                        document.getElementById('numdesigners').setAttribute("data-count", "0");
                    }
                    if(q4 == 2){
                        document.getElementById('numdesigners').setAttribute("data-count", "0");
                    }
                    if(q4 == 3){
                        document.getElementById('numdesigners').setAttribute("data-count", "0");
                    }
                    if(q4 == 4){
                        document.getElementById('numdesigners').setAttribute("data-count", "1");
                    }
                }
                if(q3 == 2){
                    if(q4 == 1){
                        document.getElementById('numdesigners').setAttribute("data-count", "0");
                    }
                    if(q4 == 2){
                        document.getElementById('numdesigners').setAttribute("data-count", "0");
                    }
                    if(q4 == 3){
                        document.getElementById('numdesigners').setAttribute("data-count", "0");
                    }
                    if(q4 == 4){
                        document.getElementById('numdesigners').setAttribute("data-count", "0");
                    }
                }
                if(q3 == 3){
                    if(q4 == 1){
                        document.getElementById('numdesigners').setAttribute("data-count", "0");
                    }
                    if(q4 == 2){
                        document.getElementById('numdesigners').setAttribute("data-count", "0");
                    }
                    if(q4 == 3){
                        document.getElementById('numdesigners').setAttribute("data-count", "0");
                    }
                    if(q4 == 4){
                        document.getElementById('numdesigners').setAttribute("data-count", "0");
                    }
                }
                if(q3 == 4){
                    if(q4 == 1){
                        document.getElementById('numdesigners').setAttribute("data-count", "0");
                    }
                    if(q4 == 2){
                        document.getElementById('numdesigners').setAttribute("data-count", "0");
                    }
                    if(q4 == 3){
                        document.getElementById('numdesigners').setAttribute("data-count", "0");
                    }
                    if(q4 == 4){
                        document.getElementById('numdesigners').setAttribute("data-count", "1");
                    }
                }
            }
            if (q2 == 4){
                if(q3 == 1){
                    if(q4 == 1){
                        document.getElementById('numdesigners').setAttribute("data-count", "0");
                    }
                    if(q4 == 2){
                        document.getElementById('numdesigners').setAttribute("data-count", "0");
                    }
                    if(q4 == 3){
                        document.getElementById('numdesigners').setAttribute("data-count", "0");
                    }
                    if(q4 == 4){
                        document.getElementById('numdesigners').setAttribute("data-count", "15");
                    }
                }
                if(q3 == 2){
                    if(q4 == 1){
                        document.getElementById('numdesigners').setAttribute("data-count", "0");
                    }
                    if(q4 == 2){
                        document.getElementById('numdesigners').setAttribute("data-count", "0");
                    }
                    if(q4 == 3){
                        document.getElementById('numdesigners').setAttribute("data-count", "0");
                    }
                    if(q4 == 4){
                        document.getElementById('numdesigners').setAttribute("data-count", "13");
                    }
                }
                if(q3 == 3){
                    if(q4 == 1){
                        document.getElementById('numdesigners').setAttribute("data-count", "0");
                    }
                    if(q4 == 2){
                        document.getElementById('numdesigners').setAttribute("data-count", "0");
                    }
                    if(q4 == 3){
                        document.getElementById('numdesigners').setAttribute("data-count", "0");
                    }
                    if(q4 == 4){
                        document.getElementById('numdesigners').setAttribute("data-count", "14");
                    }
                }
                if(q3 == 4){
                    if(q4 == 1){
                        document.getElementById('numdesigners').setAttribute("data-count", "0");
                    }
                    if(q4 == 2){
                        document.getElementById('numdesigners').setAttribute("data-count", "0");
                    }
                    if(q4 == 3){
                        document.getElementById('numdesigners').setAttribute("data-count", "0");
                    }
                    if(q4 == 4){
                        document.getElementById('numdesigners').setAttribute("data-count", "8");
                    }
                }
            }
            if (q2 == 5){
                if(q3 == 1){
                    if(q4 == 1){
                        document.getElementById('numdesigners').setAttribute("data-count", "0");
                    }
                    if(q4 == 2){
                        document.getElementById('numdesigners').setAttribute("data-count", "0");
                    }
                    if(q4 == 3){
                        document.getElementById('numdesigners').setAttribute("data-count", "1");
                    }
                    if(q4 == 4){
                        document.getElementById('numdesigners').setAttribute("data-count", "3");
                    }
                }
                if(q3 == 2){
                    if(q4 == 1){
                        document.getElementById('numdesigners').setAttribute("data-count", "0");
                    }
                    if(q4 == 2){
                        document.getElementById('numdesigners').setAttribute("data-count", "0");
                    }
                    if(q4 == 3){
                        document.getElementById('numdesigners').setAttribute("data-count", "0");
                    }
                    if(q4 == 4){
                        document.getElementById('numdesigners').setAttribute("data-count", "3");
                    }
                }
                if(q3 == 3){
                    if(q4 == 1){
                        document.getElementById('numdesigners').setAttribute("data-count", "0");
                    }
                    if(q4 == 2){
                        document.getElementById('numdesigners').setAttribute("data-count", "0");
                    }
                    if(q4 == 3){
                        document.getElementById('numdesigners').setAttribute("data-count", "0");
                    }
                    if(q4 == 4){
                        document.getElementById('numdesigners').setAttribute("data-count", "9");
                    }
                }
                if(q3 == 4){
                    if(q4 == 1){
                        document.getElementById('numdesigners').setAttribute("data-count", "0");
                    }
                    if(q4 == 2){
                        document.getElementById('numdesigners').setAttribute("data-count", "0");
                    }
                    if(q4 == 3){
                        document.getElementById('numdesigners').setAttribute("data-count", "0");
                    }
                    if(q4 == 4){
                        document.getElementById('numdesigners').setAttribute("data-count", "3");
                    }
                }
            }
        }
    }

    if(document.getElementById('q5a2c').checked) {
        document.getElementById('q5a2').style.opacity = 1;
        document.getElementById('question5').style.opacity = 0;
        document.getElementById('question6').style.opacity = 1;
        document.getElementById('question6answers').style.zIndex = 5;
        document.getElementById('next5').style.display = "none";
        document.getElementById('next6').style.display = "block"; 
        q5 = 2;
        if(q1 == 1){
            if (q2 == 1){
                if(q3 == 1){
                    if(q4 == 1){
                        document.getElementById('numdesigners').setAttribute("data-count", "0");
                    }
                    if(q4 == 2){
                        document.getElementById('numdesigners').setAttribute("data-count", "1");
                    }
                    if(q4 == 3){
                        document.getElementById('numdesigners').setAttribute("data-count", "0");
                    }
                    if(q4 == 4){
                        document.getElementById('numdesigners').setAttribute("data-count", "0");
                    }
                }
                if(q3 == 2){
                    if(q4 == 1){
                        document.getElementById('numdesigners').setAttribute("data-count", "0");
                    }
                    if(q4 == 2){
                        document.getElementById('numdesigners').setAttribute("data-count", "1");
                    }
                    if(q4 == 3){
                        document.getElementById('numdesigners').setAttribute("data-count", "0");
                    }
                    if(q4 == 4){
                        document.getElementById('numdesigners').setAttribute("data-count", "0");
                    }
                }
                if(q3 == 3){
                    if(q4 == 1){
                        document.getElementById('numdesigners').setAttribute("data-count", "0");
                    }
                    if(q4 == 2){
                        document.getElementById('numdesigners').setAttribute("data-count", "0");
                    }
                    if(q4 == 3){
                        document.getElementById('numdesigners').setAttribute("data-count", "0");
                    }
                    if(q4 == 4){
                        document.getElementById('numdesigners').setAttribute("data-count", "0");
                    }
                }
                if(q3 == 4){
                    if(q4 == 1){
                        document.getElementById('numdesigners').setAttribute("data-count", "0");
                    }
                    if(q4 == 2){
                        document.getElementById('numdesigners').setAttribute("data-count", "1");
                    }
                    if(q4 == 3){
                        document.getElementById('numdesigners').setAttribute("data-count", "1");
                    }
                    if(q4 == 4){
                        document.getElementById('numdesigners').setAttribute("data-count", "0");
                    }
                }
            }
            if (q2 == 2){
                if(q3 == 1){
                    if(q4 == 1){
                        document.getElementById('numdesigners').setAttribute("data-count", "3");
                    }
                    if(q4 == 2){
                        document.getElementById('numdesigners').setAttribute("data-count", "8");
                    }
                    if(q4 == 3){
                        document.getElementById('numdesigners').setAttribute("data-count", "0");
                    }
                    if(q4 == 4){
                        document.getElementById('numdesigners').setAttribute("data-count", "0");
                    }
                }
                if(q3 == 2){
                    if(q4 == 1){
                        document.getElementById('numdesigners').setAttribute("data-count", "3");
                    }
                    if(q4 == 2){
                        document.getElementById('numdesigners').setAttribute("data-count", "23");
                    }
                    if(q4 == 3){
                        document.getElementById('numdesigners').setAttribute("data-count", "1");
                    }
                    if(q4 == 4){
                        document.getElementById('numdesigners').setAttribute("data-count", "0");
                    }
                }
                if(q3 == 3){
                    if(q4 == 1){
                        document.getElementById('numdesigners').setAttribute("data-count", "2");
                    }
                    if(q4 == 2){
                        document.getElementById('numdesigners').setAttribute("data-count", "19");
                    }
                    if(q4 == 3){
                        document.getElementById('numdesigners').setAttribute("data-count", "2");
                    }
                    if(q4 == 4){
                        document.getElementById('numdesigners').setAttribute("data-count", "0");
                    }
                }
                if(q3 == 4){
                    if(q4 == 1){
                        document.getElementById('numdesigners').setAttribute("data-count", "0");
                    }
                    if(q4 == 2){
                        document.getElementById('numdesigners').setAttribute("data-count", "4");
                    }
                    if(q4 == 3){
                        document.getElementById('numdesigners').setAttribute("data-count", "0");
                    }
                    if(q4 == 4){
                        document.getElementById('numdesigners').setAttribute("data-count", "0");
                    }
                }
            }
            if (q2 == 3){
                if(q3 == 1){
                    if(q4 == 1){
                        document.getElementById('numdesigners').setAttribute("data-count", "2");
                    }
                    if(q4 == 2){
                        document.getElementById('numdesigners').setAttribute("data-count", "0");
                    }
                    if(q4 == 3){
                        document.getElementById('numdesigners').setAttribute("data-count", "0");
                    }
                    if(q4 == 4){
                        document.getElementById('numdesigners').setAttribute("data-count", "0");
                    }
                }
                if(q3 == 2){
                    if(q4 == 1){
                        document.getElementById('numdesigners').setAttribute("data-count", "0");
                    }
                    if(q4 == 2){
                        document.getElementById('numdesigners').setAttribute("data-count", "1");
                    }
                    if(q4 == 3){
                        document.getElementById('numdesigners').setAttribute("data-count", "0");
                    }
                    if(q4 == 4){
                        document.getElementById('numdesigners').setAttribute("data-count", "0");
                    }
                }
                if(q3 == 3){
                    if(q4 == 1){
                        document.getElementById('numdesigners').setAttribute("data-count", "0");
                    }
                    if(q4 == 2){
                        document.getElementById('numdesigners').setAttribute("data-count", "3");
                    }
                    if(q4 == 3){
                        document.getElementById('numdesigners').setAttribute("data-count", "0");
                    }
                    if(q4 == 4){
                        document.getElementById('numdesigners').setAttribute("data-count", "0");
                    }
                }
                if(q3 == 4){
                    if(q4 == 1){
                        document.getElementById('numdesigners').setAttribute("data-count", "0");
                    }
                    if(q4 == 2){
                        document.getElementById('numdesigners').setAttribute("data-count", "0");
                    }
                    if(q4 == 3){
                        document.getElementById('numdesigners').setAttribute("data-count", "0");
                    }
                    if(q4 == 4){
                        document.getElementById('numdesigners').setAttribute("data-count", "0");
                    }
                }
            }
            if (q2 == 4){
                if(q3 == 1){
                    if(q4 == 1){
                        document.getElementById('numdesigners').setAttribute("data-count", "5");
                    }
                    if(q4 == 2){
                        document.getElementById('numdesigners').setAttribute("data-count", "24");
                    }
                    if(q4 == 3){
                        document.getElementById('numdesigners').setAttribute("data-count", "4");
                    }
                    if(q4 == 4){
                        document.getElementById('numdesigners').setAttribute("data-count", "0");
                    }
                }
                if(q3 == 2){
                    if(q4 == 1){
                        document.getElementById('numdesigners').setAttribute("data-count", "18");
                    }
                    if(q4 == 2){
                        document.getElementById('numdesigners').setAttribute("data-count", "85");
                    }
                    if(q4 == 3){
                        document.getElementById('numdesigners').setAttribute("data-count", "7");
                    }
                    if(q4 == 4){
                        document.getElementById('numdesigners').setAttribute("data-count", "1");
                    }
                }
                if(q3 == 3){
                    if(q4 == 1){
                        document.getElementById('numdesigners').setAttribute("data-count", "8");
                    }
                    if(q4 == 2){
                        document.getElementById('numdesigners').setAttribute("data-count", "69");
                    }
                    if(q4 == 3){
                        document.getElementById('numdesigners').setAttribute("data-count", "8");
                    }
                    if(q4 == 4){
                        document.getElementById('numdesigners').setAttribute("data-count", "0");
                    }
                }
                if(q3 == 4){
                    if(q4 == 1){
                        document.getElementById('numdesigners').setAttribute("data-count", "2");
                    }
                    if(q4 == 2){
                        document.getElementById('numdesigners').setAttribute("data-count", "9");
                    }
                    if(q4 == 3){
                        document.getElementById('numdesigners').setAttribute("data-count", "4");
                    }
                    if(q4 == 4){
                        document.getElementById('numdesigners').setAttribute("data-count", "1");
                    }
                }
            }
            if (q2 == 5){
                if(q3 == 1){
                    if(q4 == 1){
                        document.getElementById('numdesigners').setAttribute("data-count", "1");
                    }
                    if(q4 == 2){
                        document.getElementById('numdesigners').setAttribute("data-count", "7");
                    }
                    if(q4 == 3){
                        document.getElementById('numdesigners').setAttribute("data-count", "4");
                    }
                    if(q4 == 4){
                        document.getElementById('numdesigners').setAttribute("data-count", "0");
                    }
                }
                if(q3 == 2){
                    if(q4 == 1){
                        document.getElementById('numdesigners').setAttribute("data-count", "3");
                    }
                    if(q4 == 2){
                        document.getElementById('numdesigners').setAttribute("data-count", "21");
                    }
                    if(q4 == 3){
                        document.getElementById('numdesigners').setAttribute("data-count", "3");
                    }
                    if(q4 == 4){
                        document.getElementById('numdesigners').setAttribute("data-count", "0");
                    }
                }
                if(q3 == 3){
                    if(q4 == 1){
                        document.getElementById('numdesigners').setAttribute("data-count", "5");
                    }
                    if(q4 == 2){
                        document.getElementById('numdesigners').setAttribute("data-count", "24");
                    }
                    if(q4 == 3){
                        document.getElementById('numdesigners').setAttribute("data-count", "4");
                    }
                    if(q4 == 4){
                        document.getElementById('numdesigners').setAttribute("data-count", "0");
                    }
                }
                if(q3 == 4){
                    if(q4 == 1){
                        document.getElementById('numdesigners').setAttribute("data-count", "1");
                    }
                    if(q4 == 2){
                        document.getElementById('numdesigners').setAttribute("data-count", "7");
                    }
                    if(q4 == 3){
                        document.getElementById('numdesigners').setAttribute("data-count", "1");
                    }
                    if(q4 == 4){
                        document.getElementById('numdesigners').setAttribute("data-count", "0");
                    }
                }
            }
        }
        if(q1 == 2){
            if (q2 == 1){
                if(q3 == 1){
                    if(q4 == 1){
                        document.getElementById('numdesigners').setAttribute("data-count", "0");
                    }
                    if(q4 == 2){
                        document.getElementById('numdesigners').setAttribute("data-count", "2");
                    }
                    if(q4 == 3){
                        document.getElementById('numdesigners').setAttribute("data-count", "0");
                    }
                    if(q4 == 4){
                        document.getElementById('numdesigners').setAttribute("data-count", "0");
                    }
                }
                if(q3 == 2){
                    if(q4 == 1){
                        document.getElementById('numdesigners').setAttribute("data-count", "0");
                    }
                    if(q4 == 2){
                        document.getElementById('numdesigners').setAttribute("data-count", "1");
                    }
                    if(q4 == 3){
                        document.getElementById('numdesigners').setAttribute("data-count", "6");
                    }
                    if(q4 == 4){
                        document.getElementById('numdesigners').setAttribute("data-count", "2");
                    }
                }
                if(q3 == 3){
                    if(q4 == 1){
                        document.getElementById('numdesigners').setAttribute("data-count", "0");
                    }
                    if(q4 == 2){
                        document.getElementById('numdesigners').setAttribute("data-count", "2");
                    }
                    if(q4 == 3){
                        document.getElementById('numdesigners').setAttribute("data-count", "1");
                    }
                    if(q4 == 4){
                        document.getElementById('numdesigners').setAttribute("data-count", "1");
                    }
                }
                if(q3 == 4){
                    if(q4 == 1){
                        document.getElementById('numdesigners').setAttribute("data-count", "0");
                    }
                    if(q4 == 2){
                        document.getElementById('numdesigners').setAttribute("data-count", "0");
                    }
                    if(q4 == 3){
                        document.getElementById('numdesigners').setAttribute("data-count", "4");
                    }
                    if(q4 == 4){
                        document.getElementById('numdesigners').setAttribute("data-count", "0");
                    }
                }
            }
            if (q2 == 2){
                if(q3 == 1){
                    if(q4 == 1){
                        document.getElementById('numdesigners').setAttribute("data-count", "2");
                    }
                    if(q4 == 2){
                        document.getElementById('numdesigners').setAttribute("data-count", "6");
                    }
                    if(q4 == 3){
                        document.getElementById('numdesigners').setAttribute("data-count", "10");
                    }
                    if(q4 == 4){
                        document.getElementById('numdesigners').setAttribute("data-count", "8");
                    }
                }
                if(q3 == 2){
                    if(q4 == 1){
                        document.getElementById('numdesigners').setAttribute("data-count", "3");
                    }
                    if(q4 == 2){
                        document.getElementById('numdesigners').setAttribute("data-count", "39");
                    }
                    if(q4 == 3){
                        document.getElementById('numdesigners').setAttribute("data-count", "45");
                    }
                    if(q4 == 4){
                        document.getElementById('numdesigners').setAttribute("data-count", "26");
                    }
                }
                if(q3 == 3){
                    if(q4 == 1){
                        document.getElementById('numdesigners').setAttribute("data-count", "1");
                    }
                    if(q4 == 2){
                        document.getElementById('numdesigners').setAttribute("data-count", "21");
                    }
                    if(q4 == 3){
                        document.getElementById('numdesigners').setAttribute("data-count", "43");
                    }
                    if(q4 == 4){
                        document.getElementById('numdesigners').setAttribute("data-count", "25");
                    }
                }
                if(q3 == 4){
                    if(q4 == 1){
                        document.getElementById('numdesigners').setAttribute("data-count", "1");
                    }
                    if(q4 == 2){
                        document.getElementById('numdesigners').setAttribute("data-count", "3");
                    }
                    if(q4 == 3){
                        document.getElementById('numdesigners').setAttribute("data-count", "9");
                    }
                    if(q4 == 4){
                        document.getElementById('numdesigners').setAttribute("data-count", "9");
                    }
                }
            }
            if (q2 == 3){
                if(q3 == 1){
                    if(q4 == 1){
                        document.getElementById('numdesigners').setAttribute("data-count", "0");
                    }
                    if(q4 == 2){
                        document.getElementById('numdesigners').setAttribute("data-count", "3");
                    }
                    if(q4 == 3){
                        document.getElementById('numdesigners').setAttribute("data-count", "0");
                    }
                    if(q4 == 4){
                        document.getElementById('numdesigners').setAttribute("data-count", "1");
                    }
                }
                if(q3 == 2){
                    if(q4 == 1){
                        document.getElementById('numdesigners').setAttribute("data-count", "1");
                    }
                    if(q4 == 2){
                        document.getElementById('numdesigners').setAttribute("data-count", "1");
                    }
                    if(q4 == 3){
                        document.getElementById('numdesigners').setAttribute("data-count", "3");
                    }
                    if(q4 == 4){
                        document.getElementById('numdesigners').setAttribute("data-count", "2");
                    }
                }
                if(q3 == 3){
                    if(q4 == 1){
                        document.getElementById('numdesigners').setAttribute("data-count", "0");
                    }
                    if(q4 == 2){
                        document.getElementById('numdesigners').setAttribute("data-count", "3");
                    }
                    if(q4 == 3){
                        document.getElementById('numdesigners').setAttribute("data-count", "4");
                    }
                    if(q4 == 4){
                        document.getElementById('numdesigners').setAttribute("data-count", "1");
                    }
                }
                if(q3 == 4){
                    if(q4 == 1){
                        document.getElementById('numdesigners').setAttribute("data-count", "0");
                    }
                    if(q4 == 2){
                        document.getElementById('numdesigners').setAttribute("data-count", "0");
                    }
                    if(q4 == 3){
                        document.getElementById('numdesigners').setAttribute("data-count", "0");
                    }
                    if(q4 == 4){
                        document.getElementById('numdesigners').setAttribute("data-count", "2");
                    }
                }
            }
            if (q2 == 4){
                if(q3 == 1){
                    if(q4 == 1){
                        document.getElementById('numdesigners').setAttribute("data-count", "6");
                    }
                    if(q4 == 2){
                        document.getElementById('numdesigners').setAttribute("data-count", "28");
                    }
                    if(q4 == 3){
                        document.getElementById('numdesigners').setAttribute("data-count", "49");
                    }
                    if(q4 == 4){
                        document.getElementById('numdesigners').setAttribute("data-count", "36");
                    }
                }
                if(q3 == 2){
                    if(q4 == 1){
                        document.getElementById('numdesigners').setAttribute("data-count", "10");
                    }
                    if(q4 == 2){
                        document.getElementById('numdesigners').setAttribute("data-count", "94");
                    }
                    if(q4 == 3){
                        document.getElementById('numdesigners').setAttribute("data-count", "166");
                    }
                    if(q4 == 4){
                        document.getElementById('numdesigners').setAttribute("data-count", "110");
                    }
                }
                if(q3 == 3){
                    if(q4 == 1){
                        document.getElementById('numdesigners').setAttribute("data-count", "7");
                    }
                    if(q4 == 2){
                        document.getElementById('numdesigners').setAttribute("data-count", "78");
                    }
                    if(q4 == 3){
                        document.getElementById('numdesigners').setAttribute("data-count", "142");
                    }
                    if(q4 == 4){
                        document.getElementById('numdesigners').setAttribute("data-count", "127");
                    }
                }
                if(q3 == 4){
                    if(q4 == 1){
                        document.getElementById('numdesigners').setAttribute("data-count", "1");
                    }
                    if(q4 == 2){
                        document.getElementById('numdesigners').setAttribute("data-count", "10");
                    }
                    if(q4 == 3){
                        document.getElementById('numdesigners').setAttribute("data-count", "33");
                    }
                    if(q4 == 4){
                        document.getElementById('numdesigners').setAttribute("data-count", "38");
                    }
                }
            }
            if (q2 == 5){
                if(q3 == 1){
                    if(q4 == 1){
                        document.getElementById('numdesigners').setAttribute("data-count", "1");
                    }
                    if(q4 == 2){
                        document.getElementById('numdesigners').setAttribute("data-count", "7");
                    }
                    if(q4 == 3){
                        document.getElementById('numdesigners').setAttribute("data-count", "9");
                    }
                    if(q4 == 4){
                        document.getElementById('numdesigners').setAttribute("data-count", "21");
                    }
                }
                if(q3 == 2){
                    if(q4 == 1){
                        document.getElementById('numdesigners').setAttribute("data-count", "4");
                    }
                    if(q4 == 2){
                        document.getElementById('numdesigners').setAttribute("data-count", "20");
                    }
                    if(q4 == 3){
                        document.getElementById('numdesigners').setAttribute("data-count", "37");
                    }
                    if(q4 == 4){
                        document.getElementById('numdesigners').setAttribute("data-count", "34");
                    }
                }
                if(q3 == 3){
                    if(q4 == 1){
                        document.getElementById('numdesigners').setAttribute("data-count", "2");
                    }
                    if(q4 == 2){
                        document.getElementById('numdesigners').setAttribute("data-count", "17");
                    }
                    if(q4 == 3){
                        document.getElementById('numdesigners').setAttribute("data-count", "39");
                    }
                    if(q4 == 4){
                        document.getElementById('numdesigners').setAttribute("data-count", "39");
                    }
                }
                if(q3 == 4){
                    if(q4 == 1){
                        document.getElementById('numdesigners').setAttribute("data-count", "0");
                    }
                    if(q4 == 2){
                        document.getElementById('numdesigners').setAttribute("data-count", "7");
                    }
                    if(q4 == 3){
                        document.getElementById('numdesigners').setAttribute("data-count", "14");
                    }
                    if(q4 == 4){
                        document.getElementById('numdesigners').setAttribute("data-count", "15");
                    }
                }
            }
        }
        if(q1 == 3){
            if (q2 == 1){
                if(q3 == 1){
                    if(q4 == 1){
                        document.getElementById('numdesigners').setAttribute("data-count", "0");
                    }
                    if(q4 == 2){
                        document.getElementById('numdesigners').setAttribute("data-count", "0");
                    }
                    if(q4 == 3){
                        document.getElementById('numdesigners').setAttribute("data-count", "0");
                    }
                    if(q4 == 4){
                        document.getElementById('numdesigners').setAttribute("data-count", "1");
                    }
                }
                if(q3 == 2){
                    if(q4 == 1){
                        document.getElementById('numdesigners').setAttribute("data-count", "0");
                    }
                    if(q4 == 2){
                        document.getElementById('numdesigners').setAttribute("data-count", "0");
                    }
                    if(q4 == 3){
                        document.getElementById('numdesigners').setAttribute("data-count", "0");
                    }
                    if(q4 == 4){
                        document.getElementById('numdesigners').setAttribute("data-count", "0");
                    }
                }
                if(q3 == 3){
                    if(q4 == 1){
                        document.getElementById('numdesigners').setAttribute("data-count", "0");
                    }
                    if(q4 == 2){
                        document.getElementById('numdesigners').setAttribute("data-count", "0");
                    }
                    if(q4 == 3){
                        document.getElementById('numdesigners').setAttribute("data-count", "0");
                    }
                    if(q4 == 4){
                        document.getElementById('numdesigners').setAttribute("data-count", "1");
                    }
                }
                if(q3 == 4){
                    if(q4 == 1){
                        document.getElementById('numdesigners').setAttribute("data-count", "0");
                    }
                    if(q4 == 2){
                        document.getElementById('numdesigners').setAttribute("data-count", "0");
                    }
                    if(q4 == 3){
                        document.getElementById('numdesigners').setAttribute("data-count", "0");
                    }
                    if(q4 == 4){
                        document.getElementById('numdesigners').setAttribute("data-count", "0");
                    }
                }
            }
            if (q2 == 2){
                if(q3 == 1){
                    if(q4 == 1){
                        document.getElementById('numdesigners').setAttribute("data-count", "0");
                    }
                    if(q4 == 2){
                        document.getElementById('numdesigners').setAttribute("data-count", "1");
                    }
                    if(q4 == 3){
                        document.getElementById('numdesigners').setAttribute("data-count", "1");
                    }
                    if(q4 == 4){
                        document.getElementById('numdesigners').setAttribute("data-count", "7");
                    }
                }
                if(q3 == 2){
                    if(q4 == 1){
                        document.getElementById('numdesigners').setAttribute("data-count", "1");
                    }
                    if(q4 == 2){
                        document.getElementById('numdesigners').setAttribute("data-count", "1");
                    }
                    if(q4 == 3){
                        document.getElementById('numdesigners').setAttribute("data-count", "2");
                    }
                    if(q4 == 4){
                        document.getElementById('numdesigners').setAttribute("data-count", "22");
                    }
                }
                if(q3 == 3){
                    if(q4 == 1){
                        document.getElementById('numdesigners').setAttribute("data-count", "0");
                    }
                    if(q4 == 2){
                        document.getElementById('numdesigners').setAttribute("data-count", "0");
                    }
                    if(q4 == 3){
                        document.getElementById('numdesigners').setAttribute("data-count", "2");
                    }
                    if(q4 == 4){
                        document.getElementById('numdesigners').setAttribute("data-count", "21");
                    }
                }
                if(q3 == 4){
                    if(q4 == 1){
                        document.getElementById('numdesigners').setAttribute("data-count", "0");
                    }
                    if(q4 == 2){
                        document.getElementById('numdesigners').setAttribute("data-count", "0");
                    }
                    if(q4 == 3){
                        document.getElementById('numdesigners').setAttribute("data-count", "0");
                    }
                    if(q4 == 4){
                        document.getElementById('numdesigners').setAttribute("data-count", "4");
                    }
                }
            }
            if (q2 == 3){
                if(q3 == 1){
                    if(q4 == 1){
                        document.getElementById('numdesigners').setAttribute("data-count", "0");
                    }
                    if(q4 == 2){
                        document.getElementById('numdesigners').setAttribute("data-count", "0");
                    }
                    if(q4 == 3){
                        document.getElementById('numdesigners').setAttribute("data-count", "1");
                    }
                    if(q4 == 4){
                        document.getElementById('numdesigners').setAttribute("data-count", "2");
                    }
                }
                if(q3 == 2){
                    if(q4 == 1){
                        document.getElementById('numdesigners').setAttribute("data-count", "0");
                    }
                    if(q4 == 2){
                        document.getElementById('numdesigners').setAttribute("data-count", "0");
                    }
                    if(q4 == 3){
                        document.getElementById('numdesigners').setAttribute("data-count", "0");
                    }
                    if(q4 == 4){
                        document.getElementById('numdesigners').setAttribute("data-count", "0");
                    }
                }
                if(q3 == 3){
                    if(q4 == 1){
                        document.getElementById('numdesigners').setAttribute("data-count", "0");
                    }
                    if(q4 == 2){
                        document.getElementById('numdesigners').setAttribute("data-count", "0");
                    }
                    if(q4 == 3){
                        document.getElementById('numdesigners').setAttribute("data-count", "0");
                    }
                    if(q4 == 4){
                        document.getElementById('numdesigners').setAttribute("data-count", "1");
                    }
                }
                if(q3 == 4){
                    if(q4 == 1){
                        document.getElementById('numdesigners').setAttribute("data-count", "0");
                    }
                    if(q4 == 2){
                        document.getElementById('numdesigners').setAttribute("data-count", "0");
                    }
                    if(q4 == 3){
                        document.getElementById('numdesigners').setAttribute("data-count", "0");
                    }
                    if(q4 == 4){
                        document.getElementById('numdesigners').setAttribute("data-count", "1");
                    }
                }
            }
            if (q2 == 4){
                if(q3 == 1){
                    if(q4 == 1){
                        document.getElementById('numdesigners').setAttribute("data-count", "1");
                    }
                    if(q4 == 2){
                        document.getElementById('numdesigners').setAttribute("data-count", "3");
                    }
                    if(q4 == 3){
                        document.getElementById('numdesigners').setAttribute("data-count", "0");
                    }
                    if(q4 == 4){
                        document.getElementById('numdesigners').setAttribute("data-count", "59");
                    }
                }
                if(q3 == 2){
                    if(q4 == 1){
                        document.getElementById('numdesigners').setAttribute("data-count", "0");
                    }
                    if(q4 == 2){
                        document.getElementById('numdesigners').setAttribute("data-count", "5");
                    }
                    if(q4 == 3){
                        document.getElementById('numdesigners').setAttribute("data-count", "7");
                    }
                    if(q4 == 4){
                        document.getElementById('numdesigners').setAttribute("data-count", "127");
                    }
                }
                if(q3 == 3){
                    if(q4 == 1){
                        document.getElementById('numdesigners').setAttribute("data-count", "1");
                    }
                    if(q4 == 2){
                        document.getElementById('numdesigners').setAttribute("data-count", "1");
                    }
                    if(q4 == 3){
                        document.getElementById('numdesigners').setAttribute("data-count", "3");
                    }
                    if(q4 == 4){
                        document.getElementById('numdesigners').setAttribute("data-count", "141");
                    }
                }
                if(q3 == 4){
                    if(q4 == 1){
                        document.getElementById('numdesigners').setAttribute("data-count", "0");
                    }
                    if(q4 == 2){
                        document.getElementById('numdesigners').setAttribute("data-count", "1");
                    }
                    if(q4 == 3){
                        document.getElementById('numdesigners').setAttribute("data-count", "2");
                    }
                    if(q4 == 4){
                        document.getElementById('numdesigners').setAttribute("data-count", "48");
                    }
                }
            }
            if (q2 == 5){
                if(q3 == 1){
                    if(q4 == 1){
                        document.getElementById('numdesigners').setAttribute("data-count", "2");
                    }
                    if(q4 == 2){
                        document.getElementById('numdesigners').setAttribute("data-count", "1");
                    }
                    if(q4 == 3){
                        document.getElementById('numdesigners').setAttribute("data-count", "0");
                    }
                    if(q4 == 4){
                        document.getElementById('numdesigners').setAttribute("data-count", "21");
                    }
                }
                if(q3 == 2){
                    if(q4 == 1){
                        document.getElementById('numdesigners').setAttribute("data-count", "0");
                    }
                    if(q4 == 2){
                        document.getElementById('numdesigners').setAttribute("data-count", "1");
                    }
                    if(q4 == 3){
                        document.getElementById('numdesigners').setAttribute("data-count", "1");
                    }
                    if(q4 == 4){
                        document.getElementById('numdesigners').setAttribute("data-count", "29");
                    }
                }
                if(q3 == 3){
                    if(q4 == 1){
                        document.getElementById('numdesigners').setAttribute("data-count", "1");
                    }
                    if(q4 == 2){
                        document.getElementById('numdesigners').setAttribute("data-count", "1");
                    }
                    if(q4 == 3){
                        document.getElementById('numdesigners').setAttribute("data-count", "1");
                    }
                    if(q4 == 4){
                        document.getElementById('numdesigners').setAttribute("data-count", "48");
                    }
                }
                if(q3 == 4){
                    if(q4 == 1){
                        document.getElementById('numdesigners').setAttribute("data-count", "0");
                    }
                    if(q4 == 2){
                        document.getElementById('numdesigners').setAttribute("data-count", "0");
                    }
                    if(q4 == 3){
                        document.getElementById('numdesigners').setAttribute("data-count", "1");
                    }
                    if(q4 == 4){
                        document.getElementById('numdesigners').setAttribute("data-count", "26");
                    }
                }
            }
        }
        if(q1 == 4){
            if (q2 == 1){
                if(q3 == 1){
                    if(q4 == 1){
                        document.getElementById('numdesigners').setAttribute("data-count", "0");
                    }
                    if(q4 == 2){
                        document.getElementById('numdesigners').setAttribute("data-count", "0");
                    }
                    if(q4 == 3){
                        document.getElementById('numdesigners').setAttribute("data-count", "0");
                    }
                    if(q4 == 4){
                        document.getElementById('numdesigners').setAttribute("data-count", "0");
                    }
                }
                if(q3 == 2){
                    if(q4 == 1){
                        document.getElementById('numdesigners').setAttribute("data-count", "0");
                    }
                    if(q4 == 2){
                        document.getElementById('numdesigners').setAttribute("data-count", "0");
                    }
                    if(q4 == 3){
                        document.getElementById('numdesigners').setAttribute("data-count", "0");
                    }
                    if(q4 == 4){
                        document.getElementById('numdesigners').setAttribute("data-count", "0");
                    }
                }
                if(q3 == 3){
                    if(q4 == 1){
                        document.getElementById('numdesigners').setAttribute("data-count", "0");
                    }
                    if(q4 == 2){
                        document.getElementById('numdesigners').setAttribute("data-count", "0");
                    }
                    if(q4 == 3){
                        document.getElementById('numdesigners').setAttribute("data-count", "0");
                    }
                    if(q4 == 4){
                        document.getElementById('numdesigners').setAttribute("data-count", "0");
                    }
                }
                if(q3 == 4){
                    if(q4 == 1){
                        document.getElementById('numdesigners').setAttribute("data-count", "0");
                    }
                    if(q4 == 2){
                        document.getElementById('numdesigners').setAttribute("data-count", "0");
                    }
                    if(q4 == 3){
                        document.getElementById('numdesigners').setAttribute("data-count", "0");
                    }
                    if(q4 == 4){
                        document.getElementById('numdesigners').setAttribute("data-count", "0");
                    }
                }
            }
            if (q2 == 2){
                if(q3 == 1){
                    if(q4 == 1){
                        document.getElementById('numdesigners').setAttribute("data-count", "0");
                    }
                    if(q4 == 2){
                        document.getElementById('numdesigners').setAttribute("data-count", "0");
                    }
                    if(q4 == 3){
                        document.getElementById('numdesigners').setAttribute("data-count", "0");
                    }
                    if(q4 == 4){
                        document.getElementById('numdesigners').setAttribute("data-count", "0");
                    }
                }
                if(q3 == 2){
                    if(q4 == 1){
                        document.getElementById('numdesigners').setAttribute("data-count", "0");
                    }
                    if(q4 == 2){
                        document.getElementById('numdesigners').setAttribute("data-count", "0");
                    }
                    if(q4 == 3){
                        document.getElementById('numdesigners').setAttribute("data-count", "0");
                    }
                    if(q4 == 4){
                        document.getElementById('numdesigners').setAttribute("data-count", "1");
                    }
                }
                if(q3 == 3){
                    if(q4 == 1){
                        document.getElementById('numdesigners').setAttribute("data-count", "1");
                    }
                    if(q4 == 2){
                        document.getElementById('numdesigners').setAttribute("data-count", "0");
                    }
                    if(q4 == 3){
                        document.getElementById('numdesigners').setAttribute("data-count", "0");
                    }
                    if(q4 == 4){
                        document.getElementById('numdesigners').setAttribute("data-count", "0");
                    }
                }
                if(q3 == 4){
                    if(q4 == 1){
                        document.getElementById('numdesigners').setAttribute("data-count", "0");
                    }
                    if(q4 == 2){
                        document.getElementById('numdesigners').setAttribute("data-count", "0");
                    }
                    if(q4 == 3){
                        document.getElementById('numdesigners').setAttribute("data-count", "0");
                    }
                    if(q4 == 4){
                        document.getElementById('numdesigners').setAttribute("data-count", "2");
                    }
                }
            }
            if (q2 == 3){
                if(q3 == 1){
                    if(q4 == 1){
                        document.getElementById('numdesigners').setAttribute("data-count", "0");
                    }
                    if(q4 == 2){
                        document.getElementById('numdesigners').setAttribute("data-count", "0");
                    }
                    if(q4 == 3){
                        document.getElementById('numdesigners').setAttribute("data-count", "0");
                    }
                    if(q4 == 4){
                        document.getElementById('numdesigners').setAttribute("data-count", "0");
                    }
                }
                if(q3 == 2){
                    if(q4 == 1){
                        document.getElementById('numdesigners').setAttribute("data-count", "0");
                    }
                    if(q4 == 2){
                        document.getElementById('numdesigners').setAttribute("data-count", "0");
                    }
                    if(q4 == 3){
                        document.getElementById('numdesigners').setAttribute("data-count", "0");
                    }
                    if(q4 == 4){
                        document.getElementById('numdesigners').setAttribute("data-count", "0");
                    }
                }
                if(q3 == 3){
                    if(q4 == 1){
                        document.getElementById('numdesigners').setAttribute("data-count", "0");
                    }
                    if(q4 == 2){
                        document.getElementById('numdesigners').setAttribute("data-count", "0");
                    }
                    if(q4 == 3){
                        document.getElementById('numdesigners').setAttribute("data-count", "0");
                    }
                    if(q4 == 4){
                        document.getElementById('numdesigners').setAttribute("data-count", "0");
                    }
                }
                if(q3 == 4){
                    if(q4 == 1){
                        document.getElementById('numdesigners').setAttribute("data-count", "0");
                    }
                    if(q4 == 2){
                        document.getElementById('numdesigners').setAttribute("data-count", "0");
                    }
                    if(q4 == 3){
                        document.getElementById('numdesigners').setAttribute("data-count", "0");
                    }
                    if(q4 == 4){
                        document.getElementById('numdesigners').setAttribute("data-count", "0");
                    }
                }
            }
            if (q2 == 4){
                if(q3 == 1){
                    if(q4 == 1){
                        document.getElementById('numdesigners').setAttribute("data-count", "0");
                    }
                    if(q4 == 2){
                        document.getElementById('numdesigners').setAttribute("data-count", "0");
                    }
                    if(q4 == 3){
                        document.getElementById('numdesigners').setAttribute("data-count", "0");
                    }
                    if(q4 == 4){
                        document.getElementById('numdesigners').setAttribute("data-count", "8");
                    }
                }
                if(q3 == 2){
                    if(q4 == 1){
                        document.getElementById('numdesigners').setAttribute("data-count", "0");
                    }
                    if(q4 == 2){
                        document.getElementById('numdesigners').setAttribute("data-count", "0");
                    }
                    if(q4 == 3){
                        document.getElementById('numdesigners').setAttribute("data-count", "0");
                    }
                    if(q4 == 4){
                        document.getElementById('numdesigners').setAttribute("data-count", "7");
                    }
                }
                if(q3 == 3){
                    if(q4 == 1){
                        document.getElementById('numdesigners').setAttribute("data-count", "0");
                    }
                    if(q4 == 2){
                        document.getElementById('numdesigners').setAttribute("data-count", "0");
                    }
                    if(q4 == 3){
                        document.getElementById('numdesigners').setAttribute("data-count", "0");
                    }
                    if(q4 == 4){
                        document.getElementById('numdesigners').setAttribute("data-count", "7");
                    }
                }
                if(q3 == 4){
                    if(q4 == 1){
                        document.getElementById('numdesigners').setAttribute("data-count", "0");
                    }
                    if(q4 == 2){
                        document.getElementById('numdesigners').setAttribute("data-count", "0");
                    }
                    if(q4 == 3){
                        document.getElementById('numdesigners').setAttribute("data-count", "0");
                    }
                    if(q4 == 4){
                        document.getElementById('numdesigners').setAttribute("data-count", "6");
                    }
                }
            }
            if (q2 == 5){
                if(q3 == 1){
                    if(q4 == 1){
                        document.getElementById('numdesigners').setAttribute("data-count", "0");
                    }
                    if(q4 == 2){
                        document.getElementById('numdesigners').setAttribute("data-count", "0");
                    }
                    if(q4 == 3){
                        document.getElementById('numdesigners').setAttribute("data-count", "0");
                    }
                    if(q4 == 4){
                        document.getElementById('numdesigners').setAttribute("data-count", "4");
                    }
                }
                if(q3 == 2){
                    if(q4 == 1){
                        document.getElementById('numdesigners').setAttribute("data-count", "0");
                    }
                    if(q4 == 2){
                        document.getElementById('numdesigners').setAttribute("data-count", "0");
                    }
                    if(q4 == 3){
                        document.getElementById('numdesigners').setAttribute("data-count", "0");
                    }
                    if(q4 == 4){
                        document.getElementById('numdesigners').setAttribute("data-count", "4");
                    }
                }
                if(q3 == 3){
                    if(q4 == 1){
                        document.getElementById('numdesigners').setAttribute("data-count", "0");
                    }
                    if(q4 == 2){
                        document.getElementById('numdesigners').setAttribute("data-count", "0");
                    }
                    if(q4 == 3){
                        document.getElementById('numdesigners').setAttribute("data-count", "0");
                    }
                    if(q4 == 4){
                        document.getElementById('numdesigners').setAttribute("data-count", "4");
                    }
                }
                if(q3 == 4){
                    if(q4 == 1){
                        document.getElementById('numdesigners').setAttribute("data-count", "0");
                    }
                    if(q4 == 2){
                        document.getElementById('numdesigners').setAttribute("data-count", "0");
                    }
                    if(q4 == 3){
                        document.getElementById('numdesigners').setAttribute("data-count", "0");
                    }
                    if(q4 == 4){
                        document.getElementById('numdesigners').setAttribute("data-count", "4");
                    }
                }
            }
        }
    }

    if(document.getElementById('q5a3c').checked) {
        document.getElementById('q5a3').style.opacity = 1;
        document.getElementById('question5').style.opacity = 0;
        document.getElementById('question6').style.opacity = 1;
        document.getElementById('question6answers').style.zIndex = 5;
        document.getElementById('next5').style.display = "none";
        document.getElementById('next6').style.display = "block"; 
        q5 = 3;
        if(q1 == 1){
            if (q2 == 1){
                if(q3 == 1){
                    if(q4 == 1){
                        document.getElementById('numdesigners').setAttribute("data-count", "1");
                    }
                    if(q4 == 2){
                        document.getElementById('numdesigners').setAttribute("data-count", "0");
                    }
                    if(q4 == 3){
                        document.getElementById('numdesigners').setAttribute("data-count", "0");
                    }
                    if(q4 == 4){
                        document.getElementById('numdesigners').setAttribute("data-count", "0");
                    }
                }
                if(q3 == 2){
                    if(q4 == 1){
                        document.getElementById('numdesigners').setAttribute("data-count", "1");
                    }
                    if(q4 == 2){
                        document.getElementById('numdesigners').setAttribute("data-count", "5");
                    }
                    if(q4 == 3){
                        document.getElementById('numdesigners').setAttribute("data-count", "1");
                    }
                    if(q4 == 4){
                        document.getElementById('numdesigners').setAttribute("data-count", "0");
                    }
                }
                if(q3 == 3){
                    if(q4 == 1){
                        document.getElementById('numdesigners').setAttribute("data-count", "0");
                    }
                    if(q4 == 2){
                        document.getElementById('numdesigners').setAttribute("data-count", "0");
                    }
                    if(q4 == 3){
                        document.getElementById('numdesigners').setAttribute("data-count", "0");
                    }
                    if(q4 == 4){
                        document.getElementById('numdesigners').setAttribute("data-count", "0");
                    }
                }
                if(q3 == 4){
                    if(q4 == 1){
                        document.getElementById('numdesigners').setAttribute("data-count", "0");
                    }
                    if(q4 == 2){
                        document.getElementById('numdesigners').setAttribute("data-count", "0");
                    }
                    if(q4 == 3){
                        document.getElementById('numdesigners').setAttribute("data-count", "0");
                    }
                    if(q4 == 4){
                        document.getElementById('numdesigners').setAttribute("data-count", "0");
                    }
                }
            }
            if (q2 == 2){
                if(q3 == 1){
                    if(q4 == 1){
                        document.getElementById('numdesigners').setAttribute("data-count", "5");
                    }
                    if(q4 == 2){
                        document.getElementById('numdesigners').setAttribute("data-count", "15");
                    }
                    if(q4 == 3){
                        document.getElementById('numdesigners').setAttribute("data-count", "2");
                    }
                    if(q4 == 4){
                        document.getElementById('numdesigners').setAttribute("data-count", "0");
                    }
                }
                if(q3 == 2){
                    if(q4 == 1){
                        document.getElementById('numdesigners').setAttribute("data-count", "1");
                    }
                    if(q4 == 2){
                        document.getElementById('numdesigners').setAttribute("data-count", "32");
                    }
                    if(q4 == 3){
                        document.getElementById('numdesigners').setAttribute("data-count", "3");
                    }
                    if(q4 == 4){
                        document.getElementById('numdesigners').setAttribute("data-count", "0");
                    }
                }
                if(q3 == 3){
                    if(q4 == 1){
                        document.getElementById('numdesigners').setAttribute("data-count", "3");
                    }
                    if(q4 == 2){
                        document.getElementById('numdesigners').setAttribute("data-count", "20");
                    }
                    if(q4 == 3){
                        document.getElementById('numdesigners').setAttribute("data-count", "2");
                    }
                    if(q4 == 4){
                        document.getElementById('numdesigners').setAttribute("data-count", "1");
                    }
                }
                if(q3 == 4){
                    if(q4 == 1){
                        document.getElementById('numdesigners').setAttribute("data-count", "0");
                    }
                    if(q4 == 2){
                        document.getElementById('numdesigners').setAttribute("data-count", "0");
                    }
                    if(q4 == 3){
                        document.getElementById('numdesigners').setAttribute("data-count", "2");
                    }
                    if(q4 == 4){
                        document.getElementById('numdesigners').setAttribute("data-count", "0");
                    }
                }
            }
            if (q2 == 3){
                if(q3 == 1){
                    if(q4 == 1){
                        document.getElementById('numdesigners').setAttribute("data-count", "5");
                    }
                    if(q4 == 2){
                        document.getElementById('numdesigners').setAttribute("data-count", "8");
                    }
                    if(q4 == 3){
                        document.getElementById('numdesigners').setAttribute("data-count", "2");
                    }
                    if(q4 == 4){
                        document.getElementById('numdesigners').setAttribute("data-count", "0");
                    }
                }
                if(q3 == 2){
                    if(q4 == 1){
                        document.getElementById('numdesigners').setAttribute("data-count", "0");
                    }
                    if(q4 == 2){
                        document.getElementById('numdesigners').setAttribute("data-count", "0");
                    }
                    if(q4 == 3){
                        document.getElementById('numdesigners').setAttribute("data-count", "0");
                    }
                    if(q4 == 4){
                        document.getElementById('numdesigners').setAttribute("data-count", "0");
                    }
                }
                if(q3 == 3){
                    if(q4 == 1){
                        document.getElementById('numdesigners').setAttribute("data-count", "0");
                    }
                    if(q4 == 2){
                        document.getElementById('numdesigners').setAttribute("data-count", "1");
                    }
                    if(q4 == 3){
                        document.getElementById('numdesigners').setAttribute("data-count", "0");
                    }
                    if(q4 == 4){
                        document.getElementById('numdesigners').setAttribute("data-count", "0");
                    }
                }
                if(q3 == 4){
                    if(q4 == 1){
                        document.getElementById('numdesigners').setAttribute("data-count", "3");
                    }
                    if(q4 == 2){
                        document.getElementById('numdesigners').setAttribute("data-count", "0");
                    }
                    if(q4 == 3){
                        document.getElementById('numdesigners').setAttribute("data-count", "0");
                    }
                    if(q4 == 4){
                        document.getElementById('numdesigners').setAttribute("data-count", "0");
                    }
                }
            }
            if (q2 == 4){
                if(q3 == 1){
                    if(q4 == 1){
                        document.getElementById('numdesigners').setAttribute("data-count", "27");
                    }
                    if(q4 == 2){
                        document.getElementById('numdesigners').setAttribute("data-count", "59");
                    }
                    if(q4 == 3){
                        document.getElementById('numdesigners').setAttribute("data-count", "9");
                    }
                    if(q4 == 4){
                        document.getElementById('numdesigners').setAttribute("data-count", "0");
                    }
                }
                if(q3 == 2){
                    if(q4 == 1){
                        document.getElementById('numdesigners').setAttribute("data-count", "32");
                    }
                    if(q4 == 2){
                        document.getElementById('numdesigners').setAttribute("data-count", "122");
                    }
                    if(q4 == 3){
                        document.getElementById('numdesigners').setAttribute("data-count", "16");
                    }
                    if(q4 == 4){
                        document.getElementById('numdesigners').setAttribute("data-count", "2");
                    }
                }
                if(q3 == 3){
                    if(q4 == 1){
                        document.getElementById('numdesigners').setAttribute("data-count", "15");
                    }
                    if(q4 == 2){
                        document.getElementById('numdesigners').setAttribute("data-count", "86");
                    }
                    if(q4 == 3){
                        document.getElementById('numdesigners').setAttribute("data-count", "8");
                    }
                    if(q4 == 4){
                        document.getElementById('numdesigners').setAttribute("data-count", "1");
                    }
                }
                if(q3 == 4){
                    if(q4 == 1){
                        document.getElementById('numdesigners').setAttribute("data-count", "0");
                    }
                    if(q4 == 2){
                        document.getElementById('numdesigners').setAttribute("data-count", "6");
                    }
                    if(q4 == 3){
                        document.getElementById('numdesigners').setAttribute("data-count", "0");
                    }
                    if(q4 == 4){
                        document.getElementById('numdesigners').setAttribute("data-count", "1");
                    }
                }
            }
            if (q2 == 5){
                if(q3 == 1){
                    if(q4 == 1){
                        document.getElementById('numdesigners').setAttribute("data-count", "5");
                    }
                    if(q4 == 2){
                        document.getElementById('numdesigners').setAttribute("data-count", "12");
                    }
                    if(q4 == 3){
                        document.getElementById('numdesigners').setAttribute("data-count", "3");
                    }
                    if(q4 == 4){
                        document.getElementById('numdesigners').setAttribute("data-count", "0");
                    }
                }
                if(q3 == 2){
                    if(q4 == 1){
                        document.getElementById('numdesigners').setAttribute("data-count", "4");
                    }
                    if(q4 == 2){
                        document.getElementById('numdesigners').setAttribute("data-count", "32");
                    }
                    if(q4 == 3){
                        document.getElementById('numdesigners').setAttribute("data-count", "4");
                    }
                    if(q4 == 4){
                        document.getElementById('numdesigners').setAttribute("data-count", "0");
                    }
                }
                if(q3 == 3){
                    if(q4 == 1){
                        document.getElementById('numdesigners').setAttribute("data-count", "0");
                    }
                    if(q4 == 2){
                        document.getElementById('numdesigners').setAttribute("data-count", "6");
                    }
                    if(q4 == 3){
                        document.getElementById('numdesigners').setAttribute("data-count", "0");
                    }
                    if(q4 == 4){
                        document.getElementById('numdesigners').setAttribute("data-count", "0");
                    }
                }
                if(q3 == 4){
                    if(q4 == 1){
                        document.getElementById('numdesigners').setAttribute("data-count", "0");
                    }
                    if(q4 == 2){
                        document.getElementById('numdesigners').setAttribute("data-count", "6");
                    }
                    if(q4 == 3){
                        document.getElementById('numdesigners').setAttribute("data-count", "0");
                    }
                    if(q4 == 4){
                        document.getElementById('numdesigners').setAttribute("data-count", "0");
                    }
                }
            }
        }
        if(q1 == 2){
            if (q2 == 1){
                if(q3 == 1){
                    if(q4 == 1){
                        document.getElementById('numdesigners').setAttribute("data-count", "0");
                    }
                    if(q4 == 2){
                        document.getElementById('numdesigners').setAttribute("data-count", "1");
                    }
                    if(q4 == 3){
                        document.getElementById('numdesigners').setAttribute("data-count", "3");
                    }
                    if(q4 == 4){
                        document.getElementById('numdesigners').setAttribute("data-count", "0");
                    }
                }
                if(q3 == 2){
                    if(q4 == 1){
                        document.getElementById('numdesigners').setAttribute("data-count", "0");
                    }
                    if(q4 == 2){
                        document.getElementById('numdesigners').setAttribute("data-count", "1");
                    }
                    if(q4 == 3){
                        document.getElementById('numdesigners').setAttribute("data-count", "4");
                    }
                    if(q4 == 4){
                        document.getElementById('numdesigners').setAttribute("data-count", "2");
                    }
                }
                if(q3 == 3){
                    if(q4 == 1){
                        document.getElementById('numdesigners').setAttribute("data-count", "0");
                    }
                    if(q4 == 2){
                        document.getElementById('numdesigners').setAttribute("data-count", "2");
                    }
                    if(q4 == 3){
                        document.getElementById('numdesigners').setAttribute("data-count", "2");
                    }
                    if(q4 == 4){
                        document.getElementById('numdesigners').setAttribute("data-count", "1");
                    }
                }
                if(q3 == 4){
                    if(q4 == 1){
                        document.getElementById('numdesigners').setAttribute("data-count", "0");
                    }
                    if(q4 == 2){
                        document.getElementById('numdesigners').setAttribute("data-count", "0");
                    }
                    if(q4 == 3){
                        document.getElementById('numdesigners').setAttribute("data-count", "0");
                    }
                    if(q4 == 4){
                        document.getElementById('numdesigners').setAttribute("data-count", "0");
                    }
                }
            }
            if (q2 == 2){
                if(q3 == 1){
                    if(q4 == 1){
                        document.getElementById('numdesigners').setAttribute("data-count", "2");
                    }
                    if(q4 == 2){
                        document.getElementById('numdesigners').setAttribute("data-count", "10");
                    }
                    if(q4 == 3){
                        document.getElementById('numdesigners').setAttribute("data-count", "16");
                    }
                    if(q4 == 4){
                        document.getElementById('numdesigners').setAttribute("data-count", "8");
                    }
                }
                if(q3 == 2){
                    if(q4 == 1){
                        document.getElementById('numdesigners').setAttribute("data-count", "4");
                    }
                    if(q4 == 2){
                        document.getElementById('numdesigners').setAttribute("data-count", "43");
                    }
                    if(q4 == 3){
                        document.getElementById('numdesigners').setAttribute("data-count", "52");
                    }
                    if(q4 == 4){
                        document.getElementById('numdesigners').setAttribute("data-count", "27");
                    }
                }
                if(q3 == 3){
                    if(q4 == 1){
                        document.getElementById('numdesigners').setAttribute("data-count", "0");
                    }
                    if(q4 == 2){
                        document.getElementById('numdesigners').setAttribute("data-count", "13");
                    }
                    if(q4 == 3){
                        document.getElementById('numdesigners').setAttribute("data-count", "22");
                    }
                    if(q4 == 4){
                        document.getElementById('numdesigners').setAttribute("data-count", "21");
                    }
                }
                if(q3 == 4){
                    if(q4 == 1){
                        document.getElementById('numdesigners').setAttribute("data-count", "0");
                    }
                    if(q4 == 2){
                        document.getElementById('numdesigners').setAttribute("data-count", "3");
                    }
                    if(q4 == 3){
                        document.getElementById('numdesigners').setAttribute("data-count", "6");
                    }
                    if(q4 == 4){
                        document.getElementById('numdesigners').setAttribute("data-count", "2");
                    }
                }
            }
            if (q2 == 3){
                if(q3 == 1){
                    if(q4 == 1){
                        document.getElementById('numdesigners').setAttribute("data-count", "2");
                    }
                    if(q4 == 2){
                        document.getElementById('numdesigners').setAttribute("data-count", "0");
                    }
                    if(q4 == 3){
                        document.getElementById('numdesigners').setAttribute("data-count", "0");
                    }
                    if(q4 == 4){
                        document.getElementById('numdesigners').setAttribute("data-count", "1");
                    }
                }
                if(q3 == 2){
                    if(q4 == 1){
                        document.getElementById('numdesigners').setAttribute("data-count", "1");
                    }
                    if(q4 == 2){
                        document.getElementById('numdesigners').setAttribute("data-count", "4");
                    }
                    if(q4 == 3){
                        document.getElementById('numdesigners').setAttribute("data-count", "6");
                    }
                    if(q4 == 4){
                        document.getElementById('numdesigners').setAttribute("data-count", "1");
                    }
                }
                if(q3 == 3){
                    if(q4 == 1){
                        document.getElementById('numdesigners').setAttribute("data-count", "0");
                    }
                    if(q4 == 2){
                        document.getElementById('numdesigners').setAttribute("data-count", "2");
                    }
                    if(q4 == 3){
                        document.getElementById('numdesigners').setAttribute("data-count", "2");
                    }
                    if(q4 == 4){
                        document.getElementById('numdesigners').setAttribute("data-count", "1");
                    }
                }
                if(q3 == 4){
                    if(q4 == 1){
                        document.getElementById('numdesigners').setAttribute("data-count", "0");
                    }
                    if(q4 == 2){
                        document.getElementById('numdesigners').setAttribute("data-count", "1");
                    }
                    if(q4 == 3){
                        document.getElementById('numdesigners').setAttribute("data-count", "1");
                    }
                    if(q4 == 4){
                        document.getElementById('numdesigners').setAttribute("data-count", "1");
                    }
                }
            }
            if (q2 == 4){
                if(q3 == 1){
                    if(q4 == 1){
                        document.getElementById('numdesigners').setAttribute("data-count", "3");
                    }
                    if(q4 == 2){
                        document.getElementById('numdesigners').setAttribute("data-count", "28");
                    }
                    if(q4 == 3){
                        document.getElementById('numdesigners').setAttribute("data-count", "51");
                    }
                    if(q4 == 4){
                        document.getElementById('numdesigners').setAttribute("data-count", "35");
                    }
                }
                if(q3 == 2){
                    if(q4 == 1){
                        document.getElementById('numdesigners').setAttribute("data-count", "4");
                    }
                    if(q4 == 2){
                        document.getElementById('numdesigners').setAttribute("data-count", "136");
                    }
                    if(q4 == 3){
                        document.getElementById('numdesigners').setAttribute("data-count", "176");
                    }
                    if(q4 == 4){
                        document.getElementById('numdesigners').setAttribute("data-count", "93");
                    }
                }
                if(q3 == 3){
                    if(q4 == 1){
                        document.getElementById('numdesigners').setAttribute("data-count", "2");
                    }
                    if(q4 == 2){
                        document.getElementById('numdesigners').setAttribute("data-count", "60");
                    }
                    if(q4 == 3){
                        document.getElementById('numdesigners').setAttribute("data-count", "86");
                    }
                    if(q4 == 4){
                        document.getElementById('numdesigners').setAttribute("data-count", "81");
                    }
                }
                if(q3 == 4){
                    if(q4 == 1){
                        document.getElementById('numdesigners').setAttribute("data-count", "1");
                    }
                    if(q4 == 2){
                        document.getElementById('numdesigners').setAttribute("data-count", "6");
                    }
                    if(q4 == 3){
                        document.getElementById('numdesigners').setAttribute("data-count", "23");
                    }
                    if(q4 == 4){
                        document.getElementById('numdesigners').setAttribute("data-count", "29");
                    }
                }
            }
            if (q2 == 5){
                if(q3 == 1){
                    if(q4 == 1){
                        document.getElementById('numdesigners').setAttribute("data-count", "1");
                    }
                    if(q4 == 2){
                        document.getElementById('numdesigners').setAttribute("data-count", "13");
                    }
                    if(q4 == 3){
                        document.getElementById('numdesigners').setAttribute("data-count", "10");
                    }
                    if(q4 == 4){
                        document.getElementById('numdesigners').setAttribute("data-count", "15");
                    }
                }
                if(q3 == 2){
                    if(q4 == 1){
                        document.getElementById('numdesigners').setAttribute("data-count", "2");
                    }
                    if(q4 == 2){
                        document.getElementById('numdesigners').setAttribute("data-count", "20");
                    }
                    if(q4 == 3){
                        document.getElementById('numdesigners').setAttribute("data-count", "33");
                    }
                    if(q4 == 4){
                        document.getElementById('numdesigners').setAttribute("data-count", "19");
                    }
                }
                if(q3 == 3){
                    if(q4 == 1){
                        document.getElementById('numdesigners').setAttribute("data-count", "1");
                    }
                    if(q4 == 2){
                        document.getElementById('numdesigners').setAttribute("data-count", "13");
                    }
                    if(q4 == 3){
                        document.getElementById('numdesigners').setAttribute("data-count", "29");
                    }
                    if(q4 == 4){
                        document.getElementById('numdesigners').setAttribute("data-count", "19");
                    }
                }
                if(q3 == 4){
                    if(q4 == 1){
                        document.getElementById('numdesigners').setAttribute("data-count", "1");
                    }
                    if(q4 == 2){
                        document.getElementById('numdesigners').setAttribute("data-count", "2");
                    }
                    if(q4 == 3){
                        document.getElementById('numdesigners').setAttribute("data-count", "9");
                    }
                    if(q4 == 4){
                        document.getElementById('numdesigners').setAttribute("data-count", "11");
                    }
                }
            }
        }
        if(q1 == 3){
            if (q2 == 1){
                if(q3 == 1){
                    if(q4 == 1){
                        document.getElementById('numdesigners').setAttribute("data-count", "0");
                    }
                    if(q4 == 2){
                        document.getElementById('numdesigners').setAttribute("data-count", "0");
                    }
                    if(q4 == 3){
                        document.getElementById('numdesigners').setAttribute("data-count", "0");
                    }
                    if(q4 == 4){
                        document.getElementById('numdesigners').setAttribute("data-count", "0");
                    }
                }
                if(q3 == 2){
                    if(q4 == 1){
                        document.getElementById('numdesigners').setAttribute("data-count", "0");
                    }
                    if(q4 == 2){
                        document.getElementById('numdesigners').setAttribute("data-count", "1");
                    }
                    if(q4 == 3){
                        document.getElementById('numdesigners').setAttribute("data-count", "0");
                    }
                    if(q4 == 4){
                        document.getElementById('numdesigners').setAttribute("data-count", "2");
                    }
                }
                if(q3 == 3){
                    if(q4 == 1){
                        document.getElementById('numdesigners').setAttribute("data-count", "0");
                    }
                    if(q4 == 2){
                        document.getElementById('numdesigners').setAttribute("data-count", "0");
                    }
                    if(q4 == 3){
                        document.getElementById('numdesigners').setAttribute("data-count", "0");
                    }
                    if(q4 == 4){
                        document.getElementById('numdesigners').setAttribute("data-count", "0");
                    }
                }
                if(q3 == 4){
                    if(q4 == 1){
                        document.getElementById('numdesigners').setAttribute("data-count", "0");
                    }
                    if(q4 == 2){
                        document.getElementById('numdesigners').setAttribute("data-count", "0");
                    }
                    if(q4 == 3){
                        document.getElementById('numdesigners').setAttribute("data-count", "0");
                    }
                    if(q4 == 4){
                        document.getElementById('numdesigners').setAttribute("data-count", "0");
                    }
                }
            }
            if (q2 == 2){
                if(q3 == 1){
                    if(q4 == 1){
                        document.getElementById('numdesigners').setAttribute("data-count", "0");
                    }
                    if(q4 == 2){
                        document.getElementById('numdesigners').setAttribute("data-count", "0");
                    }
                    if(q4 == 3){
                        document.getElementById('numdesigners').setAttribute("data-count", "1");
                    }
                    if(q4 == 4){
                        document.getElementById('numdesigners').setAttribute("data-count", "8");
                    }
                }
                if(q3 == 2){
                    if(q4 == 1){
                        document.getElementById('numdesigners').setAttribute("data-count", "0");
                    }
                    if(q4 == 2){
                        document.getElementById('numdesigners').setAttribute("data-count", "0");
                    }
                    if(q4 == 3){
                        document.getElementById('numdesigners').setAttribute("data-count", "1");
                    }
                    if(q4 == 4){
                        document.getElementById('numdesigners').setAttribute("data-count", "7");
                    }
                }
                if(q3 == 3){
                    if(q4 == 1){
                        document.getElementById('numdesigners').setAttribute("data-count", "0");
                    }
                    if(q4 == 2){
                        document.getElementById('numdesigners').setAttribute("data-count", "0");
                    }
                    if(q4 == 3){
                        document.getElementById('numdesigners').setAttribute("data-count", "0");
                    }
                    if(q4 == 4){
                        document.getElementById('numdesigners').setAttribute("data-count", "13");
                    }
                }
                if(q3 == 4){
                    if(q4 == 1){
                        document.getElementById('numdesigners').setAttribute("data-count", "0");
                    }
                    if(q4 == 2){
                        document.getElementById('numdesigners').setAttribute("data-count", "0");
                    }
                    if(q4 == 3){
                        document.getElementById('numdesigners').setAttribute("data-count", "1");
                    }
                    if(q4 == 4){
                        document.getElementById('numdesigners').setAttribute("data-count", "1");
                    }
                }
            }
            if (q2 == 3){
                if(q3 == 1){
                    if(q4 == 1){
                        document.getElementById('numdesigners').setAttribute("data-count", "0");
                    }
                    if(q4 == 2){
                        document.getElementById('numdesigners').setAttribute("data-count", "0");
                    }
                    if(q4 == 3){
                        document.getElementById('numdesigners').setAttribute("data-count", "0");
                    }
                    if(q4 == 4){
                        document.getElementById('numdesigners').setAttribute("data-count", "2");
                    }
                }
                if(q3 == 2){
                    if(q4 == 1){
                        document.getElementById('numdesigners').setAttribute("data-count", "0");
                    }
                    if(q4 == 2){
                        document.getElementById('numdesigners').setAttribute("data-count", "0");
                    }
                    if(q4 == 3){
                        document.getElementById('numdesigners').setAttribute("data-count", "0");
                    }
                    if(q4 == 4){
                        document.getElementById('numdesigners').setAttribute("data-count", "0");
                    }
                }
                if(q3 == 3){
                    if(q4 == 1){
                        document.getElementById('numdesigners').setAttribute("data-count", "0");
                    }
                    if(q4 == 2){
                        document.getElementById('numdesigners').setAttribute("data-count", "0");
                    }
                    if(q4 == 3){
                        document.getElementById('numdesigners').setAttribute("data-count", "0");
                    }
                    if(q4 == 4){
                        document.getElementById('numdesigners').setAttribute("data-count", "1");
                    }
                }
                if(q3 == 4){
                    if(q4 == 1){
                        document.getElementById('numdesigners').setAttribute("data-count", "0");
                    }
                    if(q4 == 2){
                        document.getElementById('numdesigners').setAttribute("data-count", "0");
                    }
                    if(q4 == 3){
                        document.getElementById('numdesigners').setAttribute("data-count", "0");
                    }
                    if(q4 == 4){
                        document.getElementById('numdesigners').setAttribute("data-count", "0");
                    }
                }
            }
            if (q2 == 4){
                if(q3 == 1){
                    if(q4 == 1){
                        document.getElementById('numdesigners').setAttribute("data-count", "0");
                    }
                    if(q4 == 2){
                        document.getElementById('numdesigners').setAttribute("data-count", "6");
                    }
                    if(q4 == 3){
                        document.getElementById('numdesigners').setAttribute("data-count", "0");
                    }
                    if(q4 == 4){
                        document.getElementById('numdesigners').setAttribute("data-count", "26");
                    }
                }
                if(q3 == 2){
                    if(q4 == 1){
                        document.getElementById('numdesigners').setAttribute("data-count", "0");
                    }
                    if(q4 == 2){
                        document.getElementById('numdesigners').setAttribute("data-count", "1");
                    }
                    if(q4 == 3){
                        document.getElementById('numdesigners').setAttribute("data-count", "4");
                    }
                    if(q4 == 4){
                        document.getElementById('numdesigners').setAttribute("data-count", "78");
                    }
                }
                if(q3 == 3){
                    if(q4 == 1){
                        document.getElementById('numdesigners').setAttribute("data-count", "1");
                    }
                    if(q4 == 2){
                        document.getElementById('numdesigners').setAttribute("data-count", "1");
                    }
                    if(q4 == 3){
                        document.getElementById('numdesigners').setAttribute("data-count", "0");
                    }
                    if(q4 == 4){
                        document.getElementById('numdesigners').setAttribute("data-count", "51");
                    }
                }
                if(q3 == 4){
                    if(q4 == 1){
                        document.getElementById('numdesigners').setAttribute("data-count", "0");
                    }
                    if(q4 == 2){
                        document.getElementById('numdesigners').setAttribute("data-count", "1");
                    }
                    if(q4 == 3){
                        document.getElementById('numdesigners').setAttribute("data-count", "0");
                    }
                    if(q4 == 4){
                        document.getElementById('numdesigners').setAttribute("data-count", "19");
                    }
                }
            }
            if (q2 == 5){
                if(q3 == 1){
                    if(q4 == 1){
                        document.getElementById('numdesigners').setAttribute("data-count", "0");
                    }
                    if(q4 == 2){
                        document.getElementById('numdesigners').setAttribute("data-count", "1");
                    }
                    if(q4 == 3){
                        document.getElementById('numdesigners').setAttribute("data-count", "0");
                    }
                    if(q4 == 4){
                        document.getElementById('numdesigners').setAttribute("data-count", "7");
                    }
                }
                if(q3 == 2){
                    if(q4 == 1){
                        document.getElementById('numdesigners').setAttribute("data-count", "0");
                    }
                    if(q4 == 2){
                        document.getElementById('numdesigners').setAttribute("data-count", "0");
                    }
                    if(q4 == 3){
                        document.getElementById('numdesigners').setAttribute("data-count", "0");
                    }
                    if(q4 == 4){
                        document.getElementById('numdesigners').setAttribute("data-count", "12");
                    }
                }
                if(q3 == 3){
                    if(q4 == 1){
                        document.getElementById('numdesigners').setAttribute("data-count", "0");
                    }
                    if(q4 == 2){
                        document.getElementById('numdesigners').setAttribute("data-count", "0");
                    }
                    if(q4 == 3){
                        document.getElementById('numdesigners').setAttribute("data-count", "0");
                    }
                    if(q4 == 4){
                        document.getElementById('numdesigners').setAttribute("data-count", "23");
                    }
                }
                if(q3 == 4){
                    if(q4 == 1){
                        document.getElementById('numdesigners').setAttribute("data-count", "0");
                    }
                    if(q4 == 2){
                        document.getElementById('numdesigners').setAttribute("data-count", "0");
                    }
                    if(q4 == 3){
                        document.getElementById('numdesigners').setAttribute("data-count", "0");
                    }
                    if(q4 == 4){
                        document.getElementById('numdesigners').setAttribute("data-count", "11");
                    }
                }
            }
        }
        if(q1 == 4){
            if (q2 == 1){
                if(q3 == 1){
                    if(q4 == 1){
                        document.getElementById('numdesigners').setAttribute("data-count", "0");
                    }
                    if(q4 == 2){
                        document.getElementById('numdesigners').setAttribute("data-count", "0");
                    }
                    if(q4 == 3){
                        document.getElementById('numdesigners').setAttribute("data-count", "0");
                    }
                    if(q4 == 4){
                        document.getElementById('numdesigners').setAttribute("data-count", "0");
                    }
                }
                if(q3 == 2){
                    if(q4 == 1){
                        document.getElementById('numdesigners').setAttribute("data-count", "0");
                    }
                    if(q4 == 2){
                        document.getElementById('numdesigners').setAttribute("data-count", "0");
                    }
                    if(q4 == 3){
                        document.getElementById('numdesigners').setAttribute("data-count", "0");
                    }
                    if(q4 == 4){
                        document.getElementById('numdesigners').setAttribute("data-count", "0");
                    }
                }
                if(q3 == 3){
                    if(q4 == 1){
                        document.getElementById('numdesigners').setAttribute("data-count", "0");
                    }
                    if(q4 == 2){
                        document.getElementById('numdesigners').setAttribute("data-count", "0");
                    }
                    if(q4 == 3){
                        document.getElementById('numdesigners').setAttribute("data-count", "0");
                    }
                    if(q4 == 4){
                        document.getElementById('numdesigners').setAttribute("data-count", "0");
                    }
                }
                if(q3 == 4){
                    if(q4 == 1){
                        document.getElementById('numdesigners').setAttribute("data-count", "0");
                    }
                    if(q4 == 2){
                        document.getElementById('numdesigners').setAttribute("data-count", "0");
                    }
                    if(q4 == 3){
                        document.getElementById('numdesigners').setAttribute("data-count", "0");
                    }
                    if(q4 == 4){
                        document.getElementById('numdesigners').setAttribute("data-count", "0");
                    }
                }
            }
            if (q2 == 2){
                if(q3 == 1){
                    if(q4 == 1){
                        document.getElementById('numdesigners').setAttribute("data-count", "0");
                    }
                    if(q4 == 2){
                        document.getElementById('numdesigners').setAttribute("data-count", "0");
                    }
                    if(q4 == 3){
                        document.getElementById('numdesigners').setAttribute("data-count", "0");
                    }
                    if(q4 == 4){
                        document.getElementById('numdesigners').setAttribute("data-count", "0");
                    }
                }
                if(q3 == 2){
                    if(q4 == 1){
                        document.getElementById('numdesigners').setAttribute("data-count", "0");
                    }
                    if(q4 == 2){
                        document.getElementById('numdesigners').setAttribute("data-count", "0");
                    }
                    if(q4 == 3){
                        document.getElementById('numdesigners').setAttribute("data-count", "0");
                    }
                    if(q4 == 4){
                        document.getElementById('numdesigners').setAttribute("data-count", "0");
                    }
                }
                if(q3 == 3){
                    if(q4 == 1){
                        document.getElementById('numdesigners').setAttribute("data-count", "1");
                    }
                    if(q4 == 2){
                        document.getElementById('numdesigners').setAttribute("data-count", "0");
                    }
                    if(q4 == 3){
                        document.getElementById('numdesigners').setAttribute("data-count", "0");
                    }
                    if(q4 == 4){
                        document.getElementById('numdesigners').setAttribute("data-count", "0");
                    }
                }
                if(q3 == 4){
                    if(q4 == 1){
                        document.getElementById('numdesigners').setAttribute("data-count", "0");
                    }
                    if(q4 == 2){
                        document.getElementById('numdesigners').setAttribute("data-count", "0");
                    }
                    if(q4 == 3){
                        document.getElementById('numdesigners').setAttribute("data-count", "0");
                    }
                    if(q4 == 4){
                        document.getElementById('numdesigners').setAttribute("data-count", "1");
                    }
                }
            }
            if (q2 == 3){
                if(q3 == 1){
                    if(q4 == 1){
                        document.getElementById('numdesigners').setAttribute("data-count", "0");
                    }
                    if(q4 == 2){
                        document.getElementById('numdesigners').setAttribute("data-count", "0");
                    }
                    if(q4 == 3){
                        document.getElementById('numdesigners').setAttribute("data-count", "0");
                    }
                    if(q4 == 4){
                        document.getElementById('numdesigners').setAttribute("data-count", "0");
                    }
                }
                if(q3 == 2){
                    if(q4 == 1){
                        document.getElementById('numdesigners').setAttribute("data-count", "0");
                    }
                    if(q4 == 2){
                        document.getElementById('numdesigners').setAttribute("data-count", "0");
                    }
                    if(q4 == 3){
                        document.getElementById('numdesigners').setAttribute("data-count", "0");
                    }
                    if(q4 == 4){
                        document.getElementById('numdesigners').setAttribute("data-count", "0");
                    }
                }
                if(q3 == 3){
                    if(q4 == 1){
                        document.getElementById('numdesigners').setAttribute("data-count", "0");
                    }
                    if(q4 == 2){
                        document.getElementById('numdesigners').setAttribute("data-count", "0");
                    }
                    if(q4 == 3){
                        document.getElementById('numdesigners').setAttribute("data-count", "0");
                    }
                    if(q4 == 4){
                        document.getElementById('numdesigners').setAttribute("data-count", "0");
                    }
                }
                if(q3 == 4){
                    if(q4 == 1){
                        document.getElementById('numdesigners').setAttribute("data-count", "0");
                    }
                    if(q4 == 2){
                        document.getElementById('numdesigners').setAttribute("data-count", "0");
                    }
                    if(q4 == 3){
                        document.getElementById('numdesigners').setAttribute("data-count", "0");
                    }
                    if(q4 == 4){
                        document.getElementById('numdesigners').setAttribute("data-count", "0");
                    }
                }
            }
            if (q2 == 4){
                if(q3 == 1){
                    if(q4 == 1){
                        document.getElementById('numdesigners').setAttribute("data-count", "0");
                    }
                    if(q4 == 2){
                        document.getElementById('numdesigners').setAttribute("data-count", "0");
                    }
                    if(q4 == 3){
                        document.getElementById('numdesigners').setAttribute("data-count", "0");
                    }
                    if(q4 == 4){
                        document.getElementById('numdesigners').setAttribute("data-count", "8");
                    }
                }
                if(q3 == 2){
                    if(q4 == 1){
                        document.getElementById('numdesigners').setAttribute("data-count", "0");
                    }
                    if(q4 == 2){
                        document.getElementById('numdesigners').setAttribute("data-count", "0");
                    }
                    if(q4 == 3){
                        document.getElementById('numdesigners').setAttribute("data-count", "0");
                    }
                    if(q4 == 4){
                        document.getElementById('numdesigners').setAttribute("data-count", "1");
                    }
                }
                if(q3 == 3){
                    if(q4 == 1){
                        document.getElementById('numdesigners').setAttribute("data-count", "0");
                    }
                    if(q4 == 2){
                        document.getElementById('numdesigners').setAttribute("data-count", "0");
                    }
                    if(q4 == 3){
                        document.getElementById('numdesigners').setAttribute("data-count", "0");
                    }
                    if(q4 == 4){
                        document.getElementById('numdesigners').setAttribute("data-count", "4");
                    }
                }
                if(q3 == 4){
                    if(q4 == 1){
                        document.getElementById('numdesigners').setAttribute("data-count", "0");
                    }
                    if(q4 == 2){
                        document.getElementById('numdesigners').setAttribute("data-count", "0");
                    }
                    if(q4 == 3){
                        document.getElementById('numdesigners').setAttribute("data-count", "0");
                    }
                    if(q4 == 4){
                        document.getElementById('numdesigners').setAttribute("data-count", "0");
                    }
                }
            }
            if (q2 == 5){
                if(q3 == 1){
                    if(q4 == 1){
                        document.getElementById('numdesigners').setAttribute("data-count", "0");
                    }
                    if(q4 == 2){
                        document.getElementById('numdesigners').setAttribute("data-count", "0");
                    }
                    if(q4 == 3){
                        document.getElementById('numdesigners').setAttribute("data-count", "0");
                    }
                    if(q4 == 4){
                        document.getElementById('numdesigners').setAttribute("data-count", "3");
                    }
                }
                if(q3 == 2){
                    if(q4 == 1){
                        document.getElementById('numdesigners').setAttribute("data-count", "0");
                    }
                    if(q4 == 2){
                        document.getElementById('numdesigners').setAttribute("data-count", "0");
                    }
                    if(q4 == 3){
                        document.getElementById('numdesigners').setAttribute("data-count", "0");
                    }
                    if(q4 == 4){
                        document.getElementById('numdesigners').setAttribute("data-count", "1");
                    }
                }
                if(q3 == 3){
                    if(q4 == 1){
                        document.getElementById('numdesigners').setAttribute("data-count", "0");
                    }
                    if(q4 == 2){
                        document.getElementById('numdesigners').setAttribute("data-count", "0");
                    }
                    if(q4 == 3){
                        document.getElementById('numdesigners').setAttribute("data-count", "0");
                    }
                    if(q4 == 4){
                        document.getElementById('numdesigners').setAttribute("data-count", "2");
                    }
                }
                if(q3 == 4){
                    if(q4 == 1){
                        document.getElementById('numdesigners').setAttribute("data-count", "0");
                    }
                    if(q4 == 2){
                        document.getElementById('numdesigners').setAttribute("data-count", "0");
                    }
                    if(q4 == 3){
                        document.getElementById('numdesigners').setAttribute("data-count", "0");
                    }
                    if(q4 == 4){
                        document.getElementById('numdesigners').setAttribute("data-count", "2");
                    }
                }
            }
        }
    }

    if(document.getElementById('q5a4c').checked) {
        document.getElementById('q5a4').style.opacity = 1;
        document.getElementById('question5').style.opacity = 0;
        document.getElementById('question6').style.opacity = 1;
        document.getElementById('question6answers').style.zIndex = 5;
        document.getElementById('next5').style.display = "none";
        document.getElementById('next6').style.display = "block"; 
        q5 = 4;
        if(q1 == 1){
            if (q2 == 1){
                if(q3 == 1){
                    if(q4 == 1){
                        document.getElementById('numdesigners').setAttribute("data-count", "0");
                    }
                    if(q4 == 2){
                        document.getElementById('numdesigners').setAttribute("data-count", "1");
                    }
                    if(q4 == 3){
                        document.getElementById('numdesigners').setAttribute("data-count", "1");
                    }
                    if(q4 == 4){
                        document.getElementById('numdesigners').setAttribute("data-count", "0");
                    }
                }
                if(q3 == 2){
                    if(q4 == 1){
                        document.getElementById('numdesigners').setAttribute("data-count", "1");
                    }
                    if(q4 == 2){
                        document.getElementById('numdesigners').setAttribute("data-count", "2");
                    }
                    if(q4 == 3){
                        document.getElementById('numdesigners').setAttribute("data-count", "2");
                    }
                    if(q4 == 4){
                        document.getElementById('numdesigners').setAttribute("data-count", "0");
                    }
                }
                if(q3 == 3){
                    if(q4 == 1){
                        document.getElementById('numdesigners').setAttribute("data-count", "1");
                    }
                    if(q4 == 2){
                        document.getElementById('numdesigners').setAttribute("data-count", "1");
                    }
                    if(q4 == 3){
                        document.getElementById('numdesigners').setAttribute("data-count", "0");
                    }
                    if(q4 == 4){
                        document.getElementById('numdesigners').setAttribute("data-count", "0");
                    }
                }
                if(q3 == 4){
                    if(q4 == 1){
                        document.getElementById('numdesigners').setAttribute("data-count", "1");
                    }
                    if(q4 == 2){
                        document.getElementById('numdesigners').setAttribute("data-count", "0");
                    }
                    if(q4 == 3){
                        document.getElementById('numdesigners').setAttribute("data-count", "0");
                    }
                    if(q4 == 4){
                        document.getElementById('numdesigners').setAttribute("data-count", "0");
                    }
                }
            }
            if (q2 == 2){
                if(q3 == 1){
                    if(q4 == 1){
                        document.getElementById('numdesigners').setAttribute("data-count", "3");
                    }
                    if(q4 == 2){
                        document.getElementById('numdesigners').setAttribute("data-count", "11");
                    }
                    if(q4 == 3){
                        document.getElementById('numdesigners').setAttribute("data-count", "1");
                    }
                    if(q4 == 4){
                        document.getElementById('numdesigners').setAttribute("data-count", "0");
                    }
                }
                if(q3 == 2){
                    if(q4 == 1){
                        document.getElementById('numdesigners').setAttribute("data-count", "2");
                    }
                    if(q4 == 2){
                        document.getElementById('numdesigners').setAttribute("data-count", "31");
                    }
                    if(q4 == 3){
                        document.getElementById('numdesigners').setAttribute("data-count", "4");
                    }
                    if(q4 == 4){
                        document.getElementById('numdesigners').setAttribute("data-count", "0");
                    }
                }
                if(q3 == 3){
                    if(q4 == 1){
                        document.getElementById('numdesigners').setAttribute("data-count", "1");
                    }
                    if(q4 == 2){
                        document.getElementById('numdesigners').setAttribute("data-count", "13");
                    }
                    if(q4 == 3){
                        document.getElementById('numdesigners').setAttribute("data-count", "1");
                    }
                    if(q4 == 4){
                        document.getElementById('numdesigners').setAttribute("data-count", "0");
                    }
                }
                if(q3 == 4){
                    if(q4 == 1){
                        document.getElementById('numdesigners').setAttribute("data-count", "2");
                    }
                    if(q4 == 2){
                        document.getElementById('numdesigners').setAttribute("data-count", "3");
                    }
                    if(q4 == 3){
                        document.getElementById('numdesigners').setAttribute("data-count", "0");
                    }
                    if(q4 == 4){
                        document.getElementById('numdesigners').setAttribute("data-count", "0");
                    }
                }
            }
            if (q2 == 3){
                if(q3 == 1){
                    if(q4 == 1){
                        document.getElementById('numdesigners').setAttribute("data-count", "4");
                    }
                    if(q4 == 2){
                        document.getElementById('numdesigners').setAttribute("data-count", "3");
                    }
                    if(q4 == 3){
                        document.getElementById('numdesigners').setAttribute("data-count", "0");
                    }
                    if(q4 == 4){
                        document.getElementById('numdesigners').setAttribute("data-count", "0");
                    }
                }
                if(q3 == 2){
                    if(q4 == 1){
                        document.getElementById('numdesigners').setAttribute("data-count", "1");
                    }
                    if(q4 == 2){
                        document.getElementById('numdesigners').setAttribute("data-count", "5");
                    }
                    if(q4 == 3){
                        document.getElementById('numdesigners').setAttribute("data-count", "1");
                    }
                    if(q4 == 4){
                        document.getElementById('numdesigners').setAttribute("data-count", "0");
                    }
                }
                if(q3 == 3){
                    if(q4 == 1){
                        document.getElementById('numdesigners').setAttribute("data-count", "0");
                    }
                    if(q4 == 2){
                        document.getElementById('numdesigners').setAttribute("data-count", "1");
                    }
                    if(q4 == 3){
                        document.getElementById('numdesigners').setAttribute("data-count", "0");
                    }
                    if(q4 == 4){
                        document.getElementById('numdesigners').setAttribute("data-count", "0");
                    }
                }
                if(q3 == 4){
                    if(q4 == 1){
                        document.getElementById('numdesigners').setAttribute("data-count", "0");
                    }
                    if(q4 == 2){
                        document.getElementById('numdesigners').setAttribute("data-count", "0");
                    }
                    if(q4 == 3){
                        document.getElementById('numdesigners').setAttribute("data-count", "0");
                    }
                    if(q4 == 4){
                        document.getElementById('numdesigners').setAttribute("data-count", "0");
                    }
                }
            }
            if (q2 == 4){
                if(q3 == 1){
                    if(q4 == 1){
                        document.getElementById('numdesigners').setAttribute("data-count", "8");
                    }
                    if(q4 == 2){
                        document.getElementById('numdesigners').setAttribute("data-count", "33");
                    }
                    if(q4 == 3){
                        document.getElementById('numdesigners').setAttribute("data-count", "6");
                    }
                    if(q4 == 4){
                        document.getElementById('numdesigners').setAttribute("data-count", "0");
                    }
                }
                if(q3 == 2){
                    if(q4 == 1){
                        document.getElementById('numdesigners').setAttribute("data-count", "13");
                    }
                    if(q4 == 2){
                        document.getElementById('numdesigners').setAttribute("data-count", "83");
                    }
                    if(q4 == 3){
                        document.getElementById('numdesigners').setAttribute("data-count", "8");
                    }
                    if(q4 == 4){
                        document.getElementById('numdesigners').setAttribute("data-count", "0");
                    }
                }
                if(q3 == 3){
                    if(q4 == 1){
                        document.getElementById('numdesigners').setAttribute("data-count", "4");
                    }
                    if(q4 == 2){
                        document.getElementById('numdesigners').setAttribute("data-count", "51");
                    }
                    if(q4 == 3){
                        document.getElementById('numdesigners').setAttribute("data-count", "2");
                    }
                    if(q4 == 4){
                        document.getElementById('numdesigners').setAttribute("data-count", "1");
                    }
                }
                if(q3 == 4){
                    if(q4 == 1){
                        document.getElementById('numdesigners').setAttribute("data-count", "1");
                    }
                    if(q4 == 2){
                        document.getElementById('numdesigners').setAttribute("data-count", "6");
                    }
                    if(q4 == 3){
                        document.getElementById('numdesigners').setAttribute("data-count", "1");
                    }
                    if(q4 == 4){
                        document.getElementById('numdesigners').setAttribute("data-count", "1");
                    }
                }
            }
            if (q2 == 5){
                if(q3 == 1){
                    if(q4 == 1){
                        document.getElementById('numdesigners').setAttribute("data-count", "2");
                    }
                    if(q4 == 2){
                        document.getElementById('numdesigners').setAttribute("data-count", "6");
                    }
                    if(q4 == 3){
                        document.getElementById('numdesigners').setAttribute("data-count", "2");
                    }
                    if(q4 == 4){
                        document.getElementById('numdesigners').setAttribute("data-count", "0");
                    }
                }
                if(q3 == 2){
                    if(q4 == 1){
                        document.getElementById('numdesigners').setAttribute("data-count", "2");
                    }
                    if(q4 == 2){
                        document.getElementById('numdesigners').setAttribute("data-count", "17");
                    }
                    if(q4 == 3){
                        document.getElementById('numdesigners').setAttribute("data-count", "4");
                    }
                    if(q4 == 4){
                        document.getElementById('numdesigners').setAttribute("data-count", "0");
                    }
                }
                if(q3 == 3){
                    if(q4 == 1){
                        document.getElementById('numdesigners').setAttribute("data-count", "1");
                    }
                    if(q4 == 2){
                        document.getElementById('numdesigners').setAttribute("data-count", "16");
                    }
                    if(q4 == 3){
                        document.getElementById('numdesigners').setAttribute("data-count", "3");
                    }
                    if(q4 == 4){
                        document.getElementById('numdesigners').setAttribute("data-count", "0");
                    }
                }
                if(q3 == 4){
                    if(q4 == 1){
                        document.getElementById('numdesigners').setAttribute("data-count", "0");
                    }
                    if(q4 == 2){
                        document.getElementById('numdesigners').setAttribute("data-count", "6");
                    }
                    if(q4 == 3){
                        document.getElementById('numdesigners').setAttribute("data-count", "1");
                    }
                    if(q4 == 4){
                        document.getElementById('numdesigners').setAttribute("data-count", "0");
                    }
                }
            }
        }

        if(q1 == 2){
            if (q2 == 1){
                if(q3 == 1){
                    if(q4 == 1){
                        document.getElementById('numdesigners').setAttribute("data-count", "0");
                    }
                    if(q4 == 2){
                        document.getElementById('numdesigners').setAttribute("data-count", "2");
                    }
                    if(q4 == 3){
                        document.getElementById('numdesigners').setAttribute("data-count", "0");
                    }
                    if(q4 == 4){
                        document.getElementById('numdesigners').setAttribute("data-count", "0");
                    }
                }
                if(q3 == 2){
                    if(q4 == 1){
                        document.getElementById('numdesigners').setAttribute("data-count", "0");
                    }
                    if(q4 == 2){
                        document.getElementById('numdesigners').setAttribute("data-count", "2");
                    }
                    if(q4 == 3){
                        document.getElementById('numdesigners').setAttribute("data-count", "1");
                    }
                    if(q4 == 4){
                        document.getElementById('numdesigners').setAttribute("data-count", "1");
                    }
                }
                if(q3 == 3){
                    if(q4 == 1){
                        document.getElementById('numdesigners').setAttribute("data-count", "0");
                    }
                    if(q4 == 2){
                        document.getElementById('numdesigners').setAttribute("data-count", "2");
                    }
                    if(q4 == 3){
                        document.getElementById('numdesigners').setAttribute("data-count", "1");
                    }
                    if(q4 == 4){
                        document.getElementById('numdesigners').setAttribute("data-count", "0");
                    }
                }
                if(q3 == 4){
                    if(q4 == 1){
                        document.getElementById('numdesigners').setAttribute("data-count", "0");
                    }
                    if(q4 == 2){
                        document.getElementById('numdesigners').setAttribute("data-count", "0");
                    }
                    if(q4 == 3){
                        document.getElementById('numdesigners').setAttribute("data-count", "0");
                    }
                    if(q4 == 4){
                        document.getElementById('numdesigners').setAttribute("data-count", "0");
                    }
                }
            }
            if (q2 == 2){
                if(q3 == 1){
                    if(q4 == 1){
                        document.getElementById('numdesigners').setAttribute("data-count", "2");
                    }
                    if(q4 == 2){
                        document.getElementById('numdesigners').setAttribute("data-count", "6");
                    }
                    if(q4 == 3){
                        document.getElementById('numdesigners').setAttribute("data-count", "5");
                    }
                    if(q4 == 4){
                        document.getElementById('numdesigners').setAttribute("data-count", "7");
                    }
                }
                if(q3 == 2){
                    if(q4 == 1){
                        document.getElementById('numdesigners').setAttribute("data-count", "5");
                    }
                    if(q4 == 2){
                        document.getElementById('numdesigners').setAttribute("data-count", "27");
                    }
                    if(q4 == 3){
                        document.getElementById('numdesigners').setAttribute("data-count", "33");
                    }
                    if(q4 == 4){
                        document.getElementById('numdesigners').setAttribute("data-count", "23");
                    }
                }
                if(q3 == 3){
                    if(q4 == 1){
                        document.getElementById('numdesigners').setAttribute("data-count", "0");
                    }
                    if(q4 == 2){
                        document.getElementById('numdesigners').setAttribute("data-count", "11");
                    }
                    if(q4 == 3){
                        document.getElementById('numdesigners').setAttribute("data-count", "17");
                    }
                    if(q4 == 4){
                        document.getElementById('numdesigners').setAttribute("data-count", "11");
                    }
                }
                if(q3 == 4){
                    if(q4 == 1){
                        document.getElementById('numdesigners').setAttribute("data-count", "1");
                    }
                    if(q4 == 2){
                        document.getElementById('numdesigners').setAttribute("data-count", "0");
                    }
                    if(q4 == 3){
                        document.getElementById('numdesigners').setAttribute("data-count", "1");
                    }
                    if(q4 == 4){
                        document.getElementById('numdesigners').setAttribute("data-count", "2");
                    }
                }
            }
            if (q2 == 3){
                if(q3 == 1){
                    if(q4 == 1){

                    }
                    if(q4 == 2){

                    }
                    if(q4 == 3){

                    }
                    if(q4 == 4){

                    }
                }
                if(q3 == 2){
                    if(q4 == 1){

                    }
                    if(q4 == 2){

                    }
                    if(q4 == 3){

                    }
                    if(q4 == 4){

                    }
                }
                if(q3 == 3){
                    if(q4 == 1){

                    }
                    if(q4 == 2){

                    }
                    if(q4 == 3){

                    }
                    if(q4 == 4){

                    }
                }
                if(q3 == 4){
                    if(q4 == 1){

                    }
                    if(q4 == 2){

                    }
                    if(q4 == 3){

                    }
                    if(q4 == 4){

                    }
                }
            }
            if (q2 == 4){
                if(q3 == 1){
                    if(q4 == 1){

                    }
                    if(q4 == 2){

                    }
                    if(q4 == 3){

                    }
                    if(q4 == 4){

                    }
                }
                if(q3 == 2){
                    if(q4 == 1){

                    }
                    if(q4 == 2){

                    }
                    if(q4 == 3){

                    }
                    if(q4 == 4){

                    }
                }
                if(q3 == 3){
                    if(q4 == 1){

                    }
                    if(q4 == 2){

                    }
                    if(q4 == 3){

                    }
                    if(q4 == 4){

                    }
                }
                if(q3 == 4){
                    if(q4 == 1){

                    }
                    if(q4 == 2){

                    }
                    if(q4 == 3){

                    }
                    if(q4 == 4){

                    }
                }
            }
            if (q2 == 5){
                if(q3 == 1){
                    if(q4 == 1){

                    }
                    if(q4 == 2){

                    }
                    if(q4 == 3){

                    }
                    if(q4 == 4){

                    }
                }
                if(q3 == 2){
                    if(q4 == 1){

                    }
                    if(q4 == 2){

                    }
                    if(q4 == 3){

                    }
                    if(q4 == 4){

                    }
                }
                if(q3 == 3){
                    if(q4 == 1){

                    }
                    if(q4 == 2){

                    }
                    if(q4 == 3){

                    }
                    if(q4 == 4){

                    }
                }
                if(q3 == 4){
                    if(q4 == 1){

                    }
                    if(q4 == 2){

                    }
                    if(q4 == 3){

                    }
                    if(q4 == 4){

                    }
                }
            }
        }

        if(q1 == 3){
            if (q2 == 1){
                if(q3 == 1){
                    if(q4 == 1){
                        document.getElementById('numdesigners').setAttribute("data-count", "0");
                    }
                    if(q4 == 2){
                        document.getElementById('numdesigners').setAttribute("data-count", "0");
                    }
                    if(q4 == 3){
                        document.getElementById('numdesigners').setAttribute("data-count", "0");
                    }
                    if(q4 == 4){
                        document.getElementById('numdesigners').setAttribute("data-count", "0");
                    }
                }
                if(q3 == 2){
                    if(q4 == 1){
                        document.getElementById('numdesigners').setAttribute("data-count", "0");
                    }
                    if(q4 == 2){
                        document.getElementById('numdesigners').setAttribute("data-count", "0");
                    }
                    if(q4 == 3){
                        document.getElementById('numdesigners').setAttribute("data-count", "0");
                    }
                    if(q4 == 4){
                        document.getElementById('numdesigners').setAttribute("data-count", "2");
                    }
                }
                if(q3 == 3){
                    if(q4 == 1){
                        document.getElementById('numdesigners').setAttribute("data-count", "0");
                    }
                    if(q4 == 2){
                        document.getElementById('numdesigners').setAttribute("data-count", "0");
                    }
                    if(q4 == 3){
                        document.getElementById('numdesigners').setAttribute("data-count", "0");
                    }
                    if(q4 == 4){
                        document.getElementById('numdesigners').setAttribute("data-count", "1");
                    }
                }
                if(q3 == 4){
                    if(q4 == 1){
                        document.getElementById('numdesigners').setAttribute("data-count", "0");
                    }
                    if(q4 == 2){
                        document.getElementById('numdesigners').setAttribute("data-count", "0");
                    }
                    if(q4 == 3){
                        document.getElementById('numdesigners').setAttribute("data-count", "0");
                    }
                    if(q4 == 4){
                        document.getElementById('numdesigners').setAttribute("data-count", "1");
                    }
                }
            }
            if (q2 == 2){
                if(q3 == 1){
                    if(q4 == 1){
                        document.getElementById('numdesigners').setAttribute("data-count", "1");
                    }
                    if(q4 == 2){
                        document.getElementById('numdesigners').setAttribute("data-count", "1");
                    }
                    if(q4 == 3){
                        document.getElementById('numdesigners').setAttribute("data-count", "0");
                    }
                    if(q4 == 4){
                        document.getElementById('numdesigners').setAttribute("data-count", "5");
                    }
                }
                if(q3 == 2){
                    if(q4 == 1){
                        document.getElementById('numdesigners').setAttribute("data-count", "0");
                    }
                    if(q4 == 2){
                        document.getElementById('numdesigners').setAttribute("data-count", "0");
                    }
                    if(q4 == 3){
                        document.getElementById('numdesigners').setAttribute("data-count", "1");
                    }
                    if(q4 == 4){
                        document.getElementById('numdesigners').setAttribute("data-count", "13");
                    }
                }
                if(q3 == 3){
                    if(q4 == 1){
                        document.getElementById('numdesigners').setAttribute("data-count", "0");
                    }
                    if(q4 == 2){
                        document.getElementById('numdesigners').setAttribute("data-count", "0");
                    }
                    if(q4 == 3){
                        document.getElementById('numdesigners').setAttribute("data-count", "1");
                    }
                    if(q4 == 4){
                        document.getElementById('numdesigners').setAttribute("data-count", "5");
                    }
                }
                if(q3 == 4){
                    if(q4 == 1){
                        document.getElementById('numdesigners').setAttribute("data-count", "0");
                    }
                    if(q4 == 2){
                        document.getElementById('numdesigners').setAttribute("data-count", "0");
                    }
                    if(q4 == 3){
                        document.getElementById('numdesigners').setAttribute("data-count", "0");
                    }
                    if(q4 == 4){
                        document.getElementById('numdesigners').setAttribute("data-count", "2");
                    }
                }
            }
            if (q2 == 3){
                if(q3 == 1){
                    if(q4 == 1){
                        document.getElementById('numdesigners').setAttribute("data-count", "0");
                    }
                    if(q4 == 2){
                        document.getElementById('numdesigners').setAttribute("data-count", "0");
                    }
                    if(q4 == 3){
                        document.getElementById('numdesigners').setAttribute("data-count", "0");
                    }
                    if(q4 == 4){
                        document.getElementById('numdesigners').setAttribute("data-count", "1");
                    }
                }
                if(q3 == 2){
                    if(q4 == 1){
                        document.getElementById('numdesigners').setAttribute("data-count", "0");
                    }
                    if(q4 == 2){
                        document.getElementById('numdesigners').setAttribute("data-count", "0");
                    }
                    if(q4 == 3){
                        document.getElementById('numdesigners').setAttribute("data-count", "0");
                    }
                    if(q4 == 4){
                        document.getElementById('numdesigners').setAttribute("data-count", "0");
                    }
                }
                if(q3 == 3){
                    if(q4 == 1){
                        document.getElementById('numdesigners').setAttribute("data-count", "0");
                    }
                    if(q4 == 2){
                        document.getElementById('numdesigners').setAttribute("data-count", "0");
                    }
                    if(q4 == 3){
                        document.getElementById('numdesigners').setAttribute("data-count", "0");
                    }
                    if(q4 == 4){
                        document.getElementById('numdesigners').setAttribute("data-count", "0");
                    }
                }
                if(q3 == 4){
                    if(q4 == 1){
                        document.getElementById('numdesigners').setAttribute("data-count", "0");
                    }
                    if(q4 == 2){
                        document.getElementById('numdesigners').setAttribute("data-count", "0");
                    }
                    if(q4 == 3){
                        document.getElementById('numdesigners').setAttribute("data-count", "0");
                    }
                    if(q4 == 4){
                        document.getElementById('numdesigners').setAttribute("data-count", "3");
                    }
                }
            }
            if (q2 == 4){
                if(q3 == 1){
                    if(q4 == 1){
                        document.getElementById('numdesigners').setAttribute("data-count", "0");
                    }
                    if(q4 == 2){
                        document.getElementById('numdesigners').setAttribute("data-count", "2");
                    }
                    if(q4 == 3){
                        document.getElementById('numdesigners').setAttribute("data-count", "1");
                    }
                    if(q4 == 4){
                        document.getElementById('numdesigners').setAttribute("data-count", "15");
                    }
                }
                if(q3 == 2){
                    if(q4 == 1){
                        document.getElementById('numdesigners').setAttribute("data-count", "1");
                    }
                    if(q4 == 2){
                        document.getElementById('numdesigners').setAttribute("data-count", "2");
                    }
                    if(q4 == 3){
                        document.getElementById('numdesigners').setAttribute("data-count", "3");
                    }
                    if(q4 == 4){
                        document.getElementById('numdesigners').setAttribute("data-count", "49");
                    }
                }
                if(q3 == 3){
                    if(q4 == 1){
                        document.getElementById('numdesigners').setAttribute("data-count", "1");
                    }
                    if(q4 == 2){
                        document.getElementById('numdesigners').setAttribute("data-count", "0");
                    }
                    if(q4 == 3){
                        document.getElementById('numdesigners').setAttribute("data-count", "5");
                    }
                    if(q4 == 4){
                        document.getElementById('numdesigners').setAttribute("data-count", "49");
                    }
                }
                if(q3 == 4){
                    if(q4 == 1){
                        document.getElementById('numdesigners').setAttribute("data-count", "0");
                    }
                    if(q4 == 2){
                        document.getElementById('numdesigners').setAttribute("data-count", "0");
                    }
                    if(q4 == 3){
                        document.getElementById('numdesigners').setAttribute("data-count", "0");
                    }
                    if(q4 == 4){
                        document.getElementById('numdesigners').setAttribute("data-count", "10");
                    }
                }
            }
            if (q2 == 5){
                if(q3 == 1){
                    if(q4 == 1){
                        document.getElementById('numdesigners').setAttribute("data-count", "0");
                    }
                    if(q4 == 2){
                        document.getElementById('numdesigners').setAttribute("data-count", "0");
                    }
                    if(q4 == 3){
                        document.getElementById('numdesigners').setAttribute("data-count", "2");
                    }
                    if(q4 == 4){
                        document.getElementById('numdesigners').setAttribute("data-count", "14");
                    }
                }
                if(q3 == 2){
                    if(q4 == 1){
                        document.getElementById('numdesigners').setAttribute("data-count", "0");
                    }
                    if(q4 == 2){
                        document.getElementById('numdesigners').setAttribute("data-count", "0");
                    }
                    if(q4 == 3){
                        document.getElementById('numdesigners').setAttribute("data-count", "0");
                    }
                    if(q4 == 4){
                        document.getElementById('numdesigners').setAttribute("data-count", "12");
                    }
                }
                if(q3 == 3){
                    if(q4 == 1){
                        document.getElementById('numdesigners').setAttribute("data-count", "0");
                    }
                    if(q4 == 2){
                        document.getElementById('numdesigners').setAttribute("data-count", "0");
                    }
                    if(q4 == 3){
                        document.getElementById('numdesigners').setAttribute("data-count", "0");
                    }
                    if(q4 == 4){
                        document.getElementById('numdesigners').setAttribute("data-count", "20");
                    }
                }
                if(q3 == 4){
                    if(q4 == 1){
                        document.getElementById('numdesigners').setAttribute("data-count", "0");
                    }
                    if(q4 == 2){
                        document.getElementById('numdesigners').setAttribute("data-count", "0");
                    }
                    if(q4 == 3){
                        document.getElementById('numdesigners').setAttribute("data-count", "0");
                    }
                    if(q4 == 4){
                        document.getElementById('numdesigners').setAttribute("data-count", "8");
                    }
                }
            }
        }
        if(q1 == 4){
            if (q2 == 1){
                if(q3 == 1){
                    if(q4 == 1){
                        document.getElementById('numdesigners').setAttribute("data-count", "0");
                    }
                    if(q4 == 2){
                        document.getElementById('numdesigners').setAttribute("data-count", "0");
                    }
                    if(q4 == 3){
                        document.getElementById('numdesigners').setAttribute("data-count", "0");
                    }
                    if(q4 == 4){
                        document.getElementById('numdesigners').setAttribute("data-count", "0");
                    }
                }
                if(q3 == 2){
                    if(q4 == 1){
                        document.getElementById('numdesigners').setAttribute("data-count", "0");
                    }
                    if(q4 == 2){
                        document.getElementById('numdesigners').setAttribute("data-count", "0");
                    }
                    if(q4 == 3){
                        document.getElementById('numdesigners').setAttribute("data-count", "0");
                    }
                    if(q4 == 4){
                        document.getElementById('numdesigners').setAttribute("data-count", "0");
                    }
                }
                if(q3 == 3){
                    if(q4 == 1){
                        document.getElementById('numdesigners').setAttribute("data-count", "0");
                    }
                    if(q4 == 2){
                        document.getElementById('numdesigners').setAttribute("data-count", "0");
                    }
                    if(q4 == 3){
                        document.getElementById('numdesigners').setAttribute("data-count", "0");
                    }
                    if(q4 == 4){
                        document.getElementById('numdesigners').setAttribute("data-count", "0");
                    }
                }
                if(q3 == 4){
                    if(q4 == 1){
                        document.getElementById('numdesigners').setAttribute("data-count", "0");
                    }
                    if(q4 == 2){
                        document.getElementById('numdesigners').setAttribute("data-count", "0");
                    }
                    if(q4 == 3){
                        document.getElementById('numdesigners').setAttribute("data-count", "0");
                    }
                    if(q4 == 4){
                        document.getElementById('numdesigners').setAttribute("data-count", "0");
                    }
                }
            }
            if (q2 == 2){
                if(q3 == 1){
                    if(q4 == 1){
                        document.getElementById('numdesigners').setAttribute("data-count", "0");
                    }
                    if(q4 == 2){
                        document.getElementById('numdesigners').setAttribute("data-count", "0");
                    }
                    if(q4 == 3){
                        document.getElementById('numdesigners').setAttribute("data-count", "0");
                    }
                    if(q4 == 4){
                        document.getElementById('numdesigners').setAttribute("data-count", "1");
                    }
                }
                if(q3 == 2){
                    if(q4 == 1){
                        document.getElementById('numdesigners').setAttribute("data-count", "0");
                    }
                    if(q4 == 2){
                        document.getElementById('numdesigners').setAttribute("data-count", "0");
                    }
                    if(q4 == 3){
                        document.getElementById('numdesigners').setAttribute("data-count", "0");
                    }
                    if(q4 == 4){
                        document.getElementById('numdesigners').setAttribute("data-count", "0");
                    }
                }
                if(q3 == 3){
                    if(q4 == 1){
                        document.getElementById('numdesigners').setAttribute("data-count", "0");
                    }
                    if(q4 == 2){
                        document.getElementById('numdesigners').setAttribute("data-count", "0");
                    }
                    if(q4 == 3){
                        document.getElementById('numdesigners').setAttribute("data-count", "0");
                    }
                    if(q4 == 4){
                        document.getElementById('numdesigners').setAttribute("data-count", "0");
                    }
                }
                if(q3 == 4){
                    if(q4 == 1){
                        document.getElementById('numdesigners').setAttribute("data-count", "0");
                    }
                    if(q4 == 2){
                        document.getElementById('numdesigners').setAttribute("data-count", "0");
                    }
                    if(q4 == 3){
                        document.getElementById('numdesigners').setAttribute("data-count", "0");
                    }
                    if(q4 == 4){
                        document.getElementById('numdesigners').setAttribute("data-count", "0");
                    }
                }
            }
            if (q2 == 3){
                if(q3 == 1){
                    if(q4 == 1){
                        document.getElementById('numdesigners').setAttribute("data-count", "0");
                    }
                    if(q4 == 2){
                        document.getElementById('numdesigners').setAttribute("data-count", "0");
                    }
                    if(q4 == 3){
                        document.getElementById('numdesigners').setAttribute("data-count", "0");
                    }
                    if(q4 == 4){
                        document.getElementById('numdesigners').setAttribute("data-count", "0");
                    }
                }
                if(q3 == 2){
                    if(q4 == 1){
                        document.getElementById('numdesigners').setAttribute("data-count", "0");
                    }
                    if(q4 == 2){
                        document.getElementById('numdesigners').setAttribute("data-count", "0");
                    }
                    if(q4 == 3){
                        document.getElementById('numdesigners').setAttribute("data-count", "0");
                    }
                    if(q4 == 4){
                        document.getElementById('numdesigners').setAttribute("data-count", "0");
                    }
                }
                if(q3 == 3){
                    if(q4 == 1){
                        document.getElementById('numdesigners').setAttribute("data-count", "0");
                    }
                    if(q4 == 2){
                        document.getElementById('numdesigners').setAttribute("data-count", "0");
                    }
                    if(q4 == 3){
                        document.getElementById('numdesigners').setAttribute("data-count", "0");
                    }
                    if(q4 == 4){
                        document.getElementById('numdesigners').setAttribute("data-count", "0");
                    }
                }
                if(q3 == 4){
                    if(q4 == 1){
                        document.getElementById('numdesigners').setAttribute("data-count", "0");
                    }
                    if(q4 == 2){
                        document.getElementById('numdesigners').setAttribute("data-count", "0");
                    }
                    if(q4 == 3){
                        document.getElementById('numdesigners').setAttribute("data-count", "0");
                    }
                    if(q4 == 4){
                        document.getElementById('numdesigners').setAttribute("data-count", "0");
                    }
                }
            }
            if (q2 == 4){
                if(q3 == 1){
                    if(q4 == 1){
                        document.getElementById('numdesigners').setAttribute("data-count", "0");
                    }
                    if(q4 == 2){
                        document.getElementById('numdesigners').setAttribute("data-count", "0");
                    }
                    if(q4 == 3){
                        document.getElementById('numdesigners').setAttribute("data-count", "0");
                    }
                    if(q4 == 4){
                        document.getElementById('numdesigners').setAttribute("data-count", "3");
                    }
                }
                if(q3 == 2){
                    if(q4 == 1){
                        document.getElementById('numdesigners').setAttribute("data-count", "0");
                    }
                    if(q4 == 2){
                        document.getElementById('numdesigners').setAttribute("data-count", "0");
                    }
                    if(q4 == 3){
                        document.getElementById('numdesigners').setAttribute("data-count", "0");
                    }
                    if(q4 == 4){
                        document.getElementById('numdesigners').setAttribute("data-count", "3");
                    }
                }
                if(q3 == 3){
                    if(q4 == 1){
                        document.getElementById('numdesigners').setAttribute("data-count", "0");
                    }
                    if(q4 == 2){
                        document.getElementById('numdesigners').setAttribute("data-count", "0");
                    }
                    if(q4 == 3){
                        document.getElementById('numdesigners').setAttribute("data-count", "0");
                    }
                    if(q4 == 4){
                        document.getElementById('numdesigners').setAttribute("data-count", "4");
                    }
                }
                if(q3 == 4){
                    if(q4 == 1){
                        document.getElementById('numdesigners').setAttribute("data-count", "0");
                    }
                    if(q4 == 2){
                        document.getElementById('numdesigners').setAttribute("data-count", "0");
                    }
                    if(q4 == 3){
                        document.getElementById('numdesigners').setAttribute("data-count", "0");
                    }
                    if(q4 == 4){
                        document.getElementById('numdesigners').setAttribute("data-count", "0");
                    }
                }
            }
            if (q2 == 5){
                if(q3 == 1){
                    if(q4 == 1){
                        document.getElementById('numdesigners').setAttribute("data-count", "0");
                    }
                    if(q4 == 2){
                        document.getElementById('numdesigners').setAttribute("data-count", "0");
                    }
                    if(q4 == 3){
                        document.getElementById('numdesigners').setAttribute("data-count", "0");
                    }
                    if(q4 == 4){
                        document.getElementById('numdesigners').setAttribute("data-count", "0");
                    }
                }
                if(q3 == 2){
                    if(q4 == 1){
                        document.getElementById('numdesigners').setAttribute("data-count", "0");
                    }
                    if(q4 == 2){
                        document.getElementById('numdesigners').setAttribute("data-count", "0");
                    }
                    if(q4 == 3){
                        document.getElementById('numdesigners').setAttribute("data-count", "0");
                    }
                    if(q4 == 4){
                        document.getElementById('numdesigners').setAttribute("data-count", "2");
                    }
                }
                if(q3 == 3){
                    if(q4 == 1){
                        document.getElementById('numdesigners').setAttribute("data-count", "0");
                    }
                    if(q4 == 2){
                        document.getElementById('numdesigners').setAttribute("data-count", "0");
                    }
                    if(q4 == 3){
                        document.getElementById('numdesigners').setAttribute("data-count", "0");
                    }
                    if(q4 == 4){
                        document.getElementById('numdesigners').setAttribute("data-count", "2");
                    }
                }
                if(q3 == 4){
                    if(q4 == 1){
                        document.getElementById('numdesigners').setAttribute("data-count", "0");
                    }
                    if(q4 == 2){
                        document.getElementById('numdesigners').setAttribute("data-count", "0");
                    }
                    if(q4 == 3){
                        document.getElementById('numdesigners').setAttribute("data-count", "0");
                    }
                    if(q4 == 4){
                        document.getElementById('numdesigners').setAttribute("data-count", "4");
                    }
                }
            }
        }
    }
}

function q6next(){
    document.getElementById('question5').style.opacity = 0;
    document.getElementById('question6').style.opacity = 0;
    document.getElementById('question6answers').style.zIndex = 6;
    document.getElementById('next6').style.opacity = 0;
//    document.getElementById('next6').style.display = "none";
    //    document.getElementById('next6').style.display = "block"; 


    document.getElementById('summary').style.opacity = 1;
    document.getElementById('exploremonsterlink').style.opacity = 1;
    document.getElementById('exploremonsters').style.opacity = 1;
    document.getElementById('exploremonsterlink').style.zIndex = 30;


    if(q1 == 1){
        document.getElementById('answer1').innerHTML = "18-25";
    }
    if(q1 == 2){
        document.getElementById('answer1').innerHTML = "26-40";
    }
    if(q1 == 3){
        document.getElementById('answer1').innerHTML = "41-60";
    }
    if(q1 == 4){
        document.getElementById('answer1').innerHTML = "61+";
    }

    if(q2 == 1){
        document.getElementById('answer2').innerHTML = "the worst";
    }
    if(q2 == 2){
        document.getElementById('answer2').innerHTML = "not great";
    }
    if(q2 == 3){
        document.getElementById('answer2').innerHTML = "not sure";
    }
    if(q2 == 4){
        document.getElementById('answer2').innerHTML = "pretty good";
    }
    if(q2 == 5){
        document.getElementById('answer2').innerHTML = "the best";
    }
    if(q3 == 1){
        document.getElementById('answer3').innerHTML = "< 40 hours";
    }
    if(q3 == 2){
        document.getElementById('answer3').innerHTML = "40 hours";
    }
    if(q3 == 3){
        document.getElementById('answer3').innerHTML = "41-50 hours";
    }
    if(q3 == 4){
        document.getElementById('answer3').innerHTML = "> 50 hours";
    }


    if(q4 == 1){
        document.getElementById('answer4').innerHTML = "< 1 year";
    }
    if(q4 == 2){
        document.getElementById('answer4').innerHTML = "1-4 years";
    }
    if(q4 == 3){
        document.getElementById('answer4').innerHTML = "5-9 years";
    }
    if(q4 == 4){
        document.getElementById('answer4').innerHTML = "10+ years";
    }


    if(q5 == 1){
        document.getElementById('answer5').innerHTML = "1-2 cups of coffee";
    }
    if(q5 == 2){
        document.getElementById('answer5').innerHTML = "3+ cups of coffee";
    }
    if(q5 == 3){
        document.getElementById('answer5').innerHTML = "tea";
    }
    if(q5 == 4){
        document.getElementById('answer5').innerHTML = "other";
    }


    if(document.getElementById('q6a1c').checked) {
        document.getElementById('answer6').innerHTML += " design not having a seat at the table" + "<br />";
    }
    if(document.getElementById('q6a2c').checked) {
        document.getElementById('answer6').innerHTML += (" diversity in design and tech"+ "<br />");
    }
    if(document.getElementById('q6a3c').checked) {
        document.getElementById('answer6').innerHTML += (" ethics in design"+ "<br />");
    }
    if(document.getElementById('q6a4c').checked) {
        document.getElementById('answer6').innerHTML += (" education cost and equity of access"+ "<br />");
    }
    if(document.getElementById('q6a5c').checked) {
        document.getElementById('answer6').innerHTML += (" consumer vs. social impact focus"+ "<br />");
    }
    if(document.getElementById('q6a6c').checked) {
        document.getElementById('answer6').innerHTML += (" generational differences in the workforce"+ "<br />");
    }
    if(document.getElementById('q6a7c').checked) {
        document.getElementById('answer6').innerHTML += (" environmental impacts of design"+ "<br />");
    }
    if(document.getElementById('q6a8c').checked) {
        document.getElementById('answer6').innerHTML += (" algorithm bias"+ "<br />");
    }
    if(document.getElementById('q6a9c').checked) {
        document.getElementById('answer6').innerHTML += (" advertising supported content model"+ "<br />");
    }
    if(document.getElementById('q6a10c').checked) {
        document.getElementById('answer6').innerHTML += (" dark ux patterns"+ "<br />");
    }
}

function showExplore(){

        document.getElementById('endrect').style.zIndex = 4000;
        document.getElementById('endrect').style.top = 0;
        document.getElementById('exploremonsterlink').style.zIndex = -1;
        document.getElementById('exploremonsterlink').style.color = "#333";
        document.getElementById('exploremonsterlink').setAttribute("class","false");
        document.getElementById('exploremonsterlink').style.transitionDelay = "2s";
        
        document.getElementById('hideexplorelink').style.zIndex = 5000;
        
        document.getElementById('hideexplore').style.opacity = 1;
        document.getElementById('hideexplorelink').style.opacity = 1;
        
}

function hideExplore(){
    document.getElementById('exploremonsterlink').style.zIndex = 5000;
    document.getElementById('exploremonsters').style.zIndex = 5000;
    document.getElementById('hideexplore').style.zIndex = -1;
//    document.getElementById('endrect').style.zIndex = = 4000;
        document.getElementById('endrect').style.top = "100%";
    console.log("lol");
    
}

//function hoverLink(){
//    document.getElementById('exploremonsterlink').style.bottom = "33px";
//}
//
//function noHover(){
//    document.getElementById('exploremonsterlink').style.bottom = "25px";
//}



//function hoverLink2(){
//    document.getElementById('hideexplorelink').style.top = "33px";
//}
//
//function noHover2(){
//    document.getElementById('hideexplorelink').style.top = "25px";
//}