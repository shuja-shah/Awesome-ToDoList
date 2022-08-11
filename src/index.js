import './style.css';
import UserInterface from './list.js';
import CreateList from './addList.js';
import myStorage from './userStorage.js';

// document.addEventListener('DOMContentLoaded', () => {
const form = document.getElementById('form');
form.addEventListener('submit', (e) => {
  e.preventDefault();
  const input = document.getElementById('Addition');
  const description = input.value.toString();
  const completed = false;
  const index = 0;
  const newList = new CreateList(description, completed, index);
  UserInterface.AddList(newList);
  myStorage.plusPlus(newList);
});
UserInterface.ShowList();
// });
// const myclicky = document.querySelectorAll('.myListi');
// console.log(myclicky);
// myclicky.forEach((item) => {
//   item.addEventListener('click', () => {
//    alert('hello');
//    });
// } );
// console.log(myclicky);