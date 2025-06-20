import logo from '/logo-name.svg'
import {useEffect, useState} from "react";

const Header = () => {
    const [date, setDate] = useState(new Date())
    const sec = new Date().getSeconds()

    useEffect(()=> {
        setInterval(()=> setDate(date), 1000)
    }, [])


    return (
        <header>
            <img src={logo} alt="logo"/>
            {/*<span>Time {now.toLocaleTimeString()}</span>*/}
            <span>Time {date.toLocaleTimeString()}</span>
        </header>
    )
}

export default Header