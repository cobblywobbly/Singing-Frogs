//mouse states and mouse events on sprites
//click and hold the mouse button while overing on the sprites

var beat;
var bass;
var melody;
var harmony;
var opera;


var draggedSprite;

var soundBeat;
var soundBass;
var soundMelody;
var soundHarmony;
var soundOpera;

var beatLoop = 1;
var bassLoop = 1;
var melodyLoop = 1;
var harmonyLoop = 1;
var operaLoop = 1;



function preload() {
    soundFormats('mp3', 'ogg');
    soundBeat = loadSound('assets/beat.mp3');
    soundBass = loadSound('assets/bass.mp3');
    soundMelody = loadSound('assets/melody.mp3');
    soundHarmony = loadSound('assets/harmony.mp3');
    soundOpera = loadSound('assets/opera.mp3');
}
function setup() {
    createCanvas(1200, 400);

    beat = createSprite(100, 200);
    beat.addAnimation('sleep', 'assets/frog_5.png');
    beat.addAnimation('beat', 'assets/frog_1.png', 'assets/frog_1.png', 'assets/frog_2.png', 'assets/frog_2.png',);

    bass = createSprite(200, 200);
    bass.addAnimation('sleep', 'assets/frog_5.png');
    bass.addAnimation('bass', 'assets/frog_2.png', 'assets/frog_2.png', 'assets/frog_2.png', 'assets/frog_2.png', 'assets/frog_2.png', 'assets/frog_2.png', 'assets/frog_2.png', 'assets/frog_2.png', 'assets/frog_2.png', 'assets/frog_2.png', 'assets/frog_2.png', 'assets/frog_2.png', 'assets/frog_2.png', 'assets/frog_2.png', 'assets/frog_2.png', 'assets/frog_2.png', 'assets/frog_2.png', 'assets/frog_2.png', 'assets/frog_2.png', 'assets/frog_2.png', 'assets/frog_2.png', 'assets/frog_2.png', 'assets/frog_2.png', 'assets/frog_2.png', 'assets/frog_2.png', 'assets/frog_2.png', 'assets/frog_2.png', 'assets/frog_2.png', 'assets/frog_2.png', 'assets/frog_2.png', 'assets/frog_2.png', 'assets/frog_2.png', 'assets/frog_2.png', 'assets/frog_2.png', 'assets/frog_2.png', 'assets/frog_5.png', 'assets/frog_5.png',);

    melody = createSprite(300, 200);
    melody.addAnimation('sleep', 'assets/frog_5.png');
    melody.addAnimation('melody', 'assets/frog_1.png', 'assets/frog_1.png', 'assets/frog_1.png', 'assets/frog_1.png', 'assets/frog_1.png', 'assets/frog_1.png', 'assets/frog_1.png', 'assets/frog_1.png', 'assets/frog_1.png', 'assets/frog_1.png', 'assets/frog_1.png', 'assets/frog_1.png', 'assets/frog_1.png', 'assets/frog_1.png', 'assets/frog_1.png', 'assets/frog_1.png', 'assets/frog_1.png', 'assets/frog_1.png', 'assets/frog_2.png', 'assets/frog_2.png', 'assets/frog_2.png', 'assets/frog_2.png', 'assets/frog_2.png');

    harmony = createSprite(400, 200);
    harmony.addAnimation('sleep', 'assets/frog_5.png');
    harmony.addAnimation('harmony', 'assets/frog_7.png', 'assets/frog_7.png', 'assets/frog_7.png', 'assets/frog_7.png', 'assets/frog_7.png', 'assets/frog_7.png', 'assets/frog_7.png', 'assets/frog_7.png', 'assets/frog_7.png', 'assets/frog_7.png', 'assets/frog_7.png', 'assets/frog_7.png', 'assets/frog_7.png', 'assets/frog_7.png', 'assets/frog_2.png', 'assets/frog_2.png',);

    opera = createSprite(500, 200);
    opera.addAnimation('sleep', 'assets/frog_5.png');
    opera.addAnimation('opera', 'assets/frog_2.png',);


    beat.onMousePressed = function () {
        beatLoop += 1;
        if (beatLoop % 2 == 0) {
            soundBeat.loop();
            beat.changeAnimation('beat');
        } else {
            soundBeat.stop();
            beat.changeAnimation('sleep');
        }

    }

    bass.onMousePressed = function () {
        bassLoop += 1;
        if (bassLoop % 2 == 0) {
            soundBass.loop();
            bass.changeAnimation('bass');
        } else {
            soundBass.stop();
            bass.changeAnimation('sleep');
        }

    }

    melody.onMousePressed = function () {
        melodyLoop += 1;
        if (melodyLoop % 2 == 0) {
            soundMelody.loop();
            melody.changeAnimation('melody');
        } else {
            soundMelody.stop();
            melody.changeAnimation('sleep');
        }

    }

    harmony.onMousePressed = function () {
        harmonyLoop += 1;
        if (harmonyLoop % 2 == 0) {
            soundHarmony.loop();
            harmony.changeAnimation('harmony');
        } else {
            soundHarmony.stop();
            harmony.changeAnimation('sleep');
        }

    }
    opera.onMousePressed = function () {
        operaLoop += 1;
        if (operaLoop % 2 == 0) {
            soundOpera.loop();
            opera.changeAnimation('opera');
        } else {
            soundOpera.stop();
            opera.changeAnimation('sleep');
        }

    }
}





function draw() {
    background(255, 255, 255);


    //if a sprite is mouseActive true I can check if the mouse is over its collider
    //and if the button is pressed


    drawSprites();
}
