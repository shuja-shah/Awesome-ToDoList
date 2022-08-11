import './style.css';
import UserInterface from './list.js';
import CreateList from './addList.js';
import myStorage from './userStorage.js';

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

const editTheList = document.querySelectorAll('.myListi');

editTheList.forEach((item) => {
  item.addEventListener('click', (e) => {
    e.target.parentElement.classList.add('none');
    const template = `
    <form class = "edit">
    <input type = "text" class = "input-txt">input</input>
    <button type = "submit" class = "icon3">ENter</button>
    <button class = "btn-remove icon3">Remove</button>
    `;
    const div = document.createElement('div');
    div.className = 'edit-div';
    div.innerHTML = template;

    e.target.parentElement.parentElement.appendChild(div);
  });
});
