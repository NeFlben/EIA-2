"use strict";
var L10_Luftfahrt_Classes;
(function (L10_Luftfahrt_Classes) {
    class Moveable {
        constructor(_pos, _vel) {
            this.position = _pos;
            this.velocity = _vel;
        }
        /**
        * move
        */
        move() {
            this.position.add(this.velocity);
            if (this.position.x >= L10_Luftfahrt_Classes.canvas.width + 60) {
                this.position.x = -50;
            }
            if (this.position.x <= -60) {
                this.position.x = L10_Luftfahrt_Classes.canvas.width + 50;
            }
            if (this.position.y >= L10_Luftfahrt_Classes.canvas.height + 60) {
                this.position.y = -50;
            }
            if (this.position.y <= -60) {
                this.position.y = L10_Luftfahrt_Classes.canvas.height + 50;
            }
        }
        /**
         * draw
         */
        draw() {
        }
    }
    L10_Luftfahrt_Classes.Moveable = Moveable;
})(L10_Luftfahrt_Classes || (L10_Luftfahrt_Classes = {}));
