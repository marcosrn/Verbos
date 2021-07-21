function validar() {
  var conjugacao = document.getElementById("verbo").value;
  var conjugacao2 = conjugacao.substr(-2);
  if (
    conjugacao2 === "ar" ||
    conjugacao2 === "er" ||
    conjugacao2 === "ir" ||
    conjugacao2 === "AR" ||
    conjugacao2 === "ER" ||
    conjugacao2 === "IR"
  ) {
    alert(conjugacao + " é um verbo");
  } else {
    alert(conjugacao + " não é um verbo");
  }
}

function conjugar() {
  var conjugacao = document.getElementById("verbo").value;
  var conjugacao2 = conjugacao.substr(-2);
  var conjugacao3 = conjugacao.slice(0, -2);
  if (conjugacao2 === "ar") {
    alert("O verbo " + conjugacao + " no passado é: " + conjugacao3 + "ei");
  } else if (conjugacao2 === "er") {
    alert("O verbo " + conjugacao + " no passado é: " + conjugacao3 + "i");
  } else if (conjugacao2 === "ir") {
    alert("O verbo " + conjugacao + " no passado é: " + conjugacao3 + "i");
  } else if (conjugacao2 === "AR") {
    alert("O verbo " + conjugacao + " no passado é: " + conjugacao3 + "EI");
  } else if (conjugacao2 === "ER") {
    alert("O verbo " + conjugacao + " no passado é: " + conjugacao3 + "I");
  } else if (conjugacao2 === "IR") {
    alert("O verbo " + conjugacao + " no passado é: " + conjugacao3 + "I");
  } else {
    alert(conjugacao + " não é um verbo ou não é verbo regular");
  }
}

//Separar as duas ultimas letras retornando o resto da palavra.
//fazer a separação do tipo de verbo (se AR, ER ou IR).
//aplicar a regra do passado na palavra retornada
