function verificar() {
    var data = new Date()
    var ano = data.getFullYear()
    var fano = document.getElementById('txtano')
    var res = document.getElementById('res')

    if (fano.value.length == 0 || Number(fano.value.length) > ano) {
        window.alert('[ERRO] Verifique os dados e tente novamente!')
    }else {
        var fsex = document.getElementsByName('radsex')
        var idade = ano - Number(fano.value)
        var genero = ''
        var img = document.createElement('img')
        img.setAttribute('id', 'foto')

        if (fsex[0].checked) {
            genero = 'Homem'
            
            if (idade >= 0 && idade < 10){
                //Criança
                img.setAttribute('src', 'bebe-m.jpg')
            }else if (idade < 21){
                //Jovem
                img.setAttribute('src', 'jovem-m.png')
            }else if (idade < 50 ) {
                //Melhor idade
            } else {
                //Idoso
            }
        }else if (fsex[1].checked) {
            genero = 'Mulher'
            if (idade >= 0 && idade < 10){
                //Criança
            }else if (idade < 21){
                //Jovem
            }else if (idade < 50 ) {
                //Melhor idade
            } else {
                //Idoso
            }
        }
        res.style.textAlign = 'center'
        res.innerHTML = `Detectamos ${genero} com ${idade} anos.`
        img.style.textAlign = 'center'
        res.appendChild(img)
    }
}