import { createContext, useEffect, useState } from "react";
import PropTypes from "prop-types";
import {
  GithubAuthProvider,
  GoogleAuthProvider,
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
} from "firebase/auth";
import auth from "../Firebase/Firebase.config";

export const AuthContext = createContext(null);

const googleProvider = new GoogleAuthProvider();
const githubProvider = new GithubAuthProvider()

const AuthProvider = ({ children }) => {
    const [user, setUser] = useState({})
    const [loading, setLoading] = useState(true);

  const googleLogIn = () => {
    setLoading(true);
    return signInWithPopup(auth, googleProvider);
  };

  const githubLogIn = () => {
    setLoading(true);
    return signInWithPopup(auth, githubProvider);
  };

  const createUserEmailPassword = (email, password) => {
    setLoading(true)
    return createUserWithEmailAndPassword(auth, email, password);
  };

  const signInEmailPassword = (email, password) => {
    setLoading(true)
    return signInWithEmailAndPassword(auth, email, password);
  };


  //observer
  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
        setUser(user);
        setLoading(false);
    });
  }, []);

  const logOut = ()=> {
    signOut(auth)
  }

  const authinfo = {
    googleLogIn,
    githubLogIn,
    createUserEmailPassword,
    signInEmailPassword,
    user,
    logOut,
    loading

  };

  return (
    <AuthContext.Provider value={authinfo}>
      {children}
    </AuthContext.Provider>
  );
};

AuthProvider.propTypes = {
  children: PropTypes.node,
};
export default AuthProvider;
