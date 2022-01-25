function validar() {
  var texto = input.value
  var padronABuscar = /[^\s*a-z]/g
  var resultadoPadron = padronABuscar.test(texto)
  var muneco = document.querySelector(".muneco-container")
  var textoInfo = document.querySelector(".main-text-container")

  if (resultadoPadron == false) {
    output.classList.remove("active")
    muneco.classList.add("active")
    textoInfo.classList.add("active")
    encryptar()
  } else {
    monstrarAlertaError()
  }
}

function monstrarAlertaError() {
  var muneco = document.querySelector(".muneco-container")
  var textoInfo = document.querySelector(".main-text-container")
  output.classList.add("active")
  muneco.classList.remove("active")
  textoInfo.classList.remove("active")
};