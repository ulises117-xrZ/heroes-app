import { createContext } from "react";



export const AuthContext  = createContext();

export const authContext = ({children}) => {
    return (
        <AuthContext.Provider value={{item: "aa"}}>
            {children}
        </AuthContext.Provider>
    )
}
