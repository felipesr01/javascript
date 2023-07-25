function carregar () {
    var msg = document.getElementById('msg')
    var msg2 = document.getElementById('msg2')
    var img = document.getElementById('imagem')
    var link = document.getElementById('link')
    var area = document.getElementById('area')
    var data = new Date()
    var hora = data.getHours()
    var min = data.getMinutes()
    msg.innerHTML = `Agora são ${hora}:${min}`

    if (hora >= 0 && hora < 5){
        //BOA MADRUGADA
        img.src = 'images/madrugada.png'
        document.body.style.background = '#000000'
        document.body.style.color = '#D6D6D6'
        area.style.background = '#332E33'
        link.style.color = '#D6D6D6'
        msg2.innerHTML = 'Madrugada'
    } else if (hora >= 5 && hora < 12){
        //BOM DIA
        img.src = 'images/manha.png'
        document.body.style.background = '#EBCFA2'
        document.body.style.color = '#6B522A'
        area.style.background = '#white'
        link.style.color = '#6B522A'
        msg2.innerHTML = 'Manhã'
    } else if (hora >= 12 && hora < 18){
        //BOA TARDE
        img.src = 'images/tarde.png'
        document.body.style.background = '#CFB07F'
        document.body.style.color = '#826A42'
        area.style.background = '#white'
        link.style.color = '#826A42'
        msg2.innerHTML = 'Tarde'
    } else {
        //BOA NOITE
        img.src = 'images/noite.png'
        document.body.style.background = '#1C313C'
        document.body.style.color = 'white'
        area.style.background = '#435057'
        link.style.color = 'white'
        msg2.innerHTML = 'Noite'
    }
}
