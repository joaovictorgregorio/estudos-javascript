function Verificar() {
    var data = new Date() //Pega a data atual
    var ano = data.getFullYear() //GetFullYear é para pegar a data com 4 dígitos
    var formulario_ano = document.querySelector('input#ano_nascimento')
    var resultado = document.querySelector('div#res')

    if (formulario_ano.value == 0 || formulario_ano.value > ano) {
        alert(`[ERRO] Você digitou dados inválidos, verifique e tente novamente!`)
    }
    else {
        var formulario_sexo = document.getElementsByName('sexo')
        var idade = ano - Number(formulario_ano.value)
        var genero = ''
        var imagem = document.createElement('img') //Está criando uma TAG IMG dinâmicamente
        imagem.setAttribute('id', 'foto') //Criando um ID para o IMG criado acima

        if (formulario_sexo[0].checked) {
            genero = 'Homem'
            if (idade >= 0 && idade < 10) { //Se ele não estiver neste parâmetro ele estará acima disto automaticamente
                imagem.setAttribute('src', 'imagens/homem-crianca.png')
            }
            else if (idade < 21) {
                imagem.setAttribute('src', 'imagens/homem-jovem.png')
            }
            else if (idade < 50) {
                imagem.setAttribute('src', 'imagens/homem-adulto.png')
            }
            else {
                imagem.setAttribute('src', 'imagens/homem-idoso.png')
            }
        }
        else if (formulario_sexo[1].checked) {
            genero = 'Mulher'
            if (idade >= 0 && idade < 10) { //Se ela não estiver neste parâmetro ela estará acima disto automaticamente
                imagem.setAttribute('src', 'imagens/mulher-crianca.png')
            }
            else if (idade < 21) {
                imagem.setAttribute('src', 'imagens/mulher-jovem.png')
            }
            else if (idade < 50) {
                imagem.setAttribute('src', 'imagens/mulher-adulta.png')
            }
            else {
                imagem.setAttribute('src', 'imagens/mulher-idosa.png')
            }
        }
        resultado.style.textAlign = 'center'
        resultado.innerHTML = `Foi detectado <strong>${genero}</strong> com <strong>${idade} anos</strong>.`
        resultado.appendChild(imagem) //Vai mostrar a imagem na tela, este APPENCHILD informa que será depois do FOI DETECTADO, porque foi atribuído como filho
    }
}