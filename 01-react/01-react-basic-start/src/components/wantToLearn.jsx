import React from 'react';
import {technologies} from "../App.jsx"; // Не забудьте импортировать React

export function WantToLearn({ways}) {
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
                <li key={index}>
                    <p>
                        <strong>{item.title}.</strong> {item.description}
                    </p>
                </li>
            ))}
        </ul>
    )
}