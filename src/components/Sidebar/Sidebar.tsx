import { Link } from "react-router-dom"
import styles from "./Sidebar.module.scss"


function Sidebar() {
    return (
        <nav className={styles["navigator"]}>
            <Link id={styles["home"]} to="home">
                <img src="/home.svg" alt="" />
                <span>Главаня</span>
            </Link>
            <Link id={styles["shorts"]} to="shorts">
                <img src="" alt="" />
                <span>Shorts</span>
            </Link>
            <Link id={styles["subscriptions"]} to="subscriptions">
                <img src="" alt="" />
                <span>подписки</span>
            </Link>
        </nav>
    )
}

export default Sidebar