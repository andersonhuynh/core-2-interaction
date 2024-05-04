let urls = ['alex.html', 'ethel.html','grimes.html','marias.html','orange.html']

function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
  }

  
document.querySelector("#submitName").addEventListener("click", function(){
    console.log("test");

    let index = Math.floor(Math.random() * urls.length);
    let artist = urls[index];
    window.location.replace(`http://127.0.0.1:5500/core-2-interaction/studio/project-3/Artists/` + artist);
})