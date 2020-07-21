function contar() {
  let nu = document.getElementById('txti')
  let res = document.getElementById('res')
   
  if (nu.value.length == 0 ){
    res.innerHTML = 'Impossivel contar'
  } else {
    let iner1 = Number(nu.value)

   if (iner1 >= 0 && iner1 < 10){
      iner1 *= 4      
  } else{
    res.innerHTML(' infomra numero')
  }
  }
  
}