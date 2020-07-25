let ini = document.querySelector('input#txtn')
let exb = document.querySelector('select#tela')
let res = document.querySelector('div#res')
let valores = []

function isNumero(n) {
    if(Number(n) >= 1 && Number(n) <=100){
    return true
  } else {
    return false
    }
}

function inLista(n, l){
    if(l.indexOf(Number(n)) != -1){
      return true
    } else {  
      return false
    }

}

function adicionar(){
    if(isNumero(ini.value) && !inLista(ini.value, valores)) {
      valores.push(Number(ini.value))
      let item = document.createElement('Option')
      item.text = `Valor ${ini.value} adicionado`
      exb.appendChild(item)
      res.innerHTML = ''
    } else {
      window.alert('Valor inválido ou já encontrado na lista.')
    }
    ini.value = ''
    ini.focus() // foca no input ini
 
}

function finalizar(){
  if (valores.length == 0){
    window.alert('Adicione o valor antes de finalizar')
  } else {
    let tot = valores.length // mostra a quantidade de posições(é o indice 0,1,2,3...) dentro do query ou vetor valores
    let maior = Math.max.apply(Math,valores)  // retorna o maior numero 
    let menor = Math.min.apply(Math,valores)  // retorna o menor numero
    let soma = 0
    let media = 0
    for(let pos in valores){
      soma += valores[pos]
    
    }
    media += soma / tot

    res.innerHTML = ''
    res.innerHTML += `<p>Ao todo, temos ${tot} números cadastrados</p>`
    res.innerHTML +=`<p> O maior número é ${maior} e o menor é ${menor}</p>`
    res.innerHTML +=`<p> O soma entre os valores é ${soma}</p>`
    res.innerHTML += `<p>A média dos números é ${media}</p>`
  }
}






