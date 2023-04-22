/*
 Aufgabe:L04_To-Do-Liste
 Name: Bennett Müller
 Matrikel: 272690
 Datum: 14.04.2023
 */


namespace todo05 {

    window.addEventListener("load", handleLoad);

    
    export interface Input {
        item: string;
        amount: number;
        comment: string;
        date: string;
    }

   
    async function handleLoad(): Promise<void> {
        let button: HTMLButtonElement = <HTMLButtonElement>document.querySelector("button[type=button]");
        let response: Response = await fetch("data.json");
        let entry: string = await response.text();
        let data: Input[] = JSON.parse(entry);
        button.addEventListener("click", handleButton);
        clearInputs();
        loadData(data);
    }

    
    function handleButton(): void {
        loadInput();
        sendData();
    }

    
    async function sendData(): Promise<void> {
        let formData: FormData = new FormData(document.forms[0]);
        let query: URLSearchParams = new URLSearchParams(<any>formData);
        await fetch("L05.html?" + query.toString());
        alert("Data sent");
    }

    
    function loadData(data: Input[]): void {
        for (let index: number = 0; index < data.length; index++) {
            let item: string = data[index].item;
            let amount: number = data[index].amount;
            let date: string = data[index].date;
            let comment: string = data[index].comment;
            
            loadItem(item, amount, date, comment);
        }
    }

    
    function loadInput(): void {
        let formData: FormData = new FormData(document.forms[0]);
        let item: string = formData.get("Item").toString();
        let amount: number = Number(formData.get("Amount"));
        let date: string = new Date().toLocaleDateString();
        let comment: string = formData.get("Area").toString();

       
        let dringendCheckbox: FormDataEntryValue = formData.get("Checkbox");
        let dringend: string = "";
        if (dringendCheckbox == null) {
            dringend? = "";
        } else {
            dringend? = " dringend";
        }

        
        clearInputs();

        
        loadItem(item, amount, date, comment, dringend);
    }

    
    function loadItem(item: string, amount: number, date: string, comment: string, purchase: string): void {
        let newDiv: HTMLDivElement = document.createElement("div");
        newDiv.id = "createDiv";
        let parent: Element = document.querySelector("#output");
        newDiv.className = "genoutput";
        newDiv.innerHTML = date + " " + amount + " " + item + " " + comment + ";
        parent.appendChild(newDiv);

        let newContainer: HTMLDivElement = document.createElement("div");
        newContainer.id = "containerIcons";
        newDiv.appendChild(newContainer);

        let newCheckbox: HTMLInputElement = document.createElement("input");
        newCheckbox.type = "checkbox";
        newContainer.appendChild(newCheckbox);

        let newEdit: HTMLDivElement = document.createElement("div");
        newEdit.innerHTML = "<img id='edit' src='./pen-solid.svg'>";
        newContainer.appendChild(newEdit);

        let newTrash: HTMLDivElement = document.createElement("div");
        newTrash.innerHTML = "<img id='trash' src='./trash-solid.svg'>";
        newCheckbox.id = "trash";
        newContainer.appendChild(newTrash);

        newEdit.addEventListener("click", function (): void {
            editItem(newDiv, item, amount, comment);
        });

        newTrash.addEventListener("click", function (): void {
            deleteItem(newDiv);
        });
    }

    
    function deleteItem(newDiv: HTMLDivElement): void {
        newDiv.parentElement.removeChild(newDiv);
    }

    
    function editItem(newDiv: HTMLDivElement, item: string, amount: number, comment: string): void {
        let itemx: HTMLInputElement = document.querySelector("input#inputx");
        itemx.value = item;
        let amountx: HTMLInputElement = document.querySelector("input#amountx");
        amountx.value = amount.toString();
        let commentx: HTMLInputElement = document.querySelector("input#commentx");
        commentx.value = comment;
        deleteItem(newDiv);
    }

    
    function clearInputs(): void {
        let itemx: HTMLInputElement = document.querySelector("input#inputx");
        itemx.value = "";
        let amountx: HTMLInputElement = document.querySelector("input#amountx");
        amountx.value = "";
        let commentx: HTMLInputElement = document.querySelector("input#commentx");
        commentx.value = "";
    }
}