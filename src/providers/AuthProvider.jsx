import {createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword} from "firebase/auth";
import {createContext, useEffect, useState} from "react";
import {auth} from "../config/firebase.config";

export const AuthContext = createContext();

const AuthProvider = ({children}) => {

    const [user, setUser] = useState(null);
    const [isLoading, setIsLoading] = useState(true);
    

    // ! create a user
    const createUser = (email, password) => {
        setIsLoading(true);
        return createUserWithEmailAndPassword(auth, email, password);
    };
    const login = (email, password) => {
        setIsLoading(true);
        return signInWithEmailAndPassword(auth, email, password);
    };

    useEffect(() => {
        const subscribe = onAuthStateChanged(auth, (createUser) => {
            setUser(createUser);
            setIsLoading(false);
        });

        // ! cleanup
        return() => {
            return subscribe();
        };
    }, []);

    const values = {
        user,
        isLoading,
        createUser,
        login
    };

    return (
        <AuthContext.Provider value={values}>
            {children} </AuthContext.Provider>
    );
}

export default AuthProvider;
