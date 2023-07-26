function verificar() {
    var data = new Date()
    var ano = data.getFullYear()
    var fano = document.querySelector('input#txtano')
    var res = document.querySelector('div#res')

    if (fano.value.lenght == 0 || Number(fano.value) > ano) {
        window.alert('[ERRO] Insira dados validos')
    } else {
        var fsex = document.getElementsByName('sexo')
        var idade = ano - Number(fano.value)
        var gen = ''
        var img = document.createElement('img')
        img.style.display = 'block'
        img.style.margin = 'auto'
        img.style.paddingTop = '10px'
        if (fsex[0].checked) {
            gen = 'Homem'
            if (idade >= 0 && idade < 5){
                //bebe
                img.setAttribute('src', 'images/bebe-m.png')
            }
            else if (idade < 11) {
                //crianca
                img.setAttribute('src', 'images/crianca-m.png')
            }
            else if (idade < 21) {
                //jovem
                img.setAttribute('src', 'images/jovem-m.png')
            }
            else if (idade < 60) {
                //adulto
                img.setAttribute('src', 'images/adulto-m.png')
            }
            else {
                //idoso
                img.setAttribute('src', 'images/idoso-m.png')
            }
        } else if (fsex[1].checked) {
            gen = 'Mulher'
            if (idade >=0 && idade < 5) {
                img.setAttribute('src', 'images/bebe-f.png')
            }
            else if (idade < 11) {
                img.setAttribute('src', 'images/crianca-f.png')
            }
            else if (idade < 21) {
                img.setAttribute('src', 'images/jovem-f.png')
            }
            else if (idade < 60) {
                img.setAttribute('src', 'images/adulto-f.png')
            }
            else{
                img.setAttribute('src', 'images/idosa-f.png')
            }
        }
        res.style.textAlign = 'center'
        res.innerHTML = `Detectamos ${gen} com ${idade} anos`
        res.appendChild(img)
    }
}