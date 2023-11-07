import {
    createUserWithEmailAndPassword,
    onAuthStateChanged,
    signInWithEmailAndPassword,
    signOut,
    GoogleAuthProvider,
    signInWithPopup
} from "firebase/auth";
import {createContext, useEffect, useState} from "react";
import {auth} from "../config/firebase.config";

export const AuthContext = createContext();
// provider
const googleProvider = new GoogleAuthProvider();

const AuthProvider = ({children}) => {
    const [user, setUser] = useState(null);
    const [isLoading, setIsLoading] = useState(true);
    // ! google sign in
    const googleSignIn = () => {
        setIsLoading(true);
        return signInWithPopup(auth, googleProvider);
    };
    // ! create a user
    const createUser = (email, password) => {
        setIsLoading(true);
        return createUserWithEmailAndPassword(auth, email, password);
    };
    const login = (email, password) => {
        setIsLoading(true);
        return signInWithEmailAndPassword(auth, email, password);
    };
    const logout = () => {
        setIsLoading(true);
        return signOut(auth);
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
        googleSignIn,
        login,
        logout
    };

    return (
        <AuthContext.Provider value={values}>
            {children} </AuthContext.Provider>
    );
};

export default AuthProvider;
