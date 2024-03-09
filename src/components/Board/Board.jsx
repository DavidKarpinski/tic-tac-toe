import React, { useState } from 'react';
import Square from '../Square/Square';

export default function Board() {
    const [xIsNext, setXIsNext] = useState(true);
    const [squareStates, setSquareStates] = useState(Array(9).fill(null));

    const handleSquareClick = index => {
        if (squareStates[index] || calculateWinner(squareStates)) { return }

        if (squareStates[index] === null) {
            setSquareStates(prevSquareStates => {
                const newSquareStates = [...prevSquareStates];
                newSquareStates[index] = xIsNext ? 'X' : 'O';
                setXIsNext(!xIsNext);
                return newSquareStates;
            });
        }
    };

    const renderSquare = (index) => {
        return (
            <Square
                value={squareStates[index]}
                onClick={() => handleSquareClick(index)}
            />
        );
    };

    return (
        <div id='board' className='board'>
            {renderSquare(0)}
            {renderSquare(1)}
            {renderSquare(2)}
            {renderSquare(3)}
            {renderSquare(4)}
            {renderSquare(5)}
            {renderSquare(6)}
            {renderSquare(7)}
            {renderSquare(8)}
        </div>
    );
};

const calculateWinner = function (squares) {
    const lines = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6]
    ]

    for (let i = 0; i < lines.length; i++) {
        const [a, b, c] = lines[i]
        if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) { return squares[a] }
        return null
    }
}