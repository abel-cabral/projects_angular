//Se um módulo depende de outros modulos eu preciso importar

//Nome das classe que serao importadas e de onde estao sendo
import {Spacecraft, ContainerShip} from './base-ships';

//crio uma  classe que herda tudo de spacecraft e por isso preciso dizer qual é o propulsor
class MilleniumFalcon extends Spacecraft implements ContainerShip{
    quantidadeCarga: number;

    constructor(){
        super("Hyperdrive");        
        this.quantidadeCarga = 4;
    }

    //Aciona a funcao que entra no hyperespaco, mas colocamos uma roleta pra ver se ela consegue
    entrarNoEspaco(){
        if(Math.random() >= 0.5){
            super.jumpIntoHiperspace;
        }else{
            console.log("Falha ao entrar no Hyper Espaco");
        }
    }
}

export {MilleniumFalcon};