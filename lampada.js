'use strict'

const turnOn = document.getElementById('turnOn');
const turnOff = document.getElementById('turnOff');



const lamp = document.getElementById('lamp');

turnOn.addEventListener('click', lampOn);

function lampOn() {


    if (!islampBroken()) {

    lamp.src = './img/ligada.jpg'
}

}


turnOff.addEventListener('click', lampOff)


function lampOff() {


    if (!islampBroken()) {
    lamp.src = "./img/desligada.jpg"

}

}


lamp.addEventListener('mouseover', lampOn);
lamp.addEventListener('mouseout', lampOff);
lamp.addEventListener('dblclick', lampBroken);



//implementação de concerto.


const trocar = document.getElementById("conserto");

function consertar(){

lamp.src = "./img/desligada.jpg"


}
trocar.addEventListener('click', consertar);



function lampBroken() {

    lamp.src = "./img/quebrada.jpg";


}


function islampBroken (){

return lamp.src.indexOf ('quebrada') > -1;

}


