function contar() {
    var inicio = document.querySelector('input#txtinicio').value
    var fim = document.querySelector('input#txtfim').value
    var passo = document.querySelector('input#txtpasso').value
    var res = document.querySelector('div#res')

    if (inicio.length == 0 || fim.length == 0 || passo.length == 0) {
        res.innerHTML = 'Dados insuficientes... Preencha os espaços em branco e tente de novo'
    } else {
        res.innerHTML = 'Contando... <br>'
        let i = Number(inicio)
        let f = Number(fim)
        let p = Number(passo)
        if (p <= 0) {
            window.alert('Passo invalido... Considerando passo 1')
            p = 1
        }
        //Crescente
        if (i < f) {
            for(let c = i; c <= f; c += p) {
                res.innerHTML += `${c}👉 `
            }
        //Regressiva
        } else {
            for(let c = i; c >= f; c-= p) {
                res.innerHTML += `${c}👉 `
            }
        }
        res.innerHTML += `🏁`
    }
}