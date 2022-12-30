import React from 'react';
import { useState } from 'react';
import { send } from 'emailjs-com';

const Contact = () => {
  
  const [toSend, setToSend] = useState({
    from_name: '',
    services: '',
    reply_to: '',
    message: '',
  });

  const onSubmit = (event) => {
    event.preventDefault();
    send(
      'service_51g0c6o',
      'template_fx4mvwy',
      toSend,
      'SyPCo042-q5nAEKaG'
    )
      .then((response) => {
        console.log('email submitted', response.status, response.text);
      })
      .catch((err) => {
        console.log('email failed', err);
      });
  };

  const handleChange = (event) => {
    setToSend({ ...toSend, [event.target.name]: event.target.value });
  };
  
  return (
    <div className='content'>
      <section id='contactPage'>
        <h3 id='contactHeader'>Contact DOSSAS</h3>
        <p>Reach out and let Dossas know what services you need help with! Select all that apply and let him know of any questions that you have. He looks forward to connecting with you!</p>
        <form className='emailForm' onSubmit={onSubmit}>
          <input
            type='text'
            className='textInput'
            name='from_name'
            placeholder='Your Name'
            value={toSend.from_name}
            onChange={handleChange}
          /><br></br>
          {/* <label for='services'>Select services you are interested in:</label><br></br> */}
          {/* multiple select box with more complicated UI */}
          {/* <select name='services' id='servicesSelect' multiple>
            <option value='mix'>Mix</option>
            <option value='master'>Master</option>
            <option value='soundDesign'>Sound Design</option>
            <option value ='production'>Production</option>
            <option value ='composition'>Composition</option>
            <option value='freelance'>Freelance</option>
          </select><br></br> */}
          <select name='services' id='services' onChange={handleChange}>
            <option value='' disabled selected>Select a service</option>
            <option value='Sound Design'>Sound Design</option>
            <option value='Mixing & Mastering'>Mixing & Mastering</option>
            <option value='Producing & Composing'>Producing & Composing</option>
          </select><br></br>
          {/* checkbox design that takes up more room */}
          {/* <input
            type='checkbox'
            id='mix'
            className='checkboxInput'
            name='mix'
            value='Mix' // or value={toSend.mix}?
          />
          <label for='mix'>Mix</label><br></br>
          <input
            type='checkbox'
            id='master'
            className='checkboxInput'
            name='master'
            value='Master'
          />
          <label for='master'>Master</label><br></br>
          <input
            type='checkbox'
            id='soundDesign'
            className='checkboxInput'
            name='soundDesign'
            value='Sound Design'
          />
          <label for='soundDesign'>Sound Design</label><br></br>
          <input
            type='checkbox'
            id='production'
            className='checkboxInput'
            name='production'
            value='Production'
          />
          <label for='production'>Production</label><br></br>
          <input
            type='checkbox'
            id='composition'
            className='checkboxInput'
            name='composition'
            value='Composition'
          />
          <label for='composition'>Composition</label><br></br>
          <input
            type='checkbox'
            id='freelance'
            className='checkboxInput'
            name='freelance'
            value='Freelance'
          />
          <label for='freelance'>Freelance</label><br></br> */}
          <input
            type='text'
            className='textInput'
            name='reply_to'
            placeholder='Your Email Address'
            value={toSend.reply_to}
            onChange={handleChange}
          /><br></br>
          <textarea
            id='emailMessage'
            className='textInput'
            name='message'
            placeholder='Your Message Here'
            value={toSend.message}
            onChange={handleChange}
          ></textarea><br></br>
          <button type='submit' className='btn btn-primary' id='submitBtn'>Submit Email</button>
        </form>
      </section>
    </div>
  )
}

export default Contact