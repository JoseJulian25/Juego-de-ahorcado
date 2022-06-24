var botonInput = document.querySelector(".boton-save");
var palabras = [""]

botonInput.addEventListener("click", function(){
    alert("Esta funcion no esta disponible")
})


function validarTexto(){
    var texto = document.querySelector(".input-texto").value;

for(let i = 0; i <texto.length; i++){      
    if (texto[i].charCodeAt() > 34 && texto[i].charCodeAt() < 44){
        alert("No se permiten símbolos. Revise el texto ingresado.");
        break;
    }
    if (texto[i].charCodeAt() > 47 && texto[i].charCodeAt() < 58){
        alert("No se permiten números. Revise el texto ingresado.");
        break;
    }
    if (texto[i].charCodeAt() > 59 && texto[i].charCodeAt() < 65){
        alert("No se permiten símbolos. Revise el texto ingresado.");
          break;
    }
    if (texto[i].charCodeAt() > 90 && texto[i].charCodeAt() < 97){
        alert("No se permiten símbolos. Revise el texto ingresado.");
         break;
    }
    if (texto[i].charCodeAt() > 122){
        alert("No se permiten acentos o símbolos. Revise el texto ingresado.");
       break;
    }
      
}
}