const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");
canvas.width = 1000;
const c = canvas.width/2;
canvas.height = 500;
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

// Draw the slits
function drawSlits() {
  ctx.fillStyle = "yellow";
  ctx.fillRect(205, 150, 20, 130);
  ctx.fillStyle = "black";
  ctx.fillRect(206, 180, 18, 3);
  ctx.fillRect(206, 240, 18, 3);
}

//connection....
// Code 1
let mode = "first";
function animate() {
  let pattern;
  
  if (mode === "first") {
    pattern = diffractionLeft();
  } else if (mode === "second") {
    pattern = diffractionRight();
  } else if (mode === "third") {
    pattern = animation();
  }
  if (isPlaying) {
    animationId = requestAnimationFrame(animate);
  }

}

function onModeChange() {
  const selectElement = document.getElementById("mode");
  mode = selectElement.value;
}

document.getElementById("mode").addEventListener("change", onModeChange);

//connection 
//CODE 2
let expect = "single1";
function expectAnimate() {
  let pattern;
  
  if (expect === "single1") {
    pattern = diffractionLeft();
  } else if (expect === "single2") {
    pattern = diffractionRight();
  } else if (expect === "double") {
    pattern = animation1();
  }
  if (isPlaying) {
    animationId = requestAnimationFrame(expectAnimate);
  }

}

function onExpectChange() {
  const selectElement = document.getElementById("expect");
  expect = selectElement.value;
}

document.getElementById("expect").addEventListener("change", onExpectChange); 

//code section3
function detAnimation(){
  
  let x1;
  x1 = canvas.height*0.37+(randomGaussian()/3)*canvas.height*0.02 ;
  for (let i = 0; i < 1; i++) {
      const y = Math.random() * canvas.width+0.30*canvas.width;
      ctx.fillStyle = `rgb(255,255,255)`;
      ctx.fillRect(y,x1 + i,1,1);
    
  }
  x1 = canvas.height*0.49+(randomGaussian()/3)*canvas.height*0.02;
  for (let i = 0; i < 1; i++) {
      const y = Math.random() * canvas.width+0.30*canvas.width;
      ctx.fillStyle = `rgb(255,255,255)`;
      ctx.fillRect( y, x1 + i,1, 1);
    
  }

ctx.fillStyle = "grey";
ctx.fillRect(245, 180, 20, 10);
ctx.fillRect(245, 240, 20, 10);
ctx.fillStyle="white";
ctx.fillRect(canvas.width*0.3, 0, 5, canvas.height);
ctx.fillStyle = "black";
ctx.fillRect(206, 180, 18, 3);
ctx.fillStyle = "black";
ctx.fillRect(206, 240, 18, 3);
if (isPlaying) {
  animationId = requestAnimationFrame(detAnimation);
}

  
}//close of the diffraction pattern2 due to single slit
//connection 
//CODE 3
let det = "one";
function detAnimate() {
  let pattern;
  
  if (det === "one") {
    pattern = animation();
  }
  else if (det === "both"){
    pattern = detAnimation();
  }
  if (isPlaying) {
    animationId = requestAnimationFrame(detAnimate);
  }

}

function onDetChange() {
  const selectElement = document.getElementById("det");
  det = selectElement.value;
}

document.getElementById("det").addEventListener("change", onDetChange); 



//animation fucntion--> that generates the animation
function animation() {
  let x1;
  x1 = canvas.height*0.85+(randomGaussian()/3)*canvas.height*0.10;
  for (let i = 0; i < 1; i++) {
      const y = Math.random() * canvas.width+0.30*canvas.width;
     ctx.fillStyle = `rgb(255,255,255)`;
      ctx.fillRect( y, x1 + i, 1, 1);
    
  }
  x1 = canvas.height*0.65+(randomGaussian()/3)*canvas.height*0.10;
  for (let i = 0; i < 1; i++) {
      const y = Math.random() * canvas.width+0.30*canvas.width ;
      ctx.fillStyle = `rgb(255,255,255)`;
      ctx.fillRect( y,x1 + i, 1, 1);
    
  }
  x1 = canvas.height*0.45+(randomGaussian()/3)*canvas.height*0.10;
  for (let i = 0; i < 1; i++) {
      const y = Math.random() * canvas.width+0.30*canvas.width ;
      ctx.fillStyle = `rgb(255,255,255)`;
      ctx.fillRect( y,x1 + i, 1, 1);
  }
  x1 = canvas.height*0.25+(randomGaussian()/3)*canvas.height*0.10;
  for (let i = 0; i < 1; i++) {
      const y = Math.random() * canvas.width+0.30*canvas.width ;
      ctx.fillStyle = `rgb(255,255,255)`;
      ctx.fillRect( y,x1 + i, 1, 1);
  }
  x1 = canvas.height*0.05+(randomGaussian()/3)*canvas.height*0.10;
  for (let i = 0; i < 1; i++) {
      const y = Math.random() * canvas.width+0.30*canvas.width ;
      ctx.fillStyle = `rgb(255,255,255)`;
      ctx.fillRect( y,x1 + i, 1, 1);
  }
  
}
//close of animation function!!!!!!!!!!!!!!!!!!!
//single slit diffrcation pattern1 function
function diffractionLeft(){
  let x1;
  x1 = canvas.height*0.37+(randomGaussian()/3)*canvas.height*0.02 ;
  for (let i = 0; i < 1; i++) {
      const y = Math.random() * canvas.width+0.30*canvas.width;
      ctx.fillStyle = `rgb(255,255,255)`;
      ctx.fillRect(y,x1 + i,1,1);
    
  }
  ctx.fillStyle = "yellow";
  ctx.fillRect(205, 150, 20, 130);
  ctx.fillStyle = "black";
  ctx.fillRect(206, 180, 18, 3);
  ctx.fillStyle="white";
  ctx.fillRect(canvas.width*0.3, 0, 5, canvas.height);
  
 
}//close of the diffraction pattern1 due to single slit



//single slit diffraction pattern2  fucntion
function diffractionRight(){
  let x1;
  x1 = canvas.height*0.49+(randomGaussian()/3)*canvas.height*0.02;
  for (let i = 0; i < 1; i++) {
      const y = Math.random() * canvas.width+0.30*canvas.width;
      ctx.fillStyle = `rgb(255,255,255)`;
      ctx.fillRect( y, x1 + i,1, 1);
    
  }
  ctx.fillStyle = "yellow";
  ctx.fillRect(205, 150, 20, 130);
  ctx.fillStyle = "black";
  ctx.fillRect(206, 240, 18, 3);
  ctx.fillStyle="white";
  ctx.fillRect(canvas.width*0.3, 0, 5, canvas.height);
  
  
}//close of the diffraction pattern2 due to single slit
//here canvas.height*0.5 generates an off-set for y so that the pattern shift to lower part of the canvas
//fucntion animation for the expected pattern
function animation1(){
  let x1;
  x1 = canvas.height*0.37+(randomGaussian()/3)*canvas.height*0.02 ;
  for (let i = 0; i < 1; i++) {
      const y = Math.random() * canvas.width+0.30*canvas.width;
      ctx.fillStyle = `rgb(255,255,255)`;
      ctx.fillRect(y,x1 + i,1,1);
    
  }
  x1 = canvas.height*0.49+(randomGaussian()/3)*canvas.height*0.02;
  for (let i = 0; i < 1; i++) {
      const y = Math.random() * canvas.width+0.30*canvas.width;
      ctx.fillStyle = `rgb(255,255,255)`;
      ctx.fillRect( y, x1 + i,1, 1);
    
  }
  
}
//code for the slit and white vertical line
ctx.fillStyle = "yellow";
ctx.fillRect(205, 150, 20, 130);
ctx.fillStyle = "black";
ctx.fillRect(206, 180, 18, 3);
ctx.fillRect(206, 240, 18, 3);

ctx.fillStyle="white";
ctx.fillRect(canvas.width*0.3, 0, 5, canvas.height);


//buttons------------------------------//
//button that runs the observed pattern simualtion
const playButton = document.getElementById("play-btn");
playButton.addEventListener("click", function() {
    if (!isPlaying) {
      isPlaying = true;
      animate();

    }
});
//button that runs the expected pattern simulation
const playButton1 = document.getElementById("play1-btn");
playButton1.addEventListener("click", function() {
    if (!isPlaying) {
      isPlaying = true;
      expectAnimate();

    }
});
//button that runs the simulation when detectors are present
const playButton2 = document.getElementById("play2-btn");
playButton2.addEventListener("click", function() {
    if (!isPlaying) {
      isPlaying = true;
      detAnimation();

    }
});
//pause button(to pause the observed simulation)--//
const pauseButton = document.getElementById("pause-btn");
let animationId = null;
pauseButton.addEventListener("click" , function(){
  if(isPlaying){
    isPlaying = false;
    cancelAnimationFrame(animationId);
  }
});
//pause button(to pause the expected simulation)--//
const pauseButton1 = document.getElementById("pause1-btn");
pauseButton1.addEventListener("click" , function(){
  if(isPlaying){
    isPlaying = false;
    cancelAnimationFrame(animationId);
  }
});
//pause button(to pause the expected simulation)--//
const pauseButton2 = document.getElementById("pause2-btn");
pauseButton2.addEventListener("click" , function(){
  if(isPlaying){
    isPlaying = false;
    cancelAnimationFrame(animationId);
  }
});

//reset button (to reset the observed  simualtion)--//
const resetButton = document.getElementById("reset-btn");
resetButton.addEventListener("click" , function(){
    isPlaying = false;
    cancelAnimationFrame(animationId);
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.fillStyle = "yellow";
    ctx.fillRect(205, 150, 20, 130);
    ctx.fillStyle = "black";
    ctx.fillRect(206, 180, 18, 3);
    ctx.fillRect(206, 240, 18, 3);    
    ctx.fillStyle = "white";
    ctx.fillRect(canvas.width * 0.3, 0, 5, canvas.height);
});
//reset button (to reset the expected simualtion)--//
const resetButton1 = document.getElementById("reset1-btn");
resetButton1.addEventListener("click" , function(){
    isPlaying = false;
    cancelAnimationFrame(animationId);
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.fillStyle = "yellow";
    ctx.fillRect(205, 150, 20, 130);
    ctx.fillStyle = "black";
    ctx.fillRect(206, 180, 18, 3);
    ctx.fillRect(206, 240, 18, 3);    
    ctx.fillStyle = "white";
    ctx.fillRect(canvas.width * 0.3, 0, 5, canvas.height);
});
//reset button (to reset the observed  simualtion)--//
const resetButton2 = document.getElementById("reset2-btn");
resetButton2.addEventListener("click" , function(){
    isPlaying = false;
    cancelAnimationFrame(animationId);
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.fillStyle = "yellow";
    ctx.fillRect(205, 150, 20, 130);
    ctx.fillStyle = "black";
    ctx.fillRect(206, 180, 18, 3);
    ctx.fillRect(206, 240, 18, 3);    
    ctx.fillStyle = "white";
    ctx.fillRect(canvas.width * 0.3, 0, 5, canvas.height);
});

//downloading the image(button to download the image)---//
const downloadButton = document.getElementById("download1-btn");
// Function to download the image
downloadButton.addEventListener("click", function() {
  const link = document.createElement("a");
  link.download = "simulation.jpeg";
  link.href = canvas.toDataURL("image/jpeg");
  link.click();
});
// Mode dropdown change event listener
document.getElementById("mode").addEventListener("change", function() {
  mode = this.value;
});

//downloading the image(button to download the image)---//
const downloadButton1 = document.getElementById("download-btn");
// Function to download the image
downloadButton1.addEventListener("click", function() {
  const link = document.createElement("a");
  link.download = "simulation.jpeg";
  link.href = canvas.toDataURL("image/jpeg");
  link.click();
});
// Mode dropdown change event listener
document.getElementById("expect").addEventListener("change", function() {
  expect = this.value;
});
//downloading the image(button to download the image)---//
const downloadButton2 = document.getElementById("download2-btn");
// Function to download the image
downloadButton2.addEventListener("click", function() {
  const link = document.createElement("a");
  link.download = "simulation.jpeg";
  link.href = canvas.toDataURL("image/jpeg");
  link.click();
});
// Mode dropdown change event listener
document.getElementById("det").addEventListener("change", function() {
  det = this.value;
});





