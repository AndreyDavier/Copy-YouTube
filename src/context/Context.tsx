import { FC, ReactNode, createContext, useState } from "react";


interface ContextProviderProps {
    children: ReactNode
}

const Context = createContext({
    setIsNavOpen: () => { },
    isNavOpen: true
})

export const ContextProvider: FC<ContextProviderProps> = ({ children }) => {

    const value = localStorage.isNavOpen === "true" ? true : false





    const [isNavOpen, setIsNavOpen] = useState(value)

    function navOpen(value: boolean) {
        setIsNavOpen(value)
        console.log(value);

        localStorage.isNavOpen = value
    }

    return (
        <Context.Provider value={{ isNavOpen, navOpen }}>
            {children}
        </Context.Provider>
    )
}

export default Context