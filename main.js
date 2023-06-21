let campoDesencriptado = document.getElementById("encriptar");
let campoEncriptado = document.getElementById("desencriptar");
let chavesEncriptacao = [
  { letraAntiga: "e", letraNova: "enter" },
  { letraAntiga: "i", letraNova: "imes" },
  { letraAntiga: "a", letraNova: "ai" },
  { letraAntiga: "o", letraNova: "ober" },
  { letraAntiga: "u", letraNova: "ufat" },
];

function encriptar() {
  let textoEncriptado = campoDesencriptado.value;
  let pattern = /[!@#$%^&*()_+\-=[\]{};':"\\|,.<>/?]+|[A-Z]+/; 
  let validationString = pattern.test(textoEncriptado);
  if (validationString == true) {
    window.alert("Seu texto contêm letras maiúsculas ou caracteres especiais, digite um texto válido!");
  } else {
    for (let i = 0; i < chavesEncriptacao.length; i++) {
      textoEncriptado = textoEncriptado.replaceAll(
        chavesEncriptacao[i].letraAntiga,
        chavesEncriptacao[i].letraNova
      );
    }
  
    campoEncriptado.style.backgroundImage = "none";
    campoEncriptado.innerHTML = textoEncriptado;
    campoDesencriptado.value = "";
  }


}

function desencriptar() {
  let textoDesencriptado = campoEncriptado.value;
  for (let i = 0; i < chavesEncriptacao.length; i++) {
    textoDesencriptado = textoDesencriptado.replaceAll(
      chavesEncriptacao[i].letraNova,
      chavesEncriptacao[i].letraAntiga
    );
  }
  console.log(textoDesencriptado);
  campoDesencriptado.value = textoDesencriptado;
}

function validarString(string) {
  // Verificar se há caracteres especiais ou letras maiúsculas
  var regex = /[!@#$%^&*()_+\-=[\]{};':"\\|,.<>/?]+|[A-Z]+/; 
  // Verificar se a string não contém caracteres especiais nem letras maiúsculas
  if (regex.test(string)) {
    return false; // A string contém caracteres especiais ou letras maiúsculas    
  }
    return true; // A string está válida
}

validarString("ABC");
