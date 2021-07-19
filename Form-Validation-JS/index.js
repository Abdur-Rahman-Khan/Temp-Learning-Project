const formBox=document.querySelectorAll('.form-box');
const submit= document.querySelector('button');
const input1=document.querySelectorAll('input');
const username=document.querySelector('#username');
const password=document.querySelector('#password');
const repassword=document.querySelector('#repassword');



function checkLength1(x,n){
    if(x.children[1].value.length<n){
        //x.h5.innerText="Ok"
        x.children[1].classList.add('input-red');
        x.children[2].classList.remove('hid')
        x.children[1].classList.remove('input-green');
    }
    else{
        x.children[1].classList.remove('input-red');
        x.children[1].classList.add('input-green');
        x.children[2].classList.add('hid')
    }
}
function checkEmail1(x){
    email=x.children[1].value;
    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if(! re.test(String(email).toLowerCase())){
        x.children[1].classList.add('input-red');
        x.children[2].classList.remove('hid')
        x.children[1].classList.remove('input-green');
    }
   else{
    x.children[1].classList.remove('input-red');
    x.children[1].classList.add('input-green');
    x.children[2].classList.add('hid')
   }
}

function compPassword1(y,x){
    if(!(x.children[1].value==y.children[1].value&&(x.children[1].value.length!=0))){
        x.children[1].classList.add('input-red');
        x.children[2].classList.remove('hid')
        x.children[1].classList.remove('input-green');
    }
    else{
        x.children[1].classList.remove('input-red');
        x.children[1].classList.add('input-green');
        x.children[2].classList.add('hid')
    }
}
function checkLength(x,n){
    if(x.children[1].value.length==0)
        return
    if(x.children[1].value.length<n){
        //x.h5.innerText="Ok"
        x.children[1].classList.add('input-red');
        x.children[2].classList.remove('hid')
        x.children[1].classList.remove('input-green');
    }
    else{
        x.children[1].classList.remove('input-red');
        x.children[1].classList.add('input-green');
        x.children[2].classList.add('hid')
    }
}
function checkEmail(x){
    email=x.children[1].value;
    if(x.children[1].value.length==0)
        return
    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if(! re.test(String(email).toLowerCase())){
        x.children[1].classList.add('input-red');
        x.children[2].classList.remove('hid')
        x.children[1].classList.remove('input-green');
    }
   else{
    x.children[1].classList.remove('input-red');
    x.children[1].classList.add('input-green');
    x.children[2].classList.add('hid')
   }
}

function compPassword(y,x){
    if(x.children[1].value.length==0)
        return
    if(!(x.children[1].value==y.children[1].value&&(x.children[1].value.length!=0))){
        x.children[1].classList.add('input-red');
        x.children[2].classList.remove('hid')
        x.children[1].classList.remove('input-green');
    }
    else{
        x.children[1].classList.remove('input-red');
        x.children[1].classList.add('input-green');
        x.children[2].classList.add('hid')
    }
}
function check(){
    checkLength(formBox[1],3)
    checkLength(formBox[3],6)
    checkEmail(formBox[2])
    compPassword(formBox[3],formBox[4])
}
function check1(){
    checkLength1(formBox[1],3)
    checkLength1(formBox[3],6)
    checkEmail1(formBox[2])
    compPassword1(formBox[3],formBox[4])
}




//Event Listener
submit.addEventListener('click',(e)=>{
    e.preventDefault();
    check1()
})
input1.forEach(x=>{
    x.addEventListener('click',check);
})
document.addEventListener('keyup',(e)=>{
    check()
})