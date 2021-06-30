import React, {useState} from 'react';
import "../assets/scss/contactUs.scss";
import {Button, TextField} from "@material-ui/core";
import config from '../config.json';

const ContactUs = () => {
    const {locationPhoto, address} = config.contactUs;
    const [form, setForm] = useState();
    const onFormChangeHandler = (e) => {
        setForm({
            ...form,
            [e.target.name]: e.target.value
        })
    }
    console.log(form);
    const onSubmitHandler = (e) => {
        e.preventDefault();

    }

    return (
        <div className='contact-us-wrapper'>
            <form
                className='contact-us-card'
                onChange={onFormChangeHandler}
                onSubmit={onSubmitHandler}
            >
                <h2>Contact Us</h2>
                <TextField
                    name='name'
                    className="text-field"
                    id="standard-basic"
                    label="Your Name"
                    fullWidth
                    required
                />
                <TextField
                    name='phoneNumber'
                    className="text-field"
                    id="standard-basic"
                    label="Phone Number"
                    fullWidth
                    required
                />
                <TextField
                    name='email'
                    className="text-field"
                    id="standard-basic"
                    label="Email"
                    fullWidth
                    required
                />
                <TextField
                    name='message'
                    className="text-field"
                    id="standard-basic"
                    label="How Can We Help?"
                    fullWidth
                    multiline
                    required
                />
                <Button variant="contained" type='submit'>
                    Send
                </Button>
            </form>
            <div className="contact-us-location contact-us-card">
                <h2>Our Location</h2>
                <img src={locationPhoto} alt={address} className='location-photo'/>
                <p>{address}</p>
                <Button variant="contained" type='submit'>
                    Get Directions
                </Button>
            </div>
        </div>
    );
};

export default ContactUs;