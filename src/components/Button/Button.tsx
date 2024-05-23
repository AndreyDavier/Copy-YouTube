import { ReactNode, FC } from "react"
import styles from "./Button.module.scss"
import cl from "classnames"

interface ButtonProps {
    children: ReactNode,
    className?: string
    onClick?: () => void
}

const Button: FC<ButtonProps> = ({ className, children, onClick }) => {
    return (
        <button onClick={onClick} className={cl(className) + " " + styles.button}>{children}</button>
    )
}




export default Button