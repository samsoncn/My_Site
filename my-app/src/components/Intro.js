import React from 'react';
import './Intro.css';

function Intro() {
    return (
        <div className='intro_container'>
            <div className='intro_box'>
                <div className='intro_img'>
                    <img src='./img/intro.jpg' alt='Samson'></img>
                </div>
                <div className='intro_content'>
                    <h2>About Me</h2>
                    <br/>
                    <p>Hello!</p>
                    <p>
                        My name is Samson Chan and and I am currently in my transfer Undergrad for Information Technology at York University. 
                        I also studied in Statistics and Linguistics (Double Majors) at University of Toronto. 
                    </p>
                    <br/>
                    <p>    
                        I have had past software development internships at Animoca Brands, OliveX, and iAscend.
                        When I'm taking time off from school or doing projects, I love watching movies as well as watching YouTube cooking channels.
                        It helps me to brainstorm creative ideas and catch up with logical thinking.
                    </p>  
                </div>
            </div>
        </div>
    )

}

export default Intro;