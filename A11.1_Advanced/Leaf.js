"use strict";
var L11_1_Advanced;
(function (L11_1_Advanced) {
    let leafColors = ["green", "orange", "pink", "red"];
    class Leaf extends L11_1_Advanced.Moveable {
        constructor() {
            let randomVel = new L11_1_Advanced.Vector(0, 0);
            randomVel.random(1, Leaf.maxVel);
            super(L11_1_Advanced.randomVector(L11_1_Advanced.canvas.width, L11_1_Advanced.golden * L11_1_Advanced.canvas.height), randomVel);
            this.size = Math.random() * 5;
            let randomNum = Math.floor(Math.random() * leafColors.length);
            this.color = leafColors[randomNum];
            console.log(this.color);
        }
        /**
         * draw
         */
        draw() {
            L11_1_Advanced.crc2.save();
            L11_1_Advanced.crc2.beginPath();
            L11_1_Advanced.crc2.fillStyle = this.color;
            L11_1_Advanced.crc2.translate(this.position.x, this.position.y);
            L11_1_Advanced.crc2.ellipse(0, 0, this.size, this.size, 0, 0, 2 * Math.PI);
            L11_1_Advanced.crc2.closePath();
            L11_1_Advanced.crc2.fill();
            L11_1_Advanced.crc2.restore();
        }
    }
    Leaf.maxVel = 5;
    L11_1_Advanced.Leaf = Leaf;
})(L11_1_Advanced || (L11_1_Advanced = {}));
