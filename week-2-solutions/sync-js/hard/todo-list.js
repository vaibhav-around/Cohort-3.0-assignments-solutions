/*
  Implement a class `Todo` having below methods
    - add(todo): adds todo to list of todos
    - remove(indexOfTodo): remove todo from list of todos
    - update(index, updatedTodo): update todo at given index
    - getAll: returns all todos
    - get(indexOfTodo): returns todo at given index
    - clear: deletes all todos

  Once you've implemented the logic, test your code by running
*/

class Todo {

  constructor(){
    this.todo = [];
  }

  add(item){
    if(typeof(item) != "string"){
      return
    }
    this.todo.push(item);
  }

  remove(itemIndex){
    if(typeof(itemIndex) != "number"){
      return
    }
    this.todo.splice(itemIndex,1);
  }

  update(index, item){
    if(typeof(index) != "number" || typeof(item) != "string" || index < 0 || index > this.todo.length - 1){
      return 
    }
    this.todo[index] = item;
  }

  getAll(){
    return this.todo;
  }
  
  get(itemIndex){
    if(typeof(itemIndex) != "number" || itemIndex < 0 || itemIndex > this.todo.length - 1){
      return null
    }
    return this.todo[itemIndex];
  }

  clear(){
    this.todo = [];
  }

}

