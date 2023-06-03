"use strict";
var L09_Luftfahrt_Classes;
(function (L09_Luftfahrt_Classes) {
    class Aviator {
        constructor(_pos, _vel, _color) {
            this.position = _pos;
            this.velocity = _vel;
            this.color = _color;
            // this.size = _size;
        }
        /**
         * move
         */
        move() {
            this.position.add(this.velocity);
            if (this.position.x >= L09_Luftfahrt_Classes.canvas.width + 60) {
                this.position.x = -50;
            }
            if (this.position.x <= -60) {
                this.position.x = L09_Luftfahrt_Classes.canvas.width + 50;
            }
            if (this.position.y >= L09_Luftfahrt_Classes.canvas.height + 60) {
                this.position.y = -50;
            }
            if (this.position.y <= -60) {
                this.position.y = L09_Luftfahrt_Classes.canvas.height + 50;
            }
        }
        /**
         * draw
         */
        draw() {
        }
    }
    L09_Luftfahrt_Classes.Aviator = Aviator;
})(L09_Luftfahrt_Classes || (L09_Luftfahrt_Classes = {}));
