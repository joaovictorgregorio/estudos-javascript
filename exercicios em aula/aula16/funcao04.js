// Fatorial de 5 = 5 x 4 x 3 x 2 x 1 = 120

function Fatorial(n) {
    let fat = 1

    for (let i = n; i > 1; i--) {
        fat *= i
    }
    return fat
}

console.log(Fatorial(5))