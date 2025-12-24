import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
import './contact.css';
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

// npm i @emailjs/browser

const Contact = () => {
  
  const form = useRef();

  const validate = (name, email, message) => {
    if (!name.trim() || !email.trim() || !message.trim()) {
      toast.error("Please fill out all fields");
      return false;
    }
    const re = /\S+@\S+\.\S+/;
    if (!re.test(email)) {
      toast.error("Please enter a valid email");
      return false;
    }
    return true;
  };

  const sendEmail = (e) => {
    e.preventDefault();
    const data = new FormData(form.current);
    const name = data.get("user_name") || "";
    const email = data.get("user_email") || "";
    const message = data.get("message") || "";

    if (!validate(name, email, message)) return;

    emailjs
      .sendForm(
        "service_oy3d7wu",
        "template_0hcnbis",
        form.current,
        "kchgM4GjLim5rYEac"
      )
      .then(
        (result) => {
          e.target.reset();
          toast.success("Thanks — message sent!");
        },
        (error) => {
          console.error(error.text);
          toast.error("Failed to send message. Try again later.");
        }
      );
  };

  return (
    <section id="contact" className="contact-section">
      <div className="contact-container">
        <div className="contact-card">
          <div className="contact-left">
            <h2 className="contact-heading">Let’s build something great</h2>
            <p className="contact-sub">I’m open to freelance work and collaborations. Drop a message and I’ll respond within 48 hours.</p>
            <ul className="contact-meta">
              <li><strong>Email:</strong> <a href="mailto:nurdiyanaabaziz26@gmail.com">nurdiyanaabaziz26@gmail.com</a></li>
              <li><strong>Location:</strong> Kuala Lumpur, Malaysia</li>
            </ul>
          </div>

          <div className="contact-right">
            <form ref={form} onSubmit={sendEmail} className="contact-form" noValidate>
              <label htmlFor="name">Name</label>
              <input id="name" name="user_name" type="text" placeholder="Your full name" required />

              <label htmlFor="email">Email</label>
              <input id="email" name="user_email" type="email" placeholder="Your email" required />

              <label htmlFor="message">Message</label>
              <textarea id="message" name="message" placeholder="Briefly describe your project..." required></textarea>

              <button type="submit" className="btn-primary">Send message</button>
            </form>
          </div>
        </div>
      </div>
      <ToastContainer position="top-right" />
    </section>
    
  );
};

export default Contact;
