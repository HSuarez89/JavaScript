function contar(){
    var inicio = document.getElementById("num1")
    var fim = document.getElementById('num2')
    var passo = document.getElementById('passo')
    var res = document.getElementById('res')
    var i = Number(inicio.value)
    var f = Number(fim.value)
    var p = Number(passo.value)
    if(i == null || f == null || p == 0 || i == f){
        res.innerHTML = "Erro. Dados incorretos, impossível contar."
    }else {
        if(i < f){
            while(i <= f){
            res.innerHTML += `${i} \u{1F449} `
            i += p
            }  
        }else {
            while(i >= f){
                res.innerHTML += `${i} \u{1F449} `
                i -= p
                } 
        }
        res.innerHTML += `\u{1F3C1}`
    }
}