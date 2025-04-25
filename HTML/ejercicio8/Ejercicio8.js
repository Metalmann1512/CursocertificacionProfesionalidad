
function dibujarCanvas() {
    var canvas = document.getElementById('miCanvas');
    var contexto = canvas.getContext('2d');
    console.log("Canvas creado con exito");
    contexto.fillStyle = '#0000ff';
    console.log("Color de relleno azul");
    contexto.fillRect(100, 100, 200, 200);
    console.log("Rectangulo dibujado en el canvas");

     // a. Arco desde 0 grados hasta 90 grados en sentido de las agujas del reloj
		 contexto.beginPath();
		 contexto.arc(60,60,50,radianes('0'),radianes('90'),false);
		 contexto.stroke();   
		 // b. Arco desde 0 grados hasta 90 grados en sentido contrario de las agujas del reloj
		 contexto.beginPath(); 
		 contexto.arc(200,60,50,radianes('0'),radianes('90'),true); 
                 contexto.stroke();
		  // c. Arco desde 90 grados hasta 270 grados en sentido de las agujas del reloj
		 contexto.beginPath(); 
		 contexto.arc(350,60,50,radianes('90'),radianes('270')); 
                 contexto.stroke();
}

function radianes(grados) {
    return grados * Math.PI / 180;
}