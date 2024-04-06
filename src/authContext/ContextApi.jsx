import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signOut } from "firebase/auth";
import { createContext, useEffect, useState } from "react";
import { auth } from "../firebase/firebase.config";

export const AuthContext = createContext(null);

const ContextApi = ({children}) => {
const [user , setUser]= useState(null)
const [loading , setLoading] = useState(true)

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