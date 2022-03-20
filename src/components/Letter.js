import React from 'react';

export default function Letter({ alphabet, isShown }) {
    const displayAlphabet = isShown ? alphabet : ' ';
    return <span>{displayAlphabet}</span>;
}
