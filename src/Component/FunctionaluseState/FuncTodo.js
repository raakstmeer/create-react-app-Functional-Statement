import { useState } from 'react';

export default function FuncTodo() {
  const [input, setInput] = useState('');
  const [todo, setTodo] = useState({
    title: '',
    description: '',
  });

  const handleInput = (e) => {
    setInput(e.target.value);
  };

  const { title, description } = todo;

  return (
    <div>
      <h3>Todo by Functional Component</h3>
      <p>{title}</p>
      <p>
        <input
          type="text"
          value={title}
          onChange={(e) => {
            setTodo({
              ...todo,
              title: e.target.value,
            });
          }}
        />
      </p>
      <textarea
        value={description}
        onChange={(e) => {
          setTodo({
            ...todo,
            description: e.target.value,
          });
        }}
      />
      <input type="text" onChange={handleInput} value={input} />
      {/* <p>{warning || 'Good Choose'}</p> */}
    </div>
  );
}
