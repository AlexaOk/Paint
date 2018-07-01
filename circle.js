var circle = document.getElementById("circle");

function startCircle(){

  var circle = 0;
  var radius=50;
  var clx = 0;
  var cly = 0;

  var putPoint = function(e){
    if(fcircle == true){
      if (circle == 0) {
        clx = e.clientX; cly = e.clientY;
        radius = 0;
        context.moveTo(clx, cly);
        circle++;
      } else {
        var ulx = clx - e.clientX;
        var uly = cly - e.clientY;
        radius = Math.sqrt(ulx * ulx + uly * uly)
        context.globalCompositeOperation = 'source-over';
        context.beginPath();
        context.arc(clx, cly, radius, 0, Math.PI*2);
        context.stroke();
        if(fClone == true )
        {
          startClone();
        }
        circle = 0;
      }
    }
  }
  canvas.addEventListener('mousedown', putPoint);
}

circle.addEventListener('click', function(e){
  toolsFalse();
  fcircle = true;
  startCircle();
})
