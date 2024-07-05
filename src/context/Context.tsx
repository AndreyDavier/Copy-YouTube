import { FC, ReactNode, createContext, useState } from "react";


interface ContextProviderProps {
    children: ReactNode
}

const Context = createContext({
    navOpen: (value: boolean) => { },
    isNavOpen: true,
    setQuery: (value: string) => { },
    query: ""
})

export const ContextProvider: FC<ContextProviderProps> = ({ children }) => {

    const value = localStorage.isNavOpen === "true" ? true : false
    const [query, setQuery] = useState("")
    const [isNavOpen, setIsNavOpen] = useState(value)

    function navOpen(value: boolean) {
        setIsNavOpen(value)
        console.log(value);

        localStorage.isNavOpen = value
    }

    return (
        <Context.Provider value={{ isNavOpen, navOpen, query, setQuery }}>
            {children}
        </Context.Provider>
    )
}

export default Context