import React from 'react';

/*const IntroSection = () => {
    return (
        <section>
            <h1 className="text-center text-fuchsia-500">Андрей Зайцев</h1>
            <h3 className="text-center text-fuchsia-500">город Москва</h3>
        </section>
    );
};

export default IntroSection;*/

export default function IntroSection() {
    return (
        React.createElement('section', null,
            [
                React.createElement(
                    "h1",
                    {className: "text-center text-fuchsia-500"},
                    "Андрей Зайцев")],
            React.createElement(
                "h3",
                {className: "text-center text-fuchsia-500"},
                "город Москва")
        ))
}