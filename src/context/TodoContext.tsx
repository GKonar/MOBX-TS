import React from 'react';
import { store } from '../store/TodoStore';

export const TodoContext = React.createContext<React.ReactNode | undefined>(undefined);

type Props = {
  children: React.ReactNode
};

export const TodosProvider = ({ children }: Props) => {
  return (
    <TodoContext.Provider value={store}>
      {children}
    </TodoContext.Provider>
  )
}

