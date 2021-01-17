import React from 'react';
import './Box.css';
import BoxItem from './BoxItem';

function Box() {
  return (
    <div className='box'>
      <h1>Check out my favourite memory!</h1>
      <div className='Box__container'>
        <div className='box__wrapper'>
          <ul className='box__items'>
            <BoxItem
              src='/img/BG.jpg'
            //   text=''
              label='New York'
              path='/gallery'
            />
            <BoxItem
              src='/img/9.jpg'
            //   text=''
              label='Cottage'
              path='/gallery'
            />
          </ul>
          <ul className='box__items'>
            <BoxItem
              src='/img/3.jpg'
            //   text=''
              label='Korea'
              path='/gallery'
            />
            <BoxItem
              src='/img/4.jpg'
            //   text=''
              label='Niagara Falls'
              path='/gallery'
            />
            <BoxItem
              src='/img/5.jpg'
            //   text=''
              label='Camping'
              path='/gallery'
            />
            
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Box;