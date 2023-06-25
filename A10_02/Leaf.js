"use strict";
var L10_Luftfahrt_Classes;
(function (L10_Luftfahrt_Classes) {
    let leafColors = ["green", "orange", "pink", "red"];
    class Leaf extends L10_Luftfahrt_Classes.Moveable {
        constructor() {
            let randomVel = new L10_Luftfahrt_Classes.Vector(0, 0);
            randomVel.random(1, Leaf.maxVel);
            super(L10_Luftfahrt_Classes.randomVector(L10_Luftfahrt_Classes.canvas.width, L10_Luftfahrt_Classes.golden * L10_Luftfahrt_Classes.canvas.height), randomVel);
            this.size = Math.random() * 5;
            let randomNum = Math.floor(Math.random() * leafColors.length);
            this.color = leafColors[randomNum];
            console.log(this.color);
        }
        /**
         * draw
         */
        draw() {
            L10_Luftfahrt_Classes.crc2.save();
            L10_Luftfahrt_Classes.crc2.beginPath();
            L10_Luftfahrt_Classes.crc2.fillStyle = this.color;
            L10_Luftfahrt_Classes.crc2.translate(this.position.x, this.position.y);
            L10_Luftfahrt_Classes.crc2.ellipse(0, 0, this.size, this.size, 0, 0, 2 * Math.PI);
            L10_Luftfahrt_Classes.crc2.closePath();
            L10_Luftfahrt_Classes.crc2.fill();
            L10_Luftfahrt_Classes.crc2.restore();
        }
    }
    Leaf.maxVel = 5;
    L10_Luftfahrt_Classes.Leaf = Leaf;
})(L10_Luftfahrt_Classes || (L10_Luftfahrt_Classes = {}));
