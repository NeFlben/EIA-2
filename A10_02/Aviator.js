"use strict";
var L10_Luftfahrt_Classes;
(function (L10_Luftfahrt_Classes) {
    class Aviator extends L10_Luftfahrt_Classes.Moveable {
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
            L10_Luftfahrt_Classes.crc2.save();
            L10_Luftfahrt_Classes.crc2.translate(this.position.x, this.position.y);
            // Kopf
            L10_Luftfahrt_Classes.crc2.beginPath();
            L10_Luftfahrt_Classes.crc2.arc(0, -this.size / 10, this.size / 4, 0, 2 * Math.PI);
            L10_Luftfahrt_Classes.crc2.fillStyle = "#f2d1b3";
            L10_Luftfahrt_Classes.crc2.fill();
            // Körper
            L10_Luftfahrt_Classes.crc2.beginPath();
            L10_Luftfahrt_Classes.crc2.moveTo(0, -this.size / 3);
            L10_Luftfahrt_Classes.crc2.lineTo(-this.size / 4, this.size / 2);
            L10_Luftfahrt_Classes.crc2.lineTo(this.size / 4, this.size / 2);
            L10_Luftfahrt_Classes.crc2.closePath();
            L10_Luftfahrt_Classes.crc2.fillStyle = this.color;
            L10_Luftfahrt_Classes.crc2.fill();
            // Arme
            L10_Luftfahrt_Classes.crc2.beginPath();
            L10_Luftfahrt_Classes.crc2.moveTo(-this.size / 4, 0);
            L10_Luftfahrt_Classes.crc2.lineTo(-this.size / 2, this.size / 4);
            L10_Luftfahrt_Classes.crc2.moveTo(this.size / 4, 0);
            L10_Luftfahrt_Classes.crc2.lineTo(this.size / 2, this.size / 4);
            L10_Luftfahrt_Classes.crc2.strokeStyle = "#704214";
            L10_Luftfahrt_Classes.crc2.lineWidth = 3;
            L10_Luftfahrt_Classes.crc2.stroke();
            // Beine
            L10_Luftfahrt_Classes.crc2.beginPath();
            L10_Luftfahrt_Classes.crc2.moveTo(-this.size / 4, this.size / 2);
            L10_Luftfahrt_Classes.crc2.lineTo(-this.size / 4, this.size);
            L10_Luftfahrt_Classes.crc2.lineTo(0, this.size * 0.9);
            L10_Luftfahrt_Classes.crc2.moveTo(this.size / 4, this.size / 2);
            L10_Luftfahrt_Classes.crc2.lineTo(this.size / 4, this.size);
            L10_Luftfahrt_Classes.crc2.lineTo(0, this.size * 0.9);
            L10_Luftfahrt_Classes.crc2.strokeStyle = "#704214";
            L10_Luftfahrt_Classes.crc2.stroke();
            L10_Luftfahrt_Classes.crc2.restore();
        }
        drawGlider() {
            let color = "white";
            let width = 50;
            let height = 50;
            L10_Luftfahrt_Classes.crc2.save();
            L10_Luftfahrt_Classes.crc2.translate(this.position.x, this.position.y);
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
    }
    L10_Luftfahrt_Classes.Aviator = Aviator;
})(L10_Luftfahrt_Classes || (L10_Luftfahrt_Classes = {}));
