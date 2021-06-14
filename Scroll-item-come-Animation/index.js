const box= document.querySelectorAll('.box');

// document.querySelector('h1').addEventListener('click',()=>{for( let i=0;i<box.length;i++){
//     box[i].addEventListener('click',()=>{
//         console.log("Ok");
//     });
//     box[i].classList.toggle('hidden');
//     console.log("Ok");
// }})
window.addEventListener('scroll',myFunc);

function myFunc(){
    const limitTop=window.innerHeight/13 * 12;
   // console.log(limitTop,);
    box.forEach(x=>{
        if(x.getBoundingClientRect().top<limitTop){
            x.classList.remove('hidden');
        }
        else{
            x.classList.add('hidden');
        }
    })
}