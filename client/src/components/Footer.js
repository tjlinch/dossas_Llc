import React from 'react'
import soundcloud from '../assets/icons/icons8-soundcloud-48.png'
import spotify from '../assets/icons/icons8-spotify-48.png'

const Footer = () => {
  return (
    <div className='footer'>
      <div className='iconContainer'>
        <a href='https://soundcloud.com/user-719208712' target='_blank' rel='noreferrer'>
          <img src={soundcloud} alt='soundcloud logo'></img>
          {/* <p>SoundCloud</p> */}
        </a>
      </div>
      <div className='iconContainer'>
        <a href='https://open.spotify.com/artist/3W3iYHpJy6ez3VrcKNdRSe' target='_blank' rel='noreferrer'>
          <img src={spotify} alt='spotify logo'></img>
          {/* <p>Spotify</p> */}
        </a>
      </div>
      <p className='iconDisclaimer'>*Icons by<a target="_blank" rel="noreferrer" href="https://icons8.com"> Icons8</a></p>
    </div>
  )
}

export default Footer