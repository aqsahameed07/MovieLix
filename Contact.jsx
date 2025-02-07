import { Form } from 'react-router-dom';
import './Contact.css';

export const contactData = async ({ request })=>{
    try {
      const res = await request.formData();
      const data = Object.fromEntries(res);
      console.log(data);
      return null;
    } catch (error) {
      console.log(error.message);
    }
  };

export const Contact = ()=>{
    return (
        <div className="contact-form-container">
        <Form method="POST" action="/contact"  className="contact-form">
          <h2>Contact Us</h2>
          <label htmlFor="name">Full Name:</label>
          <input type="text" id="name" name="name" placeholder="Your Name" required />
  
          <label htmlFor="email">Email:</label>
          <input type="email" id="email" name="email" placeholder="Your Email" required />
  
          <label htmlFor="message">Message:</label>
          <textarea id="message" name="message" placeholder="Your Message" rows="5" required></textarea>
  
          <button type="submit">Send</button>
        </Form>
      </div>
    );
}