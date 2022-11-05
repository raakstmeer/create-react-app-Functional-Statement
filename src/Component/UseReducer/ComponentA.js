/* eslint-disable import/no-cycle */
import ComponentB from './ComponentB';

export default function ComponentA() {
  return (
    <div>
      <h2>This is a component A</h2>
      <ComponentB />
    </div>
  );
}
