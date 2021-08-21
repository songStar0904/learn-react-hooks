import React, { useRef } from 'react';
import { ITodo } from '../../typings';

interface IProps {
  addTodo: (todo: ITodo) => void;
  todoList: ITodo[];
}

const Tdnput: React.FC<IProps> = ({ addTodo, todoList }) => {
  const inputRef = useRef<HTMLInputElement>(null);
  const addItem = () => {
    const val = inputRef.current!.value.trim();
    if (val.length > 0) {
      const isExist = todoList.find(todo => todo.context === val);
      if (isExist) {
        alert('当前代办事宜已存在！');
        return;
      }
      addTodo({
        id: new Date().getTime(),
        context: val,
        templated: false,
      });
      inputRef.current!.value = '';
    }
  };
  return (
    <div className="td-input">
      <input type="text" placeholder="请输入代办事宜" ref={inputRef} />
      <button onClick={addItem}>添加</button>
    </div>
  );
};

export default Tdnput;
