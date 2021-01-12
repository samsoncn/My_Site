import React from 'react';
import './Intro.css';

function Intro() {
    return (
        <div className='intro_container'>
            <div className='box'>
                <div className='intro_img'>
                    <img src='./img/belleville-100.jpg'></img>
                </div>
                <div className='intro_content'>
                    <h2>About Me</h2>
                    <p>Hello!</p>
                    <p>
                        My name is Samson Chan and I am a Hong Kong native, currently studying in Canada. I am a student at the York University, Bachelor of Arts specializing in Information Technology.
                    </p>
                    <p>
                        Though not currently studying computer science, I have always had an interest in the field. I have taught myself 
                        a variety of programming languages, specializing in python, Java, node.js, HTML/CSS...etc, and regularly work on side-projects in order to further 
                        develop my abilities.
                    </p>
                    <p>    
                        For the past two summers, I have worked at Animoca Brands and OliveX in Hong Kong as a software engineer intern,
                            allowing myself to apply the skills I have worked so hard to master. The position gave me the opportunity to develop 
                            my personal communication, problem-solving and researching skills. 
                    </p>  
                    <p>
                        I would like to develop and strengthen my existing skills and connections through a professional and dynamic work 
                        environment. I am open to any opportunities that allow me to pursue my passion in programming.
                        
                    </p>
                </div>
            </div>
        </div>
    )

}

export default Intro;