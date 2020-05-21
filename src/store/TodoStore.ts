import { observable, computed, action } from 'mobx';

interface TodoItem {
  task: string;
  completed: boolean;
  assignee?: any;
}

class ObservableTodoStore {
  @observable todos: Array<TodoItem> = [{ task: 'Walk the dog', completed: false }, { task: 'Play with Your boy', completed: false }];
  @observable pendingRequests: number = 0;

  @computed get completedTodosCount() {
    return this.todos.filter(
      todo => todo.completed === true
    ).length;
  }

  @computed get report() {
    if (this.todos.length === 0)
      return "<none>";
    const nextTodo = this.todos.find(todo => todo.completed === false);
    return `Next todo: "${nextTodo ? nextTodo.task : "<none>"}". ` +
      `Progress: ${this.completedTodosCount}/${this.todos.length}`;
  }

  @action
  addTodo(task: string) {
    this.todos.push({
      task: task,
      completed: false,
      assignee: null
    });
  }
}


export const store = new ObservableTodoStore();
