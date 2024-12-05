import React from 'react'

const Contact = () => {
  return (
    <div>
       <section className='contact-part'>
            <h2>Contact</h2>
            <form>
                <input type="text" placeholder='Full Name'required/>
                <input type="email" placeholder='Email Address' required/>
                <input type="number" placeholder='Phone Number' required/>
                <textarea name="text" placeholder='Message' rows={4} required></textarea>
                <button type='submit'>Send Message</button>
            </form>
       </section>
    </div>
  )
}

export default Contact
