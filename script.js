let num1 = parseInt(prompt("Digite um número"));
let operacao = prompt("Digite o caracter da sua operação (+, -, *, /)");
let num2 = parseInt(prompt("Digite outro número"));


if (operacao === "+") {
  let resultadoUm = num1 + num2;
  
  alert(`Sua soma foi de ${resultadoUm}`)

}
else if (operacao === "-"){
    let resultadoDois = num1 - num2;
  
    alert(`Sua subtração foi de ${resultadoDois}`)
}
else if (operacao === "*"){
    let resultadoTres = num1 * num2;
  
    alert(`Sua multiplicação foi de ${resultadoTres}`)
}
else if(operacao === "/"){
    let resultadoQuatro = num1 / num2;
  
    alert(`Sua divisão foi de ${resultadoQuatro}`)
}
else{
    alert(`Você fez algo errado :/`)
}