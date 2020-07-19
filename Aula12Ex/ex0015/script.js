function  verificar() {
  var data = new Date()
  var ano = data.getFullYear()
  var fano = document.getElementById('txtano')
  var res = document.querySelector('div#res')
  if (fano.value.length   == 0 || fano.value > ano) {
      window.alert ('[ERRO] Verifique os dados e tente novamente!')
    } else {
      var fsex = document.getElementsByName ('radsex')
      var idade = ano - Number(fano.value)
      var gênero = ''
      var img = document.createElement('img')
      img.setAttribute('id', 'foto')
      if (fsex[0].checked) {
        gênero = 'Homem'
        if (idade >=0 && idade <10){
        //Criança
        img.setAttribute ('src','bebem-1.png')
      } else if (idade <21){
        // jovem
        img.setAttribute ('src','menino.png')
      } else if (idade < 50){
        // adulto
        img.setAttribute ('src','jovemm.png')
      } else {
        //idoso
        img.setAttribute ('src','idoso-1.png')
      }
      } else if (fsex[1].checked){
        gênero = 'Mulher'
        if (idade >=0 && idade <10){
          // Criança
          img.setAttribute ('src','bebef-1.png')
        } else if (idade <21){
          // jovem
          img.setAttribute ('src','menina.png')
        } else if (idade <50){
          //adulto
          img.setAttribute ('src','jovemf-1.png')
        } else{
          //idoso
          img.setAttribute ('src','idosa-1.png')
        }
      }
      res.style.textAlign = 'center'
      res.innerHTML = `Dectetamos ${gênero} com ${idade} anos.`
      res.appendChild(img) // precisa inseir este comando para aparecer a foto. 
     
    }

}