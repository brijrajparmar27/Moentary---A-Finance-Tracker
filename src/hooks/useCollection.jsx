import { useEffect, useState } from "react";
import { firestore } from "../firebase/config";
import useAuthContext from "./useAuthContext";

const useCollection = (collection) => {
  const [documents, setDocuments] = useState(null);
  const { user } = useAuthContext();

  useEffect(() => {
    let ref = firestore.collection(collection).where("uid", "==", user.uid);

    const unsub = ref.onSnapshot((snapshot) => {
      let results = [];
      snapshot.docs.forEach((each) => {
        results.push({ id: each.id, ...each.data() });
      });

      setDocuments(results);
      
    });

    return () => unsub();
  }, []);

  return { documents };
};

export default useCollection;
