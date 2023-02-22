import React from 'react';

const PlusButton = ({ count, increaseCount }) => {
  const handleClick = () => {
    if (count < 10) {
      increaseCount(count + 1);
    }
    else if (count === 10)
    {
      alert("Cannot vote more")
    }
  };

  return (
    <button className="upvote" onClick={handleClick}>
      Click to Vote
    </button>
  );
};

export default PlusButton;