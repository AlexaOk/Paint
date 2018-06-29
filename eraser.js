var eraser = document.getElementById('eraser');

function startEraser(){
  this.started = false;

  var putPoint = function(e){
    if(dragging == true && fGum == true){
      context.lineTo(e.clientX, e.clientY);
      context.stroke();
      context.beginPath();
      context.arc(e.clientX, e.clientY, radius, 0, Math.PI*2);
      context.fill();
      context.beginPath();
      context.moveTo(e.clientX, e.clientY);
    }
  }

  var engage = function(e){
    dragging = true;
    context.globalCompositeOperation = 'destination-out';
    putPoint(e);
  }

  var disengage = function(){
    dragging = false;
    context.beginPath();
  }

  canvas.addEventListener('mousedown', engage);
  canvas.addEventListener('mousemove', putPoint);
  canvas.addEventListener('mouseup', disengage);
}


eraser.addEventListener('click', function(e){
  toolsFalse();
  fGum = true;
  startEraser()
});
