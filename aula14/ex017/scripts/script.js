function calc() {
    var num = document.querySelector('input#num').value
    var tab = document.querySelector('select#tabuada')
    if (num.length == 0){
        window.alert('Insira dados para calcular a tabuada')
    } else {
        var n = Number(num)
        var c = 1
        tab.innerHTML = ''
        while (c <=10) {
            var item = document.createElement('option')
            item.text = `${n} x ${c} = ${n*c}`
            item.value = `tab${c}`
            tab.appendChild(item)
            c++
        }
    }
        
}

