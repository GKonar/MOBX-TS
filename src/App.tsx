import React from 'react';
import { observer } from 'mobx-react';
import TodoList from './components/TodoList';
import { TodosProvider } from './context/TodoContext';

import './App.css';


const App: React.FC = () => {
  return (
    <TodosProvider>
      <div className="App">
        <h1>mobXtreme</h1>
        <TodoList />
      </div>
    </TodosProvider>

  );
}

export default observer(App);
