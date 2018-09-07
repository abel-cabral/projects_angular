class Spacecraft{
    constructor (public propulsor: string){}

    jumpIntoHiperspace(){
        //Sempre que quisermos acessa um membro da intancia dentro da classe precisamos usar o this, seja pra atributos ou metodos
        console.log(`Entrando no Hyperspace usando ${this.propulsor}`);
    }
}

//Agora implementamos uma interface
interface ContainerShip{
    //O uso do ? Faz o item na interface ser opcional
    quantidadeCarga?: number;
}

//O que estou exportando desse módulo
export {Spacecraft, ContainerShip};