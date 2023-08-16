//import { testing } from "../functions";
import { testing } from "/GroceryApp/app/functions.js"
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.15.0/firebase-app.js"
import { getDatabase } from "https://www.gstatic.com/firebasejs/9.15.0/firebase-database.js"
const appSettings = {
    databaseURL: "https://playground-e9cce-default-rtdb.firebaseio.com/"
}
//console.log(testing())
const app = initializeApp(appSettings);
const database = getDatabase(app);
console.log("what");
console.log(app)
const inputfieldEl = document.getElementById("input-field");
const addButtonEl = document.getElementById("add-button")
console.log("Hellodfdfsd")
addButtonEl.addEventListener("click", function(){
    
    console.log(inputfieldEl.value);
    console.log("Hello");
})