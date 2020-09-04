import React, { Component } from 'react';

import './Contact.css';

export class Contact extends Component {
    render() {
        return (
            <div className="Contact">
                <div className="ContactMeContainer">
                    <h2>contact me 🦆</h2>
                    <form className="ContactForm">
                        <label>name:</label>
                        <br/>
                        <input type="text" required></input>
                        <br />
                        <label>email:</label>
                        <br/>
                        <input type="email" required></input>
                        <br />
                        <label>message:</label>
                        <br/>
                        <textarea />
                        <br></br>
                        <button>submit</button>
                    </form>
                </div>
            </div>
        )
    }
}

export default Contact;
