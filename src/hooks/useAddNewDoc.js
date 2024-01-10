import { collection, addDoc } from "firebase/firestore";
import { db } from "../firebase/firebaseConfig";
import { useState } from "react";
import { toast } from "react-toastify";

export function useAddNewDoc() {
  const [isPending, setIsPending] = useState(false);
  const [recip, setRecip] = useState(null);
  const addNewDoc = async (col, data) => {
    setIsPending(true);
    const docRef = await addDoc(collection(db, col), data);
    setIsPending(false);
    console.log(docRef.id);
    setRecip(docRef);
    toast.success("New Recipie add :)")
  };
  return { addNewDoc, recip, isPending };
}
