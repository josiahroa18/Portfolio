import React, { useState } from 'react';
import { Contact, ContactForm, SubmitButton } from './styles';

export default () => {
    const [ formData, setFormData ] = useState({
        name: '',
        email: '',
        body: ''
    });

    let disabled = !formData.name || !formData.email || !formData.body;

    const handleChange = e => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    }

    const handleSubmit = e => {
        e.preventDefault();
        if(!disabled){
            console.log(formData);
            setFormData({
                name: '',
                email: '',
                body: ''
            })
        }
    }

    return (
        <Contact id='contact'>
            <h1>Contact Me</h1>
            <ContactForm>
                <div className='basic-info'>
                    <div className='input-wrapper'>
                        <label>Name</label>
                        <input
                            name='name'
                            value={formData.name}
                            onChange={handleChange}
                        />
                    </div>
                    <div className='input-wrapper'>
                        <label>Email</label>
                        <input
                            name='email'
                            value={formData.email}
                            onChange={handleChange}
                        />
                    </div>
                </div>
                <label>Message</label>
                <textarea
                    name='body'
                    value={formData.body}
                    onChange={handleChange}
                />
                <SubmitButton 
                    disabled={disabled}
                    onClick={disabled ? null : handleSubmit}
                >
                    Send Message
                </SubmitButton>
            </ContactForm>
        </Contact>
    );
}