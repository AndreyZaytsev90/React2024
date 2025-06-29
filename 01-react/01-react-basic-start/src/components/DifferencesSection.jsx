import React, {useState} from 'react';
import Button from "./Button.jsx";
import {differences} from "../data.js";

export const DifferencesSection = () => {

    const [content, setContent] = useState('');
    const [isActive, setIsActive] = useState(null);

    return (
        <section className="mt-4">
            <h3>Чем мы отличаемся от других</h3>
            <Button
                style={`mr-8 mt-4 ${isActive === 'way' ? 'bg-red-100' : 'bg-slate-200'} rounded-md w-50`}
                btnName={"Подход"}
                callBack={() => {
                    setContent(differences.way);
                    setIsActive('way');
                }}
            />
            <Button
                style={`mr-8 mt-4 ${isActive === 'easy' ? 'bg-red-100' : 'bg-slate-200'}  rounded-md w-50`}
                btnName={"Доступность"}
                callBack={() => {
                    setContent(differences.easy);
                    setIsActive('easy');
                }}
            />
            <Button
                style={`mr-8 mt-4 ${isActive === 'program' ? 'bg-red-100' : 'bg-slate-200'}  rounded-md w-50`}
                btnName={"Концентрация"}
                callBack={() => {
                    setContent(differences.program);
                    setIsActive('program');
                }}
            />
            {!content && <p className="mt-4">Нажми кнопку</p>}
            {content && <p className="mt-4">{content}</p>}
        </section>
    );
};
