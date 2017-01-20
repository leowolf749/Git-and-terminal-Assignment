(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
window.addEventListener('load', function () {
    // List of music URL's
    const sounds = [
        'http://localhost:55435/music/Kick NightDrive 1.wav',
        'http://localhost:55435/music/Snare Basement 2.wav',
        'http://localhost:55435/music/ClosedHH Basement.wav',
        'http://localhost:55435/music/ClosedHH SpiritFields.wav',
        'http://localhost:55435/music/Kick Cypress 1.wav',
        'http://localhost:55435/music/Snare Flutter 2.wav',
        'http://localhost:55435/music/ClosedHH Unkept.wav',
        'http://localhost:55435/music/OpenHH Chlorophylliac.wav',
        'http://localhost:55435/music/Snare MrBleep 2.wav',
        'http://localhost:55435/music/Blop SpiritFields.wav',
        'http://localhost:55435/music/Bleep MrBleep.wav',
        'http://localhost:55435/music/Synth NightDrive.wav',
        'http://localhost:55435/music/Pad Flutter.wav',
        'http://localhost:55435/music/Ambience AuralTrik.wav',
        'http://localhost:55435/music/Vocal Crimson 2.wav',
        'http://localhost:55435/music/Vocal SpiritFields.wav',
    ];

    const wads = [];

    for (let i = 0; i < sounds.slice(0, 16).length; i++) {
        wads.push(new Wad({
            source: sounds[i],
        }));
    }


    window.addEventListener('keyup', function (event) {
        if (event.key === 'z') {
            wads[0].play();
        }
        if (event.key === 'x') {
            wads[1].play();
        }
        if (event.key === 'c') {
            wads[2].play();
        }
        if (event.key === 'v') {
            wads[3].play();
        }
        if (event.key === 'a') {
            wads[4].play();
        }
        if (event.key === 's') {
            wads[5].play();
        }
        if (event.key === 'd') {
            wads[6].play();
        }
        if (event.key === 'f') {
            wads[7].play();
        }
        if (event.key === 'n') {
            wads[8].play();
        }
        if (event.key === 'm') {
            wads[9].play();
        }
        if (event.key === ',') {
            wads[10].play();
        }
        if (event.key === '.') {
            wads[11].play();
        }
        if (event.key === 'h') {
            wads[12].play();
        }
        if (event.key === 'j') {
            wads[13].play();
        }
        if (event.key === 'k') {
            wads[14].play();
        }
        if (event.key === 'l') {
            wads[15].play();
        }
    });


});










},{}]},{},[1]);
