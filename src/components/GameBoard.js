import React, { useState } from 'react';
import LetterGrid from './LetterGrid';
import ButtonGrid from './ButtonGrid';

export default function GameBoard({ secretWord }) {
    const [clickedLetters, setClickedLetters] = useState([]);
    const [chance, setChance] = useState(secretWord.length);
    const [correct, setCorrect] = useState(0);

    function clickHandler(event) {
        const letter = event.target.innerText;
        setClickedLetters(prevClickedLetters => [
            ...prevClickedLetters,
            letter,
        ]);

        const correctClick = secretWord.indexOf(letter) > -1 ? 1 : 0;
        setCorrect(prevCorrect => prevCorrect + correctClick);

        const wrongClick = secretWord.indexOf(letter) === -1 ? 1 : 0;
        setChance(prevChance => prevChance - wrongClick);
    }

    return (
        <div>
            <LetterGrid secretWord={secretWord} guessWord={clickedLetters} />
            {chance > 0 ? (
                <p>Number of chance remaining : {chance}</p>
            ) : (
                <p>I'm sorry but you lost.</p>
            )}
            {correct === secretWord.length && <h2>You are Win!</h2>}
            {chance > 0 && correct !== secretWord.length && (
                <ButtonGrid
                    guessWord={clickedLetters}
                    clickHandler={clickHandler}
                />
            )}
        </div>
    );
}
