function Carregar() {
    var horas = document.querySelector('div#mensagem_horas')
    var imagem = document.querySelector('img#imagem_dia')
    var data_atual = new Date()
    var hora_atual = data_atual.getHours()

    horas.innerHTML = `Agora são ${hora_atual} horas`

    if (hora_atual >= 0 && hora_atual < 12) {
        imagem.src = 'imagens/manha.png'
        document.body.style.background = '#e2c49f'
        horas.style.color = '#e2c49f'
        horas.style.background = '#000000b6'
    }
    else if (hora_atual >= 12 && hora_atual < 18) {
        imagem.src = 'imagens/tarde.png'
        document.body.style.background = '#b9846f'
        horas.style.color = '#b9846f' 
        horas.style.background = '#000000b6'
    }
    else {
        imagem.src = 'imagens/noite.png'
        document.body.style.background = '#515154'
        horas.style.color = 'lightblue'
        horas.style.background = '#000000b6'
    }
}

