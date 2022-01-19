var input = document.querySelector(".text-input");
var output = document.querySelector("#msg");
 
var botonEncryptar = document.querySelector("#btn-encriptar");
botonEncryptar.addEventListener("click",function(event){
  event.preventDefault();

  validar();
 });

var botonDesencryptar = document.querySelector("#btn-desencriptar");
botonDesencryptar.addEventListener("click",function(event){
  event.preventDefault();
   
desencryptar();
 });

  var botonCopiar = document.querySelector("#btn-copy");
  botonCopiar.addEventListener("click",function(event){
    event.preventDefault();

   copy();
  });


