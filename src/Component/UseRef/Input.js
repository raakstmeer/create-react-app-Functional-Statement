import React, { useState } from 'react';

function Input({ type, placeholder }, ref) {
  const [text, setText] = useState('');

  const handleInput = (e) => {
    setText(e.target.value);
  };

  return (
    <div>
      <input ref={ref} value={text} onChange={handleInput} type={type} placeholder={placeholder} />
    </div>
  );
}

const forwardedInput = React.forwardRef(Input);

export default forwardedInput;
