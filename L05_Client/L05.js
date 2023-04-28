"use strict";
/*
 Aufgabe:L05_Client
 Name: Bennett Müller
 Matrikel: 272690
 Datum: 22.04.2023
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
    let addButton = document.getElementById("addButton");
    addButton.addEventListener("click", handleButton);
    // neues ToDo speichern
    function handleButton() {
        sendData();
        // temporäre Funktion zum hinzufügen von neuen ToDos (wird nach Serveranbindung ersetzt)
        addData();
        clearInputs();
        console.log("Button works!");
    }
    // json file lesen/ parsen
    function handleLoad() {
        return __awaiter(this, void 0, void 0, function* () {
            let response = yield fetch("data.json");
            let entry = yield response.text();
            let data = JSON.parse(entry);
            console.log("handleLoad works!");
            clearInputs();
            loadData(data);
        });
    }
    // neue ToDos/ Daten vom "Formular" an Server senden
    function sendData() {
        return __awaiter(this, void 0, void 0, function* () {
            let formData = new FormData(document.forms[0]);
            let query = new URLSearchParams(formData);
            let response = yield fetch("L05.html?" + query.toString());
        });
    }
    // daten bestehenden ToDos zwischenspeichern in Variablen
    function loadData(data) {
        for (let index = 0; index < data.length; index++) {
            let item = data[index].item;
            let date = data[index].date;
            let urgent = data[index].urgent;
            let comment = data[index].comment;
            loadItem(item, date.toString(), urgent, comment);
        }
    }
    // bestehende ToDos laden
    function loadItem(item, date, urgent, comment) {
        let output = document.querySelector("#output");
        let isUrgent = "";
        if (urgent == true) {
            isUrgent = "Dringend!";
        }
        else {
            isUrgent = "Nicht dringend!";
        }
        let newDiv = document.createElement("div");
        let createP = document.createElement("p");
        let finalString = date + " " + item + " " + isUrgent + " " + comment;
        createP.innerHTML = finalString;
        newDiv.appendChild(createP);
        let newContainer = document.createElement("div");
        newContainer.id = "containerIcons";
        newDiv.appendChild(newContainer);
        let newCheckbox = document.createElement("input");
        newCheckbox.type = "checkbox";
        newContainer.appendChild(newCheckbox);
        // "Trash" Bild mit Löschfunktion einfügen
        let newTrash = document.createElement("div");
        newTrash.innerHTML = "<img id='trash' src='./trash-solid.svg'>";
        newCheckbox.id = "done";
        newContainer.appendChild(newTrash);
        newTrash.addEventListener("click", () => {
            deleteItem(newDiv);
        });
        output.appendChild(newDiv);
    }
    // deleting existing ToDo
    function deleteItem(newDiv) {
        newDiv.parentElement.removeChild(newDiv);
    }
    // neues ToDo mit den aktuellen Werten der Input-Felder hinzufügen
    function addData() {
        let itemx = document.querySelector("#itemx");
        let datex = document.querySelector("#datex");
        let urgentx = document.querySelector("#urgentx");
        let commentx = document.querySelector("#commentx");
        // datex zu Typ Date konvertieren um String angepasst auszugeben
        let date = new Date(datex.value);
        let formatDate = date.getDate() + "." + (date.getMonth() + 1) + "." + date.getFullYear();
        if (itemx.value != "") {
            loadItem(itemx.value, formatDate, urgentx.checked, commentx.value);
        }
    }
    // bisherige Inputs leereen, damit die vorherigen nicht weiter bestehen
    function clearInputs() {
        let itemx = document.querySelector("#itemx");
        itemx.value = "";
        let datex = document.querySelector("#datex");
        datex.value = "";
        let urgentx = document.querySelector("#urgentx");
        urgentx.checked = false;
        let commentx = document.querySelector("#commentx");
        commentx.value = "";
    }
})(todo05 || (todo05 = {}));
