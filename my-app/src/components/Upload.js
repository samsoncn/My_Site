import React, { useState } from 'react';


function Upload() {

    const [file, setFile] = useState(null);
    const [error, setError] = useState(null);
    const types = ['image/png', 'image/jpg', 'image/jpeg'];

    const chnageHandler = (e) => {
        let selected = e.target.files[0];

        if (selected && types.includes(selected.type)) {
            setFile(selected);
            setError('');
        }
        else {
            setFile(null);
            setError('Please select an image file (png, jpg, or jpeg)');

        }

    }
    return (
        <>
        <form>
            <input type="file" onChange={chnageHandler} />
        <div className='display'>
            { error && <div className='error'>{ error }</div> }
            { file && <div>{ file.className } </div >}
        </div>
        </form>
        </>

    )
}

export default Upload;