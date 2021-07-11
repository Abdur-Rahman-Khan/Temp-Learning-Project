btn=document.querySelector('button');
btn.addEventListener('click',()=>{
    getJoke();
  })

function getJoke(){
    fetch('https://icanhazdadjoke.com/',{headers:{
    'Accept':'application/json'
    }})
  .then(response => response.json())
  .then(data => {
        document.querySelector('p').textContent=data.joke;
    });
}

getJoke();