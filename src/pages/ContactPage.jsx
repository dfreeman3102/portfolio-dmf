import { useState } from 'react';

export default function ContactPage() {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        // Handle form submission logic
        if (!name || !email || !message) {
            alert('All fields are required!');
            return;
        }
        alert('Contact Info and Message Sent!');
        setName('');
        setEmail('');
        setMessage('');
    };

    return (
        <div>
            <h2>Contact Me</h2>
            <form onSubmit={handleSubmit}>
                <label htmlFor="name">Name:</label>
                <input
                    type="text"
                    id="name"
                    className='form-control fs-1'
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                />

                <label htmlFor="email">Email:</label>
                <input
                    type="email"
                    id="email"
                    className='form-control fs-3'
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                />

                <label htmlFor="message">Message:</label>
                <textarea
                    id="message"
                    value={message}
                    className='form-control fs-3'
                    onChange={(e) => setMessage(e.target.value)}
                ></textarea>

                <button className='btn btn-outline-secondary fs-5'type="submit">Submit</button>
            </form>
        </div>
    );
}

