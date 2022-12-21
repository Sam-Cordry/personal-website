import React from "react";
import ContactForm from "../components/ContactForm";

export default function Contact() {
    return (
        <div className="contact">
            <h1 className="contact-title">Contact</h1>
            <div className="contact-main">
                <div className="contact-left">
                    <h2 className="contact-talk">Call Me!</h2>
                    <h3 className="contact-info">Phone Number: <a href="tel:8123149742">(812) 314-9742</a></h3>
                    <h5 className="contact-details">Please leave a detailed voicemail and I'll be in touch with you as soon as I can. Thanks!</h5>
                </div>
                <div className="contact-right">
                    <h2 className="contact-message">Message Me!</h2>
                    <h5 className="contact-required"><span className="red">*</span> - indicates required field</h5>
                    <ContactForm />
                </div>
            </div>
        </div>
    )
}