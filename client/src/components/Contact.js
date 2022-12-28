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
            name='from-name'
            placeholder='Your Name'
          /><br></br>
          <p>Select services you are interested in</p>
          <input
            type='checkbox'
            id='mix'
            name='mix'
            value='Mix'
          />
          <label for='mix'>Mix</label><br></br>
          <input
            type='checkbox'
            id='master'
            name='master'
            value='Master'
          />
          <label for='master'>Master</label><br></br>
          <input
            type='checkbox'
            id='soundDesign'
            name='soundDesign'
            value='Sound Design'
          />
          <label for='soundDesign'>Sound Design</label><br></br>
          <input
            type='checkbox'
            id='production'
            name='production'
            value='Production'
          />
          <label for='production'>Production</label><br></br>
          <input
            type='checkbox'
            id='composition'
            name='composition'
            value='Composition'
          />
          <label for='composition'>Composition</label><br></br>
          <input
            type='checkbox'
            id='freelance'
            name='freelance'
            value='Freelance'
          />
          <label for='freelance'>Freelance</label><br></br>

        </form>
      </section>
    </div>
  )
}

export default Contact