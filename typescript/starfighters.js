"use strict";
//Se um módulo depende de outros modulos eu preciso importar
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    }
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
exports.__esModule = true;
//Nome das classe que serao importadas e de onde estao sendo
var base_ships_1 = require("./base-ships");
//crio uma  classe que herda tudo de spacecraft e por isso preciso dizer qual é o propulsor
var MilleniumFalcon = /** @class */ (function (_super) {
    __extends(MilleniumFalcon, _super);
    function MilleniumFalcon() {
        var _this = _super.call(this, "Hyperdrive") || this;
        _this.quantidadeCarga = 4;
        return _this;
    }
    //Aciona a funcao que entra no hyperespaco, mas colocamos uma roleta pra ver se ela consegue
    MilleniumFalcon.prototype.entrarNoEspaco = function () {
        if (Math.random() >= 0.5) {
            _super.prototype.jumpIntoHiperspace;
        }
        else {
            console.log("Falha ao entrar no Hyper Espaco");
        }
    };
    return MilleniumFalcon;
}(base_ships_1.Spacecraft));
exports.MilleniumFalcon = MilleniumFalcon;
