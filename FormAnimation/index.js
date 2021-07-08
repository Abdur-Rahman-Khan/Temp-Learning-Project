const label=document.querySelectorAll('label');
label.forEach((x)=>{
    y=x.textContent
        .split('')
        .map((z,i)=>`<span style="transition-delay:${i * 50}ms">${z}</span>`)
        .join('');
    
    x.innerHTML=y;
   // console.log(x)
})

