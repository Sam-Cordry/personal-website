import React from "react";
import ContactForm from "../components/ContactForm";

export default function Contact() {
    return (
        <div className="contact">
            <h1>Contact</h1>
            <h2>Let's Talk!</h2>
            <div className="contact-info">
                <h3>Phone Number: (812) 314-9742</h3>
            </div>
            <ContactForm />
        </div>
    )
}