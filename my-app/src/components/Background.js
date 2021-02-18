import React from 'react';
import '../App.css';
// import { Button } from './Button';
import './Background.css';
import Typical from 'react-typical';

function Background() {
    return (
        <div className='bg-container'>
            <video src="./water.mp4"></video>
            {/* <h1>Hello.</h1> */}
            <h1>Hello! I'm Samson.</h1>
            {/* <h3><span class="txt-type">C:\</span><span class="cursor typing">&nbsp;</span></h3> */}
            <p> The {' '}

                <Typical
                    loop={Infinity}
                    wrapper='n'
                    steps={[
                        // 'Samson. You can call me Sammy Chan.',
                        // 4000,
                        'Software Developer', 
                        2000, 
                        'Web Developer', 
                        2000, 
                        'Product Manager',
                        2000,
                        'Badminton Coach',
                        2000,
                        'Mountain Biker',
                        2000
                    ]}
                />
            </p>
        </div>
    )
}
export default Background
