import React from 'react';

function ShowCount({ title, count }) {
  console.log(`${title} rendering...`);
  return (
    <p>
      {title} is {count}
    </p>
  );
}

export default React.memo(ShowCount);
