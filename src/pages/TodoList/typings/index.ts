export interface ITodo {
  id: number
  context: string
  templated: boolean
}

export interface IState {
  todoList: ITodo[]
}

export interface IAction {
  type: ACTION_TYPE,
  payload: ITodo | ITodo[] | number
}

export enum ACTION_TYPE {
  INIT_TODOLIST = 'INIT_TODOLIST',
  ADD_TODO = 'ADD_TODO',
  REMOVE_TODO = 'REMOVE_TODO',
  TOGGLE_TODO = 'TOGGLE_TODO'
}
