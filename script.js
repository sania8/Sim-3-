const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");
canvas.width = 500;
const c = canvas.width/2;
canvas.height = 250 ;
ctx.imageSmoothingEnabled = false;
let x = 0;
const peaks = 3;
let isPlaying = false;
ctx.fillRect(0, 0, 500, 250);

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
  ctx.fillRect(20, 15, 20, 130);
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
    const text = document.getElementById("image2");
    
    text.innerHTML = `Copenhagen Interpreation using quantum particles: This is the pattern observed with quantum partciles for Slit1 , <br> 𝝍 describes the probability density of finding a particle at a particular point in space and time.  <br> Observed pattern : |𝝍<sub>1</sub>|<sup>2</sup><br> This is the  observed when the slit1 is open which produces a very narrow pattern <br>
    <br> where : 𝝍 is the function of source ,  𝝍<sub>1</sub> is the function of Slit 1  and  𝝍<sub>2</sub>  is the function of Slit 2.`
  }

   else if (mode === "second") {
    pattern = diffractionRight();
    const text = document.getElementById("image3");
    text.innerHTML = `Copenhagen Interpreation using quantum particles: This is the pattern observed with quantum partciles for Slit1 , <br> 𝝍 describes the probability density of finding a particle at a particular point in space and time.  <br> Observed pattern : |𝝍<sub>2</sub>|<sup>2</sup><br> This is the  observed when the slit1 is open which produces a very narrow pattern <br>
    <br> where : 𝝍 is the function of source ,  𝝍<sub>1</sub> is the function of Slit 1  and  𝝍<sub>2</sub>  is the function of Slit 2.`
  } else if (mode === "third") {
    pattern = animation();
    const text = document.getElementById("image");
   
    text.innerHTML = `Copenhagen Interpreation using quantum particles: This is the pattern observed with quantum partciles for both slits.<br>𝝍 describes the probability density of finding a particle at a particular point in space and time.  <br> Observed pattern : (𝝍<sub>𝟏</sub>+𝝍<sub>𝟐</sub> )<sup>2</sup>  = (𝝍<sub>1</sub>)<sup>2</sup> +(𝝍<sub>1</sub>)<sup>*</sup> 𝝍<sub>2</sub> +(𝝍<sub>2</sub> )<sup>∗</sup> 𝝍<sub>1</sub> + (𝝍<sub>𝟐</sub>)<sup>2</sup>
    <br> where : 𝝍 is the function of source ,  𝝍<sub>1</sub> is the function of Slit 1  and  𝝍<sub>2</sub>  is the function of Slit 2.`
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
    const text = document.getElementById("image2");
    
    text.innerHTML = `Copenhagen Interpreation using classical partciles: This is the pattern observed with quantum partciles for Slit1 , <br> 𝝍 describes the probability density of finding a particle at a particular point in space and time.  <br> Observed pattern : |𝝍<sub>1</sub>|<sup>2</sup><br> This is the  observed when the slit1 is open which produces a very narrow pattern <br>
    <br> where : 𝝍 is the function of source ,  𝝍<sub>1</sub> is the function of Slit 1  and  𝝍<sub>2</sub>  is the function of Slit 2.`
  
  } else if (expect === "single2") {
    pattern = diffractionRight();
    const text = document.getElementById("image3");
    
    text.innerHTML = `Copenhagen Interpreation using classical particles: This is the pattern observed with quantum partciles for Slit1 , <br> 𝝍 describes the probability density of finding a particle at a particular point in space and time.  <br> Observed pattern : |𝝍<sub>2</sub>|<sup>2</sup><br> This is the  observed when the slit1 is open which produces a very narrow pattern <br>
    <br> where : 𝝍 is the function of source ,  𝝍<sub>1</sub> is the function of Slit 1  and  𝝍<sub>2</sub>  is the function of Slit 2.`
  
  } else if (expect === "double") {
    pattern = animation1();
    const text = document.getElementById("image4");
    
    text.innerHTML = `Copenhagen Interpreation using classical particles: This is the pattern observed with quantum partciles for Slit1 , <br> 𝝍 describes the probability density of finding a particle at a particular point in space and time.  <br> Observed pattern : (|𝝍<sub>1</sub>|<sup>2</sup> + |𝝍<sub>2</sub>|<sup>2</sup>).<br> This is the  observed when the slit1 is open which produces a very narrow pattern <br>
    <br> where : 𝝍 is the function of source ,  𝝍<sub>1</sub> is the function of Slit 1  and  𝝍<sub>2</sub>  is the function of Slit 2.`

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
  const linePosition = canvas.width * 0.8;
  let x1;
  x1 = canvas.height*0.37+(randomGaussian()/3)*canvas.height*0.02 ;
  for (let i = 0; i < 1; i++) {
      const y = Math.random() * canvas.width+0.30*canvas.width;
      if (y < linePosition) {
      ctx.fillStyle = `rgb(255,255,255)`;
      ctx.fillRect(y,x1 + i,1,1);
      }
    
  }
  x1 = canvas.height*0.49+(randomGaussian()/3)*canvas.height*0.02;
  for (let i = 0; i < 1; i++) {
      const y = Math.random() * canvas.width+0.30*canvas.width;
      if (y < linePosition) {
      ctx.fillStyle = `rgb(255,255,255)`;
      ctx.fillRect( y, x1 + i,1, 1);
      }
    
  }


ctx.fillStyle = "grey";
ctx.fillRect(110, 88, 15, 10);
ctx.fillRect(110, 118, 15, 10);
ctx.fillStyle="white";
ctx.fillRect(canvas.width*0.3, 0, 1, canvas.height);
ctx.fillStyle = "black";
ctx.fillRect(206, 180, 18, 3);
ctx.fillStyle = "black";
ctx.fillRect(206, 240, 18, 3);

}//close of the diffraction pattern2 due to single slit

//code for running simulation with single detector
function detAnimation1(){
  const linePosition = canvas.width * 0.8;
  let x1;
  x1 = canvas.height*0.37+(randomGaussian()/3)*canvas.height*0.02 ;
  for (let i = 0; i < 1; i++) {
      const y = Math.random() * canvas.width+0.30*canvas.width;
      if (y < linePosition) {
      ctx.fillStyle = `rgb(255,255,255)`;
      ctx.fillRect(y,x1 + i,1,1);
      }
    
  }
  x1 = canvas.height*0.49+(randomGaussian()/3)*canvas.height*0.02;
  for (let i = 0; i < 1; i++) {
      const y = Math.random() * canvas.width+0.30*canvas.width;
      if (y < linePosition) {
      ctx.fillStyle = `rgb(255,255,255)`;
      ctx.fillRect( y, x1 + i,1, 1);
      }
    
  }
const greyblock = false;
if(!greyblock)
{


}
ctx.fillStyle = "grey";
ctx.fillRect(110, 88, 15, 10);
ctx.fillStyle="white";
ctx.fillRect(canvas.width*0.3, 0, 1, canvas.height);
ctx.fillStyle = "black";
ctx.fillRect(206, 180, 18, 3);
ctx.fillStyle = "black";
ctx.fillRect(206, 240, 18, 3);


}//close of the diffraction pattern2 due to single slit
//connection 
//CODE 3
let det = "one";
function detAnimate() {
  let pattern;
  
  if (det === "one") {
    pattern = detAnimation1();
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

  const linePosition = canvas.width * 0.8;
  let x1;
  x1 = canvas.height*0.90+(randomGaussian()/3)*canvas.height*0.10;
  for (let i = 0; i < 10; i++) {
      const y = Math.random() * 0.7*canvas.width+0.31*canvas.width;
      if (y < linePosition) {
     ctx.fillStyle = `rgb(50,50,50)`;
      ctx.fillRect( y, x1 + i, 1, 1);
      }
    
  }
  x1 = canvas.height*0.70+(randomGaussian()/3)*canvas.height*0.10;
  for (let i = 0; i < 10; i++) {
      const y = Math.random() * canvas.width+0.31*canvas.width ;
      if (y < linePosition) {
      ctx.fillStyle = `rgb(100,100,100)`;
      ctx.fillRect( y,x1 + i, 1, 1);
      }
    
  }
  x1 = canvas.height*0.48+(randomGaussian()/3)*canvas.height*0.15;
  for (let i = 0; i <10; i++) {
      const y = Math.random() * canvas.width+0.31*canvas.width ;
      if (y < linePosition) {
      ctx.fillStyle = `rgb(220,220,220)`;
      ctx.fillRect( y,x1 + i, 1, 1);
      }
  }
  x1 = canvas.height*0.23+(randomGaussian()/3)*canvas.height*0.10;
  for (let i = 0; i < 10; i++) {
      const y = Math.random() * canvas.width+0.31*canvas.width ;
      if (y < linePosition) {
      ctx.fillStyle = `rgb(100,100,100)`;
      ctx.fillRect( y,x1 + i, 1, 1);
      }
  }
  x1 = canvas.height*0.05+(randomGaussian()/3)*canvas.height*0.10;
  for (let i = 0; i < 10; i++) {
      const y = Math.random() * canvas.width+0.31*canvas.width ;
      if (y < linePosition) {
      ctx.fillStyle = `rgb(50,50,50)`;
      ctx.fillRect( y,x1 + i, 1, 1);
      }
  }
  
  const slitWidth = 0.07; // Slit width in millimeters
const wavelength = 0.001; // Wavelength of light in millimeters
const distance = 5; // Distance from slit to screen in millimeters
const screenHeight = 0.5; // Height of screen in millimeters
const screenDistance = 8000; // Distance from slit to screen in millimeters
const curveLength = 500; // Length of curve to draw in pixels
const sigma = 100;
const xOffset = canvas.width / 1.25;


// Calculate intensity for each x-coordinate
const intensity = [];
for (let x = -curveLength; x <= canvas.width + curveLength; x += 0.33) {
  const r = Math.sqrt((xOffset - x) ** 2 + distance ** 2);
  let inten = Math.sin((Math.PI * slitWidth * r) / wavelength) ** 2;
  
  // Decrease intensity of higher peaks
  if (inten > 0.2) {
    inten *= 0.05;
  }
  
  // Slightly increase intensity of lower peaks
  if (inten < 0.05) {
    inten *= 0.029;
  }
  
  intensity.push(inten);
}


ctx.beginPath();

// Draw diffraction pattern with consistent spacing between troughs
for (let y = -screenHeight / 2; y <= screenHeight / 2; y += 0.001) {
  let x = 0;
  for (let i = 0; i < intensity.length; i++) {
    let beta = (Math.PI * slitWidth * y) / (wavelength * distance);
    let diffraction = (Math.sin(beta) / beta) ** 2;
    x += intensity[i] * diffraction;
  }
  let troughSpacing = wavelength * distance / slitWidth;
  ctx.lineTo(xOffset + x * canvas.width / (screenDistance * troughSpacing), y * canvas.height / screenHeight + canvas.height / 2);
}

ctx.strokeStyle = 'yellow';
ctx.lineWidth = 0.09;
ctx.stroke();


  
}
//close of animation function!!!!!!!!!!!!!!!!!!!
//single slit diffrcation pattern1 function
function diffractionLeft(){
  const linePosition = canvas.width * 0.8;
  let x1;
  x1 = canvas.height*0.37+(randomGaussian()/3)*canvas.height*0.02 ;
  
  // Hide the element with id "slit2"
  
  for (let i = 0; i < 10; i++) {
      const y = Math.random() * canvas.width+0.30*canvas.width;
      if (y < linePosition) {
      ctx.fillStyle = `rgb(255,255,255)`;
      ctx.fillRect(y,x1 + i,1,1);
      }
      
  }
  
  ctx.fillStyle = "yellow";
  ctx.fillRect(90, 60, 10, 90);
  ctx.fillStyle = "black";
  ctx.fillRect(90, 90, 10, 2);
  const slitWidth = 0.07; // Slit width in millimeters
  const wavelength = 0.001; // Wavelength of light in millimeters
  const distance = 6; // Distance from slit to screen in millimeters
  const screenHeight = 0.5; // Height of screen in millimeters
  const screenDistance = 10000; // Distance from slit to screen in millimeters
  const curveLength = 500; // Length of curve to draw in pixels
  const sigma = 900;
  const xOffset = canvas.width / 1.25;


// Calculate intensity for each x-coordinate
const intensity = [];
for (let x = -curveLength; x <= canvas.width + curveLength; x += 0.55) {
  const r = Math.sqrt((xOffset - x) ** 2 + distance ** 2);
  let inten = Math.sin((Math.PI * slitWidth * r) / wavelength) ** 2;
  
  // Decrease intensity of higher peaks
  if (inten > 0.2) {
    inten *= 0.008;
  }
  
  // Slightly increase intensity of lower peaks
  if (inten < 0.05) {
    inten *= 0.029;
  }
  
  intensity.push(inten);
}


ctx.beginPath();

// Draw diffraction pattern with consistent spacing between troughs
for (let y = -screenHeight / 4; y <= screenHeight / 4; y += 0.001) {
  let x = 0;
  for (let i = 0; i < intensity.length; i++) {
    let beta = (Math.PI * slitWidth * y) / (wavelength * distance);
    let diffraction = (Math.sin(beta) / beta) ** 2;
    x += intensity[i] * diffraction;
  }
  let troughSpacing = wavelength * distance / slitWidth;
  ctx.lineTo(xOffset + x * canvas.width / (screenDistance * troughSpacing), y * canvas.height / screenHeight + canvas.height / 2.5);
}

ctx.strokeStyle = 'yellow';
ctx.lineWidth = 0.08;
ctx.stroke();

}//close of the diffraction pattern1 due to single slit



//single slit diffraction pattern2  fucntion
function diffractionRight(){
  const linePosition = canvas.width * 0.8;
  let x1;
  x1 = canvas.height*0.49+(randomGaussian()/3)*canvas.height*0.02;
  for (let i = 0; i < 10; i++) {
      const y = Math.random() * canvas.width+0.30*canvas.width;
      if (y < linePosition) {
      ctx.fillStyle = `rgb(255,255,255)`;
      ctx.fillRect( y, x1 + i,1, 1);
      }
    
  }
  ctx.fillStyle = "yellow";
  ctx.fillRect(90, 60, 10, 90);
  ctx.fillStyle = "black";
  //ctx.fillRect(90, 90, 10, 2);
  ctx.fillRect(90, 120, 10, 2);
  
  const slitWidth = 0.07; // Slit width in millimeters
  const wavelength = 0.001; // Wavelength of light in millimeters
  const distance = 6; // Distance from slit to screen in millimeters
  const screenHeight = 0.5; // Height of screen in millimeters
  const screenDistance = 10000; // Distance from slit to screen in millimeters
  const curveLength = 500; // Length of curve to draw in pixels
  const sigma = 900;
  const xOffset = canvas.width / 1.25;


// Calculate intensity for each x-coordinate
const intensity = [];
for (let x = -curveLength; x <= canvas.width + curveLength; x += 0.55) {
  const r = Math.sqrt((xOffset - x) ** 2 + distance ** 2);
  let inten = Math.sin((Math.PI * slitWidth * r) / wavelength) ** 2;
  
  // Decrease intensity of higher peaks
  if (inten > 0.2) {
    inten *= 0.008;
  }
  
  // Slightly increase intensity of lower peaks
  if (inten < 0.05) {
    inten *= 0.029;
  }
  
  intensity.push(inten);
}


ctx.beginPath();

// Draw diffraction pattern with consistent spacing between troughs
for (let y = -screenHeight / 4; y <= screenHeight / 4; y += 0.001) {
  let x = 0;
  for (let i = 0; i < intensity.length; i++) {
    let beta = (Math.PI * slitWidth * y) / (wavelength * distance);
    let diffraction = (Math.sin(beta) / beta) ** 2;
    x += intensity[i] * diffraction;
  }
  let troughSpacing = wavelength * distance / slitWidth;
  ctx.lineTo(xOffset + x * canvas.width / (screenDistance * troughSpacing), y * canvas.height / screenHeight + canvas.height / 1.9);
}

ctx.strokeStyle = 'yellow';
ctx.lineWidth = 0.08;
ctx.stroke();





}//close of the diffraction pattern2 due to single slit
//here canvas.height*0.5 generates an off-set for y so that the pattern shift to lower part of the canvas
//fucntion animation for the expected pattern
function animation1(){
  
  const linePosition = canvas.width * 0.8;
  let x1;
  x1 = canvas.height*0.37+(randomGaussian()/3)*canvas.height*0.02 ;
  for (let i = 0; i < 1; i++) {
      const y = Math.random() * canvas.width+0.30*canvas.width;
      if (y < linePosition) {
      ctx.fillStyle = `rgb(255,255,255)`;
      ctx.fillRect(y,x1 + i,1,1);
      }
    
  }
  x1 = canvas.height*0.49+(randomGaussian()/3)*canvas.height*0.02;
  for (let i = 0; i < 1; i++) {
      const y = Math.random() * canvas.width+0.30*canvas.width;
      
      if (y < linePosition) {
      ctx.fillStyle = `rgb(255,255,255)`;
      ctx.fillRect( y, x1 + i,1, 1);
      }
  }
  ctx.font = "27px 'Open Sans ExtraLight' ";
  ctx.fontWeight="lighter";
  
  
  
  //to add an eqaution-->
  
  //const textWidth = ctx.measureText(text).width;
  //ctx.fillText(text, 0.84*canvas.width - textWidth, 230);
  //ctx.font = "18px 'Open Sans ExtraLight'";
  //ctx.fontWeight="lighter";
  //ctx.fillText('\u00B2', 0.84*canvas.width - textWidth + 29, 220); // draw superscript "2"
  //ctx.font = "16px 'Open Sans ExtraLight'";
  //ctx.fontWeight="lighter";
  //ctx.fillText('\u2081', 0.84*canvas.width - textWidth + 20, 245); // draw subscript "2" inside the bars
  //ctx.fillstyle="white";
  //ctx.fillText("+", 0.855*canvas.width , 230);
  //ctx.font= "27px 'Open Sans ExtraLight'";
  //const text1 = "|\u03C8|";
  //const textWidth1 = ctx.measureText(text).width;
  //ctx.fillText(text1, 0.90*canvas.width - textWidth1, 232);
  //ctx.font = "18px 'Open Sans ExtraLight'";
  //ctx.fontWeight="lighter";
  //ctx.fillText('\u00B2', 0.90*canvas.width - textWidth1 + 29, 222); // draw superscript "2"
  //ctx.font = "16px 'Open Sans ExtraLight'";
  //ctx.fontWeight="lighter";
  //ctx.fillText('\u2082', 0.90*canvas.width - textWidth1 + 20, 247); // draw subscript "2" inside the bars
  
  
}
//code for the slit and white vertical line
ctx.fillStyle = "yellow";
ctx.fillRect(90, 60, 10, 90);
ctx.fillStyle = "black";
ctx.fillRect(90, 90, 10, 2);
ctx.fillRect(90, 120, 10, 2);
ctx.fillStyle="white";
ctx.fillRect(canvas.width*0.3, 0, 2, canvas.height);


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
      detAnimate();

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
    ctx.fillRect(90, 60, 10, 90);
    ctx.fillStyle = "black";
    ctx.fillRect(90, 90, 10, 2);
    ctx.fillRect(90, 120, 10, 2);   
    ctx.fillStyle = "white";
    ctx.fillRect(canvas.width * 0.3, 0, 1, canvas.height);
    ctx.font = "20px captain";
    //ctx.fillStyle= "white";
    //ctx.fillText("Slit 1", 150 ,190);
    //ctx.fillStyle= "white";
    //ctx.fillText("Slit 2", 150 ,250);
    
    
    ctx.fillStyle = "white";
    ctx.fillRect(canvas.width * 0.8, 0, 1, canvas.height);
    //drawing psi symbol
    //ctx.fillStyle="white";
    //ctx.font = ' 24px sans-serif';
    //ctx.fillText('\u03C8',240 ,185); 
    // draw subscript "1" inside the bars
    //ctx.fillStyle="white";
    //ctx.font = ' 24px sans-serif';
    //ctx.fillText('\u2081' , 254 , 198);
    //drawing second psi symbol
    //ctx.fillStyle="white";
    //ctx.font = ' 24px sans-serif';
    //ctx.fillText('\u03C8',240 ,250); 
    // draw subscript "2" inside the bars
    //ctx.fillStyle="white";
    //ctx.font = ' 24px sans-serif';
    //ctx.fillText('\u2082' , 254 , 265);
    ctx.fillStyle="grey";
    ctx.fillRect(10, 100 , 35 , 25);
    //ctx.fillStyle="white";
    //ctx.font = "20px sans-serif";
    //ctx.fillText("Source" ,10,290 );
    //ctx.fillStyle="white";
    //ctx.font = "16px sans-serif";
    //ctx.fillText("pattern observed" , 830, 50);
    //ctx.fillStyle="white";
    //ctx.font = ' 24px sans-serif';
    //ctx.fillText('(\u03C8)', 80,290); 
    //how to draw psi symbol on canvas
    const text = document.getElementById("image");
    const text2 = document.getElementById("image2");
    const text3 = document.getElementById("image3");
    text.innerHTML = "";
    text2.innerHTML = "";
    text3.innerHTML = "";

});
//reset button (to reset the expected simualtion)--//
const resetButton1 = document.getElementById("reset1-btn");
resetButton1.addEventListener("click" , function(){
    isPlaying = false;
    cancelAnimationFrame(animationId);
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.fillStyle = "yellow";
    ctx.fillRect(90, 60, 10, 90);
    ctx.fillStyle = "black";
    ctx.fillRect(90, 90, 10, 2);
    ctx.fillRect(90, 120, 10, 2); 
    ctx.fillStyle = "white";
    ctx.fillRect(canvas.width * 0.3, 0, 1, canvas.height);
    
    
    
    ctx.fillStyle = "white";
    ctx.fillRect(canvas.width * 0.8, 0, 1, canvas.height);
    
    ctx.fillStyle="grey";
    ctx.fillRect(10, 100 , 35 , 25);
    text = document.getElementById("image2");
    text.innerHTML="";
    
    text2 = document.getElementById("image3");
    text2.innerHTML="";
    text3 = document.getElementById("image4");
    text3.innerHTML="";

});
//reset button (to reset the observed  simualtion)--//
const resetButton2 = document.getElementById("reset2-btn");
resetButton2.addEventListener("click" , function(){
    isPlaying = false;
    cancelAnimationFrame(animationId);
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.fillStyle = "yellow";
    ctx.fillRect(90, 60, 10, 90);
    ctx.fillStyle = "black";
    ctx.fillRect(90, 90, 10, 2);
    ctx.fillRect(90, 120, 10, 2);  
    ctx.fillStyle = "white";
    ctx.fillRect(canvas.width * 0.3, 0, 1, canvas.height);
    ctx.font = "20px captain";
    
    
    ctx.fillStyle = "white";
    ctx.fillRect(canvas.width * 0.8, 0, 1, canvas.height);
    ;
    ctx.fillStyle="grey";
    ctx.fillRect(10, 100 , 35 , 25);
    
    //how to draw psi symbol on canvas

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

//ctx.font = "20px Arial";
//ctx.fillStyle= "white";
//ctx.strokeText("Slit 1", 150 , 250 );
//ctx.fillStyle= "white";
//ctx.fillText("Slit 2", 150 ,250);

ctx.fillStyle = "white";
ctx.fillStyle="white";
const linePosition = 0.799* canvas.width;
ctx.fillStyle = 'white';
ctx.fillRect(linePosition, 0, 1, canvas.height);
ctx.fillStyle = "white";
ctx.fillRect(canvas.width * 0.8, 0, 1, canvas.height);
//drawing psi symbol
//ctx.fillStyle="white";
//ctx.font = ' 24px sans-serif';
//ctx.fillText('\u03C8',240 ,185); 
// draw subscript "1" inside the bars
//ctx.fillStyle="white";
//ctx.font = ' 24px sans-serif';
//ctx.fillText('\u2081' , 254 , 198);
//drawing second psi symbol
//ctx.fillStyle="white";
//ctx.font = ' 24px sans-serif';
//ctx.fillText('\u03C8',240 ,250); 
// draw subscript "2" inside the bars
//ctx.fillStyle="white";
//ctx.font = ' 24px sans-serif';
//ctx.fillText('\u2082' , 254 , 265);
ctx.fillStyle="grey";
ctx.fillRect(10, 100 , 35 , 25);
//source text
//ctx.fillStyle="white";
//ctx.font = "20px sans-serif";
//ctx.fillText("Source" ,10,290 );
//ctx.fillStyle="white";
//ctx.font = "16px sans-serif";
//ctx.fillText("pattern observed" , 830, 50);
//ctx.fillStyle="white";
 //   ctx.font = ' 24px sans-serif';
   // ctx.fillText('(\u03C8)', 80,290); 
//how to draw psi symbol on canvas
ctx.fillStyle = "white";
ctx.fillRect(canvas.width * 0.3, 0, 1, canvas.height);
 
function source(n)
{
  const dotInterval = 10; // interval between dots in pixels
  const dotSize = 3; // size of each dot in pixels
  const speed = 0.5; // speed of each dot in pixels per frame
  const dotColor = "white"; // color of each dot
  const startX = 60;
  const endX = 203;

  let x = startX;
  let y = canvas.height * 0.5;
  let dots = [];

  while (x <= endX) {
    dots.push({ x, y });
    x += dotInterval;
  }

  function moveDots() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    for (let i = 0; i < dots.length; i++) {
      let dot = dots[i];
      dot.x += speed;
      if (dot.x > endX) {
        dot.x = startX;
      }
      let dotLength = dotSize * (1 - (dot.x - startX) / (endX - startX + 1));
      ctx.fillStyle = dotColor;
      ctx.fillRect(dot.x, dot.y, dotLength, dotSize);
    }

    requestAnimationFrame(moveDots);
  }

  moveDots();

}


