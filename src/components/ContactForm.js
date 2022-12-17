import React, { useRef } from "react";
import emailjs from "@emailjs/browser";

export default function ContactForm() {
    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm('service_3dwou2l', 'template_ugo5p4b', form.current, '_LjK2QS9TkwGrv1cX')
            .then((result) => {
                console.log(result.text);
            }, (error) => {
                console.log(error.text);
            });
    };

    return (
        <form className="contact-form" ref={form} onSubmit={sendEmail}>
            <label>Name</label>
            <input type="text" name="name" required />
            <label>Email</label>
            <input type="email" name="email" required />
            <label>Message</label>
            <textarea className="contact-form-message" name="message" cols="100" required />
            <input type="submit" value="Send" />
        </form>
    )
}