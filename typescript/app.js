"use strict";
exports.__esModule = true;
//Importo os demais módulos
var base_ships_1 = require("./base-ships");
var starfighters_1 = require("./starfighters");
//Crio uma nave usando o modelo acima e defino o tipo de propulsor
var ship = new base_ships_1.Spacecraft("Nv77XC");
//Chamo minha funcao da classe
ship.jumpIntoHiperspace();
//Como na criacao da Millenium eu já expliquei o motor, nao preciso falar mais
var falcon = new starfighters_1.MilleniumFalcon();
falcon.entrarNoEspaco();
var goodForTheJob = function (ship) { return ship.quantidadeCarga > 2; };
console.log("Is falcon good for the job? " + (goodForTheJob(falcon) ? 'Sim' : 'Nao'));
