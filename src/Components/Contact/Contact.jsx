import React from 'react';
import { useRef } from 'react';
import emailjs from '@emailjs/browser';
import { Snackbar} from '@mui/material';
import './Contact.css';

const Contact = () => {
  const [open, setOpen] = React.useState(false);
  const form = useRef();
  const handleSubmit = (e) => {
    e.preventDefault();
    emailjs.sendForm('service_av65beb', 'template_5eqebsy', form.current, 'Q5BbDrjkHmiUpdaxS')
      .then((result) => {
        setOpen(true);
        console.log(result.text);
        form.current.reset();
      }, (error) => {
        console.log(error.text);
      });
  }
  return (

    <div class='Container flex m-16 fixed'>
      <div class='Wrapper'>
        <div class='Title text-3xl sm:text-4xl md:text-5xl mb-4'>Contact US</div>
        <div class='Desc text-lg sm:text-xl md:text-2xl mb-8'>Feel free to reach out to us for any questions or opportunities!</div>
        <form class='ContactForm w-full max-w-lg' ref={form} onSubmit={handleSubmit}>
          <div class='ContactTitle text-xl sm:text-2xl font-semibold mb-2'>Email Us</div>
          <input type="email" id="email" class='ContactInput mb-4 p-2 w-full border border-gray-300 rounded-md' placeholder="Your Email" name="from_email" required />
          <input type="text" id="name" class='ContactInput mb-4 p-2 w-full border border-gray-300 rounded-md' placeholder="Your Name" name="from_name" required />
          <input type="text" id="subject" class='ContactInput mb-4 p-2 w-full border border-gray-300 rounded-md' placeholder="Subject" name="subject" required />
          <textarea class='ContactInputMessage mb-4 p-2 w-full border border-gray-300 rounded-md' placeholder="Message" rows="4" name="message"></textarea>
          <button class='ContactButton bg-indigo-500 hover:bg-indigo-700 text-white font-bold py-2 px-4 rounded' type="submit">Send</button>
        </form>
        <div class="ContactInfo p-2 w-full max-w-lg pt-8 mt-8 border-t border-gray-200 text-center">
          <a class="text-indigo-500 block mb-2">example@email.com</a>
          <p class="leading-normal my-2">49 Smith St.<br />Saint Cloud, MN 56301</p>
        </div>
        <Snackbar
          open={open}
          autoHideDuration={6000}
          onClose={() => setOpen(false)}
          message="Email sent successfully!"
          severity="success"
        />
      </div>
    </div>


  )
}

export default Contact;
