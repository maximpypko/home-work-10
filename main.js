var list = {
    _archive: [
        {
      text: 'Сходить в магазин',
      condition: false,
      id: Date.now(),
        },
        {
      text: 'Купить воду',
      condition: false,
      id: Date.now(),
        },
        {
      text: 'Сделать домашку',
      condition: false,
      id: Date.now(),
        },
    ],
    addTask(text) { 
        var newTask = {
            text: text,
            condition: false, //я так понимаю, что должен быть по умолчанию false, т.к. это новая заметка и она по умолчанию не выполнена
            id: Date.now(),
        }
        this.archive.push(newTask);     
    },
    deleteTask(id) {
        for (var i = 0; i < this.archive.length; i++) {
            if (id === this.archive[i].id) {
                this.archive.splice(i, 1);
                return this.archive[i];
            }
        }
    },
    updateTask(text, id) { 
        for (var i = 0; i < this.archive.length; i++) {
            if (id === this.archive[i].id) {
                this.archive[i].text = text;
                return this.archive[i];
            }
        }
    },
    conditionTask(id) {
        for (var i = 0; i < this.archive.length; i++) {
            if (id === this.archive[i].id) {
                this.archive[i].condition = !this.archive[i].condition;
                return this.archive[i];
            }
        }
    },
    get archive() {
        return this._archive;
    },
}
console.log(list);
// list.addTask('Сходить на занятие');
// list.deleteTask(Date.now());
// list.updateTask('Помочь соседу', Date.now());
// list.conditionTask(Date.now());
console.log(list);

Object.defineProperties(list, {
    _archive: {configurable: false,},
    addTask: {configurable: false,},
    deleteTask: {configurable: false,},
    updateTask: {configurable: false,},
    conditionTask: {configurable: false,},
})

Object.freeze(list);


//не понял как работает для проверки Date.now(), я использовал для проверки работоспособности методов комбинации чисел.








