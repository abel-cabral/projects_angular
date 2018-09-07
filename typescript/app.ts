//Importo os demais módulos
import {Spacecraft, ContainerShip} from './base-ships';
import {MilleniumFalcon} from './starfighters';

//Crio uma nave usando o modelo acima e defino o tipo de propulsor
let ship = new Spacecraft("Nv77XC");

//Chamo minha funcao da classe
ship.jumpIntoHiperspace();

//Como na criacao da Millenium eu já expliquei o motor, nao preciso falar mais
let falcon = new MilleniumFalcon();
falcon.entrarNoEspaco();

let goodForTheJob = ( ship: ContainerShip ) => ship.quantidadeCarga > 2
console.log(`Is falcon good for the job? ${goodForTheJob(falcon) ? 'Sim' : 'Nao'}`);
