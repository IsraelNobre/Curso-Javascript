let num = [5,8,2,9,3]
num.push(1)
num.sort()
console.log(num)
console.log(`O ventor tem ${num.length} elementos`)
console.log(` O primeiro vetor é ${num[0]}`)
let pos = num.indexOf(10)
if (pos == -1){
    console.log('Valor não encontrado')
} else {
    console.log(`o valor do vetor ${pos}`)
}
