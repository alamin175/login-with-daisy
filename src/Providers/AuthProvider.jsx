import React, { Children, createContext, useEffect, useState } from 'react';
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signOut} from 'firebase/auth'
import app from '../Firebase/firebase-config';
export const AuthContext = createContext(null)
const auth = getAuth(app)

const AuthProvider = ({children} ) => {
    const [user, setUser] = useState(null)
    const [loading, setLoading] = useState(true)

    const createdUser = (email, password) => {
      return createUserWithEmailAndPassword(auth, email, password)
    }
    const signIn = (email, password) => {
        return signInWithEmailAndPassword(auth, email, password);
    }
    const logOut = () => {
        return signOut(auth)
    }
    useEffect(() => {
        const unsubscriber =  onAuthStateChanged(auth, (currentUser) => {
            currentUser? setUser(currentUser) : setUser(null)
            setLoading(false);
        })
        return () => {
            unsubscriber;
        }
    },[]) 
    const authValue = {
        user,
        loading,
        createdUser,
        signIn,
        logOut,

    }
    return (
        <div>
            <AuthContext.Provider value={authValue}>
                {children}
            </AuthContext.Provider>
        </div>
    );
};

export default AuthProvider;