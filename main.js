document.addEventListener("DOMContentLoaded", function() {
    function clapSound() {
        const clapAudio = new Audio('sounds/clap.wav');
        clapAudio.play();
    }
    
    document.addEventListener("keydown", function(event) {
        if (event.key === 'a' || event.key === 'A') {
            clapSound();
        }
    });  
    
    function hihatSound() {
        const hihatAudio = new Audio('sounds/hihat.wav');
        hihatAudio.play();
    }
    
    document.addEventListener("keydown", function(event) {
        if (event.key === 's' || event.key === 'S') {
            hihatSound();
        }
    });  

    function kickSound() {
        const kickAudio = new Audio('sounds/kick.wav');
        kickAudio.play();
    }
    
    document.addEventListener("keydown", function(event) {
        if (event.key === 'd' || event.key === 'D') {
            kickSound();
        }
    });  

    function openhatSound() {
        const openhatAudio = new Audio('sounds/openhat.wav');
        openhatAudio.play();
    }
    
    document.addEventListener("keydown", function(event) {
        if (event.key === 'f' || event.key === 'F') {
            openhatSound();
        }
    });  

    function boomSound() {
        const boomAudio = new Audio('sounds/boom.wav');
        boomAudio.play();
    }
    
    document.addEventListener("keydown", function(event) {
        if (event.key === 'g' || event.key === 'G') {
            boomSound();
        }
    });  

    function rideSound() {
        const rideAudio = new Audio('sounds/ride.wav');
        rideAudio.play();
    }
    
    document.addEventListener("keydown", function(event) {
        if (event.key === 'h' || event.key === 'H') {
            rideSound();
        }
    });  

    function snareSound() {
        const snareAudio = new Audio('sounds/snare.wav');
        snareAudio.play();
    }
    
    document.addEventListener("keydown", function(event) {
        if (event.key === 'j' || event.key === 'J') {
            snareSound();
        }
    });  

    function tomSound() {
        const tomAudio = new Audio('sounds/tom.wav');
        tomAudio.play();
    }
    
    document.addEventListener("keydown", function(event) {
        if (event.key === 'k' || event.key === 'K') {
            tomSound();
        }
    });  

    function tinkSound() {
        const tinkAudio = new Audio('sounds/tink.wav');
        tinkAudio.play();
    }
    
    document.addEventListener("keydown", function(event) {
        if (event.key === 'l' || event.key === 'L') {
            tinkSound();
        }
    });  
});

