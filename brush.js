var brush = document.getElementById("brush");

function startBrush(){

  this.started = false;

  var putPoint = function(e){
    if(dragging == true && fbrush == true){
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
    context.globalCompositeOperation = 'source-over';
    dragging = true;
    putPoint(e);
  }

  var disengage = function(){
    dragging = false;
    context.beginPath()
    cPush();
  }

  canvas.addEventListener('mousedown', engage);
  canvas.addEventListener('mousemove', putPoint);
  canvas.addEventListener('mouseup', disengage);
}
brush.addEventListener('click', function(e){
  toolsFalse();
  fbrush = true;
  startBrush()
});
