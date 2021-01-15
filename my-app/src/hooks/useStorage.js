import { useState, useEffect } from 'react';
import { webStorage } from '../firebase/config';

function useStorage(file) {

    const [progress, setProcess] = useState(0);
    const [error, setError] = useState(null);
    const [url, setUrl] = useState(null);

    useEffect(() => {
        //Storage Reference
        const storageReference = webStorage.ref(file.name);

        storageReference.put(file).on('stated_updated', (load) => {
            // btyes have been transferred divided by the total btyes in the files(total file size) * 100
            // formula of percentage 
            let percentage = (load.bytesTransferred / load.totalBytes) * 100
            setProcess(percentage);

    }, (err) => {
        setError(err);
    }, async () => {
        // get the url of the image
        // asynchronous
        const url = await storageReference.getDownloadURL();
        setUrl(url);
    })

    }, [file]);

    return { progress, url, error }

}

export default useStorage;