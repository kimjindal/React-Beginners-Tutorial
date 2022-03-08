import React from 'react';
import boxes from './boxes';
import Box from './components/Box';

export default function App() {
  const [squares, setSquares] = React.useState(boxes);

  console.log('App rendered', squares);

  function toggle(id) {
    setSquares((prevSquares) => {
      /*
      const newSquares = [];
      for (let i = 0; i < prevSquares.length; i++) {
        if (prevSquares[i].id === id) {
          newSquares.push({
            ...prevSquares[i],
            on: !prevSquares[i].on,
          });
        } else {
          newSquares.push(prevSquares[i]);
        }
      }
      return newSquares;
*/
      return prevSquares.map((square) => {
        return square.id === id ? { ...square, on: !square.on } : square;
      });
    });
  }

  const squareElements = squares.map((square) => (
    <Box
      key={square.id}
      id={square.id}
      on={square.on}
      toggle={() => toggle(square.id)}
    />
  ));

  return <main>{squareElements}</main>;
}
