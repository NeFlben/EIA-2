namespace L11_1_Advanced {

    export class Aviator extends Moveable {

        public color: string;
        private size: number = 40;

        constructor(_pos: Vector, _vel: Vector, _color: string) {
            super(_pos, _vel)
            this.color = _color;
            // this.size = _size;
        }


        /**
         * draw
         */
        public draw() {
            this.drawPerson();
            this.drawGlider();
        }

        private drawPerson() {
            crc2.save();
            crc2.translate(this.position.x, this.position.y);

            // Kopf
            crc2.beginPath();
            crc2.arc(0, -this.size / 10, this.size / 4, 0, 2 * Math.PI);
            crc2.fillStyle = "#f2d1b3";
            crc2.fill();

            // Körper
            crc2.beginPath();
            crc2.moveTo(0, -this.size / 3);
            crc2.lineTo(-this.size / 4, this.size / 2);
            crc2.lineTo(this.size / 4, this.size / 2);
            crc2.closePath();
            crc2.fillStyle = this.color;
            crc2.fill();

            // Arme
            crc2.beginPath();
            crc2.moveTo(-this.size / 4, 0);
            crc2.lineTo(-this.size / 2, this.size / 4);
            crc2.moveTo(this.size / 4, 0);
            crc2.lineTo(this.size / 2, this.size / 4);
            crc2.strokeStyle = "#704214";
            crc2.lineWidth = 3;
            crc2.stroke();

            // Beine
            crc2.beginPath();
            crc2.moveTo(-this.size / 4, this.size / 2);
            crc2.lineTo(-this.size / 4, this.size);
            crc2.lineTo(0, this.size * 0.9);
            crc2.moveTo(this.size / 4, this.size / 2);
            crc2.lineTo(this.size / 4, this.size);
            crc2.lineTo(0, this.size * 0.9);
            crc2.strokeStyle = "#704214";
            crc2.stroke();

            crc2.restore();
        }

        private drawGlider() {
            let color = "white";
            let width = 50;
            let height = 50;

            crc2.save();
            crc2.translate(this.position.x, this.position.y);

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
        }
    }
}