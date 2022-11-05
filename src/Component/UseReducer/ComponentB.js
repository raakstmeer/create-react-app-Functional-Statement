/* eslint-disable import/no-cycle */
import UseReducer from './UseReducer';

export default function ComponentB() {
  return (
    <div>
      <h2>This is a component B</h2>
      <UseReducer />
    </div>
  );
}
