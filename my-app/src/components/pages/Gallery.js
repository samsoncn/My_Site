import React, { useState } from 'react';
import '../Gallery.css';
import Footer from '../Footer';
import Upload from '../Upload';
import ImageBox from '../ImageBox';
import ModalBox from '../ModalBox';

function Gallery() {
    const [selectedImg, setSelectedImg] = useState(null);
    return (
    <>
        <Upload />
        <ImageBox setSelectedImg={setSelectedImg} />
        { selectedImg && (<ModalBox selectedImg={selectedImg} setSelectedImg={setSelectedImg} />
        )}
        <Footer />
    </>
    );
}

export default Gallery;