function Contagem() {
    let inicial = document.querySelector('input#inicio')
    let final = document.querySelector('input#fim')
    let incremento = document.querySelector('input#passo')
    let resposta = document.querySelector('div#res')

    if (inicial.value == 0 || final.value == 0 || incremento.value == 0) {
        resposta.innerHTML = `[ERRO] digite os dados novamente!`
        resposta.style.textAlign = `center`
    }
    else {
        resposta.innerHTML = `<strong>Contando:</strong> <br>`
        //Essa transformação é necessária, pois quando o usuário informa os valores na tela o navegador retorna como uma STRING, desta forma sendo essencial transformar para NUMBER para o código ser interpretado corretamente!
        let inicio = Number(inicial.value)
        let fim = Number(final.value)
        let passo = Number(incremento.value)

        if (passo <= 0) {
            alert('Você informou passo zero, vamos considerar passo 1')
            passo = 1
        }
        if (inicio < fim) {
            for (let i = inicio; i <= fim; i += passo) {
                resposta.innerHTML += ` ${i}  \u{1F51C}`
                resposta.style.textAlign = `center`
            }
        }
        else {
            for (let i = inicio; i >= fim; i -= passo) {
                resposta.innerHTML += ` ${i} \u{1F51C}`
                resposta.style.textAlign = `center`
            }
        }
        resposta.innerHTML += ` <br><strong>Fim:</strong> \u{1FA99} `
        resposta.style.textAlign = `center`
    }
}