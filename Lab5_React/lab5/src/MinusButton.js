import React from 'react';

const MinusButton = ({ count, decreaseCount }) => {
  const handleClick = () => {
    if (count > 0) {
      decreaseCount(count - 1);
    }
    else if (count === 0)
    {
      alert("Cannot Unvote")
    }
  };

  return (
    <button className="downvote" onClick={handleClick}>
      Click to Unvote
    </button>
  );
};

export default MinusButton;