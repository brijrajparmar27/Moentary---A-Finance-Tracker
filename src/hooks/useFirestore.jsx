import { firestore } from "../firebase/config";
// import "firestore/firebase";
import "firebase/firestore";
import { useEffect, useState } from "react";

const useFirestore = (collection) => {
  const [cancelled, setCancelled] = useState(false);
  const [error, setError] = useState(null);
  const [document, setDocument] = useState(null);
  const [loading, setLoading] = useState(false);

  const ref = firestore.collection(collection);

  useEffect(() => {
    return () => {
      setCancelled(true);
    };
  }, []);

  const addDoc = async (doc) => {
      const pattern = /^[0,9]/;
      setLoading(true);
      try{
        setLoading(true);
        if(doc.name =="" || doc.cost == ""){
          throw Error("Fields Cannot be Left Empty");
        }
        else if(!doc.cost.match(pattern))
        {
          
        }
        const addedDoc = await ref.add(doc);
        setDocument(addedDoc);
        setLoading(false)
      }
      catch(e){
          setError(e);
          setLoading(false);
          console.log(e);
      }
  };
  const removeDoc = async (id) => {
    try{
      await ref.doc(id).delete();
    }
    catch(e){
      setError(e)
      console.log(e);
    }
    
  };

  return {error, setError, loading, addDoc, removeDoc}
};

export default useFirestore;
