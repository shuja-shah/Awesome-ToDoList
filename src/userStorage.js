export default class myStorage {
  static getData() {
    let myList;
    if (localStorage.getItem('myList') === null) {
      myList = [];
    } else {
      myList = JSON.parse(localStorage.getItem('myList'));
    }
    return myList;
  }

  static plusPlus(list) {
    const lists = myStorage.getData();
    lists.push(list);
    localStorage.setItem('myList', JSON.stringify(lists));
  }

  static removeItem(index) {
    const lists = myStorage.getData();
    lists.splice(index, 1);
    localStorage.setItem('myList', JSON.stringify(lists));
  }

  static editItem(index, newValue) {
    const lists = myStorage.getData();
    lists.forEach((item) => {
      if (item.index === index) {
        item.description = newValue;
      }
      localStorage.setItem('myList', JSON.stringify(lists));
    });
  }

  static UpdateMyIndex(index) {
    const lists = myStorage.getData();
    const removeList = lists.filter((item) => item.index !== index);
    const newID = [];
    removeList.forEach((el, i) => {
      el.index = i + 1;
      newID.push(el);
    });
    localStorage.setItem('myList', JSON.stringify(lists));
  }

  static checkItem(index) {
    const lists = myStorage.getData();
    lists.forEach((item) => {
      if (item.index === index) {
        item.completed = !item.completed;
      }
      localStorage.setItem('myList', JSON.stringify(lists));
    });
  }

  static clearAllCompleted() {
    const lists = myStorage.getData();
    const newList = lists.filter((item) => item.completed === false);
    localStorage.setItem('myList', JSON.stringify(newList));
  }
}
