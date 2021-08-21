import { ACTION_TYPE, IAction, IState, ITodo } from "./typings"

const todoReducer = (state: IState, action: IAction): IState => {
  switch (action.type) {
    case ACTION_TYPE.INIT_TODOLIST:
      return {
        ...state,
        todoList: action.payload as ITodo[]
      }
    case ACTION_TYPE.ADD_TODO:
      return {
        ...state,
        todoList: [...state.todoList, action.payload as ITodo]
      }
    case ACTION_TYPE.REMOVE_TODO:
      return {
        ...state,
        todoList: state.todoList.filter(todo => todo.id !== action.payload as number)
      }
    case ACTION_TYPE.TOGGLE_TODO:
      return {
        ...state,
        todoList: state.todoList.map(todo => {
          if (todo.id === action.payload as number) {
            todo.templated = !todo.templated;
          }
          return todo;
        })
      }
    default:
      return state;
  }
}

export {
  todoReducer
}
