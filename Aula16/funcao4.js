function fatorial (n){
    let fat = 1
    for(let c = n;c > 1;c--){
        fat *= c
    }
    return fat
}

console.log(fatorial(8))


//8!= 8x7x6x5x4x3x2x1=40320