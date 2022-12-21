import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";

export default function ContactForm() {
    const form = useRef();
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [message, setMessage] = useState("");
    const [status, setStatus] = useState("");
    const [statusClass, setStatusClass] = useState("");

    const sendEmail = (e) => {
        e.preventDefault();

        // emailjs.sendForm('service_3dwou2l', 'template_ugo5p4b', form.current, '_LjK2QS9TkwGrv1cX')
        //     .then((result) => {
        //         console.log(result.text);
        //         setStatus("Message Sent!");
        //         setStatusClass("contact-form-status-success");
        //     }, (error) => {
        //         console.log(error.text);
        //         setStatus("Something went wrong. Please try again later.");
        //         setStatusClass("contact-form-status-error");
        //     });

        setName("");
        setEmail("");
        setMessage("");
        setStatus("Message sent! I look forward to reading it!");
        setStatusClass("contact-form-status-success");
    };

    const handleNameChange = (e) => {
        setName(e.target.value);
    };

    const handleEmailChange = (e) => {
        setEmail(e.target.value);
    };

    const handleMessageChange = (e) => {
        setMessage(e.target.value);
    };

    return (
        <div>
            <form className="contact-form" ref={form} onSubmit={sendEmail}>
                <label className="contact-form-name-label">Name <span className="red">*</span></label>
                <input type="text" name="name" value={name} onChange={handleNameChange} required className="contact-form-name-field" />
                <label className="contact-form-email-label">Email <span className="red">*</span></label>
                <input type="email" name="email" value={email} onChange={handleEmailChange} required className="contact-form-email-field" />
                <label className="contact-form-message-label">Message <span className="red">*</span></label>
                <textarea name="message" rows="10" cols="50" value={message} onChange={handleMessageChange} required className="contact-form-message-field" />
                <input type="submit" value="Send" className="contact-form-submit" />
            </form>
            <h5 className={statusClass}>{status}</h5>
        </div>
    )
}