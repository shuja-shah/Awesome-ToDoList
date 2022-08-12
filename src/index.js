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
  const index = myStorage.getData().length + 1;
  const newList = new CreateList(description, completed, index);
  UserInterface.AddList(newList);
  myStorage.plusPlus(newList);
  window.location.reload();
});
UserInterface.ShowList();

const editTheList = document.querySelectorAll('.sibling');

editTheList.forEach((item) => {
  item.addEventListener('dblclick', (e) => {
    e.target.parentElement.classList.remove('sibling');
    e.target.parentElement.classList.add('none');
    e.target.parentElement.nextElementSibling.classList.remove('none');
    e.target.parentElement.nextElementSibling.style.display = 'flex';
    const removeBtn = e.target.parentElement.nextElementSibling.nextElementSibling;
    removeBtn.classList.remove('none');
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
      const index = parseInt(e.target.parentElement.children[3].textContent, 10);
      myStorage.editItem(index, theValue);
      const btnRemove = document.querySelectorAll('.btn-remove');
      btnRemove.forEach((item) => {
        item.classList.add('none');
      });
      e.target.style.display = 'none';
    });
  });
});

const deleteList = document.querySelectorAll('.btn-remove');
deleteList.forEach((item) => {
  item.addEventListener('click', (e) => {
    const getRemoved = e.target.parentElement.parentElement.parentElement;
    const listContainer = document.getElementById('list-container');
    const index = parseInt(getRemoved.children[3].textContent, 10);
    myStorage.UpdateMyIndex(index);
    myStorage.removeItem(index - 1);
    listContainer.removeChild(getRemoved);
  });
});
