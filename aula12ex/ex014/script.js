function carregar() {
    var msg = document.getElementById('msg')
    var img = document.getElementById('imagem')
    var data = new Date()
    var hora = data.getHours()
    //var hora = 22
    var thora = msg.innerHTML = `Agora são ${hora} horas.`

    if(hora >= 0 && hora < 12) {
        document.body.style.background = '#DEC8B1'
        img.src = 'manha.png'
    }else if(hora >= 12 && hora < 18){
        document.body.style.background = '#dd741f'
        img.src = 'tarde.png'
    }else {
        document.body.style.background = '#120a1a'
        img.src = 'noite.png'
    }
}
