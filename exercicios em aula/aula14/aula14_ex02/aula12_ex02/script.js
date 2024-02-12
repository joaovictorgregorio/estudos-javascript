function Calcular() {
    let valor = document.querySelector('input#numero')
    let tabuada = document.querySelector('select#select_tabuada')

    if (valor.value == 0) {
        alert(`Você informou um valor inválido digite novamente!`)
    }
    else {
        // Transformando o valor recebido do usuário para NUMBER
        let numero = Number(valor.value)
        // Zera os dados anteriores para a nova tabela selecionada sobrepor os dados 
        tabuada.innerHTML = ''

        for (let i = 1; i <= 10; i++) {
            // Cria o OPTION dentro do SELECT de forma dinâmica, não necessitando colocar direto no HTML desta página facilitando a resolução deste problema
            let item = document.createElement('option')
            // Executa a lógica
            item.text = `${numero} x ${i} = ${numero*i}`
            //Etapa importante apenas para linguagem PHP no JavaScript é desnecessário
            item.value = `tabuada${i}` 
            // Descreve os dados da tabuada dentro do SELECT seguindo a ordem crescente de 1 até 10, vezes o número informado pelo usuário
            tabuada.appendChild(item)
        }
    }
}

 