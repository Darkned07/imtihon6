import { useEffect } from "react";
import { useState } from "react";
import { collection, onSnapshot } from "firebase/firestore";
import { db } from "../firebase/firebaseConfig";

export function useCollection() {
  const [documents, setDocuments] = useState(null);

  useEffect(() => {
    const unsubscribe = onSnapshot(collection(db, "recipies"), (snapshot) => {
      const result = [];
      snapshot.docs.forEach((doc) => {
        const recipies = { id: doc.id, ...doc.data() };
        result.push(recipies);
      });
      setDocuments(result);
    });

    return () => unsubscribe();
  }, []);

  return { documents };
}
