/*
Aufgabe: <L08.1_Alpenflug>
Name: Bennett Müller
Matrikel: <272690>
Datum: <13.05.2023
Quellen: <Dominik Putz>
*/


namespace Alpen {

    window.addEventListener("load", handleload);
    let crc2: CanvasRenderingContext2D;
    let canvas: HTMLCanvasElement = <HTMLCanvasElement>document.querySelector("canvas");

    function handleload(_event: Event): void {

        crc2 = <CanvasRenderingContext2D>canvas.getContext("2d");

        background();
        mountains();
        sun();
        cloud({ x: 100, y: 100 })
        mountain();
        kiosk();
        ellipse();
        climber();
        parachutist();
        windsack();
        bumblebee();
    };
    //Funktionsaufrufe über windowload


    function bumblebee(){

        for(let bees=0;bees<5;bees++){

        let maxXBee:number= 800;
        let maxYBee:number= 540;

        let minXBee:number= 100;
        let minYBee:number= 250;

        let randomXBee:number=Math.floor(Math.random() * (maxXBee - minXBee + 1)) + minXBee;
        let randomYBee:number=Math.floor(Math.random() * (maxYBee - minYBee + 1)) + minYBee;//Bee Position

        //Körper
        crc2.beginPath();
        crc2.moveTo(randomXBee,randomYBee);
        crc2.ellipse(randomXBee-60, randomYBee, 60, 30, 0, 0, 2*Math.PI);
        crc2.stroke();
        crc2.fillStyle="HSL(60,90%,50%)";
        crc2.fill();
        crc2.closePath();
        //Beine
        crc2.beginPath();
        crc2.moveTo(randomXBee-90,randomYBee+26);
        crc2.lineTo(randomXBee-80,randomYBee+35);
        crc2.stroke();
        crc2.closePath();
        
        crc2.beginPath();
        crc2.moveTo(randomXBee-80,randomYBee+28);
        crc2.lineTo(randomXBee-70,randomYBee+35);
        crc2.stroke();
        crc2.closePath();
        
        crc2.beginPath();
        crc2.moveTo(randomXBee-50,randomYBee+29);
        crc2.lineTo(randomXBee-42,randomYBee+35);
        crc2.stroke();
        crc2.closePath();

        crc2.beginPath();
        crc2.moveTo(randomXBee-40,randomYBee+28);
        crc2.lineTo(randomXBee-30,randomYBee+35);
        crc2.stroke();
        crc2.closePath();
        //Streifen
        crc2.beginPath();
        crc2.moveTo(randomXBee-65,randomYBee+29);
        crc2.bezierCurveTo(randomXBee-35,randomYBee-5, randomXBee-45, randomYBee-8, randomXBee-65, randomYBee-30);
        crc2.stroke();
        crc2.closePath();

        crc2.beginPath();
        crc2.moveTo(randomXBee-55,randomYBee+29);
        crc2.bezierCurveTo(randomXBee-25,randomYBee-5, randomXBee-35, randomYBee-8, randomXBee-55, randomYBee-30);
        crc2.stroke();
        crc2.closePath();

        crc2.beginPath();
        crc2.moveTo(randomXBee-35,randomYBee+27);
        crc2.bezierCurveTo(randomXBee-5,randomYBee-5, randomXBee-15, randomYBee-8, randomXBee-35, randomYBee-27);
        crc2.stroke();
        crc2.closePath();

        crc2.beginPath();
        crc2.moveTo(randomXBee-25,randomYBee+24);
        crc2.bezierCurveTo(randomXBee+5,randomYBee-5, randomXBee-5, randomYBee-8, randomXBee-25, randomYBee-24);
        crc2.stroke();
        // crc2.fillStyle="black";
        // crc2.fill();
        crc2.closePath();
            //fill???

        //Augen
        crc2.beginPath();
        crc2.moveTo(randomXBee-90,randomYBee);
        crc2.arc(randomXBee-100,randomYBee,10,0,2*Math.PI);
        crc2.stroke();
        crc2.fillStyle="white";
        crc2.fill();
        crc2.closePath();
        
        crc2.beginPath();
        crc2.moveTo(randomXBee-75,randomYBee);
        crc2.arc(randomXBee-82,randomYBee,8,0,2*Math.PI);
        crc2.stroke();
        crc2.fillStyle="white";
        crc2.fill();
        crc2.closePath();
        
        crc2.beginPath();
        crc2.moveTo(randomXBee-90,randomYBee);
        crc2.arc(randomXBee-95,randomYBee,5,0,2*Math.PI);
        crc2.fillStyle="black";
        crc2.fill();
        crc2.stroke();
        crc2.closePath();
        
        crc2.beginPath();
        crc2.moveTo(randomXBee-80,randomYBee);
        crc2.arc(randomXBee-85,randomYBee,5,0,2*Math.PI);
        crc2.fillStyle="black";
        crc2.fill();
        crc2.stroke();
        crc2.closePath();

        //Flügel
        crc2.beginPath();
        crc2.moveTo(randomXBee-65,randomYBee-30);
        crc2.bezierCurveTo(randomXBee-70,randomYBee-80, randomXBee-80, randomYBee-24, randomXBee-65, randomYBee-30);
        crc2.stroke();
        crc2.fillStyle="lightgrey";
        crc2.fill();
        crc2.closePath();

        crc2.beginPath();
        crc2.moveTo(randomXBee-65,randomYBee-30);
        crc2.bezierCurveTo(randomXBee-60,randomYBee-80, randomXBee-50, randomYBee-24, randomXBee-55, randomYBee-30);
        crc2.stroke();
        crc2.fillStyle="lightgrey";
        crc2.fill();
        crc2.closePath();

        }

    };

    function windsack(){

        
        crc2.beginPath();
        crc2.moveTo(650,551);
        crc2.bezierCurveTo(670,560, 690, 544, 710, 542);
        crc2.stroke();
        crc2.closePath();
        
        crc2.moveTo(710,542);
        crc2.bezierCurveTo(710, 527, 670, 545, 650, 531);
        crc2.lineTo(650,551);
        crc2.fillStyle="hsl(348,83%,47%)";
        crc2.stroke();
        crc2.fill();
        crc2.closePath();   
        
        crc2.beginPath();
        crc2.moveTo(650,600);
        crc2.lineTo(650,550);
        crc2.stroke();
        crc2.closePath();
        crc2.beginPath();
        crc2.ellipse(650, 541, 5, 10, 0, 0, 2*Math.PI);
        crc2.fillStyle="hsl(348,83%,47%)";
        crc2.fill();
        crc2.stroke();
        crc2.closePath();
    };

    function parachutist(){

        for(let guys:number=0; guys<11; guys++){

            let minX:number= 200;
            let maxX:number= 1000;
            let randomX:number=Math.floor(Math.random() * (maxX - minX + 1)) + minX;
            
            let minY:number= 100;
            let maxY:number= 500;
            let randomY:number=Math.floor(Math.random() * (maxY - minY + 1)) + minY;
            
            // Seile
            crc2.beginPath();
            crc2.moveTo(randomX-3,randomY+10);
            crc2.lineTo(randomX-25,randomY-20);
            crc2.stroke();
            crc2.closePath();
            
            crc2.beginPath();
            crc2.moveTo(randomX+3,randomY+10);
            crc2.lineTo(randomX+25,randomY-20);
            crc2.stroke();
            crc2.closePath();
            
            crc2.beginPath();
            crc2.moveTo(randomX+3,randomY+10);
            crc2.lineTo(randomX+10,randomY-20);
            crc2.stroke();
            crc2.closePath();
            
            crc2.beginPath();
            crc2.moveTo(randomX-3,randomY+10);
            crc2.lineTo(randomX-10,randomY-20);
            crc2.stroke();
            crc2.closePath();
            
            //Schirm

            crc2.beginPath();
            crc2.moveTo(randomX-25,randomY-20)
            crc2.bezierCurveTo(randomX-10, randomY-20, randomX +10, randomY-20, randomX +25, randomY-20);
            crc2.fill();
            crc2.fillStyle="HSL(39,100%,50%)";
            crc2.stroke();
            crc2.closePath();
            
            crc2.beginPath();
            crc2.arc(randomX,randomY-20,25,Math.PI,2*Math.PI)
            crc2.lineTo(randomX-25,randomY-20);
            crc2.fill();
            crc2.stroke();
            crc2.closePath();
            
            crc2.beginPath();
            crc2.moveTo(randomX, randomY);
            crc2.arc(randomX, randomY, 8, 0, 2*Math.PI);
            crc2.stroke();
            crc2.fillStyle="white";
            crc2.fill();
            crc2.closePath();
            
            crc2.beginPath();
            crc2.moveTo(randomX,randomY+8);
            crc2.lineTo(randomX, randomY+20)
            crc2.moveTo(randomX, randomY + 20);
            crc2.lineTo(randomX - 10, randomY + 30);
            crc2.moveTo(randomX, randomY + 20);
            crc2.lineTo(randomX + 10, randomY + 30);
            crc2.stroke();
            crc2.closePath();
        
            crc2.beginPath();
            crc2.moveTo(randomX,randomY+15);
            crc2.lineTo(randomX - 20, randomY);
            crc2.moveTo(randomX, randomY + 15);
            crc2.lineTo(randomX + 20, randomY);
            crc2.stroke();
            crc2.closePath();
        
        
    }
    };


function climber(){

    for(let guys:number=0; guys<5; guys++){
    let minX:number= 5;
let maxX:number= 100;
let randomX:number=Math.floor(Math.random() * (maxX - minX + 1)) + minX;
let climbers:[]=[];
let isUnique:boolean;

do {
  isUnique = true;
  randomX = Math.floor(Math.random() * (maxX - minX + 1)) + minX;
  randomY = Math.floor(Math.random() * (maxY - minY + 1)) + minY;

  for (let i = 0; i < climbers.length; i++) {
    let existingClimber = climbers[i];
    let distance = Math.sqrt((existingClimber.x - randomX)**2 + (existingClimber.y - randomY)**2);
    if (distance < 20) {
      isUnique = false;
      break;
    }
  }
} while (!isUnique);

climbers.push({x: randomX, y: randomY});
// funktioniert trotz Fehler??
// Schleife verhindert das Überlappen der Climber

    crc2.beginPath();
    crc2.moveTo(randomX, randomY);
    crc2.arc(randomX, randomY, 8, 0, 2*Math.PI);
    crc2.stroke();
    crc2.fillStyle="white";
    crc2.fill();
    crc2.closePath();

    crc2.beginPath();
    crc2.moveTo(randomX,randomY+8);
    crc2.lineTo(randomX, randomY+20)
    crc2.moveTo(randomX, randomY + 20);
    crc2.lineTo(randomX - 10, randomY + 30);
    crc2.moveTo(randomX, randomY + 20);
    crc2.lineTo(randomX + 10, randomY + 30);
    crc2.stroke();
    crc2.closePath();

    crc2.beginPath();
    crc2.moveTo(randomX,randomY+15);
    crc2.lineTo(randomX - 20, randomY);
    crc2.moveTo(randomX, randomY + 15);
    crc2.lineTo(randomX + 20, randomY);
    crc2.stroke();
    crc2.closePath();

    }
};

    function kiosk(){

        //Gebäude
        crc2.beginPath();
        crc2.moveTo(720,650);
        crc2.lineTo(820,680);
        crc2.lineTo(870,650);
        crc2.lineTo(870,580);
        crc2.lineTo(840,520);
        crc2.lineTo(720,580);
        crc2.lineTo(720,650);

        crc2.strokeStyle="black";
        crc2.stroke();
        crc2.fillStyle="hsl(348,83%,47%)";
        crc2.fill();
        crc2.closePath();

        crc2.beginPath();
        crc2.moveTo(820,680);
        crc2.lineTo(820,610);
        crc2.lineTo(870,580);

        crc2.strokeStyle="black";
        crc2.stroke();
        crc2.fillStyle="hsl(348,83%,47%)";
        crc2.fill();
        crc2.closePath();
        
        crc2.beginPath();
        crc2.moveTo(820,610);
        crc2.lineTo(790,545);
        
        crc2.strokeStyle="black";
        crc2.stroke();
        crc2.closePath();

        //Markise

        crc2.beginPath();
        crc2.moveTo(820,610);
        crc2.lineTo(720,580);
        crc2.lineTo(700,610);
        crc2.lineTo(800,640);
        crc2.lineTo(820,610);
        
        crc2.fillStyle="HSL(360,0%,80%)";
        crc2.fill();
        crc2.closePath();

    };

    function ellipse(){
        
        let centerX:number = 550; // x-Koordinate des Mittelpunkts der Ellipse
        let centerY:number = 650; // y-Koordinate des Mittelpunkts der Ellipse
        
        let minRadiusX:number = 120; // Halbachse in X-Richtung
        let maxRadiusX:number = 140; 
        
        let minRadiusY:number = 10;  // Halbachse in Y-Richtung
        let maxRadiusY:number = 30;  
        
        let randomXRadius:number=Math.floor(Math.random() * (maxRadiusX - minRadiusX + 1)) + minRadiusX;
        let randomYRadius:number=Math.floor(Math.random() * (maxRadiusY - minRadiusY + 1)) + minRadiusY;
        
        let gradient = crc2.createRadialGradient(centerX, centerY, randomXRadius, centerX, centerY, maxRadiusY);
        gradient.addColorStop(0, "HSL(360,0%,96%)");
        gradient.addColorStop(1, "HSL(348,83%,47%)");

    let startAngle:number = 0;
    let endAngle:number = 2 * Math.PI;
        
        crc2.beginPath();
        crc2.ellipse(centerX, centerY, randomXRadius, randomYRadius, 0, startAngle, endAngle);
        crc2.stroke();
        crc2.fillStyle = "HSL(84,100%,65%)";
        crc2.fill();
        crc2.closePath();
      
        
};

let minX:number= 200;
let maxX:number= 400;
let randomX:number=Math.floor(Math.random() * (maxX - minX + 1)) + minX;

let minY:number= 400;
let maxY:number= 600;
let randomY:number=Math.floor(Math.random() * (maxY - minY + 1)) + minY;

function mountain(){
    

        let gradient: CanvasGradient = crc2.createLinearGradient(0, 100, 0, crc2.canvas.height);
        gradient.addColorStop(0, "HSL(360,0%,100%)");
        gradient.addColorStop(1, "HSL(360,0%,20%)");

        crc2.beginPath();
        crc2.moveTo(0,200)
        crc2.lineTo(randomX,600);
        crc2.lineTo(0,600);
        crc2.fillStyle=gradient;
        
        crc2.fill();
        crc2.closePath();

};

    function cloud(position: { x: number, y: number }) {
        let minSize= { x: 100, y: 100 };
        let maxSize = { x: 250, y: 250 };
        let size = {
            x: minSize.x + Math.random() * (maxSize.x - minSize.x),
            y: minSize.y + Math.random() * (maxSize.y - minSize.y)
        };
        let circles = 20;
        let circleRadius = 50;
        let particle = new Path2D();
        let cloudGradient = crc2.createRadialGradient(0, 0, 0, 0, 0, circleRadius);

        particle.arc(0, 0, circleRadius, 0, 2 * Math.PI);
        cloudGradient.addColorStop(0, "HSLA(0, 100%, 100%, 0.5)");
        cloudGradient.addColorStop(1, "HSLA(0, 100%, 100%, 0)");

        crc2.save();
        crc2.translate(position.x, position.y);

        for (let circle = 0; circle < circles; circle++) {

            crc2.save();
            let x = Math.random() * size.x - size.x / 2;
            let y = Math.random() * size.y - size.y / 2;
            crc2.translate(x, y);
            crc2.fillStyle = cloudGradient;
            crc2.fill(particle);
            crc2.restore();

        }
        crc2.restore();

    }


    function sun() {

        let minSunRadius: number = 20;
        let maxSunRadius: number = 50;
        let sunHeight = Math.floor(Math.random() * (maxSunRadius - minSunRadius + 1)) + maxSunRadius;

        let sunX: number = 900;
        let sunY: number = 50;

        let gradient: CanvasGradient = crc2.createRadialGradient(sunX, sunY, sunHeight + 60, sunX, sunY, sunHeight);
        gradient.addColorStop(0, "HSLA(60, 100%, 50%, 0)");
        gradient.addColorStop(1, "HSLA(60, 100%, 90%, 1)");


        crc2.moveTo(sunX, sunY);
        crc2.beginPath();
        crc2.arc(sunX, sunY, sunHeight + 60, 0, 2 * Math.PI);
        crc2.strokeStyle = "transparent"
        crc2.fillStyle = gradient;
        crc2.fill();
        crc2.closePath();

        crc2.moveTo(sunX, sunY);
        crc2.beginPath();
        crc2.arc(sunX, sunY, sunHeight, 0, 2 * Math.PI);
        crc2.strokeStyle = "transparent"
        crc2.fillStyle = gradient;
        crc2.stroke();
        crc2.closePath();

    };

    function mountains() {

        let maxPeaks: number = 8;
        let minPeaks: number = 5;
        let peakHeightMin: number = 100;
        let peakHeightMax: number = 200;

        let startX: number = 0;
        let endX: number = 1000;
        let baseY: number = 450;

        crc2.beginPath();
        crc2.moveTo(startX, baseY);

        // Berechnen der Anzahl der Spitzen
        let numPeaks: number = Math.floor(Math.random() * (maxPeaks - minPeaks + 1)) + minPeaks;

        // Berechnen des Abstands zwischen den Spitzen
        let peakDistance: number = (endX - startX) / numPeaks;

        // Zeichnen der Zickzack-Linie
        for (let i = 0; i < numPeaks; i++) {
            // Berechnen der zufälligen Höhe für die aktuelle Spitze
            let peakHeight: number = Math.floor(Math.random() * (peakHeightMax - peakHeightMin + 1)) + peakHeightMin;

            // Berechnen der x-Koordinate für die aktuelle Spitze
            let peakX: number = startX + i * peakDistance;

            // Berechnen der y-Koordinate für die aktuelle Spitze
            let peakY: number = baseY - peakHeight + Math.floor(Math.random() * 51) - 25;

            // Zeichnen der Linie zur aktuellen Spitze
            crc2.lineTo(peakX, peakY);

            // Zeichnen der Linie zur nächsten Basislinie
            if (i < numPeaks - 1) {
                crc2.lineTo(peakX + peakDistance / 2, baseY);
            }
        }

        // Zeichnen der Linie bis zum Ende
        crc2.lineTo(endX, baseY);
        let gradient: CanvasGradient = crc2.createLinearGradient(0, 100, 0, crc2.canvas.height);
        gradient.addColorStop(0, "HSL(360,0%,100%)");
        gradient.addColorStop(1, "HSL(360,0%,20%)");

        // Linie zeichnen
        crc2.strokeStyle="transparent";
        crc2.fillStyle=gradient;
        crc2.fill();
        crc2.closePath();

    };

    function background() {

        let gradient: CanvasGradient = crc2.createLinearGradient(0, 0, 0, crc2.canvas.height);
        gradient.addColorStop(0, "#51d9ed");
        gradient.addColorStop(.25, "HSL(220, 80%, 80%)");
        gradient.addColorStop(1, "HSL(129,60%,37%)");

        crc2.beginPath();
        crc2.fillStyle = gradient;
        crc2.fillRect(0, 0, crc2.canvas.width, crc2.canvas.height);
        crc2.closePath();

    };

    //mit translate verschiebt man das allgemeine koordinatensystem vom ursprung 0,0 zu einer bestimmten position
    // Koordinatensystem könnte auch mit *(-1) umgekehrt werden
    // In der Funktion muss die Translation am Ende wieder Rückgängig gemacht werden mit safe und restore ansonsten addieren sich die Koordinatensysteme auf
    // Oder mit reset transform

}