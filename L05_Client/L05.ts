/*
 Aufgabe:L05_Client
 Name: Bennett Müller
 Matrikel: 272690
 Datum: 22.04.2023
 */


namespace todo05 {

    window.addEventListener("load", handleLoad);

    export interface Input {
        item: string;
        date: Date;
        comment: string;
        urgent: boolean;
    }

    let addButton: HTMLDivElement = <HTMLDivElement>document.getElementById("addButton");
    addButton.addEventListener("click", handleButton);

    // neues ToDo speichern
    function handleButton(): void {
        sendData();

        // temporäre Funktion zum hinzufügen von neuen ToDos (wird nach Serveranbindung ersetzt)
        addData();
        clearInputs();
        console.log("Button works!");
    }

    // json file lesen/ parsen
    async function handleLoad(): Promise<void> {
        let response: Response = await fetch("data.json");
        let entry: string = await response.text();
        let data: Input[] = JSON.parse(entry);
        console.log("handleLoad works!");
        clearInputs();
        loadData(data);
    }

    // neue ToDos/ Daten vom "Formular" an Server senden
    async function sendData(): Promise<void> {
        let formData: FormData = new FormData(document.forms[0]);
        let query: URLSearchParams = new URLSearchParams(<any>formData);
        let response: Response = await fetch("L05.html?" + query.toString());

    }

    // daten bestehenden ToDos zwischenspeichern in Variablen
    function loadData(data: Input[]): void {
        for (let index: number = 0; index < data.length; index++) {
            let item: string = data[index].item;
            let date: Date = data[index].date;
            let urgent: boolean = data[index].urgent;
            let comment: string = data[index].comment;

            loadItem(item, date.toString(), urgent, comment);
        }
    }

    // bestehende ToDos laden
    function loadItem(item: string, date: string, urgent: boolean, comment: string): void {
        let output: HTMLDivElement = <HTMLDivElement>document.querySelector("#output");

        let isUrgent: string = "";
        if (urgent == true) {
            isUrgent = "Dringend!";
        } else {
            isUrgent = "Nicht dringend!";
        }

        let newDiv: HTMLDivElement = <HTMLDivElement>document.createElement("div");

        let createP: HTMLParagraphElement = <HTMLParagraphElement>document.createElement("p");
        let finalString: string = date + " " + item + " " + isUrgent + " " + comment;
        createP.innerHTML = finalString;

        newDiv.appendChild(createP);

        let newContainer: HTMLDivElement = document.createElement("div");
        newContainer.id = "containerIcons";
        newDiv.appendChild(newContainer);

        let newCheckbox: HTMLInputElement = document.createElement("input");
        newCheckbox.type = "checkbox";
        newContainer.appendChild(newCheckbox);

        // "Trash" Bild mit Löschfunktion einfügen
        let newTrash: HTMLDivElement = document.createElement("div");
        newTrash.innerHTML = "<img id='trash' src='./trash-solid.svg'>";
        newCheckbox.id = "done";
        newContainer.appendChild(newTrash);

        newTrash.addEventListener("click", () => {
            deleteItem(newDiv);
        });

        output.appendChild(newDiv);

    }

    // deleting existing ToDo
    function deleteItem(newDiv: HTMLDivElement): void {
        newDiv.parentElement.removeChild(newDiv);
    }

    // neues ToDo mit den aktuellen Werten der Input-Felder hinzufügen
    function addData(): void {

        let itemx: HTMLInputElement = <HTMLInputElement>document.querySelector("#itemx");
        let datex: HTMLInputElement = <HTMLInputElement>document.querySelector("#datex");
        let urgentx: HTMLInputElement = <HTMLInputElement>document.querySelector("#urgentx");
        let commentx: HTMLInputElement = <HTMLInputElement>document.querySelector("#commentx");

        // datex zu Typ Date konvertieren um String angepasst auszugeben
        let date: Date = new Date(datex.value);
        let formatDate: string = date.getDate() + "." + (date.getMonth() + 1) + "." + date.getFullYear();

        if (itemx.value != "") {
            loadItem(itemx.value, formatDate, urgentx.checked, commentx.value);

        }
    }

    // bisherige Inputs leereen, damit die vorherigen nicht weiter bestehen
    function clearInputs(): void {
        let itemx: HTMLInputElement = <HTMLInputElement>document.querySelector("#itemx");
        itemx.value = "";
        let datex: HTMLInputElement = <HTMLInputElement>document.querySelector("#datex");
        datex.value = "";
        let urgentx: HTMLInputElement = <HTMLInputElement>document.querySelector("#urgentx");
        urgentx.checked = false;
        let commentx: HTMLInputElement = <HTMLInputElement>document.querySelector("#commentx");
        commentx.value = "";
    }
}