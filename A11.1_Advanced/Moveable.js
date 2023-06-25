"use strict";
var L11_1_Advanced;
(function (L11_1_Advanced) {
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
            if (this.position.x >= L11_1_Advanced.canvas.width + 60) {
                this.position.x = -50;
            }
            if (this.position.x <= -60) {
                this.position.x = L11_1_Advanced.canvas.width + 50;
            }
            if (this.position.y >= L11_1_Advanced.canvas.height + 60) {
                this.position.y = -50;
            }
            if (this.position.y <= -60) {
                this.position.y = L11_1_Advanced.canvas.height + 50;
            }
        }
    }
    L11_1_Advanced.Moveable = Moveable;
})(L11_1_Advanced || (L11_1_Advanced = {}));
