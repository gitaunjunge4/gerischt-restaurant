import React from 'react';

import { images } from '../../constants'

import './AboutUs.css';

const AboutUs = () => (
  <div className='app__aboutus app__bg flex__center section__padding' id="about">
    {/* contains the background letter G */}
    <div className="app__aboutus-overlay flex__center">
      <img src={images.G} alt='g letter' />
    </div>

    {/* contains the about us, knife and the our history */}
    <div className="app__aboutus-content flex__center">
      {/* about us on the left */}
      <div className='app__aboutus-content_about'>
        <h1 className='headtext__cormorant'>About Us</h1>
        <img src={images.spoon} alt='about_spoon' className='spoon__img'/>
        <p className='p__opensans'>Adipiscing tempus ullamcorper lobortis odio tellus arcu volutpat. Risus placerat morbi volutpat habitasse interdum mi aliquam In sed odio nec aliquet.</p>
        <button type='button' className='custom__button'>Know More</button>
      </div>

      {/* knife */}
      <div className='app__aboutus-content_knife flex__center'>
        <img src={images.knife} alt='about_knife'/>
      </div>

      {/* our history on the left */}
      <div className='app__aboutus-content_history'>
        <h1 className='headtext__cormorant'>Our History</h1>
        <img src={images.spoon} alt='about_spoon' className='spoon__img'/>
        <p className='p__opensans'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quis pharetra adipiscing ultrices vulputate posuere tristique. In sed odio nec aliquet eu proin mauris et.</p>
        <button type='button' className='custom__button'>Know More</button>
      </div>
    </div>
  </div>
);

export default AboutUs;
