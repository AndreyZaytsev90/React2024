import React from 'react';
import Button from "./Button.jsx";

const TabsSection = ({setIsMainSection}) => {
    return (
        <section className="pb-4">
            <Button
                btnName="Главная"
                style={"bg-green-300 hover:bg-green-200 mr-4 rounded-md p-4"}
                callBack={() => setIsMainSection(true)}/>
            <Button
                btnName="Обратная связь"
                style={"bg-green-300 hover:bg-green-200 rounded-md p-4"}
                callBack={() => setIsMainSection(false)}
            />
        </section>
    );
};

export default TabsSection;