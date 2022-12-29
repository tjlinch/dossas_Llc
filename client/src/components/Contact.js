import React from 'react'

const Contact = () => {
  return (
    <div className='content'>
      <section id='contactPage'>
        <h3 id='contactHeader'>Contact DOSSAS</h3>
        <p>Reach out and let Dossas know what services you need help with! Select all that apply and let him know of any questions that you have. He looks forward to connecting with you!</p>
        <form className='emailForm'>
          <input
            type='text'
            className='textInput'
            name='from-name'
            placeholder='Your Name'
            // value={toSend.from_name}
            // onChange={handleChange}
          /><br></br>
          <p>Select services you are interested in:</p>
          {/* multiple select box with more complicated UI */}
          <select name='services' id='servicesSelect' multiple>
            <option value='mix'>Mix</option>
            <option value='master'>Master</option>
            <option value='soundDesign'>Sound Design</option>
            <option value ='production'>Production</option>
            <option value ='composition'>Composition</option>
            <option value='freelance'>Freelance</option>
          </select><br></br>
          {/* checkbox design that takes up more room */}
          <input
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
          <label for='freelance'>Freelance</label><br></br>
          <input
            type='text'
            className='textInput'
            name='reply_to'
            placeholder='Your Email'
          /><br></br>
          <input
            type='text'
            className='textInput'
            name='message'
            placeholder='Your Message Here'
          /><br></br>
          <button type='submit' className='btn btn-primary' id='submitBtn'>Submit Email</button>
        </form>
      </section>
    </div>
  )
}

export default Contact