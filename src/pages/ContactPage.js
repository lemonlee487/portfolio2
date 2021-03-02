import React from 'react'
import ContactItem from '../components/ContactItem'
import Title from '../components/Title'

const ContactPage = () => {
   return (
      <div className="ContactPage">
         <Title title="Tell me what you think..." span="Contact" className="c-title" />
         <ContactItem />
      </div>
   )
}

export default ContactPage
