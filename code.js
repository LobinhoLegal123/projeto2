var p5Inst = new p5(null, 'sketch');

window.preload = function () {
  initMobileControls(p5Inst);

  p5Inst._predefinedSpriteAnimations = {};
  p5Inst._pauseSpriteAnimationsByDefault = false;
  var animationListJSON = {"orderedKeys":[],"propsByKey":{}};
  var orderedKeys = animationListJSON.orderedKeys;
  var allAnimationsSingleFrame = false;
  orderedKeys.forEach(function (key) {
    var props = animationListJSON.propsByKey[key];
    var frameCount = allAnimationsSingleFrame ? 1 : props.frameCount;
    var image = loadImage(props.rootRelativePath, function () {
      var spriteSheet = loadSpriteSheet(
          image,
          props.frameSize.x,
          props.frameSize.y,
          frameCount
      );
      p5Inst._predefinedSpriteAnimations[props.name] = loadAnimation(spriteSheet);
      p5Inst._predefinedSpriteAnimations[props.name].looping = props.looping;
      p5Inst._predefinedSpriteAnimations[props.name].frameDelay = props.frameDelay;
    });
  });

  function wrappedExportedCode(stage) {
    if (stage === 'preload') {
      if (setup !== window.setup) {
        window.setup = setup;
      } else {
        return;
      }
    }
// -----

//variável pinos
var pino1= createSprite(200,300,20,20);
var pino2= createSprite(180,320,20,20);
var pino3= createSprite(220,320,20,20);
var pino4= createSprite(160,340,20,20);
var pino5= createSprite(200,340,20,20);
var pino6= createSprite(240,340,20,20);
var squariad= createSprite(200,200,20,20);
//velocidade do squariade
squariad.velocityX=5;
squariad.velocityY=6;
//quique do squariad/pinos
function draw() {
//quique de pino 1
pino1.bounce(squariad);
pino1.bounce(pino2);
pino1.bounce(pino3);
pino1.bounce(pino4);
pino1.bounce(pino5);
pino1.bounce(pino6);

//quique de pino 2
pino2.bounce(squariad);
pino2.bounce(pino2);
pino2.bounce(pino3);
pino2.bounce(pino4);
pino2.bounce(pino5);
pino2.bounce(pino6);
createEdgeSprites();

//quique pino 3
pino3.bounce(squariad);
pino3.bounce(pino2);
pino3.bounce(pino3);
pino3.bounce(pino4);
pino3.bounce(pino5);
pino3.bounce(pino6);
createEdgeSprites();

//quique pino 4
pino4.bounce(squariad);
pino4.bounce(pino2);
pino4.bounce(pino3);
pino4.bounce(pino4);
pino4.bounce(pino5);
pino4.bounce(pino6);
createEdgeSprites();

//quique pino 5
pino5.bounce(squariad);
pino5.bounce(pino2);
pino5.bounce(pino3);
pino5.bounce(pino4);
pino5.bounce(pino5);
pino5.bounce(pino6);
createEdgeSprites();

//quique pino 6
pino6.bounce(squariad);
pino6.bounce(pino2);
pino6.bounce(pino3);
pino6.bounce(pino4);
pino6.bounce(pino5);
pino6.bounce(pino6);
createEdgeSprites();

//quique do squariad/pinos
squariad.bounceOff(edges);
pino1.bounceOff(edges);
pino2.bounceOff(edges);
pino3.bounceOff(edges);
pino3.bounceOff(edges);
pino4.bounceOff(edges);
pino5.bounceOff(edges);
pino6.bounceOff(edges);  

background("lightgray");
drawSprites();
}











squariad.shapeColor = "white";
// -----
    try { window.draw = draw; } catch (e) {}
    switch (stage) {
      case 'preload':
        if (preload !== window.preload) { preload(); }
        break;
      case 'setup':
        if (setup !== window.setup) { setup(); }
        break;
    }
  }
  window.wrappedExportedCode = wrappedExportedCode;
  wrappedExportedCode('preload');
};

window.setup = function () {
  window.wrappedExportedCode('setup');
};
