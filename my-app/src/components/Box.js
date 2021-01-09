import React from 'react';
import './Box.css';
import BoxItem from './BoxItem';

function Box() {
  return (
    <div className='Box'>
      <h1>Check out my favourite memory!</h1>
      <div className='Box__container'>
        <div className='Box__wrapper'>
          <ul className='Box__items'>
            <BoxItem
              src='../../public/img/intro.jpg'
            //   text=''
            //   label=''
              path='/gallery'
            />
            <BoxItem
              src='images/img-2.jpg'
            //   text=''
            //   label=''
              path='/gallery'
            />
          </ul>
          <ul className='box__items'>
            <BoxItem
              src='images/img-3.jpg'
            //   text=''
            //   label=''
              path='/gallery'
            />
            <BoxItem
              src='images/img-4.jpg'
            //   text=''
            //   label='Adventure'
              path='/gallery'
            />
            <BoxItem
              src='images/img-8.jpg'
            //   text=''
            //   label=''
              path='/gallery'
            />
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Box;