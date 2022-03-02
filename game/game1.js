document.querySelector('#myButton').onclick = () => {
    let x = Math.random();
    x = x * 4;
    x = Math.floor(x);
    console.log(x);
    if(x == document.querySelector('#myInput').value){
        alert("恭喜，你答對了!");
    }else{
        alert("你猜錯了，這個數字是" + x);
    }
}