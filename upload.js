var file = document.getElementById('file');

function handleFiles(e) {
  var img = new Image;
  img.src = URL.createObjectURL(e.target.files[0]);
  img.onload = function() {
    context.drawImage(img, 10,10);
    if(fClone == true )
    {
      startClone();
    }
  }
}

file.addEventListener('change', handleFiles);
