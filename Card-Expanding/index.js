const panels=document.querySelectorAll('.panel');

for(let i=0;i<panels.length;i++){
    panels[i].addEventListener('click',()=>{
        if(panels[i].classList.contains('active')){
            panels[i].classList.remove('active');
        }
        else{
        for(let j=0;j<panels.length;j++){
            panels[j].classList.remove('active');
        }
        panels[i].classList.add('active');
    }
    });
}