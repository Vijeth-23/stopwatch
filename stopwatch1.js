window.onload=function(){
    var seconds=0;
    var tens=0;
    var appendsTens=document.getElementById("tens");
    var appendSeconds=document.getElementById("seconds");
    var buttonStart=document.getElementById("button-start");
    var buttonStop=document.getElementById("button-stop");
    var buttonReset=document.getElementById("button-reset");
    var Interval;
    buttonStart.onclick=function(){
        clearInterval(Interval);
        Interval=setInterval(startTimer,10)

    }
    buttonStop.onclick=function(){
        clearInterval(Interval);

    }
    buttonReset.onclick=function(){
        clearInterval(Interval);
        tens="00";
        seconds="00";
        appendsTens.innerHTML=tens;
        appendSeconds.innerHTML=seconds;

    }
    function startTimer()
    {
        tens++;
        if(tens<=9)//3
        {
            appendsTens.innerHTML="0"+tens;03
        }
        if(tens>9){//67
            appendsTens.innerHTML=tens;//67
        
    }
    if(tens>99){
        console.log("seconds");
        seconds++;
        appendSeconds.innerHTML="0"+seconds;
        tens=0;
        appendsTens.innerHTML="0"+0;
    }
    if(seconds>9){
        appendSeconds.innerHTML=seconds;
    }
    
}
}