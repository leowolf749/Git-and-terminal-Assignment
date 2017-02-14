(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
window.addEventListener('load', function () {
    // List of music URL's
    const sounds = [
        'http://localhost:50383/music/Kick NightDrive 1.wav',
        'http://localhost:50383/music/Snare Basement 2.wav',
        'http://localhost:50383/music/ClosedHH Basement.wav',
        'http://localhost:50383/music/ClosedHH SpiritFields.wav',
        'http://localhost:50383/music/Kick Cypress 1.wav',
        'http://localhost:50383/music/Snare Flutter 2.wav',
        'http://localhost:50383/music/ClosedHH Unkept.wav',
        'http://localhost:50383/music/OpenHH Chlorophylliac.wav',
        'http://localhost:50383/music/Snare MrBleep 2.wav',
        'http://localhost:50383/music/Blop SpiritFields.wav',
        'http://localhost:50383/music/Bleep MrBleep.wav',
        'http://localhost:50383/music/Synth NightDrive.wav',
        'http://localhost:50383/music/Pad Flutter.wav',
        'http://localhost:50383/music/Ambience AuralTrik.wav',
        'http://localhost:50383/music/Vocal Crimson 2.wav',
        'http://localhost:50383/music/Vocal SpiritFields.wav',
    ];

    const wads = [];

    for (let i = 0; i < sounds.slice(0, 16).length; i++) {
        wads.push(new Wad({
            source: sounds[i],
            // volume: 10.0,
        }));
    }

    let button1 = document.querySelector('#sound1');
    let button2 = document.querySelector('#sound2');
    let button3 = document.querySelector('#sound3');
    let button4 = document.querySelector('#sound4');
    let button5 = document.querySelector('#sound5');
    let button6 = document.querySelector('#sound6');
    let button7 = document.querySelector('#sound7');
    let button8 = document.querySelector('#sound8');
    let button9 = document.querySelector('#sound9');
    let button10 = document.querySelector('#sound10');
    let button11 = document.querySelector('#sound11');
    let button12 = document.querySelector('#sound12');
    let button13 = document.querySelector('#sound13');
    let button14 = document.querySelector('#sound14');
    let button15 = document.querySelector('#sound15');
    let button16 = document.querySelector('#sound16');

    window.addEventListener('keyup', function (event) {
        if (event.key === 'z') {
            button13.classList.add('orange');
            wads[0].play(); 
        }
        if (event.key === 'x') {
            button14.classList.add('orange');
            wads[1].play();
        }
        if (event.key === 'c') {
            button15.classList.add('orange');
            wads[2].play();
        }
        if (event.key === 'v') {
            button16.classList.add('orange');
            wads[3].play();
        }
        if (event.key === 'a') {
            button9.classList.add('orange');
            wads[4].play();
        }
        if (event.key === 's') {
            button10.classList.add('orange');
            wads[5].play();
        }
        if (event.key === 'd') {
            button11.classList.add('orange');
            wads[6].play();
        }
        if (event.key === 'f') {
            button12.classList.add('orange');
            wads[7].play();
        }
        if (event.key === 'n') {
            button5.classList.add('orange');
            wads[8].play();
        }
        if (event.key === 'm') {
            button6.classList.add('orange');
            wads[9].play();
        }
        if (event.key === ',') {
            button7.classList.add('orange');
            wads[10].play();
        }
        if (event.key === '.') {
            button8.classList.add('orange');
            wads[11].play();
        }
        if (event.key === 'h') {
            button4.classList.add('orange');
            wads[12].play();
        }
        if (event.key === 'j') {
            button3.classList.add('orange');
            wads[13].play();
        }
        if (event.key === 'k') {
            button2.classList.add('orange');
            wads[14].play();
        }
        if (event.key === 'l') {
            button1.classList.add('orange');
            wads[15].play();
        }
    });

Wad.midiInstrument = new Wad({
    source : 'sine',
    env : {
		    attack : .1,
		    decay : .5,
		    sustain : .9,
		    release : .1
    },
});

});










},{}]},{},[1]);
