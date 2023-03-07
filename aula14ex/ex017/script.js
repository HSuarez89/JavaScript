function tabuada() {
    var num = document.getElementById('txtn')
    var tab = document.getElementById('seltab')
    if (num.value.length == 0){
        window.alert('Por favor digite um número!')
    }else {
        var n = Number(num.value)
        var m = 1
        tab.innerHTML = ''
        while (m < 10){
            var item = document.createElement('option')
            item.text = `${n} X ${m} = ${n*m}`
            item.value = `tab${m}`
            tab.appendChild(item)
            m++
        }
    }
}