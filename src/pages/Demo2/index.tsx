import React, { useCallback, useReducer } from 'react';

const INCREMENT_COUNT = 'INCREMENT_COUNT';
const DECREMENT_COUNT = 'DECREMENT_COUNT';
interface IState {
  count: number;
}
interface IAction {
  type: typeof INCREMENT_COUNT | typeof DECREMENT_COUNT;
}
const reducer = (state: IState, action: IAction) => {
  switch (action.type) {
    case INCREMENT_COUNT:
      return {
        ...state,
        count: state.count + 1,
      };
    case DECREMENT_COUNT:
      return {
        ...state,
        count: state.count - 1,
      };
    default:
      return state;
  }
};
const initialState = 0;
const init = (initialState: number) => {
  return {
    count: initialState,
  };
};
const Demo2: React.FC = () => {
  const [state, dispatch] = useReducer(reducer, initialState, init);
  const { count } = state;
  const incrementCount = useCallback(() => {
    dispatch({
      type: INCREMENT_COUNT,
    });
  }, []);
  const decrementCount = useCallback(() => {
    dispatch({
      type: DECREMENT_COUNT,
    });
  }, []);
  return (
    <>
      <h2>useReducer</h2>
      <p>{count}</p>
      <button onClick={incrementCount}>+</button>
      <button onClick={decrementCount}>-</button>
    </>
  );
};

export default Demo2;
