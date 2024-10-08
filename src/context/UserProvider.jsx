import { createContext, useContext, useState, useEffect } from "react";

const UserContext = createContext();

const baseUserUrl = 'https://boolean-uk-api-server.fly.dev/George-Alexander-S/contact'

export const UserProvider = ({children}) => {
    const [user, setUser] = useState();

    const getUser = async (userId) => {
        const response = await fetch(`${baseUserUrl}/${userId}`);
        const jsonData = await response.json();
        setUser(jsonData)
    };

    useEffect(() => {
        getUser(1);
    }, [])

    return (
        <UserContext.Provider value={{user, getUser}}>
            {children}
        </UserContext.Provider>
    )
}

// LMAO this custom hook name...
export const useUser = () => {
    return useContext(UserContext);
}