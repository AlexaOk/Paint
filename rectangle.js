var rect = document.getElementById("rectangle");

function startRect(){

  var rectangle = 0;

  var putPoint = function(e){
    if(frectangle == true){
      if (rectangle == 0) {
        clx = e.clientX - canvas.offsetLeft;
        cly = e.clientY - canvas.offsetTop;
        context.moveTo(clx, cly);
        rectangle++;
      } else {
        ulx = e.clientX - canvas.offsetLeft;
        uly = e.clientY - canvas.offsetTop;
        context.globalCompositeOperation = 'source-over';
        context.beginPath();
        context.moveTo(ulx, uly);
        context.strokeRect(clx, cly, ulx - clx, uly - cly);
        context.stroke();
        rectangle = 0;
      }
    }
  }
  canvas.addEventListener('mousedown', putPoint);
}


rect.addEventListener('click', function(e){
  toolsFalse();
  frectangle = true;
  startRect();
})
