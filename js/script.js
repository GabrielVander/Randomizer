"use strict";
if(!localStorage.getItem("rolls")){
    localStorage.setItem("rolls", 10)
    localStorage.setItem("timePerRoll", 100)
    localStorage.setItem("forcedRoll", 0)
    localStorage.setItem("forcedRollNum", 0)
    localStorage.setItem("forcedRollDisable", 0)
    localStorage.setItem("forcedRollTimes", 0)
}

var rolls = localStorage.getItem("rolls"),
    timePerRoll = localStorage.getItem("timePerRoll"),
    forcedRoll = localStorage.getItem("forcedRoll"),
    forcedRollNum = localStorage.getItem("forcedRollNum"),
    forcedRollDisable = localStorage.getItem("forcedRollDisable"),
    forcedRollTimes = localStorage.getItem("forcedRollTimes"),
    forcedRollPlays = 0,
    conf = 0,
    tr = 0,
    confPut;

function random (min, max){
    var max = Number(max);
    var min = Number(min);
    return Math.floor(Math.random() * ((max - min) + 1)) + min;
}

function roll(){
    var max = Number(document.getElementById("max").value),
        min = Number(document.getElementById("min").value);
    
    var dr = setInterval(function(){
        if(tr <= rolls){
            document.getElementById("result").innerHTML = random(min, max);
            tr++;
        }
        
        else{
            tr = 0;
            if(forcedRoll == 1){
                if((forcedRollNum <= max) && (forcedRollNum >= min)){
                    document.getElementById("result").innerHTML = forcedRollNum;   }
                if(forcedRollDisable == 1){
                    forcedRollPlays++;
                    if(forcedRollPlays >= forcedRollTimes){ 
                        localStorage.setItem('forcedRoll', 0);
                        forcedRoll = 0;forcedRollPlays = 0;}
                }
            }
            clearInterval(dr);
            load();
        }
    }, timePerRoll);
    
    
}

function sort(){
    if(document.getElementById("tRand").style.left == "0%"){roll();}
    document.getElementById("tRand").style.left = "0%";
    document.getElementById("tConf").style.left = "100%";
}

function config(){
    document.getElementById("tRand").style.left = "-100%";
    document.getElementById("tConf").style.left = "0%";
}

function load(){
    var confPut = document.getElementsByClassName("confPut");
    for(var i = 0; i< confPut.length; i++){
        if(confPut[i]){
            confPut[i].value = localStorage.getItem(confPut[i].id);
            confPut[i].onchange = function(){
                localStorage.setItem(this.id, Number(this.value));
                
                rolls = localStorage.getItem("rolls");
                timePerRoll = localStorage.getItem("timePerRoll");
                forcedRoll = localStorage.getItem("forcedRoll");
                forcedRollNum = localStorage.getItem("forcedRollNum");
                forcedRollDisable = localStorage.getItem("forcedRollDisable");
                forcedRollTimes = localStorage.getItem("forcedRollTimes");
                forcedRollPlays = 0;
                conf = 0;
                tr = 0;
            }
        }
        else{
            alert("Algum erro ocorreu, desculpe.");
        }
    }
    
    document.getElementById("tRand").style.left = "0%";
    document.getElementById("tConf").style.left = "100%";
}

window.onload = function(){
    load();
}
