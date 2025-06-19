import React from 'react';

const Button = ({style, btnName}) => {
    return (
        <button className={style}>
            {btnName}
        </button>
    );
};

export default Button;