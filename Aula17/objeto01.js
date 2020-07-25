let amigo = {Nome:'José',
Sexo:'M',
Peso:85,
engordar(p){
    console.log(`Engordou`)
    this.Peso +=p
}
}
amigo.engordar(2)

console.log(`${amigo.Nome} Pesa ${amigo.Peso}Kg`)