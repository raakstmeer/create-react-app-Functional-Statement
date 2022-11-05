import { useEffect, useRef } from 'react';
import Input from './Input';

export default function Form() {
  const inputRef = useRef();

  useEffect(() => {
    inputRef.current.focus();
  }, []);

  return (
    <div>
      <Input ref={inputRef} type="text" placeholder="write something" />
    </div>
  );
}
