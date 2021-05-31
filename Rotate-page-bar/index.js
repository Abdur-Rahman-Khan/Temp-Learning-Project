const scene=document.querySelector('.container');
const circle=document.querySelector('.circle');
const nav=document.querySelector('.nav');

document.querySelector('.fas').addEventListener('click',()=>{
    scene.classList.add('container-rotate');
    circle.classList.add('circle-rotate');
    nav.classList.add('nav-slide');
})
document.querySelector('.far').addEventListener('click',()=>{
    scene.classList.remove('container-rotate');
    circle.classList.remove('circle-rotate');
    nav.classList.remove('nav-slide');
})