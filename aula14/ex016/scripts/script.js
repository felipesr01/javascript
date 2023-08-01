function contar() {
    var inicio = document.querySelector('input#txtinicio')
    var fim = document.querySelector('input#txtfim')
    var passo = document.querySelector('input#txtpasso')

    if (inicio.value.lenght == 0 || fim.value.lenght == 0 || passo.value.lenght == 0){
        window.alert = 'dados fodade'
    } else {
        window.alert = 'ok'
    }

}