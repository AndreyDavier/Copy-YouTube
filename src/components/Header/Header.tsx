import Button from "../Button/Button"
import styles from "./Header.module.scss"
import Input from "../Input/Input"
import Creation from "../Svg/Creation"
import { Link } from "react-router-dom"
import { useContext } from "react"
import Context from "../../context/Context"



function Header() {
    const { navOpen, isNavOpen } = useContext(Context)

    return (
        <div id={styles["container"]}>
            <div id={styles["start"]}>
                <Button onClick={() => navOpen(!isNavOpen)} className={styles["header-button_small"]}>
                    <img src="/sideBar.svg" alt="" />
                </Button>
                <Link to={`/home`} className={styles["header-logo"]}>
                    <img src="/YuoTubeLogo.svg" alt="" />
                </Link>
            </div>
            <div id={styles["center"]}>
                <form id={styles["search-form"]}>
                    <img className={styles["header-form_search"]} src="/iconlegacy.svg" alt="" />
                    <Input placeholder={"Введите запрос"} className={styles["header-search_input"]}></Input>
                    <img className={styles["header-from_tia-icon"]} src="/tia.png" alt="" width={19} height={11} />
                </form>
                <Button className={styles["icon-legacy"]}>
                    <img src="/iconlegacy.svg" alt="" />
                </Button>
                <div id={styles["voice-search-button"]}>
                    <Button>
                        <img src="/voice.svg" alt="" />
                    </Button>
                </div>
            </div>
            <div id={styles["end"]}>
                <Button className={styles["header-button_small"]}>
                    <Creation />
                </Button>

                <Button>
                    <img src="/notification.svg" alt="" />
                </Button>

                <Button>
                    <img id="img" alt="Фото профиля" height="32" width="32" src="" />
                </Button>
            </div>
        </div >
    )
}

export default Header