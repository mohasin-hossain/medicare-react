import { useEffect, useState } from "react";
import {
  getAuth,
  signOut,
  signInWithPopup,
  GoogleAuthProvider,
  onAuthStateChanged,
} from "firebase/auth";
import InitializeFirebase from "../Pages/Login/Firebase/firebase.init";

InitializeFirebase();

const useFirebase = () => {
  const [user, setUser] = useState({});
  const [isLoading, setIsloading] = useState(true);

  const auth = getAuth();

  const signInWithGoogle = () => {
    setIsloading(true);
    const googleProvider = new GoogleAuthProvider();
    return signInWithPopup(auth, googleProvider)
      .then(() => {})
      .finally(() => setIsloading(false));
  };

  // Observe user state change
  useEffect(() => {
    const unsubscribed = onAuthStateChanged(auth, (user) => {
      if (user) {
        setUser(user);
      } else {
        setUser({});
      }
      setIsloading(false);
    });

    return () => unsubscribed;
  }, []);

  const logOut = () => {
    setIsloading(true);
    signOut(auth)
      .then(() => setUser({}))
      .finally(() => setIsloading(false));
  };

  return {
    user,
    isLoading,
    signInWithGoogle,
    logOut,
  };
};

export default useFirebase;
