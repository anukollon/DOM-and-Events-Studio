// Write your JavaScript code here.
// Remember to pay attention to page loading!
let takeoff = null;
let landing = null;
let missionAbort = null;
let flightStatus = null;
let upButton = null;
let downButton = null;
let leftButton = null;
let rightButton = null;
let rocket = null;
let shuttleHgt = null;

function init(){
    console.log("inside init")
    takeoff = document.getElementById("takeoff");
    landing = document.getElementById("landing");
    missionAbort = document.getElementById("missionAbort");
    flightStatus = document.getElementById("flightStatus");
    upButton = document.getElementById("up");
    downButton = document.getElementById("down");

    shuttleHgt = document.getElementById("spaceShuttleHeight");

    leftButton = document.getElementById("left");
    rightButton = document.getElementById("right")

    rocket = document.getElementById("rocket");
    rocket.style.position = "relative";
    rocket.style.left = '0px';
    rocket.style.bottom = '0px';

    var div = document.querySelector('shuttleBackground');
    var divOffset = offset(div);
    console.log(divOffset.left, divOffset.top);

    //Click of Take Off Button
    takeoff.addEventListener("click", liftoff);
    
    //Click on Landing button
    landing.addEventListener("click", land);

    //Click on Abort button
    missionAbort.addEventListener("click", abort);

    //Click on Up button
    upButton.addEventListener("click", function(event){
        shuttleHgt.innerHTML=parseInt(shuttleHgt.innerHTML)+10000;
        rocket.style.bottom = parseInt(rocket.style.bottom) + 10 + 'px';
    });
    //Click on Down
    downButton.addEventListener("click", function(event){
        shuttleHgt.innerHTML=parseInt(shuttleHgt.innerHTML)-10000;
        rocket.style.bottom = parseInt(rocket.style.bottom) - 10 + 'px';
    })

    //Click on Left button
    leftButton.addEventListener("click", function(event){
        rocket.style.left = parseInt(rocket.style.left) - 10 + 'px';
    })

    //Click on right button
    rightButton.addEventListener("click", function(event){
        rocket.style.left = parseInt(rocket.style.left) + 10 + 'px';
    })
}

window.onload = init;

function liftoff(){
    console.log("inside takeOff clicked");
    let isReady = window.confirm("Confirm that the shuttle is ready for takeoff.");
    console.log(isReady)
    if(isReady){
        flightStatus.innerHTML = "Shuttle in flight";
        document.getElementById("shuttleBackground").style.background = "blue";
        document.getElementById("spaceShuttleHeight").innerHTML = 10000;
    }
}

function land(){
    window.alert("The shuttle is landing. Landing gear engaged.");
    flightStatus.innerHTML = "The shuttle has landed.";
    document.getElementById("shuttleBackground").style.background = "green";
    document.getElementById("spaceShuttleHeight").innerHTML = 0;
    rocket.style.position = "";
}

function abort(){
    let isReady = window.confirm("Confirm that the shuttle is ready for takeoff.");

    if(isReady){
        flightStatus.innerHTML = "Mission aborted.";
        document.getElementById("shuttleBackground").style.background = "green";
        document.getElementById("spaceShuttleHeight").innerHTML = 0;
        rocket.style.position = "";
    }
}

function offset(el) {
    var rect = el.getBoundingClientRect(),
    scrollLeft = window.pageXOffset || document.documentElement.scrollLeft,
    scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    return { top: rect.top + scrollTop, left: rect.left + scrollLeft }
}
