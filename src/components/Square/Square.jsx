import React from 'react';

const Square = function ({ value, onClick }) {
    return (
        <button
            className='square'
            onClick={onClick}
        >
            {value}
        </button>
    );
};

export default Square;
