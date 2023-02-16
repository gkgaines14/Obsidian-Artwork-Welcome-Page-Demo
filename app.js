let button = document.querySelector('.box')

console.log(button)

button.addEventListener('click',start);

function start (){
    // document.querySelector('.test').innerHTML = 'Welcome'
    button.innerHTML = 'Welcome';
    button.className = 'box glow';
    document.querySelector('img').className = 'show';
    document.querySelector('.ball-one').className = 'ball-one flash';
    document.querySelector('.ball-two').className = 'ball-two flash';
    document.querySelector('.ball-three').className = 'ball-three flash';

    console.log(document.querySelector('.ball-three'))
}