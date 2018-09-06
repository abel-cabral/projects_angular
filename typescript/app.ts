class Spacecraft{
    constructor (public propulsor: string){}

    jumpIntoHiperspace(){
        //Sempre que quisermos acessa um membro da intancia dentro da classe precisamos usar o this, seja pra atributos ou metodos
        console.log(`Entrando no Hyperspace usando ${this.propulsor}`);
    }
}

//Crio uma nave usando o modelo acima e defino o tipo de propulsor
let ship = new Spacecraft("Nv77XC");

//Chamo minha funcao da classe
ship.jumpIntoHiperspace();

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

//Como na criacao da Millenium eu já expliquei o motor, nao preciso falar mais
let falcon = new MilleniumFalcon();
falcon.entrarNoEspaco();

//Agora implementamos uma interface
 interface ContainerShip{
     //O uso do ? Faz o item na interface ser opcional
     quantidadeCarga?: number;
 }

 let goodForTheJob = ( ship: ContainerShip ) => ship.quantidadeCarga > 2
 console.log(`Is falcon good for the job? ${goodForTheJob(falcon) ? 'Sim' : 'Nao'}`);
