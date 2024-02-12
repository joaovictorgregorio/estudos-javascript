// RECURSIVIDADE
function Fatorial(n) {
    if (n == 1) {
        return 1
    }
    else {
        return n * Fatorial(n-1)
    }
}

console.log(Fatorial(10))

/*
5! = 5 x 4 x 3 x 2 x 1 = 120
5! = 5 x 4!

n! = n x (n-1)!
1! = 1
*/