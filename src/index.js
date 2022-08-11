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

const editTheList = document.querySelectorAll('.sibling');

editTheList.forEach((item) => {
  item.addEventListener('click', (e) => {
    e.target.parentElement.classList.remove('sibling');
    e.target.parentElement.classList.add('none');
    e.target.parentElement.nextElementSibling.classList.remove('none');
    e.target.parentElement.nextElementSibling.style.display = 'flex';
    const form = e.target.parentElement.nextElementSibling;
    form.style.justifyContent = 'space-around';
    form.style.alignItems = 'center';
    form.style.width = '100%';
    e.target.parentElement.parentElement.children[3].classList.add('none');
    form.addEventListener('submit', (e) => {
      e.preventDefault();
      const theValue = e.target.children[0].value;
      e.target.parentElement.children[0].classList.remove('none');
      e.target.parentElement.children[0].children[1].textContent = theValue;
      e.target.parentElement.classList.add('sibling');
      e.target.parentElement.children[3].classList.remove('none');
      e.target.style.display = 'none';
    });
  });
});
