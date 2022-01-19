function desencryptar(){
  var fraseOriginal = input.value;
  var fraseDesencriptada = fraseOriginal.replace(/ai/g, "a").replace(/enter/g, "e").replace(/imes/g, "i").replace(/ober/g, "o").replace(/ufat/g, "u");
  return output.value = fraseDesencriptada;
}