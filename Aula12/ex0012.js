var agora = new Date()
var hora = agora.getHours()
console.log (`Agora são exatamente ${hora}? `)
if (hora >= 0 && hora < 5) {
    console.log ('Boa madrugada')
} else if (hora >=6 && hora< 13){
    console.log ('Bom dia')
} else if (hora >=14 && hora<18){
    console.log('Boa tarde')
} else if (hora >=19 && hora < 23){
    console.log('Boa noite')
}