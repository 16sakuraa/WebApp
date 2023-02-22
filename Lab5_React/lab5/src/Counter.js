import React from 'react';

const Counter = ({ count }) => {

  let countText;
  if (count === 0) {
    countText = 'MIN';
  } else if (count === 10) {
    countText = 'MAX';
  } else if (count >= 1 && count <= 9) {
    countText = count;
  }

  return (
    <div className='boxCount'>
      <p>
      {countText}
      </p>
    </div>
  );
};

export default Counter;