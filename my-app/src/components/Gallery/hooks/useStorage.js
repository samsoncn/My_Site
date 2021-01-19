import { useState, useEffect } from 'react';
import { webStorage, webFirestore, timestamp } from '../firebase/config';

function useStorage(file) {

    const [progress, setProgress] = useState(0);
    const [error, setError] = useState(null);
    const [url, setUrl] = useState(null);

    useEffect(() => {
        //Storage Reference
        const storageReference = webStorage.ref(file.name);
        const collectionRef = webFirestore.collection('images');

        storageReference.put(file).on('updated_state', (load) => {
            // btyes have been transferred divided by the total btyes in the files(total file size) * 100
            // formula of percentage 
            let percentage = (load.bytesTransferred / load.totalBytes) * 100
            setProgress(percentage);

    }, (err) => {
        setError(err);
    }, async () => {
        // get the url of the image
        // asynchronous
        const url = await storageReference.getDownloadURL();
        const createdAt = timestamp();
        await collectionRef.add({ url, createdAt });
        setUrl(url);
    })

    }, [file]);

    return { progress, url, error }

}

export default useStorage;