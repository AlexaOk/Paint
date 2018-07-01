var line = document.getElementById("line");

function startLine(){

  var line = 0;

  var putPoint = function(e){
    if (fline == true){
      if (line == 0) {
        clx = e.clientX - canvas.offsetLeft;
        cly = e.clientY - canvas.offsetTop;
        context.moveTo(clx, cly);
        line++;
      } else {
        ulx = e.clientX - canvas.offsetLeft;
        uly = e.clientY - canvas.offsetTop;
        context.globalCompositeOperation = 'source-over';
        context.beginPath();
        context.moveTo(ulx, uly);
        context.lineTo(clx, cly, ulx - clx, uly - cly);
        context.stroke();
        if(fClone == true )
        {
          startClone();
        }
        line = 0;
      }
    }
  }
  canvas.addEventListener('mousedown', putPoint);
}

line.addEventListener('click', function(e){
  toolsFalse();
  fline = true;
  startLine();

})
