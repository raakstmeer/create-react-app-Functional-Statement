import { useEffect, useState } from 'react';

export default function FuncuseEffect() {
  const [count, setCount] = useState(0);
  const [date, setDate] = useState(new Date());

  const tick = () => {
    console.log('Clocking Ticking');
    setDate(new Date());
  };
  const addClick = () => {
    setCount((prevState) => prevState + 1);
  };
  useEffect(() => {
    console.log('count updated');
    document.title = `Clicked ${count} times`;
  }, [count]);

  useEffect(() => {
    console.log('Time Starting');
    const interval = setInterval(tick, 1000);
    // component Unmount and stop clock -- like => componentWillUnMount
    return () => {
      clearInterval(interval);
    };
  }, []);
  return (
    <div>
      <h3>Time: {date.toLocaleTimeString()}</h3>
      <button type="button" onClick={addClick}>
        Add 1
      </button>
    </div>
  );
}
