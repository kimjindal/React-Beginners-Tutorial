import React, { useState } from 'react';
import GameBoard from './components/GameBoard';
import SecretWord from './components/SecretWord';

export default function App() {
    const [secretWord, setSecretWord] = useState('');
    const [start, setStart] = useState(false);

    function changeHandler(e) {
        setSecretWord(prevSecretWord => e.target.value);
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
                    clickHandler={clickHandler}
                />
            ) : (
                <GameBoard secretWord={secretWord.toUpperCase()} />
            )}
        </div>
    );
}
