
function validarLetraIngresada(key){
    if (letras.length < 1 || letras.indexOf(key) < 0){
        letras.push(key);
        return false;
    }
    
    else  {
        errores -=1;
        if(errores == 7){
            //palo vertical
            tablero.lineWidth = 15;
            tablero.strokeStyle ="#284268";
            tablero.beginPath();

            tablero.moveTo(125,395);
            tablero.lineTo(125,50)

            tablero.stroke();
            tablero.closePath();
        }

        else if(errores == 6){
            //palo horizontal
            tablero.lineWidth = 15;
            tablero.strokeStyle ="#284268";
            tablero.beginPath();

            tablero.moveTo(50,50);
            tablero.lineTo(450,50);
            tablero.moveTo(125,100)
            tablero.lineTo(180,50)

            tablero.stroke();
            tablero.closePath();
        }

        else if(errores == 5){
            //Cabeza
            tablero.lineWidth = 15;
            tablero.strokeStyle ="#284268";
            tablero.beginPath();

            tablero.moveTo(360,50);
            tablero.lineTo(360,70);

            tablero.lineWidth=10;
            tablero.arc(360,100,25,48,0,Math.PI,true)
            tablero.stroke();
        }
        else if(errores == 4){
           //cuerpo
            tablero.lineWidth = 10;
            tablero.strokeStyle ="#284268";
            tablero.beginPath();

            tablero.moveTo(360,125);
            tablero.lineTo(360,250)

            tablero.stroke();
        }

        else if(errores == 3){
            //Pie Izquierdo
            tablero.lineWidth = 10;
            tablero.strokeStyle ="#284268";
            tablero.beginPath();

            tablero.moveTo(360,250);
            tablero.lineTo(320,300);

            tablero.stroke();
        }

        else if(errores == 2){
            //Pie Derecho
            tablero.lineWidth = 10;
            tablero.strokeStyle ="#284268";
            tablero.beginPath();

            tablero.moveTo(360,250)
            tablero.lineTo(400,300)

            tablero.stroke();
        }

        else if(errores == 1){
            //Brazo Izquierdo
            tablero.lineWidth=10;
            tablero.strokeStyle = "284268"
            tablero.beginPath();

            tablero.moveTo(360,160)
            tablero.lineTo(310,200)

            tablero.stroke();
        }

        else if(errores == 0){
            //Brazo Derecho
            tablero.lineWidth=10;
            tablero.strokeStyle = "284268"
            tablero.beginPath();

            tablero.moveTo(360,160)
            tablero.lineTo(405,200)

            tablero.stroke();
           
            document.getElementById("alerta-loser").style.display=""
        }
        
        return true;
    }
}