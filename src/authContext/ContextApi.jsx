import { GithubAuthProvider, GoogleAuthProvider, createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth";
import { createContext, useEffect, useState } from "react";
import { auth } from "../firebase/firebase.config";

export const AuthContext = createContext(null);
const googleProvider = new GoogleAuthProvider()
const githubProvider = new GithubAuthProvider()

const ContextApi = ({children}) => {
const [user , setUser]= useState(null)
const [loading , setLoading] = useState(true)


const googleSignIn = ()=>{
    return signInWithPopup(auth , googleProvider);
}
const githubSignIn = ()=>{
    return signInWithPopup(auth , githubProvider);
}
    const signUpUser = (email , password)=>{
        setLoading(true)
        return createUserWithEmailAndPassword(auth , email ,password)
    }

    const loginUser = (email , password)=>{
        setLoading(true)
        return signInWithEmailAndPassword(auth , email , password)
    }
    const signOutUser = ()=>{
        setLoading(true)
        return signOut(auth)
    
    }





    useEffect(()=>{
        const unSubscribe = onAuthStateChanged(auth , currentUser=>{
            setUser(currentUser);
            setLoading(false)
        })
        return ()=>{
            unSubscribe()
        }
    },[])

    const authInfo ={
        user,
        googleSignIn,
        githubSignIn,
        signUpUser , 
        loginUser,
        signOutUser,
        loading
    }


    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default ContextApi;