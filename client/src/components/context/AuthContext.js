import React,{useContext,useState,useEffect} from 'react'
import { getAuth, createUserWithEmailAndPassword , signInWithEmailAndPassword ,signOut,sendPasswordResetEmail} from "firebase/auth";
import {app} from '../../service/firebase'

const AuthContext = React.createContext()
const auth = getAuth();
export function useAuth() {
    return useContext(AuthContext)
}

export function AuthProvider({children}) {
    const [currentUser,setCurrentUser] = useState();
    const [loading,setLoading] = useState(true);
    const signUp=(email,password) =>{
        return createUserWithEmailAndPassword(auth,email, password)
    }

    const login=(email,password) =>{
        return signInWithEmailAndPassword(auth,email, password)

    }

    const logout=()=>{
        return signOut(auth)
    }
    
    const resetPassword = (email) => {
        return sendPasswordResetEmail(auth,email)
    }

    useEffect(()=> {
        const unsubscribe = auth.onAuthStateChanged(user => {
        setCurrentUser(user);
        setLoading(false);
    })
    return unsubscribe;
    },[])
    
    const value = {
        currentUser,
        logout,
        login,
        signUp,
        resetPassword
    }
    return (
        <AuthContext.Provider value={value}>
            {!loading  && children}
        </AuthContext.Provider>
    )
}

