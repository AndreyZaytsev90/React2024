import React from 'react';
import {WantToLearn} from "./wantToLearn.jsx";
import {ways} from "../data.js";

export const TeachingSection = () => {
    return (
        <section>
            <h3>Необходимо выучить</h3>
            <WantToLearn ways={ways}/>
        </section>
    );
};
