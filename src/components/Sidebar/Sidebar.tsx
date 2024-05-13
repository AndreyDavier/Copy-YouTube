import { Link } from "react-router-dom"


function Sidebar() {
    return (
        <nav className="navigartor">
            <Link to="home">Главная</Link>
            <Link to="shorts">Shorts</Link>
            <Link to="subscriptions">подписки</Link>
        </nav>
    )
}

export default Sidebar