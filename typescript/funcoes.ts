//Variaveis recebem fucoes
//Passa os parametros com tipo e especifica o tipo do retorno, no caso não há.
let nomefuncao = function (idade: number, nome: string): void{
    console.log(`Eu sou ${nome} e tenho ${idade} anos`);
}

nomefuncao(26, "Abel Cabral");

let milenum_falcom = function(parsecs: number):boolean{
    return parsecs < 12;    
}

let parsecs: number = 14; 
console.log(`Desafiante tem ${parsecs} ele e maior que mais veloz que a Milenium Falcon? ${milenum_falcom(parsecs) ? "Sim" : "Não"}`);

//outro exemplo de funcao - arrow function
let call = (curso: string, periodo: number): void => console.log(`Meu curso ${curso} estou no periodo ${periodo}`);  
call("Sistema de Informacao", 2);

//parametros padroes, ou seja com um default para um parametro
function inc(speed: number, inc: number = 2) : number{
    return speed * inc;
}

let resultado = inc(25);
console.log(resultado);