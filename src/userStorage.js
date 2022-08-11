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

  static updateItem(index, list) {
    const lists = myStorage.getData();
    lists[index] = list;
    localStorage.setItem('myList', JSON.stringify(lists));
  }
}
