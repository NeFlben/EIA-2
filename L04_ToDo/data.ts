namespace todo04 {


    export interface Input {
        savedItem: string;
        savedComment: string;
        savedDate: string;
        savedtask: boolean;
    }



    export let savedInputs: Input[] = [

        {
            savedItem: "Josef",
            savedComment: "Pfand wegbringen",
            savedDate: "13.04.2023",
            savedtask: false

        },
        {
            savedItem: "Tom",
            savedComment: "Bad Putzen",
            savedDate: "12.04.2023",
            savedtask: true
        },
        
    ];

    export let savedItem: string = "";

}