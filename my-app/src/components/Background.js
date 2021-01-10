import React from 'react';
import '../App.css';
// import { Button } from './Button';
import './Background.css';
import Typical from 'react-typical';

function Background() {
    return (
        <div className='bg-container'>
            <video src="/video/vid"></video>
            <h1>Samson Chan</h1>
            <h3><span class="txt-type"></span><span class="cursor typing">&nbsp;</span></h3>
            <p> I'm a{' '}

                <Typical
                    loop={Infinity}
                    wrapper='b'
                    steps={[
                        'Software Developer.', 
                        1000, 
                        'Web Developer.', 
                        1000, 
                        'Product Manager.',
                        1000,
                        'Badminton Coach.',
                        1000,
                        'Mountain Biker.',
                        1000
                    ]}
                />
            </p>
        </div>
    )
}
export default Background
