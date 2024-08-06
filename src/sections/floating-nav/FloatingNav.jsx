import React from 'react';
import './floatingNav.css';
import data from './data';
import Scrollspy from 'react-scrollspy';
import Nav from './Nav';

const FloatingNav = () => {
  return (
    <ul id="floating__nav">
      <Scrollspy className='scrollspy' items={['header', 'about', 'skills', 'portfolio', 'contact']} currentClassName='active'>
        {
          data.map(item => <Nav key={item.id} item={item} />)
        }
      </Scrollspy>
    </ul>
  );
}

export default FloatingNav;
