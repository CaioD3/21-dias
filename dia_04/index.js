// let Idade = Number(prompt('insira sua idade'))

// if (Idade >=15) {
//     console.log ('voce tem idade maior que 15 ou igual')

// }else {
//     console.log ("voce não tem idade maior ou igual a 15")
// }


// =======================================================//

// let idade = Number(prompt('insira a sua idade'))
// let nome = prompt('insira seu nome')

// if (idade === 20 && nome ==="caio"){
//     console.log ("seu nome é caio e tem 20 anos")
// }

// else if (idade === 20 || nome === "caio"){
//     console.log ("seu nome é caio ou tem 20 anos")
// }

// else {
//     console.log ("seu nome não é caio ou tem 20 anos")
// }

//==========DESAFIO DO DIA 4===========================================//

// #====1====#

// let Fome = (prompt("Voce esta com fome?"))
// let Dinheiro = (prompt("Voce tem dinheiro?"))
// let Restaurante = (prompt("Restaurante esta aberto?"))

// if (Fome === "nao" || Dinheiro === "nao"){
//     console.log ("hoje a janta sera em casa")
// }

// else if (Fome === "sim" && Dinheiro === "sim"  && Restaurante == "nao"){
//     console.log ("pesça um delivery")
// }

// else if (Fome === "sim" && Dinheiro === "sim" && Restaurante === "sim") { 
//     console.log ("Hoje o jantar sera no seu restaurante preferido")
// }


// #==== 2 =====#


let Nome = prompt("Qual o seu nome")
let Idade = Number(prompt("Qual a sua idade"))
let Carteira = prompt ("Possui carteira?")
let Carro = prompt ("Tem carro?")

if (Idade < 18 || Carteira === "nao"){
    console.log (`${Nome} , voce não pode dirigir`)
}

else if (Idade >=18 && Carteira === "sim" && Carro === "nao" ){
    console.log (` ${Nome} voce pode dirigir mas não tem um carro`)
}

else if (Idade >=18 && Carteira === "sim" && Carro === "sim"){
    console.log (`${Nome} , voce sera motorista`)
}

