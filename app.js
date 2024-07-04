let numeroSecreto = 0;
let intentos = 1;
let listaNumerosSorteados =[];
let numeroMaximo = 10;
let sorteos = 0; 
let numMin;
let numMax;

function asignarTextoElemento(elemento, texto) {
    let elementoHTML = document.querySelector(elemento);
    elementoHTML.innerHTML = texto;
    return;
}

function verificarIntento() {

    let numeroDeUsuario = parseInt(document.getElementById('valorUsuario').value);
      if(numeroDeUsuario===numeroSecreto){
        asignarTextoElemento('p',`Acertaste el numero ${numeroSecreto} en ${intentos} ${(intentos===1)?" vez ": "veces"} `);
        document.getElementById('reiniciar').removeAttribute('disabled');
      }else{
            if(numeroDeUsuario>numeroSecreto){
                asignarTextoElemento('p','El numero secreto es menor');

            }
            else{
                asignarTextoElemento('p','El numero secreto es mayor');

            }
       intentos++;
       //console.log(intentos);
     
       limpiarCaja();
       if(intentos>4){
        asignarTextoElemento('p',`Se ha alcanzado el numero maximo de intentos ${intentos-1} Refresca la pagina`);

    }
        }
     
    return;
}

function limpiarCaja(){
    let valorCaja = document.getElementById('valorUsuario').value='';
}


function generarNumeroSecreto(numMax,numMin) {

let numeroGenerado=Math.floor(Math.random() * (numMax - numMin + 1)) + numMin;

   console.log(numeroGenerado);
    console.log(listaNumerosSorteados);
   if(listaNumerosSorteados.length==numeroMaximo ){
    asignarTextoElemento('p',`Se ha alcanzado el numero maximo de sorteos ${sorteos}`);
   }
   else{
   if(listaNumerosSorteados.includes(numeroGenerado)){
        return generarNumeroSecreto();
   }
   else{
    listaNumerosSorteados.push(numeroGenerado);
    sorteos ++;
   return numeroGenerado;
   }
}
}
function condicionesIniciales(){
    let numMin=0;
let numMax=0;
asignarTextoElemento('h1', `Juego adivina el numero secreto!!`);

    document.getElementById('botonEnviar').removeAttribute('disabled');
    asignarTextoElemento('p', `Ingresa el valor máximo de tu rango de juego y pulsa enviar`);
    document.getElementById('botonEnviar').addEventListener('click', function() {
        if (numMax === 0) {
            numMax = parseInt(document.getElementById('valorUsuario').value);
            asignarTextoElemento('p', `Ingresa el valor mínimo de tu rango de juego y pulsa enviar`);
            limpiarCaja();
        } else if (numMin===0) {
            numMin = parseInt(document.getElementById('valorUsuario').value);
            asignarTextoElemento('p', `Adivina! ingresa un numero entre ${numMin} y ${numMax} tienes 4 intentos`);
            limpiarCaja();
            document.getElementById('botonEnviar').setAttribute('disabled', 'true');

        }
        numeroSecreto=generarNumeroSecreto(numMax, numMin);
    });
    intentos = 1;
    document.getElementById('reiniciar').setAttribute('disabled', 'true');
  
}

function reiniciarJuego(){
    condicionesIniciales();
    limpiarCaja();
}


condicionesIniciales();