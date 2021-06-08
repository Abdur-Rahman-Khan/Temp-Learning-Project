let interval=setInterval(myFunc,20);
let x=0;

function myFunc(){
    x++;
    document.querySelector('h1').innerText=`${x}%`;
    document.querySelector('h1').style.opacity=`${x/100}`;
    if(x==100){
        clearInterval(interval);
    }
    document.querySelector('img').style.filter=`blur(${(100-x)/3.0}px)`;

}