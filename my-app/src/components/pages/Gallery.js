import React, { useState } from 'react';
import '../Gallery.css';
import Footer from '../Footer';
import Header from '../Gallery/Header';
import Upload from '../Gallery/Upload';
import ImageBox from '../Gallery/ImageBox';
import ModalBox from '../Gallery/ModalBox';


function Gallery() {
    const [selectedImg, setSelectedImg] = useState(null);
    return (
    <>
        <Header />
        <Upload />
        <ImageBox setSelectedImg={setSelectedImg} />
        { selectedImg && (<ModalBox selectedImg={selectedImg} setSelectedImg={setSelectedImg} />
        )}
        <Footer />
    </>
    );
}

export default Gallery;