import React from 'react';
import coverPhoto from '../assets/images/DOSSAS Cover Photo with Watermark 12-5-22.png';

const Home = () => {
  return (
    <div className='content'>
      <div className='banner'></div>
      <section id='homeContent'>
        <img id='cover_photo' src={coverPhoto} alt='Dossas & his equipment'></img>
        <aside id='homeParagraphs'>
          <p>Dossas is a young Colorado-based music producer who's looking to make a name for himself by spreading light through music. Whether it's a beat you're buying, or you're hiring him as a producer, DOSSAS elevates all of those around him by creating honest music. </p>
          <p>Music saved my life, so I'm keeping it One Hundred. No closed minds in the studio with me.</p>
        </aside>
      </section>
    </div>
  )
}

export default Home