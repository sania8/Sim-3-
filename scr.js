const canvas = document.getElementById("canvas");
canvas.width = 1000;
const c = canvas.width/2;
canvas.height = 500;
const ctx = canvas.getContext("2d");
ctx.imageSmoothingEnabled = false;
let x = 0;
const peaks = 3;
let isPlaying = false;

//function to add a guassian distribution 
function randomGaussian() {
  let u = 0, v = 0;
  while (u === 0) u = Math.random(); //Converting [0,1) to (0,1)
  while (v === 0) v = Math.random();
  return Math.sqrt(-2.0 * Math.log(u)) * Math.cos(2.0 * Math.PI * v);
}

//buttons------------------------------//
//button that runs the simualtion
const playButton = document.getElementById("play-btn");
playButton.addEventListener("click", function() {
  if (!isPlaying) {
    isPlaying = true;
    animate();
  }
});

//pause button(to pause the simulation)--//
const pauseButton = document.getElementById("pause-btn");
let animationId = null;
pauseButton.addEventListener("click" , function(){
  if(isPlaying){
    isPlaying = false;
    cancelAnimationFrame(animationId);
  }
});

//reset button (to reset the simualtion)--//
const resetButton = document.getElementById("reset-btn");
resetButton.addEventListener("click" , function(){
    isPlaying = false;
    cancelAnimationFrame(animationId);
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.fillStyle = "yellow";
    ctx.fillRect(205, 150, 20, 130);
    ctx.fillStyle = "black";
    ctx.fillRect(210, 160, 12, 25);
    ctx.fillRect(210, 240, 12, 25);
    ctx.fillStyle = "white";
    ctx.fillRect(canvas.width * 0.3, 0, 5, canvas.height);
});

//downloading the image(button to download the image)---//
const downloadButton = document.getElementById("download-btn");
// Function to download the image
downloadButton.addEventListener("click", function() {
  const link = document.createElement("a");
  link.download = "simulation.jpeg";
  link.href = canvas.toDataURL("image/jpeg");
  link.click();
});

//animation fucntion--> that generates the animation
function animate() {
  let x1;
  x1 = canvas.width*0.85+(randomGaussian()/3)*canvas.width*0.10;
  for (let i = 0; i < 1; i++) {
      const y = Math.random() * canvas.height ;
      ctx.fillStyle = `rgb(255,255,255)`;
      ctx.fillRect(x1 + i, y, 1, 1);
    
  }
  x1 = canvas.width*0.65+(randomGaussian()/3)*canvas.width*0.10;
  for (let i = 0; i < 1; i++) {
      const y = Math.random() * canvas.height ;
      ctx.fillStyle = `rgb(255,255,255)`;
      ctx.fillRect(x1 + i, y, 1, 1);
    
  }
  x1 = canvas.width*0.45+(randomGaussian()/3)*canvas.width*0.10;
  for (let i = 0; i < 1; i++) {
      const y = Math.random() * canvas.height ;
      ctx.fillStyle = `rgb(255,255,255)`;
      ctx.fillRect(x1 + i, y, 1, 1);
    
  }
  
  if (isPlaying) {
    animationId = requestAnimationFrame(animate);
  }
}

//code for the slit and white vertical line
ctx.fillStyle = "yellow";
ctx.fillRect(205, 150, 20, 130);
ctx.fillStyle = "black";
ctx.fillRect(210, 160, 12, 25);
ctx.fillRect(210, 240, 12, 25);
ctx.fillStyle="white";
ctx.fillRect(canvas.width*0.3, 0, 5, canvas.height);

