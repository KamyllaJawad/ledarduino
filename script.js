//LED-VERDE

lightgreen = document.getElementById('lightgreen');
function LightGreen(){
    alert('O LED VERDE ACENDEU');
    var led = document.getElementById('led');

    var five = require("johnny-five");
    var board = new five.Board();
    board.on("ready",);
    var led = new five.Led(13);
    led.blink(500);
   
    led.style.backgroundColor = 'red';
};

//LED-AZUL
lightblue = document.getElementById('lightblue');
function LightBlue(){
    var led = document.getElementById('led');
    alert('O LED AZUL ACENDEU');
    led.style.backgroundColor = 'red';
}

//LED-VERMELHO
var lightred = document.getElementById('lightred');
function LightRed(){
   alert('O LED VERMELHO ACENDEU')
   var led = document.getElementById('led');
   led.style.backgroundColor = 'red';
}

//LED-AMARELO
var lightyellow = document.getElementById('lightyellow');
function LightYellow(){
    alert('O LED AMARELO ACENDEU')
    var led = document.getElementById('led');
    led.style.backgroundColor = 'red';
}

//LED-PRETO
var lightblack = document.getElementById('lightblack');
function LightBlack(){
   alert('O LED PRETO ACENDEU')
   var led = document.getElementById('led');
   led.style.backgroundColor = 'red';
}

//LED-LARANJA
var lightorange = document.getElementById('lightorange');
function LightOrange(){
    alert('O LED LARANJA ACENDEU')
    var led = document.getElementById('led');
    led.style.backgroundColor = 'red';
}