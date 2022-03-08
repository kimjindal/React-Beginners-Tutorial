import React from 'react';

export default function Star(props) {
  const starIcon = props.isFilled ? 'star-filled.png' : 'star-empty.png';

  return (
    <img
      onClick={props.handleClick}
      className="card--favorite"
      src={`images/${starIcon}`}
      alt="star"
    />
  );
}
