import React from 'react';

export default function Box(props) {
  /*
  const [on, onSet] = React.useState(props.on);

  function toggle() {
    onSet((prevOn) => !prevOn);
  }
*/
  const styles = {
    backgroundColor: props.on ? '#222222' : 'transparent',
  };

  return (
    <div onClick={props.toggle} style={styles} className="box">
      {props.on.toString()}
    </div>
  );
}
