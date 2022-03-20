import React from 'react';
import Button from './Button';

export default function ButtonGrid({ guessWord, clickHandler }) {
    const letters = [
        'A',
        'B',
        'C',
        'D',
        'E',
        'F',
        'G',
        'H',
        'I',
        'J',
        'K',
        'L',
        'M',
        'N',
        'O',
        'P',
        'Q',
        'R',
        'S',
        'T',
        'U',
        'V',
        'W',
        'X',
        'Y',
        'Z',
    ];

    const newLetters = letters.map(letter =>
        guessWord.indexOf(letter) > -1 ? '' : letter
    );

    const buttons = newLetters
        .filter(letter => letter.length > 0)
        .map((letter, index) => (
            <Button key={index} value={letter} clickHandler={clickHandler} />
        ));

    return <div className="button-grid">{buttons}</div>;
}
