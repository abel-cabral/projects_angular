"use strict";
exports.__esModule = true;
var Spacecraft = /** @class */ (function () {
    function Spacecraft(propulsor) {
        this.propulsor = propulsor;
    }
    Spacecraft.prototype.jumpIntoHiperspace = function () {
        //Sempre que quisermos acessa um membro da intancia dentro da classe precisamos usar o this, seja pra atributos ou metodos
        console.log("Entrando no Hyperspace usando " + this.propulsor);
    };
    return Spacecraft;
}());
exports.Spacecraft = Spacecraft;
