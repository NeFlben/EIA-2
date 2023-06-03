namespace L09_Luftfahrt_Classes {

    export class Aviator {

        public position: Vector;
        public color: string;
        private velocity: Vector;

        constructor(_pos: Vector, _vel: Vector, _color: string) {
            this.position = _pos;
            this.velocity = _vel;
            this.color = _color;
            // this.size = _size;
        }

        /**
         * move
         */
        public move() {
            this.position.add(this.velocity);

            if (this.position.x >= canvas.width + 60) {
                this.position.x = - 50;
            }
            if (this.position.x <= - 60) {
                this.position.x = canvas.width + 50;
            }
            if (this.position.y >= canvas.height + 60) {
                this.position.y = - 50;
            }
            if (this.position.y <= - 60) {
                this.position.y = canvas.height + 50;
            }
        }

        /**
         * draw
         */
        public draw() {
            
        }
    }
}