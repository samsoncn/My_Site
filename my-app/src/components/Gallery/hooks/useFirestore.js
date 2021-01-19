import { useState, useEffect } from 'react';
import { webFirestore } from '../firebase/config';

function useFirestore(collection) {
  const [docs, setDocs] = useState([]);

  useEffect(() => {
    const unsub = webFirestore.collection(collection)
      .orderBy('createdAt', 'desc')
      .onSnapshot(load => {
        let documents = [];

        load.forEach(doc => {
          documents.push({...doc.data(), id: doc.id});

        });
        setDocs(documents);
      });

    return () => unsub();
  }, [collection]); 
  return { docs };
}

export default useFirestore;