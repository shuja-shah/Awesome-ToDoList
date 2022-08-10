import './style.css';
import UserInterface from './list.js';
import CreateList from './addList.js';

document.addEventListener('DOMContentLoaded', () => {
  UserInterface.ShowList();
});

const form = document.getElementById('form');
form.addEventListener('submit', (e) => {
  e.preventDefault();
  const input = document.getElementById('Addition');
  const description = input.value.toString();
  const completed = false;
  const index = 0;
  const newList = new CreateList(description, completed, index);
  UserInterface.AddList(newList);
});