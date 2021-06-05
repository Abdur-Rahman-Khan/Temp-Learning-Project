const btn = document.querySelector('.btn');
btn.addEventListener('click',()=>{
    document.querySelector('input').classList.toggle('active');
    document.querySelector('button').classList.toggle('btnh');
    document.querySelector('input').focus();
});