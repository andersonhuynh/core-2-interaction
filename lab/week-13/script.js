let songW, songE, songR, songK;
let rectW = false, rectE = false, rectR = false, rectK = false;

function preload() {
  songW = loadSound('Songs/song_w.mp3');  // Replace "song_w.mp3" with the file path of your first song
  songE = loadSound('Songs/song_e.mp3');  // Replace "song_e.mp3" with the file path of your second song
  songR = loadSound('Songs/song_r.mp3');  // Replace "song_r.mp3" with the file path of your third song
  songK = loadSound('Songs/song_k.mp3');  // Replace "song_k.mp3" with the file path of your fourth song
}

function setup() {
  createCanvas(windowWidth, windowHeight);

}
function draw(){
  if (rectW) {
    fill("#065535");
    rect(0, 0, width / 2, height / 2);
  } else{
    fill("white");
    rect(0, 0, width / 2, height / 2);
  }

  if (rectE) {
    fill("#0047ab");
    rect(width / 2, 0, width / 2, height / 2);
  } else {
    fill("white");
    rect(width / 2, 0, width / 2, height / 2);
  }
  if (rectR) {
    fill("#ff76d8");
    rect(0, height / 2, width / 2, height / 2);
  } else {
    fill("white");
    rect(0, height / 2, width / 2, height / 2);
  }
  if (rectK) {
    fill("#fb7e00");
    rect(width / 2, height / 2, width / 2, height / 2);
  } else {
    fill("white");
    rect(width / 2, height / 2, width / 2, height / 2);  
  }
}

function keyPressed() {
  if (key === 'w' || key === 'W') {
    if (!songW.isPlaying()) {
      songW.play();
      rectW = true;
    } else {
      songW.stop();
      rectW = false;
    }
  }
  
  if (key === 'e' || key === 'E') {
    if (!songE.isPlaying()) {
      songE.play();
      rectE = true;
    } else {
      songE.stop();
      rectE = false;
    }
  }
  
  if (key === 'r' || key === 'R') {
    if (!songR.isPlaying()) {
      songR.play();
      rectR = true;
    } else {
      songR.stop();
      rectR = false;
    }
  }
  
  if (key === 'k' || key === 'K') {
    if (!songK.isPlaying()) {
      songK.play();
      rectK = true;
    } else {
      songK.stop();
      rectK = false;
    }
  }
}

document.querySelector(".modal").addEventListener("click", function(){
  document.querySelector(".modal").style.display = "none";
})