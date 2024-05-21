import { ReactNode, FC } from "react"
import styles from "./Button.module.scss"
import cl from "classnames"

interface ButtonProps {
    children: ReactNode,
    className?: string
}

const Button: FC<ButtonProps> = ({ className, children }) => {
    return (
        <button className={cl(className) + " " + styles.button}>{children}</button>
    )
}


// function Button({ children, className }: ButtonProps) {


//     return (
//         <button className={cl(className) + " " + styles.button}>{children}</button>
//     )
// }

export default Button