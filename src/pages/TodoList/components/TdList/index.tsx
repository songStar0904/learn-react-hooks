import React from 'react';
import { ITodo } from '../../typings';
import Item from './item';

interface IProps {
  todoList: ITodo[];
  toggleTodo: (id: number) => void;
  removeTodo: (id: number) => void;
}

const TdList: React.FC<IProps> = ({ todoList, toggleTodo, removeTodo }) => {
  return (
    <div className="td-list">
      {todoList &&
        todoList.map((todo: ITodo) => (
          <Item
            key={todo.id}
            item={todo}
            toggleTodo={toggleTodo}
            removeTodo={removeTodo}
          ></Item>
        ))}
    </div>
  );
};

export default TdList;
