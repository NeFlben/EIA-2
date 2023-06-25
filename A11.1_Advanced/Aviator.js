"use strict";
var L11_1_Advanced;
(function (L11_1_Advanced) {
    class Aviator extends L11_1_Advanced.Moveable {
        constructor(_pos, _vel, _color) {
            super(_pos, _vel);
            this.size = 40;
            this.color = _color;
            // this.size = _size;
        }
        /**
         * draw
         */
        draw() {
            this.drawPerson();
            this.drawGlider();
        }
        drawPerson() {
            L11_1_Advanced.crc2.save();
            L11_1_Advanced.crc2.translate(this.position.x, this.position.y);
            // Kopf
            L11_1_Advanced.crc2.beginPath();
            L11_1_Advanced.crc2.arc(0, -this.size / 10, this.size / 4, 0, 2 * Math.PI);
            L11_1_Advanced.crc2.fillStyle = "#f2d1b3";
            L11_1_Advanced.crc2.fill();
            // Körper
            L11_1_Advanced.crc2.beginPath();
            L11_1_Advanced.crc2.moveTo(0, -this.size / 3);
            L11_1_Advanced.crc2.lineTo(-this.size / 4, this.size / 2);
            L11_1_Advanced.crc2.lineTo(this.size / 4, this.size / 2);
            L11_1_Advanced.crc2.closePath();
            L11_1_Advanced.crc2.fillStyle = this.color;
            L11_1_Advanced.crc2.fill();
            // Arme
            L11_1_Advanced.crc2.beginPath();
            L11_1_Advanced.crc2.moveTo(-this.size / 4, 0);
            L11_1_Advanced.crc2.lineTo(-this.size / 2, this.size / 4);
            L11_1_Advanced.crc2.moveTo(this.size / 4, 0);
            L11_1_Advanced.crc2.lineTo(this.size / 2, this.size / 4);
            L11_1_Advanced.crc2.strokeStyle = "#704214";
            L11_1_Advanced.crc2.lineWidth = 3;
            L11_1_Advanced.crc2.stroke();
            // Beine
            L11_1_Advanced.crc2.beginPath();
            L11_1_Advanced.crc2.moveTo(-this.size / 4, this.size / 2);
            L11_1_Advanced.crc2.lineTo(-this.size / 4, this.size);
            L11_1_Advanced.crc2.lineTo(0, this.size * 0.9);
            L11_1_Advanced.crc2.moveTo(this.size / 4, this.size / 2);
            L11_1_Advanced.crc2.lineTo(this.size / 4, this.size);
            L11_1_Advanced.crc2.lineTo(0, this.size * 0.9);
            L11_1_Advanced.crc2.strokeStyle = "#704214";
            L11_1_Advanced.crc2.stroke();
            L11_1_Advanced.crc2.restore();
        }
        drawGlider() {
            let color = "white";
            let width = 50;
            let height = 50;
            L11_1_Advanced.crc2.save();
            L11_1_Advanced.crc2.translate(this.position.x, this.position.y);
            // draw paraglider body
            L11_1_Advanced.crc2.beginPath();
            L11_1_Advanced.crc2.moveTo(0, 0);
            L11_1_Advanced.crc2.lineTo(-width / 2, height / 2);
            L11_1_Advanced.crc2.lineTo(width / 2, height / 2);
            L11_1_Advanced.crc2.closePath();
            L11_1_Advanced.crc2.fillStyle = color;
            L11_1_Advanced.crc2.fill();
            // draw strings
            L11_1_Advanced.crc2.beginPath();
            L11_1_Advanced.crc2.moveTo(0, height / 2);
            L11_1_Advanced.crc2.lineTo(0, height);
            L11_1_Advanced.crc2.strokeStyle = "black";
            L11_1_Advanced.crc2.stroke();
            L11_1_Advanced.crc2.beginPath();
            L11_1_Advanced.crc2.moveTo(0, height / 2);
            L11_1_Advanced.crc2.lineTo(-width / 2, height / 2);
            L11_1_Advanced.crc2.strokeStyle = "black";
            L11_1_Advanced.crc2.stroke();
            L11_1_Advanced.crc2.beginPath();
            L11_1_Advanced.crc2.moveTo(0, height / 2);
            L11_1_Advanced.crc2.lineTo(width / 2, height / 2);
            L11_1_Advanced.crc2.strokeStyle = "black";
            L11_1_Advanced.crc2.stroke();
            // draw pilot
            L11_1_Advanced.crc2.beginPath();
            L11_1_Advanced.crc2.arc(0, height / 4, height / 8, 0, 2 * Math.PI, true);
            L11_1_Advanced.crc2.fillStyle = "black";
            L11_1_Advanced.crc2.fill();
            L11_1_Advanced.crc2.restore();
        }
    }
    L11_1_Advanced.Aviator = Aviator;
})(L11_1_Advanced || (L11_1_Advanced = {}));
