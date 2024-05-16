import styles from "./Button.module.scss"
import cl from "classnames"


function Button({ children, className }: any) {
    return (
        <button className={cl(className) + " " + styles.button}>{children}</button>
    )
}

export default Button