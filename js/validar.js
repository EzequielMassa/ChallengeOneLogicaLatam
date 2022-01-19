function validar(){
  var formularioValido = false;
  var texto = input.value
  var padronABuscar = /[^\s*a-z]/g
  var resultadoPadron = padronABuscar.test(texto)
  
   if(resultadoPadron == false){
   encryptar() 
   }else{
  monstrarAlertaError()
   }
}

function monstrarAlertaError(){
 var mostrarError = document.querySelector("#span-error")
 setTimeout(() => {
 mostrarError.classList.remove("span-error-msj")
 }, 50);

 setTimeout(() => {
mostrarError.classList.add("span-error-msj")
}, 10000);
};