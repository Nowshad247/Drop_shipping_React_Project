import { useEffect, useState } from "react";
import initializeAuthentication from "../Firebase/firebase.init";
import { GoogleAuthProvider, getAuth, signInWithEmailAndPassword, signInWithPopup, onAuthStateChanged, updateProfile, signOut, createUserWithEmailAndPassword } from "firebase/auth";

initializeAuthentication();
const useFirebase = () => {
    const [user, setUser] = useState({});
    const [error, setError] = useState('');
    const [loading, setLoading] = useState(true);
    const [admin, setAdmin] = useState(false);
    const auth = getAuth();
    const googkeProvider = new GoogleAuthProvider();

    const googlelogin = () => {
        return signInWithPopup(auth, googkeProvider).finally(() => {
            setLoading(false)
        });
    }
    // objarved user 
    const registerNewUser = (email, password, name) => {
        createUserWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                const user = userCredential.user;
                setUser(user);
                setUserName(name);
                saveUser(email, name, 'POST');
            })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                setError(errorMessage);
                setError(errorCode);
            });
    }
    const setUserName = (name) => {
        updateProfile(auth.currentUser, {
            displayName: name
        }).then(
            result => { }
        )
    };
    const signinwithpassword = (email, password) => {
        return signInWithEmailAndPassword(auth, email, password).finally(() => { setLoading(false) })
    }
    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (user) => {
            if (user) {
                const uid = user.uid;
                setUser(user);
                setLoading(false)
            } else {
                setUser({})
            }
        });
        return () => unsubscribe;
    }, [])
    useEffect(() => {
        fetch(`https://safe-shore-20659.herokuapp.com/users-cehck/${user.email}`)
            .then(res => res.json())
            .then(data => setAdmin(data.admin))
    }, [user.email])
    const logout = () => {
        signOut(auth).then(() => {
            setUser({})
        }).catch((error) => {
            // An error happened.
        });

    }
    const saveUser = (email, displauName, method) => {
        const user = { email, displauName };
        fetch('https://safe-shore-20659.herokuapp.com/users', {
            method: method, // or 'PUT'
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(user),
        })
            .then(response => response.json())
            .then(data => {
                console.log('Success:', user);
            })
            .catch((error) => {
                console.error('Error:', error);
            });
    }

    return {
        signinwithpassword,
        registerNewUser,
        googlelogin,
        logout,
        saveUser,
        admin,
        loading,
        user,
        error

    }
}
export default useFirebase;