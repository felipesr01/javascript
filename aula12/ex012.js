var agora = new Date()
var hora = agora.getHours()
console.log(`Agora sao exatamente ${hora} horas.`)
if (hora < 5) {
    console.log('Boa Madrugada!')
} else if (hora < 12) {
    console.log('Bom Dia!')
} else if (hora >= 12 && hora < 18) {
    console.log('Boa Tarde!')
} else if (hora >= 18 && hora <= 24 ) {
    console.log('Boa Noite!')
} 
