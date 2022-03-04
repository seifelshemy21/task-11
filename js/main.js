function openNav() {
    document.getElementById("mySidebar").style.width = "250px";
    document.getElementById("main").style.marginLeft = "250px";
}


function closeNav() {
    document.getElementById("mySidebar").style.width = "0px";
    document.getElementById("main").style.marginLeft = "0px";
}

function DarkMode() {
    document.body.classList.toggle("dark");
    
}

function showTime() { 
    var date = new Date();
    
    
    var hourss = date.getHours();
    var minute = date.getMinutes();
    var second = date.getSeconds();
    var TimeZone = "Am";

    if (hourss === 0) {
        hourss =  12;
    }

    if (hourss > 12) {
        hourss = hourss - 12;
        TimeZone = "PM"
    }


    hourss = (hourss < 10) ? "0" + hourss : hourss;
    minute = (minute < 10) ? "0" + minute : minute; 
    second = (second < 10) ? "0" + second : second;

    var time = hourss + ":" + minute + ":" + second + ":" + TimeZone;

    document.getElementById("myClock").innerHTML = time;
    setTimeout(showTime, "1000")
}
showTime();

var yourName =prompt("What is your Name");
if(yourName){
    document.getElementById("h2Name").innerHTML = "Hello : " +  yourName ;
} else{
    document.getElementById("h2Name").innerHTML = "Hello : " + " member" ;
}

document.addEventListener("DOMContentLoaded", function() {
    document.querySelectorAll("button").forEach(function(buton) {
        buton.onclick = function() {
            document.querySelector("#bacolor1").style.color = buton.dataset.color;
            document.querySelector("#bacolor2").style.color = buton.dataset.color;
            document.querySelector("#bacolor3").style.color = buton.dataset.color;
            document.querySelector("#bacolor4").style.color = buton.dataset.color;
            document.querySelector("#bacolor5").style.color = buton.dataset.color;

        }
    })
})
