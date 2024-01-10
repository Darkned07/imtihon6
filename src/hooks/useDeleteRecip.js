import { deleteDoc, doc } from "firebase/firestore";
import { Navigate } from "react-router-dom";
import { toast } from "react-toastify";
import { db } from "../firebase/firebaseConfig";
import { useState } from "react";

export function useDeleteRecip() {
  const [isPending, setIsPending] = useState(false);
  const deleteRecip = async (col, id) => {
    setIsPending(true);
    toast.success("Recipie successufuly deleted");
    await deleteDoc(doc(db, col, id));

    setIsPending(false);
  };
  return { deleteRecip, isPending };
}
