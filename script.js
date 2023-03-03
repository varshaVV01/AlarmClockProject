var sound=new Audio("https://www.freespecialeffects.co.uk/soundfx/bells/church_bells_01.wav");
sound.loop=true;
var clock=document.getElementById("clock");
var currentTime=setInterval(function(){
    var date=new Date();
    var hours=(12-(date.getHours()));
    var minutes=date.getMinutes();
    var seconds=date.getSeconds();
    var ampm=(date.getHours())<12?'AM':'PM';
    if(hours<0){
        hours=hours*-1;
    }
    else if(hours==00){
        hours=12;
    }
    else{
        hours=hours;
    }

    clock.textContent=addZero(hours)+':'+addZero(minutes)+':'+addZero(seconds)+':'+ampm;
},1000)
function addZero(time){
    return(time<10)?"0"+time:time;
}
function hoursMenu(){
    var select=document.getElementById("alarmhrs");
    var hrs=12;
    for(i=1;i<=hrs;i++){
        select.options[select.options.length]=new Option(i<10?"0"+i:i,i);
    }
}
hoursMenu();
function minMenu(){
    var select=document.getElementById("alarmmins");
    var mins=59;
    for(i=0;i<=mins;i++){
        select.options[select.options.length]=new Option(i<10?"0"+i:i,i);
    }
}
minMenu();
function secsMenu(){
    var select=document.getElementById("alarmsecs");
    var sec=59;
    for(i=0;i<=sec;i++){
        select.options[select.options.length]=new Option(i<10?"0"+i:i,i);
    }
}
secsMenu();

function alarmSet(){
   
   
    var hrs=document.getElementById("alarmhrs");
    var mins=document.getElementById("alarmmins");
    var secs=document.getElementById("alarmsecs");
    var ampm=document.getElementById("ampm");
    var selecthrs=hrs.options[hrs.selectedIndex].value;
    var selectmin=mins.options[mins.selectedIndex].value;
    var selectsec=secs.options[secs.selectedIndex].value;
    var selectap=ampm.options[ampm.selectedIndex].value;
    var alramTime=addZero(selecthrs)+":"+addZero(selectmin)+":"+
    addZero(selectsec)+":"+addZero(selectap);
    //alert("Alarm set at "+alramTime );
    

    document.getElementById("alarmhrs").disabled=true;
    document.getElementById("alarmmins").disabled=true;
    document.getElementById("alarmsecs").disabled=true;
    document.getElementById("ampm").disabled=true;

    var clock=document.getElementById("clock");
    setInterval(function(){
        var date=new Date();
        var hours=(12-(date.getHours()));
        var minutes=date.getMinutes();
        var seconds=date.getSeconds();
        var ampm=(date.getHours())<12?'AM':'PM';
        if(hours<0){
            hours=hours*-1;
        }
        else if(hours==00){
            hours=12;
        }
        else{
            hours=hours;
        }
    
        var currentTime=clock.textContent=addZero(hours)+':'+addZero(minutes)+':'+addZero(seconds)+':'+ampm;
        if(alramTime-currentTime<=5){
            alert("Alarm at "+alramTime );
        }
        if(alramTime==currentTime){
            sound.play();
        }    
    },1000)

    



}
function alarmClear(){
    document.getElementById("alarmhrs").disabled=false;
    document.getElementById("alarmmins").disabled=false;
    document.getElementById("alarmsecs").disabled=false;
    document.getElementById("ampm").disabled=false;
    sound.pause();
}