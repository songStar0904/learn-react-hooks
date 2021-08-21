import React from 'react';
import { ITodo } from '../../typings';

interface IProps {
  item: ITodo;
  toggleTodo: (id: number) => void;
  removeTodo: (id: number) => void;
}

const Item: React.FC<IProps> = ({ item, toggleTodo, removeTodo }) => {
  const { id, context, templated } = item;
  return (
    <div className="td-item">
      <input
        type="checkbox"
        checked={templated}
        onChange={() => toggleTodo(id)}
      />
      <span style={{ textDecoration: templated ? 'line-through' : 'none' }}>
        {context}
      </span>
      <button onClick={() => removeTodo(id)}>删除</button>
    </div>
  );
};

export default Item;
