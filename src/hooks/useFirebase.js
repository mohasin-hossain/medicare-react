import { useEffect, useState } from "react";
import {
  getAuth,
  signOut,
  signInWithPopup,
  GoogleAuthProvider,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  updateProfile,
  sendEmailVerification,
} from "firebase/auth";
import InitializeFirebase from "../Pages/Login/Firebase/firebase.init";

InitializeFirebase();

const useFirebase = () => {
  const [user, setUser] = useState({});
  const [isLoading, setIsloading] = useState(true);
  const [error, setError] = useState("");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const auth = getAuth();

  const signInWithGoogle = () => {
    const googleProvider = new GoogleAuthProvider();
    return signInWithPopup(auth, googleProvider)
      .then(() => {})
      .finally(() => {
        setIsloading(false);
      });
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

  const processLogin = () => {
    return signInWithEmailAndPassword(auth, email, password)
      .then((result) => {
        // Signed in
        const { displayName, email } = result.user;
        const loggedInUser = {
          name: displayName,
          email: email,
        };
        setUser(loggedInUser);
      })
      .catch((error) => {
        setError(error.message);
      })
      .finally(() => setIsloading(false));
  };

  const registerNewUser = () => {
    return createUserWithEmailAndPassword(auth, email, password)
      .then((result) => {
        setIsloading(true);
        setUserName();
        const {email, displayName} = result.user;
        const registeredUser = {
          name: displayName,
          email: email,
        }
        setUser(registeredUser);
        setError("");
        verifyEmail();
        alert("Account Created. Congrats!")
      })
      .catch((error) => {
        setError(error.message);
      })
      .finally(() => {
        setIsloading(false);
      });
  };

  const setUserName = () => {
    updateProfile(auth.currentUser, { displayName: name }).then(() => {
      // Profile updated!
    });
  };

  const verifyEmail = () => {
    sendEmailVerification(auth.currentUser).then(() => {
      // Email verification sent!
    });
  };

  return {
    user,
    isLoading,
    signInWithGoogle,
    logOut,
    processLogin,
    registerNewUser,
    setName,
    setEmail,
    setPassword,
    error,
  };
};

export default useFirebase;
