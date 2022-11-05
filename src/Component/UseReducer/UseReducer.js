/* eslint-disable import/no-cycle */
import { useContext } from 'react';
import { CounterContext } from './Apps';

export default function UseReducer() {
  const CountContext = useContext(CounterContext);
  return (
    <div>
      <button type="button" onClick={() => CountContext.dispatch('increment')}>
        Increment
      </button>
      <button type="button" onClick={() => CountContext.dispatch('drcrement')}>
        Decrement
      </button>
    </div>
  );
}
