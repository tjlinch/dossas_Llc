import React from 'react';
import studioPic from '../assets/images/20221226_183524.jpg';

const About = () => {
  return (
    <div className='content'>
      <section id='aboutPage'>
        <h3 id='aboutHeader'>About DOSSAS</h3>
        <img id='studio' src={studioPic} alt='Studio'></img>
        <p className='aboutParagraph'>Dossas has been producing music ever since a kid after playing piano and singing in various choirs for over a decade in Garage Band at the age of thirteen. He has since loved writing music, covering pop artists, and producing beats in all sorts of different genres. He grew up jamming to contemporary christian music, R&B, classic rock, tons of jazz, some pop, some punk and last but not least... EDM! Quite the fun combo to grow up to, and if you ask Dossas, he’ll tell you it was all training for his day job now. Because as an audio engineer, his ears need to be tailored to listen to what makes good music…well, actually good. </p>
        <p className='aboutParagraph'>Dossas thinks that the little things from the production, to the performance, all the way to the mix and the master are all so important. Every step along the way towards the end product must contain a lot of attention to detail so that not only the audio stands out from a professional standpoint, but as well as from a creative and emotional standpoint as well. This is when listeners feel attached to the music because it hits them on every level.</p>
        <p className='aboutParagraph'>We’re all suckers for a song that makes us feel something so when he hears a song that’s been executed perfectly and it makes us feel something, we might as well consider ourselves fans. We are all surrounded by sounds constantly, and it’s seemingly rare to find actual peace and quiet, so If you’re somebody who appreciates and understands the power that music has, Dossas should be a great fit for you to help you harness that power.</p>
      </section>
    </div>
  )
}

export default About