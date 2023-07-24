var idade = 18
console.log(`Voce tem ${idade} anos`)
if (idade < 16) {
    console.log('Nao vota')
}  else if (idade < 18 || idade > 70){
    console.log('Voto Facultativo')
}  else if (idade >= 18) {
    console.log('Voto Obrigatorio')
}