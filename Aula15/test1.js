let num = [1,2,3,4,5,6,7,8,9,10,11]
/*
for(let pos=0;pos<=num.length;pos++){
    console.log(`A posição ${pos} tem o valor ${num[pos]}`)
}*/


for (let pos in num){
    console.log(`A posição ${pos} tem o valor ${num[pos]}`)
}

