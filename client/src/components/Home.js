import React from 'react';
import coverPhoto from '../assets/images/20221229_205403_0003.png';

const Home = () => {
  return (
    <div className='content'>
      <div className='banner'></div>
      <section id='homeContent'>
        <img id='cover_photo' src={coverPhoto} alt='Dossas & his equipment'></img>
        <aside id='homeParagraphs'>
          <p>Dossas is a young, Colorado-based music producer and audio engineer who is eager to help the community out with his talents.</p>
          <p>Music is all about connecting for Dossas, so he loves the collaborative process of working with others.</p>
          <p>Reach out to inquire with Dossas to see how he can help you with your next audio project!</p>
        </aside>
      </section>
    </div>
  )
}

export default Home