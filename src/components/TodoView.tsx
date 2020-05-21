import React from 'react';
import { observer } from 'mobx-react';

interface Todo {
  task: string;
  completed: boolean;
  assignee?: any;
}

interface Props {
  todo: Todo;
  idx: number;
}

@observer
class TodoView extends React.Component<Props> {
  render() {
    const { completed, task, assignee } = this.props.todo

    return <li onDoubleClick={this.onRename}>
      <input
        type='checkbox'
        checked={completed}
        onChange={this.onToggleCompleted}
      />
      {task}
      {assignee
        ? <small>{assignee.name}</small>
        : null
      }
    </li>
  }

  onToggleCompleted = () => {
    const todo = this.props.todo;
    todo.completed = !todo.completed;
  }

  onRename = () => {
    const todo = this.props.todo;
    todo.task = prompt('Task name', todo.task) || todo.task;
  }
}

export default TodoView;