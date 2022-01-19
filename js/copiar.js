function copy(){
  var texto = output.value;
  navigator.clipboard.writeText(texto);
   monstrarAlerta()
};

function monstrarAlerta(){
 var mostrarAdvertincia = document.querySelector("#copy-span")
 setTimeout(() => {
 mostrarAdvertincia.classList.remove("copiar-texto")
 }, 50);

 setTimeout(() => {
 mostrarAdvertincia.classList.add("copiar-texto")
 }, 1000);
};
