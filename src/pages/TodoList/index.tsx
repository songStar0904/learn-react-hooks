import React, { useCallback, useEffect, useReducer } from 'react';
import TdInput from './components/TdInput';
import TdList from './components/TdList';
import { todoReducer } from './reducer';
import { ACTION_TYPE, IState, ITodo } from './typings';

const init = (): IState => {
  return {
    todoList: [],
  };
};

const TodoList: React.FC = () => {
  const [state, dispatch] = useReducer(todoReducer, [], init);
  useEffect(() => {
    const todoList = JSON.parse(localStorage.getItem('todolist') || '[]');
    dispatch({
      type: ACTION_TYPE.INIT_TODOLIST,
      payload: todoList,
    });
  }, []);
  useEffect(() => {
    console.log(state.todoList);
    localStorage.setItem('todolist', JSON.stringify(state.todoList));
  }, [state.todoList]);
  const addTodo = useCallback((todo: ITodo): void => {
    dispatch({
      type: ACTION_TYPE.ADD_TODO,
      payload: todo,
    });
  }, []);
  const toggleTodo = useCallback((id: number): void => {
    dispatch({
      type: ACTION_TYPE.TOGGLE_TODO,
      payload: id,
    });
  }, []);
  const removeTodo = useCallback((id: number): void => {
    dispatch({
      type: ACTION_TYPE.REMOVE_TODO,
      payload: id,
    });
  }, []);
  return (
    <div className="todo-list">
      <TdInput todoList={state.todoList} addTodo={addTodo}></TdInput>
      <TdList
        todoList={state.todoList}
        toggleTodo={toggleTodo}
        removeTodo={removeTodo}
      ></TdList>
    </div>
  );
};

export default TodoList;
