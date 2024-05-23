import { Link } from "react-router-dom"
import styles from "./Sidebar.module.scss"
import Context from "../../context/Context"
import { useContext } from "react"



function Sidebar() {

    const { isNavOpen } = useContext(Context)



    return (
        <nav className={`${styles["navigator"]} ${isNavOpen === false ? styles["navigator--open"] : ""}`}>
            <Link id={styles["home"]} to="home">
                <img src="/home.svg" alt="Home" />
                <span>Главаня</span>
            </Link>
            <Link id={styles["shorts"]} to="shorts">
                <img src="/iconshape.svg" alt="Shorts" />
                <span>Shorts</span>
            </Link>
            <Link id={styles["subscriptions"]} to="subscriptions">
                <img src="/subscription.svg" alt="Subscriptions" />
                <span>Подписки</span>
            </Link>
        </nav>
    )
}

export default Sidebar