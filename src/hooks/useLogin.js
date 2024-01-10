// hooks
import { useGlobalContext } from "./useGlobalContext";
// firebase
import {
  signInWithPopup,
  GoogleAuthProvider,
  signInWithEmailAndPassword,
} from "firebase/auth";
import { auth, googleProvider } from "../firebase/firebaseConfig";
// toastify
import { toast } from "react-toastify";

export function useLogin() {
  const { dispatch } = useGlobalContext();
  // email and password signin
  const login = (email, password) => {
    dispatch({ type: "IS_PENDING", payload: true });
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        dispatch({ type: "IS_PENDING", payload: false });
        dispatch({ type: "LOGIN", payload: userCredential.user });
        dispatch({ type: "ERROR", payload: null });
        toast.success("Welcome website");
      })
      .catch((error) => {
        const errorMessage = error.message;
        dispatch({ type: "IS_PENDING", payload: false });
        dispatch({ type: "ERROR", payload: errorMessage });
        toast.error(errorMessage);
        console.log(errorMessage);
      });
  };

  return { login };
}
