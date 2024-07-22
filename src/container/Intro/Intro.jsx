import React, { useRef, useState } from 'react';
import { BsFillPlayFill, BsPauseFill } from 'react-icons/bs';
//import { BsFillPlayFill, BsPause, BsPauseFill } from 'react-icons/bs';
import { meal } from '../../constants';
 
import './Intro.css';

const Intro = () => {
  const [playVideo, setplayVideo] = useState(false);
  const vidRef = useRef();

  // determines if the video is play or not by bool value
  const handleVideo = () => {
    setplayVideo((playVideo) => !playVideo);

    if(playVideo) {
      vidRef.current.pause();
    } else {
      vidRef.current.play();
    }
  };

  return (
  // contains the meal eating video
  <div className='app__video'>
    <video 
      src={meal}
      ref={vidRef}
      type='video/mp4'
      loop
      controls={false}
      muted
    />

    <div className='app__video-overlay flex__center'>
      <div 
        className='app__video-overlay_circle flex__center'
        onClick={handleVideo}
      >
        {/* if vid is playing already we want to pause it, if it is paused we want to play it */}
        {playVideo 
          ? <BsPauseFill color='#fff' fontSize={30}/>
          : <BsFillPlayFill color='#fff' fontSize={30}/>}
      </div>
    </div>
  </div>
)};

export default Intro;
