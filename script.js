function random (min, max){
    max = Number(max);
    min = Number(min);
    return Math.floor(Math.random() * ((max - min) + 1)) + min;
}

var tr = 0;
function roll(){
    var dr = setInterval(function(){
        if(tr <= 10){
            document.getElementById("result").innerHTML =           random(document.getElementById("min").value,document.getElementById("max").value);
            tr++;
        }
        
        else{
            tr = 0;
            clearInterval(dr);
        }
    }, 100);
}