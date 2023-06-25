"use strict";
var L10_Luftfahrt_Classes;
(function (L10_Luftfahrt_Classes) {
    /*
    Aufgabe: <L10_02_Luftfahrt>
    Name: <Bennett Müller>
    Matrikel: <272690>
    Datum: <24.06.2023>
    Quellen: Markus, Leon Dorner
    */
    // export interface Vector {
    //     x: number;
    //     y: number;
    // }
    // let h: number;
    // let s: number;
    // let l: number;
    window.addEventListener("load", handleLoad);
    L10_Luftfahrt_Classes.golden = 0.62;
    let bgImage;
    let moveables = [];
    let fps = 30;
    function handleLoad(_event) {
        L10_Luftfahrt_Classes.canvas = document.querySelector("canvas");
        L10_Luftfahrt_Classes.crc2 = L10_Luftfahrt_Classes.canvas.getContext("2d");
        console.log(L10_Luftfahrt_Classes.crc2.canvas.height);
        console.log(L10_Luftfahrt_Classes.crc2.canvas.width);
        let horizon = L10_Luftfahrt_Classes.crc2.canvas.height * L10_Luftfahrt_Classes.golden;
        let posMountains = new L10_Luftfahrt_Classes.Vector(0, horizon);
        let posMountain = new L10_Luftfahrt_Classes.Vector(0, horizon + 30);
        drawBackground();
        drawSun(new L10_Luftfahrt_Classes.Vector(200, 75));
        drawCloud(new L10_Luftfahrt_Classes.Vector(500, 100), new L10_Luftfahrt_Classes.Vector(200, 40));
        drawCloud(new L10_Luftfahrt_Classes.Vector(1300, 120), new L10_Luftfahrt_Classes.Vector(100, 60));
        drawMountains(posMountains, 75, 160, "grey", "white");
        drawMountains(posMountains, 50, 110, "grey", "lightgrey");
        for (let x = 0; x < 250; x++) {
            let randomX = Math.random() * L10_Luftfahrt_Classes.crc2.canvas.width;
            let randomY = (Math.random() * L10_Luftfahrt_Classes.crc2.canvas.height / L10_Luftfahrt_Classes.golden) + L10_Luftfahrt_Classes.golden * L10_Luftfahrt_Classes.canvas.height;
            drawGras(new L10_Luftfahrt_Classes.Vector(randomX, randomY));
        }
        ;
        drawMountain(posMountain, 450, 605, "grey", "darkgrey");
        drawPlace(new L10_Luftfahrt_Classes.Vector(1010, 725));
        drawTree(318, 832);
        drawTree(280, 800);
        drawTree(242, 841);
        drawBoot(1020, 735);
        bgImage = L10_Luftfahrt_Classes.crc2.getImageData(0, 0, L10_Luftfahrt_Classes.canvas.width, L10_Luftfahrt_Classes.canvas.height);
        drawPeople();
        createGliders(10);
        createLeaves(100);
        update();
        window.setInterval(update, 1000 / fps);
    }
    function drawPeople() {
        drawPerson(1440, 688, 40, randomColor());
        drawPerson(1480, 663, 40, randomColor());
        drawPerson(1400, 676, 40, randomColor());
        drawPerson(430, 541, 40, randomColor());
        drawPerson(516, 594, 40, randomColor());
    }
    function update() {
        L10_Luftfahrt_Classes.crc2.putImageData(bgImage, 0, 0);
        drawPeople();
        for (const moveable of moveables) {
            moveable.move();
            moveable.draw();
        }
    }
    function randomVector(_xMax, _yMax) {
        let rndX = Math.random() * _xMax;
        let rndY = Math.random() * _yMax;
        let randomPos = new L10_Luftfahrt_Classes.Vector(rndX, rndY);
        return randomPos;
    }
    L10_Luftfahrt_Classes.randomVector = randomVector;
    function createGliders(_amount) {
        for (let i = 0; i < _amount; i++) {
            let aviator = new L10_Luftfahrt_Classes.Aviator(randomVector(L10_Luftfahrt_Classes.canvas.width, L10_Luftfahrt_Classes.golden * L10_Luftfahrt_Classes.canvas.height), randomVector(10, 10), randomColor());
            moveables.push(aviator);
        }
    }
    function createLeaves(_amount) {
        for (let i = 0; i < _amount; i++) {
            let leaf = new L10_Luftfahrt_Classes.Leaf();
            moveables.push(leaf);
        }
    }
    // function drawGliders(): void {
    //     for (const aviator of moveables) {
    //         drawGlider(aviator);
    //     }
    // }
    // function drawGlider(_aviator: Aviator): void {
    //     drawParaglider(_aviator.position.x, _aviator.position.y - 50);
    //     drawPerson(_aviator.position.x, _aviator.position.y, 40, _aviator.color);
    // }
    function randomColor() {
        let letters = "0123456789ABCDEF";
        let color = "#";
        for (let i = 0; i < 6; i++) {
            color += letters[Math.floor(Math.random() * 16)];
        }
        return color;
    }
    function drawBackground() {
        let gradient = L10_Luftfahrt_Classes.crc2.createLinearGradient(0, 0, 0, L10_Luftfahrt_Classes.crc2.canvas.height);
        gradient.addColorStop(0, "blue");
        gradient.addColorStop(L10_Luftfahrt_Classes.golden - 0.01, "white");
        gradient.addColorStop(L10_Luftfahrt_Classes.golden, "HSL(100, 60%, 50%)");
        gradient.addColorStop(1, "HSL(100, 80%, 30%)");
        L10_Luftfahrt_Classes.crc2.fillStyle = gradient;
        L10_Luftfahrt_Classes.crc2.fillRect(0, 0, L10_Luftfahrt_Classes.crc2.canvas.width, L10_Luftfahrt_Classes.crc2.canvas.height);
    }
    function drawSun(_position) {
        let r1 = 40;
        let r2 = 70;
        let gradient = L10_Luftfahrt_Classes.crc2.createRadialGradient(0, 0, r1, 0, 0, r2);
        gradient.addColorStop(0, "hsla(0, 100%, 100%, 1)");
        gradient.addColorStop(0.5, "hsla(40, 100%, 50%, 0.5)");
        gradient.addColorStop(1, "hsla(40, 100%, 50%, 0)");
        L10_Luftfahrt_Classes.crc2.save();
        L10_Luftfahrt_Classes.crc2.translate(_position.x, _position.y);
        L10_Luftfahrt_Classes.crc2.fillStyle = gradient;
        L10_Luftfahrt_Classes.crc2.arc(0, 0, r2, 0, 2 * Math.PI);
        L10_Luftfahrt_Classes.crc2.fill();
        L10_Luftfahrt_Classes.crc2.restore();
    }
    function drawCloud(_position, _size) {
        let nParticles = 25;
        let radiusParticle = 40;
        let particle = new Path2D();
        let gradient = L10_Luftfahrt_Classes.crc2.createRadialGradient(0, 0, 0, 0, 0, radiusParticle);
        particle.arc(0, 0, radiusParticle, 0, 2 * Math.PI);
        gradient.addColorStop(0, "hsla(0, 100%, 100%, 0.9)");
        gradient.addColorStop(1, "hsla(0, 100%, 100%, 0)");
        L10_Luftfahrt_Classes.crc2.save();
        L10_Luftfahrt_Classes.crc2.translate(_position.x, _position.y);
        L10_Luftfahrt_Classes.crc2.fillStyle = gradient;
        for (let drawn = 0; drawn < nParticles; drawn++) {
            L10_Luftfahrt_Classes.crc2.save();
            let x = (Math.random() - 0.5) * _size.x;
            let y = -(Math.random() * _size.y);
            let scale = Math.random() * 0.8 + 0.2;
            L10_Luftfahrt_Classes.crc2.translate(x, y);
            L10_Luftfahrt_Classes.crc2.scale(scale, scale);
            L10_Luftfahrt_Classes.crc2.fill(particle);
            L10_Luftfahrt_Classes.crc2.restore();
        }
        L10_Luftfahrt_Classes.crc2.restore();
    }
    ;
    function drawMountains(_position, _min, _max, _colorLow, _colorHigh) {
        let stepMin = 20;
        let stepMax = 50;
        let x = 0;
        L10_Luftfahrt_Classes.crc2.save();
        L10_Luftfahrt_Classes.crc2.translate(_position.x, _position.y);
        L10_Luftfahrt_Classes.crc2.beginPath();
        L10_Luftfahrt_Classes.crc2.moveTo(0, 0);
        L10_Luftfahrt_Classes.crc2.lineTo(0, -_max);
        do {
            x += stepMin + Math.random() * (stepMax - stepMin);
            let y = -_min - Math.random() * (_max - _min);
            y *= 1 + Math.random() * 0.2; // Add random irregularities
            L10_Luftfahrt_Classes.crc2.lineTo(x, y);
        } while (x < L10_Luftfahrt_Classes.crc2.canvas.width);
        L10_Luftfahrt_Classes.crc2.lineTo(x, 0);
        L10_Luftfahrt_Classes.crc2.closePath();
        let gradient = L10_Luftfahrt_Classes.crc2.createLinearGradient(0, 0, 0, -_max);
        gradient.addColorStop(0, _colorLow);
        gradient.addColorStop(0.5, "lightgrey"); // Add middle color stop
        gradient.addColorStop(1, _colorHigh);
        L10_Luftfahrt_Classes.crc2.fillStyle = gradient;
        L10_Luftfahrt_Classes.crc2.fill();
        L10_Luftfahrt_Classes.crc2.restore();
    }
    ;
    function drawMountain(_position, _height, _width, _colorLow, _colorHigh) {
        L10_Luftfahrt_Classes.crc2.save();
        L10_Luftfahrt_Classes.crc2.translate(_position.x, _position.y);
        L10_Luftfahrt_Classes.crc2.beginPath();
        L10_Luftfahrt_Classes.crc2.moveTo(0, 0);
        L10_Luftfahrt_Classes.crc2.lineTo(0, -_height);
        L10_Luftfahrt_Classes.crc2.lineTo(_width, 0);
        L10_Luftfahrt_Classes.crc2.closePath();
        let gradient = L10_Luftfahrt_Classes.crc2.createLinearGradient(0, 0, 0, -_height);
        gradient.addColorStop(0, _colorLow);
        gradient.addColorStop(0.7, _colorHigh);
        L10_Luftfahrt_Classes.crc2.fillStyle = gradient;
        L10_Luftfahrt_Classes.crc2.fill();
        L10_Luftfahrt_Classes.crc2.restore();
    }
    ;
    function drawGras(_position) {
        let size = 10;
        let waveFrequency = 3;
        let waveAmplitude = 1;
        L10_Luftfahrt_Classes.crc2.save();
        L10_Luftfahrt_Classes.crc2.translate(_position.x, _position.y);
        L10_Luftfahrt_Classes.crc2.beginPath();
        L10_Luftfahrt_Classes.crc2.moveTo(0, 0);
        L10_Luftfahrt_Classes.crc2.lineTo(0, -size);
        L10_Luftfahrt_Classes.crc2.moveTo(0, 0);
        L10_Luftfahrt_Classes.crc2.lineTo(-(size / 4), -(size / 4) * 3);
        L10_Luftfahrt_Classes.crc2.moveTo(0, 0);
        L10_Luftfahrt_Classes.crc2.lineTo(size / 4, -(size / 4) * 3);
        L10_Luftfahrt_Classes.crc2.closePath();
        let gradient = L10_Luftfahrt_Classes.crc2.createLinearGradient(0, 0, 0, -size);
        gradient.addColorStop(0, "darkgreen");
        gradient.addColorStop(1, "green");
        L10_Luftfahrt_Classes.crc2.fillStyle = gradient;
        L10_Luftfahrt_Classes.crc2.stroke();
        L10_Luftfahrt_Classes.crc2.beginPath();
        L10_Luftfahrt_Classes.crc2.moveTo(-(size / 4), -(size / 4) * 3);
        for (let x = -(size / 4); x < size / 4; x += 0.1) {
            let y = -(size / 4) * 3 + Math.sin(x * waveFrequency) * waveAmplitude;
            L10_Luftfahrt_Classes.crc2.lineTo(x, y);
        }
        L10_Luftfahrt_Classes.crc2.lineTo(size / 4, -(size / 4) * 3);
        L10_Luftfahrt_Classes.crc2.closePath();
        let gradientTexture = L10_Luftfahrt_Classes.crc2.createLinearGradient(0, 0, 0, -size);
        gradientTexture.addColorStop(0, "rgba(0, 0, 0, 0)");
        gradientTexture.addColorStop(0.5, "rgba(255, 255, 255, 0.2)");
        gradientTexture.addColorStop(1, "rgba(0, 0, 0, 0)");
        L10_Luftfahrt_Classes.crc2.fillStyle = gradientTexture;
        L10_Luftfahrt_Classes.crc2.stroke();
        L10_Luftfahrt_Classes.crc2.restore();
    }
    ;
    function drawPlace(_position) {
        let r1 = 30;
        let r2 = 100;
        let gradient = L10_Luftfahrt_Classes.crc2.createLinearGradient(0, 0, 0, r2);
        gradient.addColorStop(0, "hsla(89, 100%, 45%, 1)");
        gradient.addColorStop(0.6, "hsla(80, 100%, 35%, 1)");
        L10_Luftfahrt_Classes.crc2.save();
        L10_Luftfahrt_Classes.crc2.translate(_position.x, _position.y);
        L10_Luftfahrt_Classes.crc2.beginPath();
        L10_Luftfahrt_Classes.crc2.fillStyle = "blue";
        L10_Luftfahrt_Classes.crc2.ellipse(0, 0, r1, r2, 0.5 * Math.PI, 0, 2 * Math.PI, true);
        L10_Luftfahrt_Classes.crc2.closePath();
        L10_Luftfahrt_Classes.crc2.fill();
        L10_Luftfahrt_Classes.crc2.restore();
    }
    ;
    function drawTree(_x, _y) {
        L10_Luftfahrt_Classes.crc2.save();
        L10_Luftfahrt_Classes.crc2.translate(_x, _y);
        L10_Luftfahrt_Classes.crc2.beginPath();
        L10_Luftfahrt_Classes.crc2.moveTo(0, 0);
        L10_Luftfahrt_Classes.crc2.lineTo(0, -40);
        L10_Luftfahrt_Classes.crc2.lineTo(-10, -40);
        L10_Luftfahrt_Classes.crc2.lineTo(-10, -60);
        L10_Luftfahrt_Classes.crc2.lineTo(10, -60);
        L10_Luftfahrt_Classes.crc2.lineTo(10, -40);
        L10_Luftfahrt_Classes.crc2.lineTo(0, -40);
        L10_Luftfahrt_Classes.crc2.closePath();
        L10_Luftfahrt_Classes.crc2.fillStyle = "brown";
        L10_Luftfahrt_Classes.crc2.fill();
        L10_Luftfahrt_Classes.crc2.beginPath();
        L10_Luftfahrt_Classes.crc2.arc(0, -70, 20, 0, Math.PI * 2);
        L10_Luftfahrt_Classes.crc2.fillStyle = "darkgreen";
        L10_Luftfahrt_Classes.crc2.fill();
        L10_Luftfahrt_Classes.crc2.beginPath();
        L10_Luftfahrt_Classes.crc2.arc(0, -100, 15, 0, Math.PI * 2);
        L10_Luftfahrt_Classes.crc2.fillStyle = "darkgreen";
        L10_Luftfahrt_Classes.crc2.fill();
        L10_Luftfahrt_Classes.crc2.beginPath();
        L10_Luftfahrt_Classes.crc2.arc(0, -120, 12, 0, Math.PI * 2);
        L10_Luftfahrt_Classes.crc2.fillStyle = "darkgreen";
        L10_Luftfahrt_Classes.crc2.fill();
        L10_Luftfahrt_Classes.crc2.restore();
    }
    ;
    function drawBoot(_x, _y) {
        L10_Luftfahrt_Classes.crc2.save();
        L10_Luftfahrt_Classes.crc2.translate(_x, _y);
        // Ändere die Form des Kiosks
        L10_Luftfahrt_Classes.crc2.beginPath();
        L10_Luftfahrt_Classes.crc2.moveTo(0, -50);
        L10_Luftfahrt_Classes.crc2.lineTo(-25, 0);
        L10_Luftfahrt_Classes.crc2.lineTo(25, 0);
        L10_Luftfahrt_Classes.crc2.closePath();
        L10_Luftfahrt_Classes.crc2.fillStyle = "white";
        L10_Luftfahrt_Classes.crc2.fill();
        L10_Luftfahrt_Classes.crc2.beginPath();
        L10_Luftfahrt_Classes.crc2.moveTo(-25, 0);
        L10_Luftfahrt_Classes.crc2.lineTo(-50, -40);
        L10_Luftfahrt_Classes.crc2.lineTo(50, -40);
        L10_Luftfahrt_Classes.crc2.lineTo(25, 0);
        L10_Luftfahrt_Classes.crc2.closePath();
        L10_Luftfahrt_Classes.crc2.strokeStyle = "red";
        L10_Luftfahrt_Classes.crc2.lineWidth = 4;
        L10_Luftfahrt_Classes.crc2.stroke();
        L10_Luftfahrt_Classes.crc2.restore();
    }
    ;
    function drawPerson(_x, _y, _size, _color) {
        L10_Luftfahrt_Classes.crc2.save();
        L10_Luftfahrt_Classes.crc2.translate(_x, _y);
        // Kopf
        L10_Luftfahrt_Classes.crc2.beginPath();
        L10_Luftfahrt_Classes.crc2.arc(0, -_size / 10, _size / 4, 0, 2 * Math.PI);
        L10_Luftfahrt_Classes.crc2.fillStyle = "#f2d1b3";
        L10_Luftfahrt_Classes.crc2.fill();
        // Körper
        L10_Luftfahrt_Classes.crc2.beginPath();
        L10_Luftfahrt_Classes.crc2.moveTo(0, -_size / 3);
        L10_Luftfahrt_Classes.crc2.lineTo(-_size / 4, _size / 2);
        L10_Luftfahrt_Classes.crc2.lineTo(_size / 4, _size / 2);
        L10_Luftfahrt_Classes.crc2.closePath();
        L10_Luftfahrt_Classes.crc2.fillStyle = _color;
        L10_Luftfahrt_Classes.crc2.fill();
        // Arme
        L10_Luftfahrt_Classes.crc2.beginPath();
        L10_Luftfahrt_Classes.crc2.moveTo(-_size / 4, 0);
        L10_Luftfahrt_Classes.crc2.lineTo(-_size / 2, _size / 4);
        L10_Luftfahrt_Classes.crc2.moveTo(_size / 4, 0);
        L10_Luftfahrt_Classes.crc2.lineTo(_size / 2, _size / 4);
        L10_Luftfahrt_Classes.crc2.strokeStyle = "#704214";
        L10_Luftfahrt_Classes.crc2.lineWidth = 3;
        L10_Luftfahrt_Classes.crc2.stroke();
        // Beine
        L10_Luftfahrt_Classes.crc2.beginPath();
        L10_Luftfahrt_Classes.crc2.moveTo(-_size / 4, _size / 2);
        L10_Luftfahrt_Classes.crc2.lineTo(-_size / 4, _size);
        L10_Luftfahrt_Classes.crc2.lineTo(0, _size * 0.9);
        L10_Luftfahrt_Classes.crc2.moveTo(_size / 4, _size / 2);
        L10_Luftfahrt_Classes.crc2.lineTo(_size / 4, _size);
        L10_Luftfahrt_Classes.crc2.lineTo(0, _size * 0.9);
        L10_Luftfahrt_Classes.crc2.strokeStyle = "#704214";
        L10_Luftfahrt_Classes.crc2.stroke();
        L10_Luftfahrt_Classes.crc2.restore();
    }
    ;
    function drawParaglider(_x, _y) {
        let color = "white";
        let width = 50;
        let height = 50;
        L10_Luftfahrt_Classes.crc2.save();
        L10_Luftfahrt_Classes.crc2.translate(_x, _y);
        // draw paraglider body
        L10_Luftfahrt_Classes.crc2.beginPath();
        L10_Luftfahrt_Classes.crc2.moveTo(0, 0);
        L10_Luftfahrt_Classes.crc2.lineTo(-width / 2, height / 2);
        L10_Luftfahrt_Classes.crc2.lineTo(width / 2, height / 2);
        L10_Luftfahrt_Classes.crc2.closePath();
        L10_Luftfahrt_Classes.crc2.fillStyle = color;
        L10_Luftfahrt_Classes.crc2.fill();
        // draw strings
        L10_Luftfahrt_Classes.crc2.beginPath();
        L10_Luftfahrt_Classes.crc2.moveTo(0, height / 2);
        L10_Luftfahrt_Classes.crc2.lineTo(0, height);
        L10_Luftfahrt_Classes.crc2.strokeStyle = "black";
        L10_Luftfahrt_Classes.crc2.stroke();
        L10_Luftfahrt_Classes.crc2.beginPath();
        L10_Luftfahrt_Classes.crc2.moveTo(0, height / 2);
        L10_Luftfahrt_Classes.crc2.lineTo(-width / 2, height / 2);
        L10_Luftfahrt_Classes.crc2.strokeStyle = "black";
        L10_Luftfahrt_Classes.crc2.stroke();
        L10_Luftfahrt_Classes.crc2.beginPath();
        L10_Luftfahrt_Classes.crc2.moveTo(0, height / 2);
        L10_Luftfahrt_Classes.crc2.lineTo(width / 2, height / 2);
        L10_Luftfahrt_Classes.crc2.strokeStyle = "black";
        L10_Luftfahrt_Classes.crc2.stroke();
        // draw pilot
        L10_Luftfahrt_Classes.crc2.beginPath();
        L10_Luftfahrt_Classes.crc2.arc(0, height / 4, height / 8, 0, 2 * Math.PI, true);
        L10_Luftfahrt_Classes.crc2.fillStyle = "black";
        L10_Luftfahrt_Classes.crc2.fill();
        L10_Luftfahrt_Classes.crc2.restore();
    }
    ;
    //vallah auch hier wo sind die hunde jetzt hin amk
})(L10_Luftfahrt_Classes || (L10_Luftfahrt_Classes = {}));
