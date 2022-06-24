var palabras = ["PROGRAMAR",  "NOMBRE", "APELLIDO", "APRENDER",  "MESSI", 
"CUADERNO", "ESCUELA",  "NAVEGADOR", "CUCHILLO", "MANZANA", "COMIDA", "JUEGO", "ANIMACION", 
"PERSONA", "MUJER", "HOMBRE", "VERBO", "INGLES", "VALOR"];
var tablero = document.getElementById('canvas').getContext('2d');
var letras = [];
var palabraCorrecta = "";
var errores = 8;

alertas = document.querySelectorAll("#alertas")
console.log(alertas)

function escogerPalabraSecreta(){
    var palabra = palabras[Math.floor(Math.random()*palabras.length)];
    palabraSecreta = palabra;
    console.log(palabraSecreta)
     return palabraSecreta;
     
} 

function dibujarLineas(){
    tablero.lineWidth = 6;
    tablero.lineCap = "round";
    tablero.lineJoin = "round";
    tablero.strokeStyle ="#0A3871";
    tablero.beginPath();

    var ancho = 250/palabraSecreta.length;
    for(let i = 0; i < palabraSecreta.length; i++){
        tablero.moveTo(155+(ancho*i),470);
        tablero.lineTo(175+(ancho*i),470);
        
    }
    tablero.stroke();
    tablero.closePath();
}
dibujarLineas(escogerPalabraSecreta())

function escribirPalabraCorrecta(posicion){
    tablero.font =  "28px 'Inter',";
    tablero.fillStyle = "#0A3871";
    var ancho = 250 / palabraSecreta.length;
    tablero.fillText(palabraSecreta[posicion], 158 + (ancho*posicion),455);
}

function escribirLetraIncorrecta(letra, errorsLeft){
        tablero.font = "28px 'Inter',";
        tablero.lineWidth=6;
        tablero.lineCap="round";
        tablero.lineJoin = "round";
        tablero.fillStyle = "#0A3871";

        tablero.fillText(letra, 30+(50*(8-errorsLeft)),560,40)
}

function adicionarLetraCorrecta(i){
    palabraCorrecta += palabraSecreta[i].toUpperCase();

    if(palabraCorrecta.length == palabraSecreta.length){
       setTimeout(function(){
        document.getElementById("alerta-win").style.display="";}, 500)
    }
    
}

document.onkeydown = (e) =>{
    let letra = e.key.toUpperCase()
    if(!validarLetraIngresada(e.key)){
        if(palabraSecreta.includes(letra)){
            adicionarLetraCorrecta(palabraSecreta.indexOf(letra));
                
            for(let i = 0; i < palabraSecreta.length; i++){
                if(palabraSecreta[i] === letra){
                    escribirPalabraCorrecta(i);
                }
            }
        }

        else {
            if(!validarLetraIngresada(e.key) && !ValidarCaracteres)
                adicionarLetraIncorrecta(letra);
                escribirLetraIncorrecta(letra, errores);
                console.log(errores)
        } 
    }
}