import React from 'react';
import '../App.css';
// import { Button } from './Button';
import './Background.css';

function Background() {
    return (
        <div className='bg-container'>
            <video src="/video/vid"></video>
            {/* <image url="./public/img/bike.jpg"></image> */}
            <h1>Samson Chan</h1>
            <h3><span class="txt-type"></span><span class="cursor typing">&nbsp;</span></h3> 
        </div>
    )
}
export default Background
