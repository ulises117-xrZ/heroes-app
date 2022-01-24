import { useEffect, useReducer } from 'react'
import { AuthContext } from './components/auth/authContext'
import { authReducer } from './components/auth/authReducer'
import { AppRouter } from './routes/Routes'

const init = () => {
    return JSON.parse(localStorage.getItem('user')) || { logged: false };
}
export const HeroesApp = () => {
    const [user, dispatch] = useReducer(authReducer, {}, init)
    useEffect(() => {
        if( !user){
            return;
        }
        localStorage.setItem('user', JSON.stringify(user));
        return () => {
        }
    }, [user])

    return (
        <AuthContext.Provider value={{
            user,
            dispatch
        }}>
            <AppRouter />
        </AuthContext.Provider>
    )
}
