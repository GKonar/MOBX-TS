import React from 'react';
import { observer } from 'mobx-react';
import { TodoContext } from '../context/TodoContext'
import TodoView from './TodoView';

interface Todo {
  task: string;
  completed: boolean;
  assignee?: any;
}

// VIEW

@observer
class TodoList extends React.Component {
  static contextType = TodoContext;
  render() {
    const store = this.context;
    return (
      <div>
        {store.report}
        <ul>
          {store.todos.map(
            (todo: Todo, idx: number) => <TodoView todo={todo} idx={idx} key={idx} />
          )}
        </ul>
        {store.pendingRequests > 0 ? <h2>Loading...</h2> : null}
        <button onClick={this.onNewTodo}>New Todo</button>
        <small> (double-click a todo to edit)</small>
      </div>
    );
  }

  onNewTodo = () => {
    this.context.addTodo(prompt('Enter a new todo:', 'coffee plz'));
  }
}

export default TodoList;