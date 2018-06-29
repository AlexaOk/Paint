var filledRect = document.getElementById("filledrectangle");

function startFilledRect(){

  var rectangle = 0;

  var putPoint = function(e){
    if(fFilledRectange == true){
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
        context.fillRect(clx, cly, ulx - clx, uly - cly);
        context.stroke();
        rectangle = 0;
      }
    }
  }
  canvas.addEventListener('mousedown', putPoint);
}

filledRect.addEventListener('click', function(e){
  toolsFalse();
  fFilledRectange = true;
  startFilledRect();

})
