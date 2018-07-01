var clone = document.getElementById("symetry");
var canvas2;
var ctx;


clone.addEventListener('click', function(e){

  toolsFalse();
  fClone = true;

  var newCanvas = document.createElement("canvas");
  var context2 = newCanvas.getContext('2d');
  //   context2.save();
  // context2.scale(-1, 1);
  // context2.restore();
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
  if(fGum == true){
    ctx.globalCompositeOperation = 'destination-in';
    ctx.save();
    ctx.scale(1,-1);
    ctx.drawImage(canvas,0,canvas.height * -1, canvas2.width, canvas2.height);
    ctx.restore();
  }
  if(fGum == false){
    ctx.globalCompositeOperation = 'source-over';
    ctx.save();
    ctx.scale(1,-1);
    ctx.drawImage(canvas,0,canvas.height * -1, canvas2.width, canvas2.height);
    ctx.restore();
  }
}
