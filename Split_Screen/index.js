// document.querySelector(".btn.left").addEventListener('mouseenter',()=>{
//     document.querySelector(".split.left").classList.toggle('expand');
//     document.querySelector('.split.right').classList.toggle('shrink');
// })
// document.querySelector(".btn.right").addEventListener('mouseenter',()=>{
//     document.querySelector(".split.right").classList.toggle('expand');
//     document.querySelector('.split.left').classList.toggle('shrink');
// })

btnleft= document.querySelector(".btn.left");
btnright=document.querySelector(".btn.right");

splitright=document.querySelector(".split.right");
splitleft=document.querySelector('.split.left');

splitleft.addEventListener('mouseenter',()=>{
    splitleft.classList.add('expand');
    splitright.classList.add('shrink');
})
splitleft.addEventListener('mouseleave',()=>{
    splitleft.classList.remove('expand');
    splitright.classList.remove('shrink');
})

splitright.addEventListener('mouseenter',()=>{
    splitright.classList.add('expand');
    splitleft.classList.add('shrink');
})
splitright.addEventListener('mouseleave',()=>{
    splitright.classList.remove('expand');
    splitleft.classList.remove('shrink');
})