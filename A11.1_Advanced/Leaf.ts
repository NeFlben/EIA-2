namespace L11_1_Advanced {

    let leafColors: string[] = ["green", "orange", "pink", "red"];


    export class Leaf extends Moveable {
        
        private static maxVel: number = 5;
        private size: number;
        private color: string;

        constructor() {
            let randomVel: Vector  = new Vector(0,0);
            randomVel.random(1, Leaf.maxVel);
            super(randomVector(canvas.width, golden * canvas.height), randomVel);
            this.size = Math.random() * 5;

            let randomNum: number = Math.floor(Math.random() * leafColors.length);
            this.color = leafColors[randomNum];
            console.log(this.color);
        }

        /**
         * draw
         */
        public draw(): void {
            crc2.save();
            crc2.beginPath();
            crc2.fillStyle = this.color;
            
            crc2.translate(this.position.x, this.position.y);
            crc2.ellipse(0,0,this.size, this.size, 0, 0, 2 * Math.PI);
            crc2.closePath();
            crc2.fill();
            crc2.restore();
        }
    }
}