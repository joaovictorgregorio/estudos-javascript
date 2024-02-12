let valores = [8, 1, 7, 4, 2, 9]

// Forma tradicional de percorrer um array
for (let i = 0; i < valores.length; i++) {
    console.log(`A posição ${i} tem o valor ${valores[i]}`)
}

// Forma atualizada do ECMASCRIPT para percorrer um array, executa a mesma coisa que a linha de cima, porém de forma simplificada
for (let i in valores) {
    console.log(`A posição ${i} tem o valor ${valores[i]}`)
}

// valores.indexOf mostra a posição que o número solicitado está
console.log(`O valor está na posição: ${valores.indexOf(2)}`)