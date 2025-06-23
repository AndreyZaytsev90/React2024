import logo from '/logo-name.svg'
import { memo, useEffect, useState } from "react";

const Header = memo(() => {  // memo уже применяется, но можно явно указать
    const [date, setDate] = useState(new Date());

    useEffect(() => {
        const interval = setInterval(() => {
            setDate(new Date());
        }, 1000);

        return () => clearInterval(interval);
    }, []);

    return (
        <header>
            <img src={logo} alt="logo" />
            <span>Time {date.toLocaleTimeString()}</span>
        </header>
    );
});

export default Header;