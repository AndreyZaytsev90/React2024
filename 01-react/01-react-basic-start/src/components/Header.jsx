import logo from '/logo-name.svg'

const Header = () => {
    const now = new Date();
    return (
        <header>
            <img src={logo} alt="logo"/>
            <span>Time {now.toLocaleTimeString()}</span>
        </header>
    )
}

export default Header