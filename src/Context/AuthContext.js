import { createContext, useContext, useEffect, useState } from "react";
import {
    createUserWithEmailAndPassword, 
    signInWithEmailAndPassword, 
    signOut, 
    onAuthStateChanged
} from 'firebase/auth'
import { auth } from "../firebase";

const UserContext = createContext()


export const AuthContextProvider = ({children}) => {

    const createUser = (email, password) => {
        return createUserWithEmailAndPassword(auth, email, password);
    };

    const signIn = (email, password) => {
        return signInWithEmailAndPassword(auth, email, password);
    }

    const logOut = () =>{
        return signOut(auth);
    }


    const [user, setCurrentUser] = useState()


    useEffect(() =>{
        const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
            console.log(currentUser)
            setCurrentUser(currentUser)
        });
        
        return () => {
            unsubscribe();
        };

    }, [])

    return(
        <UserContext.Provider value={{createUser, user, logOut, signIn}}>
            {children}
        </UserContext.Provider>
    )
}

export const UserAuth = () => {
    return useContext(UserContext)
}
