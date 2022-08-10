import "./style.css";
import UserInterface from "./list.js";

class ToDoList{
    constructor(description, completed ,index){
        this.description = description;
        this.completed = completed;
        this.index= index;
    }
}
document.addEventListener("DOMContentLoaded", function(){
    UserInterface.ShowList();
} );