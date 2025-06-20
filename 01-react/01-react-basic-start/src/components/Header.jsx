import logo from '/logo-name.svg'
import {memo, useEffect, useState} from "react";

const Header = () => {
    const [date, setDate] = useState(new Date())

    useEffect(() => {
        const interval = setInterval(() => {
            setDate(new Date()); // Используем функциональное обновление
        }, 1000);

        return () => clearInterval(interval);
    }, []); // Интервал создаётся только один раз


    return (
        <header>
            <img src={logo} alt="logo"/>
            {/*<span>Time {now.toLocaleTimeString()}</span>*/}
            <span>Time {date.toLocaleTimeString()}</span>
        </header>
    )
}

export default memo(Header)