const contenedor = document.getElementById('contenedor');
const pelota = document.getElementById('pelota');

let posX = 0;
let posY = 0;
let velocidadX = 1;
let velocidadY = 1;

function moverPelota() {
    posX += velocidadX;
    posY += velocidadY;

    const limiteDerecho = contenedor.clientWidth - pelota.clientWidth;
    const limiteInferior = contenedor.clientHeight - pelota.clientHeight;

    if (posX > limiteDerecho || posX < 0) {
        velocidadX *= -1;
    }

    if (posY > limiteInferior || posY < 0) {
        
        velocidadY *= -1;
    }

    pelota.style.left = posX + 'px';
    pelota.style.top = posY + 'px';
}

setInterval(moverPelota, 10);
