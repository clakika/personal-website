import React, { Component } from 'react';

import './Contact.css';

export class Contact extends Component {
    render() {
        return (
            <div className="Contact">
                <div className="ContactMeContainer">
                    <h2>contact me 🦆</h2>
                    <form className="ContactForm">
                        <div className="FieldBox">
                            <input type="text" name="name" required/>
                            <label for="name" className='LabelName'>
                                <span className="ContentName">name</span>
                            </label>
                        </div>
                        <br></br>
                        <div className="FieldBox">
                            <input type="email" name="email" required/>
                            <label for="email" className='LabelName'>
                                <span className="ContentName">e-mail</span>
                            </label>
                        </div>
                        <br></br>
                        <div className="FieldBox">
                            <textarea type="text" name="message" required/>
                            <label for="message" className='LabelName'>
                                <span className="ContentName">message</span>
                            </label>
                        </div>
                        <br></br>
                        <button>submit</button>
                    </form>
                </div>
            </div>
        )
    }
}

export default Contact;
