// hooks
import { useGlobalContext } from "./useGlobalContext";
// firebase
import {
  signInWithPopup,
  GoogleAuthProvider,
  createUserWithEmailAndPassword,
  updateProfile,
} from "firebase/auth";
import { auth, googleProvider } from "../firebase/firebaseConfig";
// toastify
import { toast } from "react-toastify";

export function useSignup() {
  const { dispatch } = useGlobalContext();

  //   email password signup
  const signup = (displayName, email, password) => {
    dispatch({ type: "IS_PENDING", payload: true });
    createUserWithEmailAndPassword(auth, email, password)
      .then(async (userCredential) => {
        await updateProfile(auth.currentUser, {
          displayName,
        });
        dispatch({ type: "LOGIN", payload: userCredential.user });
        dispatch({ type: "IS_PENDING", payload: false });
        dispatch({ type: "ERROR", payload: null });
        toast.success("Welcome in the website My Kitchen");
      })
      .catch((error) => {
        const errorMessage = error.message;
        console.log(errorMessage);
        toast.error(errorMessage);
        dispatch({ type: "IS_PENDING", payload: false });
        dispatch({ type: "ERROR", payload: errorMessage });
      });
  };

  //   Google register
  const signin = () => {
    dispatch({ type: "IS_PENDING", payload: true });
    signInWithPopup(auth, googleProvider)
      .then((result) => {
        GoogleAuthProvider.credentialFromResult(result);
        const user = result.user;
        toast.success("welcome My Kitchen");
        dispatch({ type: "IS_PENDING", payload: false });
        dispatch({ type: "LOGIN", payload: user });
        dispatch({ type: "ERROR", payload: null });
      })
      .catch((error) => {
        const errorMessage = error.message;
        console.log(errorMessage);
        toast.error(errorMessage);
        dispatch({ type: "IS_PENDING", payload: false });
        dispatch({ type: "ERROR", payload: errorMessage });
      });
  };

  return { signin, signup };
}
