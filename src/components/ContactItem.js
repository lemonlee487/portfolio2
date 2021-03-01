import React from 'react'
import emailjs from 'emailjs-com'

const ContactItem = () => {
  function sendEmail(e) {
    e.preventDefault();

    emailjs.sendForm('service_9byu1tg', 'template_sbuvm4r', e.target, 'user_BkCz71ydZ4qpbxTBIQkvA')
      .then((result) => {
        console.log(result.text);
        alert('Your message sent!!')
      }, (error) => {
        console.log(error.text);
      });
    e.target.reset()
  }

  return (
    <div className="ContactItem">
      <div className="">
        <form onSubmit={sendEmail}>
          <div className="">
            <div className="">
              <input type="text" className="form-control" placeholder="Name" name="name" />
            </div>
            <div className="">
              <input type="text" className="form-control" placeholder="Email Address" name="email" />
            </div>
            <div className="">
              <input type="text" className="form-control" placeholder="Subject" name="subject" />
            </div>
            <div className="">
              <textarea className="form-control-ta" id="" cols="30" rows="8" placeholder="Your message" name="message"></textarea>
            </div>
            <div className="submit-button">
              <input type="submit" className="btn btn-info" value="Send Message" />
            </div>
          </div>
        </form>
      </div>
    </div>
  )
}

export default ContactItem
