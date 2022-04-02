class Line {
    constructor(context) {
        this.context = context;
    }

    #simple() {

        //* draw simple line
        this.context.beginPath();
        this.context.lineWidth = 20;
        this.context.moveTo(20, 20);
        this.context.lineTo(150, 20);
        this.context.stroke();
    }


    #complex() {

        //* draw simple line
        this.context.beginPath();
        this.context.moveTo(10, 10);
        this.context.lineTo(50, 50);
        this.context.lineTo(90, 10);
        this.context.lineTo(130, 50);
        this.context.lineTo(180, 10);
        this.context.stroke();

    }

    #caps() {
        //! line 1
        this.context.beginPath();
        this.context.lineCap = 'butt';
        this.context.strokeStyle = 'red';
        this.context.lineWidth = 20;
        this.context.moveTo(20, 20);
        this.context.lineTo(150, 20);
        this.context.stroke();

        //? line2
        this.context.beginPath();
        this.context.lineCap = 'round';
        this.context.strokeStyle = 'blue';
        this.context.lineWidth = 20;
        this.context.moveTo(20, 60);
        this.context.lineTo(150, 60);
        this.context.stroke();

        //* line 3
        this.context.beginPath();
        this.context.lineCap = 'square';
        this.context.strokeStyle = 'green';
        this.context.lineWidth = 20;
        this.context.moveTo(20, 100);
        this.context.lineTo(150, 100);
        this.context.stroke();
    }

    debug() {
        console.log("context:", this.context);
    }

    draw(lineType) {
        switch (lineType) {
            case "simple":
                this.#simple();
                break;
            case "complex":
                this.#complex();
                break;
            case "caps":
                this.#caps();
                break;
            default:
                break;
        }
    }
}



