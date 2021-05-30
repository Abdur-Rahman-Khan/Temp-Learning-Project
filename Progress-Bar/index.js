const nbtn = document.querySelector('#next');
const pbtn = document.querySelector('#prev');
const line=document.querySelector('.line');
const circles=document.querySelectorAll('.circle');

let active = 0;

nbtn.addEventListener('click', () => {
    if (active < 3) {
        active++;
        circles[active].classList.add('active');
        line.style.width=active*33+'%';
       console.log(line.style.width+'30%');
        change();
    }
});
pbtn.addEventListener('click', () => {
    if (active > 0) {
        circles[active].classList.remove('active');
        active--;
        line.style.width=(active)*33+'%';
        change();
    }
});
function change() {
    if (active === 0) {
        pbtn.classList.add('btn-disabled');
    }
    else {
        pbtn.classList.remove('btn-disabled');
    }
    if (active === 3) {
        nbtn.classList.add('btn-disabled');
    }
    else {
        nbtn.classList.remove('btn-disabled');
    }
}


