let numero = document.querySelector('input#numero')
let lista = document.querySelector('select#lista')
let resposta = document.querySelector('div#res')
let valores = []

function inNumero(n) {
    if (Number(n) >= 1 && Number(n) <= 100) {
        return true
    }
    else {
        return false
    }
}

function inLista(n, i) {
    if (i.indexOf(Number(n)) != -1) {
        return true
    }
    else {
        return false
    }
}

function Adicionar() {
    if (inNumero(numero.value) && !inLista(numero.value, valores)) {
        valores.push(Number(numero.value))
        let item = document.createElement('option')
        item.text = `valor ${numero.value} adicionado.`
        lista.appendChild(item)
        resposta.innerHTML = ''
    }
    else {
        alert(`Valor inválido ou já encontrado na lista.`)
    }
    numero.value = ''
    numero.focus()
}

function Finalizar() {
    if (valores.length == 0) {
        alert(`Adicionei valores antes de finalizar!`)
    }
    else {
        let total = valores.length
        let maior = valores[0]
        let menor = valores[0]
        let soma = 0
        let media = 0

        for (let i in valores) {
            soma += valores[i]
            if (valores[i] > maior) {
                maior = valores[i]
            }
            if (valores[i] < menor) {
                menor = valores[i]
            }
        }
        media = soma / total
        resposta.innerHTML = ''
        resposta.innerHTML += `<p>Ao todo temos ${total} números cadastrados.</p>`
        resposta.innerHTML += `<p>O maior valor informado foi ${maior}.</p>`
        resposta.innerHTML += `<p>O menor valor informado foi ${menor}.</p>`
        resposta.innerHTML += `<p>Somando todos os valores temos ${soma}.</p>`
        resposta.innerHTML += `<p>A média dos valores digitados é ${media}.</p>`
    }
}

 