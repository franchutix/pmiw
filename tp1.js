//link video explicativo: https://youtu.be/4-KlkNHHAUo

let numColumnas = 10;
let numFilas = 12;
let anchoCelda, altoCelda;
let offsetX;
let arte;
let efectoZoom = false;

function preload() {
  arte = loadImage('data/arte.jpg');
}

function setup() {
  createCanvas(800, 400);
  offsetX = width / 2;
  anchoCelda = (width - offsetX) / numColumnas;
  altoCelda = height / numFilas;
}

function draw() {
  background(255);
  image(arte, 0, 0, 400, 400);

  let formaSize = min(anchoCelda, altoCelda) / 2;
  let formaAncho = formaSize * 4;

  let formaNumero = 1;

  for (let columna = 0; columna < numColumnas; columna++) {
    for (let fila = 0; fila < numFilas; fila++) {
      let posX = offsetX + columna * anchoCelda + anchoCelda / 2;
      let posY = fila * altoCelda + formaSize * 2;

      let distancia = dist(mouseX, mouseY, posX, posY);
      let factor = map(distancia, 0, width, 2.0, 0.5);

      let nuevoAncho = calcularTamañoForma(formaAncho, factor);
      let nuevoAlto = calcularTamañoForma(formaSize * 5, factor);

      if (efectoZoom) {
        dibujarColumnaYFila(posX, posY, nuevoAncho, nuevoAlto);
      } else {
        dibujarColumnaYFila(posX, posY, formaAncho, formaSize * 5);
      }

      asignarColor(formaNumero);
      formaNumero++;
    }
  }
}

function keyPressed() {
  if (key === 'A' || key === 'a') {
    efectoZoom = true; 
  } else if (key === 'B' || key === 'b') {
    efectoZoom = false;  
  }
}

function dibujarColumnaYFila(posX, posY, formaAncho, formaAlto) {
  noStroke();
  beginShape();
  vertex(posX - formaAncho / 2, posY - formaAlto / 2);
  vertex(posX - formaAncho / 2, posY);
  vertex(posX + formaAncho / 2, posY - formaAlto / 2);
  vertex(posX + formaAncho / 2, posY - formaAlto);
  endShape(CLOSE);
}

function asignarColor(formaNumero) {
  if (formaNumero == 1) {
    fill(197, 194, 175);
  } else if (formaNumero == 2) {
    fill(5, 72, 153);
  } else if (formaNumero == 3) {
    fill(221, 164, 147);
  } else if (formaNumero == 4) {
    fill(10, 129, 125);
  } else if (formaNumero == 5) {
    fill(80, 153, 229);
  } else if (formaNumero == 6) {
    fill(8, 69, 149);
  } else if (formaNumero == 7) {
    fill(189, 166, 125);
  } else if (formaNumero == 8) {
    fill(42, 92, 181);
  } else if (formaNumero == 9) {
    fill(29, 121, 214);
  } else if (formaNumero == 10) {
    fill(156, 93, 40);
  } else if (formaNumero == 11) {
    fill(9, 64, 147);
  } else if (formaNumero == 12) {
    fill(4, 113, 116);
  } else if (formaNumero == 13) {
    fill(4, 113, 116);
  } else if (formaNumero == 14) {
    fill(205, 68, 76);
  } else if (formaNumero == 15) {
    fill(205, 68, 76);
  } else if (formaNumero == 16) {
    fill(91, 150, 94);
  } else if (formaNumero == 17) {
    fill(205, 68, 76);
  } else if (formaNumero == 18) {
    fill(9, 98, 96);
  } else if (formaNumero == 19) {
    fill(34, 122, 220);
  } else if (formaNumero == 20) {
    fill(172, 102, 165);
  } else if (formaNumero == 21) {
    fill(32, 126, 226);
  } else if (formaNumero == 22) {
    fill(59, 95, 189);
  } else if (formaNumero == 23) {
    fill(59, 95, 189);
  } else if (formaNumero == 24) {
    fill(7, 72, 164);
  } else if (formaNumero == 25) {
    fill(156, 180, 96);
  } else if (formaNumero == 26) {
    fill(167, 45, 66);
  } else if (formaNumero == 27) {
    fill(56, 143, 100);
  } else if (formaNumero == 28) {
    fill(213, 198, 169);
  } else if (formaNumero == 29) {
    fill(213, 64, 73);
  } else if (formaNumero == 30) {
    fill(11, 105, 105);
  } else if (formaNumero == 31) {
    fill(197, 151, 40);
  } else if (formaNumero == 32) {
    fill(197, 151, 40);
  } else if (formaNumero == 33) {
    fill(197, 151, 40);
  } else if (formaNumero == 34) {
    fill(13, 70, 160);
  } else if (formaNumero == 35) {
    fill(214, 62, 74);
  } else if (formaNumero == 36) {
    fill(245, 170, 164);
  } else if (formaNumero == 37) {
    fill(245, 170, 164);
  } else if (formaNumero == 38) {
    fill(180, 106, 181);
  } else if (formaNumero == 39) {
    fill(9, 64, 84);
  } else if (formaNumero == 40) {
    fill(255, 179, 166);
  } else if (formaNumero == 41) {
    fill(8, 76, 273);
  } else if (formaNumero == 42) {
    fill(8, 76, 273);
  } else if (formaNumero == 43) {
    fill(65, 101, 195);
  } else if (formaNumero == 44) {
    fill(108, 154, 115);
  } else if (formaNumero == 45) {
    fill(197, 153, 44);
  } else if (formaNumero == 46) {
    fill(197, 153, 44);
  } else if (formaNumero == 47) {
    fill(11, 71, 157);
  } else if (formaNumero == 48) {
    fill(11, 71, 157);
  } else if (formaNumero == 49) {
    fill (59, 106, 81);
  } else if (formaNumero == 50) {
    fill(213, 188, 148);
  } else if (formaNumero == 51) {
    fill(213, 201, 175);
  } else if (formaNumero == 52) {
    fill(203, 176, 131);
  } else if (formaNumero == 53) {
    fill(203, 176, 131);
  } else if (formaNumero == 54) {
    fill(7, 73, 170);
  } else if (formaNumero == 55) {
    fill(187, 114, 183);
  } else if (formaNumero == 56) {
    fill(187, 114, 183);
  } else if (formaNumero == 57) {
    fill(187, 114, 183);
  } else if (formaNumero == 58) {
    fill(65, 104, 195);
  } else if (formaNumero == 59) {
    fill(181, 113, 50);
  } else if (formaNumero == 60) {
    fill(8, 65, 85);
  } else if (formaNumero == 61) {
    fill(8, 65, 85);
  } else if (formaNumero == 62) {
    fill(14, 148, 139);
  } else if (formaNumero == 63) {
    fill(107, 155, 105);
  } else if (formaNumero == 64) {
    fill(107, 155, 105);
  } else if (formaNumero == 65) {
    fill(107, 155, 105);
  } else if (formaNumero == 66) {
    fill(11, 74, 166);
  } else if (formaNumero == 67) {
    fill(11, 74, 166);
  } else if (formaNumero == 68) {
    fill(70, 109, 188);
  } else if (formaNumero == 69) {
    fill(200, 202, 179);
  } else if (formaNumero == 70) {
    fill(9, 67, 148);
  } else if (formaNumero == 71) {
    fill(200, 202, 179);
  } else if (formaNumero == 72) {
    fill(200, 202, 179);
  } else if (formaNumero == 73) {
    fill(200, 202, 179);
  } else if (formaNumero == 74) {
    fill(200, 202, 179);
  } else if (formaNumero == 75) {
    fill(11, 79, 275);
  } else if (formaNumero == 76) {
    fill(11, 79, 275);
  } else if (formaNumero == 77) {
    fill(11, 79, 275);
  } else if (formaNumero == 78) {
    fill(202, 74, 76);
  } else if (formaNumero == 79) {
    fill(197, 153, 44);
  } else if (formaNumero == 80) {
    fill(6, 71, 161);
  } else if (formaNumero == 81) {
    fill(187, 116, 67);
  } else if (formaNumero == 82) {
    fill(15, 82, 278);
  } else if (formaNumero == 83) {
    fill(59, 106, 81);
  } else if (formaNumero == 84) {
    fill(59, 106, 81);
  } else if (formaNumero == 85) {
    fill(59, 106, 81);
  } else if (formaNumero == 86) {
    fill(59, 106, 81);
  } else if (formaNumero == 87) {
    fill(9, 70, 164);
  } else if (formaNumero == 88) {
    fill(222, 70, 81);
  } else if (formaNumero == 89) {
    fill(255, 198, 173);
  } else if (formaNumero == 90) {
    fill(11, 78, 276);
  } else if (formaNumero == 91) {
    fill(201, 88, 99);
  } else if (formaNumero == 92) {
    fill(202, 77, 78);
  } else if (formaNumero == 93) {
    fill(202, 77, 78);
  } else if (formaNumero == 94) {
    fill(202, 77, 78);
  } else if (formaNumero == 95) {
    fill(11, 78, 276);
  } else if (formaNumero == 96) {
    fill(11, 78, 276);
  } else if (formaNumero == 97) {
    fill(202, 77, 78);
  } else if (formaNumero == 98) {
    fill(11, 78, 276);
  } else if (formaNumero == 99) {
    fill(11, 78, 276);
  } else if (formaNumero == 100) {
    fill(11, 78, 276);
  } else if (formaNumero == 101) {
    fill(202, 77, 78);
  } else if (formaNumero == 102) {
    fill(202, 77, 78);
  } else if (formaNumero == 103) {
    fill(7, 74, 165);
  } else if (formaNumero == 104) {
    fill(197, 156, 47);
  } else if (formaNumero == 105) {
    fill(197, 156, 47);
  } else if (formaNumero == 106) {
    fill(10, 83, 173);
  } else if (formaNumero == 107) {
    fill(194, 159, 125);
  } else if (formaNumero == 108) {
    fill(194, 159, 125);
  } else if (formaNumero == 109) {
    fill(66, 109, 192);
  } else if (formaNumero == 110) {
    fill(11, 79, 275);
  } else if (formaNumero == 111) {
    fill(11, 79, 275);
  } else if (formaNumero == 112) {
    fill(10, 86, 174);
  } else if (formaNumero == 113) {
    fill(202, 79, 78);
  } else if (formaNumero == 114) {
    fill(202, 79, 78);
  } else if (formaNumero == 115) {
    fill(202, 79, 78);
  } else if (formaNumero == 116) {
    fill(202, 79, 78);
  } else if (formaNumero == 117) {
    fill(202, 79, 78);
  } else if (formaNumero == 118) {
    fill(202, 79, 78);
  } else if (formaNumero == 119) {
    fill(202, 79, 78);
  } else if (formaNumero == 120) {
    fill(202, 79, 78);
  }
}

function calcularTamañoForma(original, factor) {
  return original * factor;
}