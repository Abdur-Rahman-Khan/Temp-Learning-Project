sound=document.querySelector('#sound');
btn=document.querySelectorAll('button');
btn.forEach(e=> {
    e.addEventListener('click',()=>{
      //  console.log("ok",sound);
        stopSound();
        sound.play();
    })
});
function stopSound(){
    sound.pause();
    sound.currentTime=0;
}