let createdTime;
let clickedTime;
let reactionTime;

function getRandomColor(){
    let max = 200;
    let min =50;
    let green = Math.floor(Math.random() * (max - min + 1)) + min;
    let color = "rgba(255, " + green + ", 100, 0.5)";
    return color;
}

function makeBox(){
    let time = Math.random();
    time = time *2000;
    setTimeout(() => {
    if(Math.random() >= 0.5){
        document.querySelector("#box").style.borderRadius = "50%";
    }else{
        document.querySelector("#box").style.borderRadius = "0px";
    }

    // console.log(window.innerWidth);
    // console.log(window.innerHeight);

    // console.log(document.documentElement.clientWidth);
    // console.log(document.documentElement.clientHeight);

    let min = 0;
    let max = window.innerHeight - 280;
    let top = Math.floor(Math.random() * (max - min + 1)) + min;
    min = 0;
    max = window.innerWidth - 140;
    let dynamicBound;
    if(window.innerWidth > window.innerHeight){
        dynamicBound = window.innerWidth / 10;
        // console.log("Width: " + dynamicBound);
    }else{
        dynamicBound = window.innerHeight / 10;
        // console.log("Height: " + dynamicBound);
    }
    dynamicBound = dynamicBound + "px";
    document.documentElement.style.setProperty("--bound", dynamicBound);

    let left = Math.floor(Math.random() * (max - min + 1)) + min;
    document.querySelector("#box").style.top = top + "px";
    document.querySelector("#box").style.left = left + "px";
    document.querySelector("#box").style.backgroundColor = getRandomColor();
    document.querySelector("#box").style.display = "block";
    createdTime = Date.now();
    }, time);
}
document.querySelector("#box").onclick = function(){
    this.style.display = "none";
    clickedTime = Date.now();
    reactionTime = (clickedTime - createdTime) / 1000;
    document.querySelector("#time").innerHTML = reactionTime;
    makeBox();
}
makeBox();