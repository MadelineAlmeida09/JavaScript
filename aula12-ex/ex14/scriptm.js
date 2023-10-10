function carregar() {
    var msg = window.document.getElementById('msg')
    var img = window.document.getElementById('imagem')
    var date = new Date()
    var data = new Date()
    var hora = date.getHours()
    var min = data.getMinutes()
    //var min = data.getMinutes()
        msg.innerHTML = `Agora são ${hora} horas e ${min} minutos`
    if (hora >= 0 && hora < 12){
        img.src = 'imagens/manha.jpg'
        document.body.style.background = '#e2cd9f'
        document.body.style.h1 = '#000000'
    } else if(hora >= 12 && hora < 18){
        img.src = 'imagens/tarde.jpg'
        document.body.style.background = '#b9846f'
    } else{
        img.src = 'imagens/noite.jpg'
        document.body.style.background = '#515154'
    }
}