let xb = 300;
let yb = 250;
let diametro = 20;
let raio = diametro/2;
let xvb = 7;
let yvb = 7;

let xr = 2;
let yr = 150;
let lr = 15;
let ar =80;

let xri = 582;
let yri = 150;

let meuspontos = 0;
let pontosoponente = 0;

let colidiu = false;

let shereka;
let ponto;
let raquetada;
let fundo;

function setup() {
  createCanvas(600, 500);
  fundo.loop();
}

function draw() {
  background(0);
  image(shereka,0,0,600,500);
  mostrarbola();
  mexebola();
  quicandobola();
  mostraraquete(xr,yr)
  mostraraquete(xri,yri)
  mexeraqueteinimigo();
  mexeraquete()
  quicaraquetebola(xri,yri);
  quicaraquetebola(xr,yr);
  pontos();
  placar();
  texto();
  
}

function preload(){
  shereka = loadImage("shrek.png");
  fundo = loadSound ("fundo.wav");
  ponto = loadSound ("ponto.wav");
  raquetada = loadSound("raquetada.wav");
}

function mostrarbola(){
  fill("black")
circle(xb,yb,diametro);
}

function mexebola (){
  xb += xvb;
  yb += yvb;
}
 
function quicandobola (){
  
if (xb + raio > width || xb - raio < 0){ 
xvb *= -1 
  }
  
if (yb + raio > height || yb - raio < 0){ 
yvb *= -1 
  }
} 

function mostraraquete(x,y) { 
  fill("rgb(2,2,2)")
   rect (x, y, lr, ar);
 }


function mexeraquete(){
if (keyIsDown( UP_ARROW))
    yr -= 10;
  
  function mexeraqueteinimigo(){
    
  }

if (keyIsDown (DOWN_ARROW))
    yr += 10;
}

function mexeraqueteinimigo(){
    if (keyIsDown( 87)){
     yri -= 10;
  }
  
    if (keyIsDown (83)){
      yri += 10
  } 
}

function quicaraquetebola(x,y){
  colidiu = collideRectCircle(x,y,lr,ar,xb,yb,raio);
  
  if(colidiu){
    xvb *= -1;
    raquetada.play();
  }
}

function pontos(){
  if (xb >590){
    meuspontos += 1
    ponto.play();
}
  if (xb < 10){
    pontosoponente += 1
     ponto.play();
   }
    
  }

function placar(){
  stroke(`#065B81`);
  textAlign(CENTER);
  textSize(20);
  fill("black")
rect(150,10,40,20)  
rect(430,10,40,20)
  fill(`white`);
   text(meuspontos,170,12);
  text(pontosoponente,450,12);
}

function texto(){
  let frase = `meus pontos`
  let xf = 90;
  let yf =40;
  textSize(20);
  textAlign(LEFT,TOP);
  fill ("black")
  text(frase,xf,yf);
 stroke(`#065B81`);
  textAlign(CENTER);
  textSize(20);
  fill("black")
rect(150,10,40,20)  
rect(430,10,40,20)
  fill("white");
   text(meuspontos,170,10);
  text(pontosoponente,450,12);
}

function texto(){
  let frase = `meus pontos`
  let xf = 110;
  let yf =40;
  textSize(20);
  textAlign(LEFT,TOP);
  fill ("whait")
  text(frase,xf,yf);

  let frase2 = `pontos oponente`
  let xf2 = 370;
  let yf2 =40;
  textSize(20);
  textAlign(LEFT,TOP);
  fill ("whait")
  text(frase2,xf2,yf2);
}

