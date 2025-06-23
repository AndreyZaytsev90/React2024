import React, {memo} from 'react';
import {technologies} from "../App.jsx"; // Не забудьте импортировать React

export const WantToLearn = memo(({ways}) => {
    return (
        <ul>
            {/*  {technologies.map((item, index) => ( // Добавлен index как key
                <li key={index}>
                    <p>
                        <strong>{item.name}.</strong> {item.other}
                    </p>
                </li>
            ))}*/}
            {ways.map((item, index) => ( // Добавлен index как key
                <li key={index} className="p-4 mb-4 border-1 border-sky-500 rounded-sm bg-red-100 ">
                    <p>
                        <strong>{item.title}.</strong> {item.description}
                    </p>
                </li>
            ))}
        </ul>
    )
})