var tablero = document.getElementById('canvas').getContext('2d');

var ancho = 400/errores;

//Diseños del canvas
tablero.lineWidth = 10;
tablero.lineCap = "round";
tablero.lineJoin = "round";
tablero.strokeStyle ="#284268";
tablero.beginPath();

tablero.moveTo(0,400);
tablero.lineTo(500,400)
tablero.moveTo(2,0)
tablero.lineTo(0,590)
tablero.moveTo(0,2)
tablero.lineTo(500,0)
tablero.moveTo(500,0)
tablero.lineTo(500,590)
tablero.moveTo(0,590)
tablero.lineTo(500,590)


tablero.stroke();
tablero.closePath();

//Texto del canvas
tablero.beginPath()
tablero.strokeStyle = "black";
tablero.font=" 20px arial"
tablero.fillText("Letras erroneas:",180,520)

tablero.closePath();

//lineas del texto erroneas
tablero.lineWidth = 6;
tablero.lineCap = "round";
tablero.lineJoin = "round";
tablero.strokeStyle ="#284268";
tablero.beginPath();

for(let i = 0; i < 8; i++){
    tablero.moveTo(100+(ancho*i),575);
    tablero.lineTo(75+(ancho*i),575);
        
    }

    tablero.stroke();























