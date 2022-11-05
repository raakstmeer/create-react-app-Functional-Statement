/* eslint-disable import/no-cycle */
/* eslint-disable react/jsx-no-constructed-context-values */
import React, { useReducer } from 'react';
import ComponentA from './ComponentA';

const initialState = 0;
export const CounterContext = React.createContext();

const reduce = (state, action) => {
  switch (action) {
    case 'increment':
      return state + 1;
    case 'drcrement':
      return state - 1;
    default:
      return state;
  }
};

function Apps() {
  const [count, dispatch] = useReducer(reduce, initialState);

  return (
    <div>
      <h2>Count : {count}</h2>
      <CounterContext.Provider value={{ dispatch }}>
        <ComponentA />
      </CounterContext.Provider>
    </div>
  );
}

export default Apps;
