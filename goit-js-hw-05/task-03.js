// Добавь методы класса:

// getItems() - возвращает массив текущих товаров
// addItem(item) - получает новый товар и добавляет его к текущим
// removeItem(item) - получет товар и, если он есть, удаляет его из текущих

class Storage {
  constructor(items) {
    this.items = items;
  }

  getItems() {
    return this.items;
  }
  addItem(item) {
    this.items.push(item);
  }

  removeItem(item) {
    let index = this.items.indexOf(item);
    if (index != -1) {
      this.items.splice(index, 1);
    }
  }
}

const storage = new Storage([
  'Нанитоиды',
  'Пролонгер',
  'Железные жупи',
  'Антигравитатор',
]);

const items = storage.getItems();
console.log(items); // [ "Нанитоиды", "Пролонгер", "Железные жупи", "Антигравитатор" ]

storage.addItem('Дроид');
console.log(storage.items); // [ "Нанитоиды", "Пролонгер", "Железные жупи", "Антигравитатор", "Дроид" ]

storage.removeItem('Пролонгер');
console.log(storage.items); // [ "Нанитоиды", "Железные жупи", "Антигравитатор", "Дроид" ]

console.log('==========================================');
