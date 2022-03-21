import React from 'react';

export default function SecretWord({
    secretWord,
    changeHandler,
    keyUpHandler,
    clickHandler,
}) {
    return (
        <>
            <p>Do you want to play game?</p>
            <div className="form">
                <input
                    type="text"
                    value={secretWord}
                    onChange={changeHandler}
                    onKeyUp={keyUpHandler}
                    name="word"
                    placeholder="Enter a secret word"
                />
                <button onClick={clickHandler}>Start</button>
            </div>
        </>
    );
}
