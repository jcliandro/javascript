let turnOn = document.getElementById('turnOn');
let turnOff = document.getElementById('turnOff');
let lamp = document.getElementById('lamp');

function lampOn(){
    lamp.src = './img/ligada.jpg';
}

function lampOff(){
    lamp.src = './img/desligada.jpg';
}

function lampBroken(){
    lamp.src = './img/quebrada.jpg';
}

turnOn.addEventListener ('click', lampOn);  
turnOff.addEventListener ('click', lampOff );
lamp.addEventListener('dblclick', lampBroken);