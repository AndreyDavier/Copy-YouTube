import Button from "../Button/Button"
import styles from "./Header.module.scss"
import Input from "../Input/Input"
import Creation from "../Svg/Creation"




function Header() {
    return (
        <div id={styles["container"]}>
            <div id="start">
                <Button className={styles["header-button_small"]}>
                    <img src="/sideBar.svg" alt="" />
                </Button>
                <Button className={styles["header-logo"]}>
                    <img src="/YuoTubeLogo.svg" alt="" />
                </Button>
            </div>
            <div id="center">
                <Input></Input>
            </div>
            <div id="end">
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
        </div>
    )
}

export default Header