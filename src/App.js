import React, { useState } from 'react';
import GameBoard from './components/GameBoard';
import SecretWord from './components/SecretWord';

export default function App() {
    const [secretWord, setSecretWord] = useState('');
    const [start, setStart] = useState(false);

    function changeHandler(e) {
        setSecretWord(prevSecretWord => (prevSecretWord = e.target.value));
    }

    function keyUpHandler(e) {
        if (e.keyCode === 13) clickHandler();
    }

    function clickHandler() {
        setStart(prevStart => !prevStart);
    }

    return (
        <div>
            <h1>Welcome to Hangman!</h1>
            {!start ? (
                <SecretWord
                    secretWord={secretWord}
                    changeHandler={changeHandler}
                    keyUpHandler={keyUpHandler}
                    clickHandler={clickHandler}
                />
            ) : (
                <GameBoard secretWord={secretWord.toUpperCase()} />
            )}
        </div>
    );
}
