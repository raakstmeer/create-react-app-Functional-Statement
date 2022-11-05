import React from 'react';

function Title() {
  console.log('Title renderaing...');
  return (
    <div>
      <h2>useCallback & useMemo hook and function</h2>
    </div>
  );
}

export default React.memo(Title);
