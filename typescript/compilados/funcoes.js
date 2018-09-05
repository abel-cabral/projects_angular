//Variaveis recebem fucoes
//Passa os parametros com tipo e especifica o tipo do retorno, no caso não há.
var nomefuncao = function (idade, nome) {
    console.log("Eu sou " + nome + " e tenho " + idade + " anos");
};
nomefuncao(26, "Abel Cabral");
var milenum_falcom = function (parsecs) {
    return parsecs < 12;
};
var parsecs = 14;
console.log("Desafiante tem " + parsecs + " ele e maior que mais veloz que a Milenium Falcon? " + (milenum_falcom(parsecs) ? "Sim" : "Não"));
//outro exemplo de funcao - arrow function
var call = function (curso, periodo) { return console.log("Meu curso " + curso + " estou no periodo " + periodo); };
call("Sistema de Informacao", 2);
//parametros padroes, ou seja com um default para um parametro
function inc(speed, inc) {
    if (inc === void 0) { inc = 2; }
    return speed * inc;
}
var resultado = inc(25);
console.log(resultado);
