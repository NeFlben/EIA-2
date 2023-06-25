namespace L10_Luftfahrt_Classes {

    export class Moveable {
        public position: Vector;
        protected velocity: Vector;


        constructor(_pos: Vector, _vel: Vector) {
            this.position = _pos;
            this.velocity = _vel;
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