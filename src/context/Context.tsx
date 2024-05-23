import { FC, ReactNode, createContext, useState } from "react";


interface ContextProviderProps {
    children: ReactNode
}

const Context = createContext({
    setIsNavOpen: () => { },
    isNavOpen: true
})

export const ContextProvider: FC<ContextProviderProps> = ({ children }) => {
    const [isNavOpen, setIsNavOpen] = useState(true)

    return (
        <Context.Provider value={{ isNavOpen, setIsNavOpen }}>
            {children}
        </Context.Provider>
    )
}

export default Context