let button = document.querySelector('.box')

console.log(button)

button.addEventListener('click',start);

// button.classList.add('')


function start (){
    // document.querySelector('.test').innerHTML = 'Welcome'

    var audio = new Audio('drop-it-124014.mp3');
    setTimeout(()=>audio.play(),100);
    audio.volume = 0.4;
    audio.loop=true;

    button.innerHTML = 'Welcome';
    button.className = 'box glow';
    document.querySelector('img').className = 'show';
    document.querySelector('.ball-one').className = 'ball-one flash';
    document.querySelector('.ball-two').className = 'ball-two flash';
    document.querySelector('.ball-three').className = 'ball-three flash';

    console.log(document.querySelector('.ball-three'))
}