namespace L11_1_Advanced {

    /*
    Aufgabe: <L10_02_Luftfahrt>
    Name: <Leon Dorner>
    Matrikel: <273072>
    Datum: <19.06.2023>
    Quellen: Markus
    */

    // export interface Vector {
    //     x: number;
    //     y: number;
    // }
    // let h: number;
    // let s: number;
    // let l: number;


    window.addEventListener("load", handleLoad);

    export let canvas: HTMLCanvasElement;
    export let crc2: CanvasRenderingContext2D;
    export let golden: number = 0.62;
    let bgImage: ImageData;
    let moveables: Moveable[] = [];
    let fps: number = 30;


    function handleLoad(_event: Event): void {
        canvas = <HTMLCanvasElement>document.querySelector("canvas");
        crc2 = <CanvasRenderingContext2D>canvas.getContext("2d");
        console.log(crc2.canvas.height);
        console.log(crc2.canvas.width);

        let horizon: number = crc2.canvas.height * golden;

        let posMountains: Vector = new Vector(0, horizon);
        let posMountain: Vector = new Vector(0, horizon + 30);

        drawBackground();
        drawSun(new Vector(200, 75));
        drawCloud(new Vector(500, 100), new Vector(200, 40));
        drawCloud(new Vector(1300, 120), new Vector(100, 60));
        drawMountains(posMountains, 75, 160, "grey", "white");
        drawMountains(posMountains, 50, 110, "grey", "lightgrey");
        for (let x: number = 0; x < 250; x++) {
            let randomX: number = Math.random() * crc2.canvas.width;
            let randomY: number = (Math.random() * crc2.canvas.height / golden) + golden * canvas.height;
            drawGras(new Vector(randomX, randomY));
        };
        drawMountain(posMountain, 450, 605, "grey", "darkgrey");
        drawPlace(new Vector(1010, 725));
        drawTree(318, 832);
        drawTree(280, 800);
        drawTree(242, 841);
        drawBoot(1020, 735);
        bgImage = crc2.getImageData(0, 0, canvas.width, canvas.height);

        drawPeople();
        createGliders(10);
        createLeaves(100);
        update();
        window.setInterval(update, 1000 / fps);
    }

    function drawPeople(): void {
        drawPerson(1440, 688, 40, randomColor());
        drawPerson(1480, 663, 40, randomColor());
        drawPerson(1400, 676, 40, randomColor());
        drawPerson(430, 541, 40, randomColor());
        drawPerson(516, 594, 40, randomColor());

    }

    function update(): void {
        crc2.putImageData(bgImage, 0, 0);
        drawPeople();
        for (const moveable of moveables) {
            moveable.move();
            moveable.draw();
        }
    }

    export function randomVector(_xMax: number, _yMax: number): Vector {
        let rndX: number = Math.random() * _xMax;
        let rndY: number = Math.random() * _yMax;
        let randomPos: Vector = new Vector(rndX, rndY);
        return randomPos;
    }

    function createGliders(_amount: number): void {
        for (let i = 0; i < _amount; i++) {
            let aviator: Aviator = new Aviator(randomVector(canvas.width, golden * canvas.height), randomVector(10, 10), randomColor());
            moveables.push(aviator);
        }
    }

    function createLeaves(_amount: number): void {
        for (let i = 0; i < _amount; i++) {
            let leaf: Leaf = new Leaf();
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

    function randomColor(): string {
        let letters: string = "0123456789ABCDEF";
        let color: string = "#";
        for (let i: number = 0; i < 6; i++) {
            color += letters[Math.floor(Math.random() * 16)];
        }
        return color;
    }

    function drawBackground(): void {
        let gradient: CanvasGradient = crc2.createLinearGradient(0, 0, 0, crc2.canvas.height);
        gradient.addColorStop(0, "blue");
        gradient.addColorStop(golden - 0.01, "white");
        gradient.addColorStop(golden, "HSL(100, 60%, 50%)");
        gradient.addColorStop(1, "HSL(100, 80%, 30%)");

        crc2.fillStyle = gradient;
        crc2.fillRect(0, 0, crc2.canvas.width, crc2.canvas.height);
    }

    function drawSun(_position: Vector): void {
        let r1: number = 40;
        let r2: number = 70;
        let gradient: CanvasGradient = crc2.createRadialGradient(0, 0, r1, 0, 0, r2);

        gradient.addColorStop(0, "hsla(0, 100%, 100%, 1)");
        gradient.addColorStop(0.5, "hsla(40, 100%, 50%, 0.5)");
        gradient.addColorStop(1, "hsla(40, 100%, 50%, 0)");

        crc2.save();
        crc2.translate(_position.x, _position.y);
        crc2.fillStyle = gradient;
        crc2.arc(0, 0, r2, 0, 2 * Math.PI);
        crc2.fill();
        crc2.restore();
    }

    function drawCloud(_position: Vector, _size: Vector): void {
        let nParticles: number = 25;
        let radiusParticle: number = 40;
        let particle: Path2D = new Path2D();
        let gradient: CanvasGradient = crc2.createRadialGradient(0, 0, 0, 0, 0, radiusParticle);

        particle.arc(0, 0, radiusParticle, 0, 2 * Math.PI);
        gradient.addColorStop(0, "hsla(0, 100%, 100%, 0.9)");
        gradient.addColorStop(1, "hsla(0, 100%, 100%, 0)");

        crc2.save();
        crc2.translate(_position.x, _position.y);
        crc2.fillStyle = gradient;

        for (let drawn: number = 0; drawn < nParticles; drawn++) {
            crc2.save();
            let x: number = (Math.random() - 0.5) * _size.x;
            let y: number = - (Math.random() * _size.y);
            let scale: number = Math.random() * 0.8 + 0.2;
            crc2.translate(x, y);
            crc2.scale(scale, scale);
            crc2.fill(particle);
            crc2.restore();
        }
        crc2.restore();
    };

    function drawMountains(_position: Vector, _min: number, _max: number, _colorLow: string, _colorHigh: string): void {
        let stepMin: number = 20;
        let stepMax: number = 50;
        let x: number = 0;

        crc2.save();
        crc2.translate(_position.x, _position.y);

        crc2.beginPath();
        crc2.moveTo(0, 0);
        crc2.lineTo(0, -_max);

        do {
            x += stepMin + Math.random() * (stepMax - stepMin);
            let y: number = -_min - Math.random() * (_max - _min);
            y *= 1 + Math.random() * 0.2; // Add random irregularities

            crc2.lineTo(x, y);
        } while (x < crc2.canvas.width);

        crc2.lineTo(x, 0);
        crc2.closePath();

        let gradient: CanvasGradient = crc2.createLinearGradient(0, 0, 0, -_max);
        gradient.addColorStop(0, _colorLow);
        gradient.addColorStop(0.5, "lightgrey"); // Add middle color stop
        gradient.addColorStop(1, _colorHigh);

        crc2.fillStyle = gradient;
        crc2.fill();

        crc2.restore();
    };

    function drawMountain(_position: Vector, _height: number, _width: number, _colorLow: string, _colorHigh: string): void {
        crc2.save();
        crc2.translate(_position.x, _position.y);

        crc2.beginPath();
        crc2.moveTo(0, 0);
        crc2.lineTo(0, -_height);
        crc2.lineTo(_width, 0);
        crc2.closePath();

        let gradient: CanvasGradient = crc2.createLinearGradient(0, 0, 0, -_height);
        gradient.addColorStop(0, _colorLow);
        gradient.addColorStop(0.7, _colorHigh);
        crc2.fillStyle = gradient;
        crc2.fill();

        crc2.restore();
    };

    function drawGras(_position: Vector): void {
        let size: number = 10;
        let waveFrequency: number = 3;
        let waveAmplitude: number = 1;

        crc2.save();
        crc2.translate(_position.x, _position.y);

        crc2.beginPath();
        crc2.moveTo(0, 0);
        crc2.lineTo(0, -size);
        crc2.moveTo(0, 0);
        crc2.lineTo(-(size / 4), -(size / 4) * 3);
        crc2.moveTo(0, 0);
        crc2.lineTo(size / 4, -(size / 4) * 3);
        crc2.closePath();

        let gradient: CanvasGradient = crc2.createLinearGradient(0, 0, 0, -size);
        gradient.addColorStop(0, "darkgreen");
        gradient.addColorStop(1, "green");
        crc2.fillStyle = gradient;
        crc2.stroke();

        crc2.beginPath();
        crc2.moveTo(-(size / 4), -(size / 4) * 3);

        for (let x = -(size / 4); x < size / 4; x += 0.1) {
            let y: number = -(size / 4) * 3 + Math.sin(x * waveFrequency) * waveAmplitude;
            crc2.lineTo(x, y);
        }

        crc2.lineTo(size / 4, -(size / 4) * 3);
        crc2.closePath();

        let gradientTexture: CanvasGradient = crc2.createLinearGradient(0, 0, 0, -size);
        gradientTexture.addColorStop(0, "rgba(0, 0, 0, 0)");
        gradientTexture.addColorStop(0.5, "rgba(255, 255, 255, 0.2)");
        gradientTexture.addColorStop(1, "rgba(0, 0, 0, 0)");
        crc2.fillStyle = gradientTexture;
        crc2.stroke();

        crc2.restore();
    };

    function drawPlace(_position: Vector): void {
        let r1: number = 30;
        let r2: number = 100;
        let gradient: CanvasGradient = crc2.createLinearGradient(0, 0, 0, r2);

        gradient.addColorStop(0, "hsla(89, 100%, 45%, 1)");
        gradient.addColorStop(0.6, "hsla(80, 100%, 35%, 1)");

        crc2.save();
        crc2.translate(_position.x, _position.y);
        crc2.beginPath();
        crc2.fillStyle = "blue";
        crc2.ellipse(0, 0, r1, r2, 0.5 * Math.PI, 0, 2 * Math.PI, true);
        crc2.closePath();
        crc2.fill();
        crc2.restore();
    };

    function drawTree(_x: number, _y: number): void {
        crc2.save();
        crc2.translate(_x, _y);

        crc2.beginPath();
        crc2.moveTo(0, 0);
        crc2.lineTo(0, -40);
        crc2.lineTo(-10, -40);
        crc2.lineTo(-10, -60);
        crc2.lineTo(10, -60);
        crc2.lineTo(10, -40);
        crc2.lineTo(0, -40);
        crc2.closePath();
        crc2.fillStyle = "brown";
        crc2.fill();

        crc2.beginPath();
        crc2.arc(0, -70, 20, 0, Math.PI * 2);
        crc2.fillStyle = "darkgreen";
        crc2.fill();

        crc2.beginPath();
        crc2.arc(0, -100, 15, 0, Math.PI * 2);
        crc2.fillStyle = "darkgreen";
        crc2.fill();

        crc2.beginPath();
        crc2.arc(0, -120, 12, 0, Math.PI * 2);
        crc2.fillStyle = "darkgreen";
        crc2.fill();

        crc2.restore();
    };

    function drawBoot(_x: number, _y: number): void {
        crc2.save();
        crc2.translate(_x, _y);

        // Ändere die Form des Kiosks
        crc2.beginPath();
        crc2.moveTo(0, -50);
        crc2.lineTo(-25, 0);
        crc2.lineTo(25, 0);
        crc2.closePath();
        crc2.fillStyle = "white";
        crc2.fill();
        crc2.beginPath();
        crc2.moveTo(-25, 0);
        crc2.lineTo(-50, -40);
        crc2.lineTo(50, -40);
        crc2.lineTo(25, 0);
        crc2.closePath();
        crc2.strokeStyle = "red"
        crc2.lineWidth = 4;
        crc2.stroke();

        crc2.restore();
    };

    function drawPerson(_x: number, _y: number, _size: number, _color: string): void {
        crc2.save();
        crc2.translate(_x, _y);

        // Kopf
        crc2.beginPath();
        crc2.arc(0, -_size / 10, _size / 4, 0, 2 * Math.PI);
        crc2.fillStyle = "#f2d1b3";
        crc2.fill();

        // Körper
        crc2.beginPath();
        crc2.moveTo(0, -_size / 3);
        crc2.lineTo(-_size / 4, _size / 2);
        crc2.lineTo(_size / 4, _size / 2);
        crc2.closePath();
        crc2.fillStyle = _color;
        crc2.fill();

        // Arme
        crc2.beginPath();
        crc2.moveTo(-_size / 4, 0);
        crc2.lineTo(-_size / 2, _size / 4);
        crc2.moveTo(_size / 4, 0);
        crc2.lineTo(_size / 2, _size / 4);
        crc2.strokeStyle = "#704214";
        crc2.lineWidth = 3;
        crc2.stroke();

        // Beine
        crc2.beginPath();
        crc2.moveTo(-_size / 4, _size / 2);
        crc2.lineTo(-_size / 4, _size);
        crc2.lineTo(0, _size * 0.9);
        crc2.moveTo(_size / 4, _size / 2);
        crc2.lineTo(_size / 4, _size);
        crc2.lineTo(0, _size * 0.9);
        crc2.strokeStyle = "#704214";
        crc2.stroke();

        crc2.restore();
    }
    ;

    function drawParaglider(_x: number, _y: number): void {
        let color = "white";
        let width = 50;
        let height = 50;

        crc2.save();
        crc2.translate(_x, _y);

        // draw paraglider body
        crc2.beginPath();
        crc2.moveTo(0, 0);
        crc2.lineTo(-width / 2, height / 2);
        crc2.lineTo(width / 2, height / 2);
        crc2.closePath();
        crc2.fillStyle = color;
        crc2.fill();

        // draw strings
        crc2.beginPath();
        crc2.moveTo(0, height / 2);
        crc2.lineTo(0, height);
        crc2.strokeStyle = "black";
        crc2.stroke();

        crc2.beginPath();
        crc2.moveTo(0, height / 2);
        crc2.lineTo(-width / 2, height / 2);
        crc2.strokeStyle = "black";
        crc2.stroke();

        crc2.beginPath();
        crc2.moveTo(0, height / 2);
        crc2.lineTo(width / 2, height / 2);
        crc2.strokeStyle = "black";
        crc2.stroke();

        // draw pilot
        crc2.beginPath();
        crc2.arc(0, height / 4, height / 8, 0, 2 * Math.PI, true);
        crc2.fillStyle = "black";
        crc2.fill();

        crc2.restore();
    };

    //vallah auch hier wo sind die hunde jetzt hin amk



}