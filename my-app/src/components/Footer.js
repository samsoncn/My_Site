import React from 'react';
import "./Footer.css";
// import { Link } from 'react-router-dom';

function Footer() {
    return (
      <div className='footer-container'>
        <section class='social-media'>
            {/* <small class='website-rights'>SAMSON CHAN © 2020</small> */}
            <div class='social-icons'>
                <ul>
                    <li><a href="https://www.facebook.com/samson.chan.9"><i class="fab fa-facebook-f"></i></a></li>  
                    <li><a href="https://www.instagram.com/samsonnchan/"><i class="fab fa-instagram"></i></a></li>  
                    <li><a href="https://www.youtube.com/channel/UCNdPmFqUqh1EV00WqVti6zA/videos?view_as=subscriber"><i class="fab fa-youtube"></i></a></li>  
                    <li><a href="https://github.com/samsoncn"><i class="fab fa-github"></i></a></li>  
                    <li><a href="https://www.linkedin.com/in/samson-chan-15913b169/"><i class="fab fa-linkedin-in"></i></a></li>          
                </ul>
            </div>
            <small class='website-rights'>SAMSON CHAN © 2021 All Right.</small>
        </section>
      </div>
    );
  }
  

export default Footer