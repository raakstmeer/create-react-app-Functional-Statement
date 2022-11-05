import { useEffect, useRef, useState } from 'react';

export default function Time() {
  const [date, setDate] = useState(new Date());
  const buttonRef = useRef();

  const tick = () => {
    console.log('Clock Ticking');
    setDate(new Date());
  };

  useEffect(() => {
    buttonRef.current = setInterval(tick, 1000);
    // return function use means when component unmount then stop clock
    return () => {
      clearInterval(buttonRef.current);
    };
  }, []);

  return (
    <div>
      <h2>Time : {date.toLocaleTimeString()}</h2>
      <button type="button" onClick={() => clearInterval(buttonRef.current)}>
        Clearup
      </button>
    </div>
  );
}
