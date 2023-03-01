function verificar(){
    var txtnasc = document.getElementById('txtanonasc')
    var anoatual = new Date()
    var ano = anoatual.getFullYear()
    var res = document.getElementById('res')
    var idade = ano - Number(txtnasc.value)
    var sex = document.getElementsByName('sex')
    var foto = null
    var img = document.createElement('img')
    img.setAttribute('id', 'foto')
    if(txtnasc.value.length != 4 || Number(txtnasc.value) > ano || idade > 100){
        window.alert('[ERRO] Verifique os dados e tente novamente!')
        return
    }
    if(sex[0].checked){
        var sexo = "masculino"
        if(0<idade && idade<=9){
            img.setAttribute('src', 'imagens/homem09.png')
        }else if (10<idade && idade<=14){
            img.setAttribute('src', 'imagens/homem1015.png')
        }else if (15<idade && idade<=24){
            img.setAttribute('src', 'imagens/homem1624.png')
        }else if (25<idade && idade<=34){
            img.setAttribute('src', 'imagens/homem2534.png')
        }else if (35<idade && idade<=59){
            img.setAttribute('src', 'imagens/homem3559.png')
        }else if (60<idade && idade<=69){
            img.setAttribute('src', 'imagens/homem6069.png')
        }else if (idade >= 70){
            img.setAttribute('src', 'imagens/homem70.png')
        }
    }else {
        var sexo = "feminino"
        if(0<idade && idade<=9){
            img.setAttribute('src', 'imagens/mulher09.png')
        }else if (10<idade && idade<=14){
            img.setAttribute('src', 'imagens/mulher1015.png')
        }else if (15<idade && idade<=24){
            img.setAttribute('src', 'imagens/mulher1624.png')
        }else if (25<idade && idade<=34){
            img.setAttribute('src', 'imagens/mulher2534.png')
        }else if (35<idade && idade<=49){
            img.setAttribute('src', 'imagens/mulher3549.png')
        }else if (50<idade && idade<=69){
            img.setAttribute('src', 'imagens/mulher5069.png')
        }else if (idade >= 70){
            img.setAttribute('src', 'imagens/mulher70.png')
        }
    }
    res.style.textAlign = 'center'
    res.style.paddingTop = '30px'
    res.innerHTML = `Você é do sexo ${sexo} e você tem ${idade} anos`
    res.appendChild(img)
    img.style.paddingTop = '30px'
}
