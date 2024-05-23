import { FC } from "react"
import styles from "./Input.module.scss"
import cl from "classnames"

interface Inputprops {
    placeholder?: string
    className?: string
}

const Input: FC<Inputprops> = ({ placeholder, className }) => {


    return (
        <input id="search" className={cl(className) + " " + styles["search"]} type="text" placeholder={placeholder} />
    )
}



export default Input