function encryptar() {
  var fraseOriginal = input.value;
  var fraseEncriptada = " "

  for (var i = 0; i < fraseOriginal.length; i++) {
    var letra = fraseOriginal[i]
    if (letra == "a") {
      letra = "ai"
      fraseEncriptada += letra
    } else if (letra == "e") {
      letra = "enter"
      fraseEncriptada += letra
    } else if (letra == "i") {
      letra = "imes"
      fraseEncriptada += letra
    } else if (letra == "o") {
      letra = "ober"
      fraseEncriptada += letra
    } else if (letra == "u") {
      letra = "ufat"
      fraseEncriptada += letra
    } else {
      fraseEncriptada += letra
    }
  }
  return output.value = fraseEncriptada;
}