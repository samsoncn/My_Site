import React from 'react';
import '../App.css';
// import { Button } from './Button';
import './Background.css';
import Typical from 'react-typical';

function Background() {
    return (
        <div className='bg-container'>
            <video src="/video/vid"></video>
            {/* <h1>Hello.</h1> */}
            <h1>Hi, Welcome to my Home.</h1>
            <h3><span class="txt-type"></span><span class="cursor typing">&nbsp;</span></h3>
            <p> I'm {' '}

                <Typical
                    loop={Infinity}
                    wrapper='b'
                    steps={[
                        'Samson. You can call me Sammy Chan.',
                        4000,
                        'a Software Developer.', 
                        2000, 
                        'a Web Developer.', 
                        2000, 
                        'a Product Manager.',
                        2000,
                        'a Badminton Coach.',
                        2000,
                        'a Mountain Biker.',
                        2000
                    ]}
                />
            </p>
        </div>
    )
}
export default Background
