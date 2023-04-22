"use strict";
/*
 Aufgabe:L04_To-Do-Liste
 Name: Bennett Müller
 Matrikel: 272690
 Datum: 14.04.2023
 */
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var todo05;
(function (todo05) {
    window.addEventListener("load", handleLoad);
    function handleLoad() {
        return __awaiter(this, void 0, void 0, function* () {
            let button = document.querySelector("button[type=button]");
            let response = yield fetch("data.json");
            let entry = yield response.text();
            let data = JSON.parse(entry);
            button.addEventListener("click", handleButton);
            clearInputs();
            loadData(data);
        });
    }
    function handleButton() {
        loadInput();
        sendData();
    }
    function sendData() {
        return __awaiter(this, void 0, void 0, function* () {
            let formData = new FormData(document.forms[0]);
            let query = new URLSearchParams(formData);
            yield fetch("L05.html?" + query.toString());
            alert("Data sent");
        });
    }
    function loadData(data) {
        for (let index = 0; index < data.length; index++) {
            let item = data[index].item;
            let amount = data[index].amount;
            let date = data[index].date;
            let comment = data[index].comment;
            loadItem(item, amount, date, comment);
        }
    }
    function loadInput() {
        let formData = new FormData(document.forms[0]);
        let item = formData.get("Item").toString();
        let amount = Number(formData.get("Amount"));
        let date = new Date().toLocaleDateString();
        let comment = formData.get("Area").toString();
        let dringendCheckbox = formData.get("Checkbox");
        let dringend = "";
        if (dringendCheckbox == null) {
            dringend ?  = "" : ;
        }
        else {
            dringend ?  = " dringend" : ;
        }
        clearInputs();
        loadItem(item, amount, date, comment, dringend);
    }
    function loadItem(item, amount, date, comment, purchase) {
        let newDiv = document.createElement("div");
        newDiv.id = "createDiv";
        let parent = document.querySelector("#output");
        newDiv.className = "genoutput";
        newDiv.innerHTML = date + " " + amount + " " + item + " " + comment + ";;
        parent.appendChild(newDiv);
        let newContainer = document.createElement("div");
        newContainer.id = "containerIcons";
        newDiv.appendChild(newContainer);
        let newCheckbox = document.createElement("input");
        newCheckbox.type = "checkbox";
        newContainer.appendChild(newCheckbox);
        let newEdit = document.createElement("div");
        newEdit.innerHTML = "<img id='edit' src='./pen-solid.svg'>";
        newContainer.appendChild(newEdit);
        let newTrash = document.createElement("div");
        newTrash.innerHTML = "<img id='trash' src='./trash-solid.svg'>";
        newCheckbox.id = "trash";
        newContainer.appendChild(newTrash);
        newEdit.addEventListener("click", function () {
            editItem(newDiv, item, amount, comment);
        });
        newTrash.addEventListener("click", function () {
            deleteItem(newDiv);
        });
    }
    function deleteItem(newDiv) {
        newDiv.parentElement.removeChild(newDiv);
    }
    function editItem(newDiv, item, amount, comment) {
        let itemx = document.querySelector("input#inputx");
        itemx.value = item;
        let amountx = document.querySelector("input#amountx");
        amountx.value = amount.toString();
        let commentx = document.querySelector("input#commentx");
        commentx.value = comment;
        deleteItem(newDiv);
    }
    function clearInputs() {
        let itemx = document.querySelector("input#inputx");
        itemx.value = "";
        let amountx = document.querySelector("input#amountx");
        amountx.value = "";
        let commentx = document.querySelector("input#commentx");
        commentx.value = "";
    }
})(todo05 || (todo05 = {}));
