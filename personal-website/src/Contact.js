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
                            <input type="text" name="name" className="InputName" required onChange={() => {
                                const errorName = document.querySelector(".ErrorName");
                                const name = document.querySelector(".InputName");

                                if(name.value == "") {
                                    errorName.classList.add("error");
                                }
                                else {
                                    errorName.classList.remove("error");
                                }
                                
                            }}/>
                            <label for="name" className='LabelName'>
                                <span className="ContentName">name</span>
                            </label>
                            <p className="ErrorMessage ErrorName">Please fill the field</p>
                        </div>
                        <br></br>
                        <div className="FieldBox">
                            <input type="email" className="InputEmail" name="email" required onChange={() => {
                                const errorEmail = document.querySelector(".ErrorEmail");
                                const email = document.querySelector(".InputEmail");
                                const regx = /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/;

                                if (regx.test(email.value) == false) 
                                {
                                    errorEmail.classList.add("error");
                                    return true;
                                }
                                else {
                                    errorEmail.classList.remove("error");
                                }
                            }}/>
                            <label for="email" className='LabelName'>
                                <span className="ContentName">e-mail</span>
                            </label>
                            <p className="ErrorMessage ErrorEmail">The field must include @</p>
                        </div>
                        <br></br>
                        <div className="FieldBox">
                            <textarea type="text" name="message" className="InputMessage" required onChange={() => {
                                const errorMessageField = document.querySelector(".ErrorMessageField");
                                const message = document.querySelector(".InputMessage");

                                if(message.value == "" || message.value <= 5) {
                                    errorMessageField.classList.add("error");
                                }
                                else {
                                    errorMessageField.classList.remove("error");
                                }
                                
                            }}/>
                            <label for="message" className='LabelName'>
                                <span className="ContentName">message</span>
                            </label>
                            <p className="ErrorMessage ErrorMessageField">Please write a message</p>
                        </div>
                        <br></br>
                        <div className="MessageSent">
                            <p onClick={() => {
                                const messageSent = document.querySelector(".MessageSent");

                                messageSent.classList.toggle("open");
                            }}>x</p>
                            <div className="MessageSentText">
                                <h3><span className="envelopeIcon">✉</span><br></br>Your message has been sent<br></br><span className="envelopeIcon">✉</span></h3>
                            </div>
                        </div>
                        <button onClick={(event) => {
                            const name = document.querySelector(".InputName");
                            const email = document.querySelector(".InputEmail");
                            const message = document.querySelector(".InputMessage");
                            const messageSent = document.querySelector(".MessageSent");

                            if (name || email || message) {
                                messageSent.classList.add("open");
                            }

                            event.preventDefault();
                        }}
                            >submit</button>
                    </form>
                </div>
            </div>
        )
    }
}

export default Contact;
