import { createContext, useState } from "react";


export const UserContext = createContext();

export const UserStore = ({ children }) => {
    const [item, setItem] = useState('home')

    return (
        <UserContext.Provider value={{item,setItem}}>
            {children}
        </UserContext.Provider>
    )
}