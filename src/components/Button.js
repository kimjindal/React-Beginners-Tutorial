import React from 'react';

export default function Button({ value, clickHandler }) {
    return <span onClick={clickHandler}>{value}</span>;
}
