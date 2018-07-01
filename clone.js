var clone = document.getElementById("symetry");
var canvas2;
var ctx;


clone.addEventListener('click', function(e){

  toolsFalse();
  fClone = true;

  var newCanvas = document.createElement("canvas");
  var context2 = newCanvas.getContext('2d');

  newCanvas.id = 'canvas2';
  document.getElementById('canvasDiv').appendChild(newCanvas);

  //canvas.height = 400;
  newCanvas.width = canvas.width;
  newCanvas.height = canvas.height;
  newCanvas.style.border = "solid";

  canvas2 = document.getElementById("canvas2");
  ctx = canvas2.getContext("2d");
});

function startClone(){

//  ctx.scale(-1, 1);
  ctx.drawImage(canvas,0,0);
}
