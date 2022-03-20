import React from 'react';
import Letter from './Letter';

export default function LetterGrid({ secretWord, guessWord }) {
    const letters = secretWord.split('');

    const spanLetters = letters.map((letter, index) => {
        const isShown = guessWord.indexOf(letter) > -1 ? true : false;
        return <Letter key={index} alphabet={letter} isShown={isShown} />;
    });

    return (
        <>
            <p>Fill in the secret word.</p>
            <div className="letter-grid">{spanLetters}</div>
        </>
    );
}
