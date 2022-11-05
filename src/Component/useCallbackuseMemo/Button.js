import React from 'react';

function Button({ handleButton, children }) {
  console.log(`Button rendaring ${children}...`);
  return (
    <button type="button" onClick={handleButton}>
      {children}
    </button>
  );
}

export default React.memo(Button);
