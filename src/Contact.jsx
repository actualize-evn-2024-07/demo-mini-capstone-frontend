import { useRef, useState } from "react";
import emailjs from '@emailjs/browser';
import PhoneInput from "react-phone-number-input";
import 'react-phone-number-input/style.css'

export function Contact() {
  const [phoneNumber, setPhoneNumber] = useState("");
  const form = useRef();
  
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(import.meta.env.VITE_APP_SERVICE_ID, import.meta.env.VITE_APP_TEMPLATE_ID, form.current, {
        publicKey: import.meta.env.VITE_APP_PUBLIC_KEY,
      })
      .then(
        () => {
          console.log('SUCCESS!');
          e.target.reset();
          alert("Email has been successfully sent!");
        },
        (error) => {
          console.log('FAILED...', error.text);
        },
      );
  };

  return(
    <div>
      <h1>Contact Me</h1>
      <form ref={form} onSubmit={sendEmail}>
        <div>
          <input type="text" name="user_name" placeholder="Full Name" required/>
          <input type="text" name="email" placeholder="Email" required/>
        </div>
        <div>
          <PhoneInput 
            type="text" 
            name="phone_number"
            defaultCountry="US"
            value={phoneNumber}
            onChange={setPhoneNumber} 
            placeholder="Phone Number" 
            required
          />
          <input type="text" name="subject" placeholder="subject" required/>
        </div>
        <textarea name="message" placeholder="Your Message" required/>
        <input type="submit" value="send" />
      </form>
    </div>
  )
}