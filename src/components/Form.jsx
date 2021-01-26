import React from 'react';


export default function FormPropsTextFields() {
    return (
        <form className='contact-form'>
            <div class="row">
                <div class="col-lg-6">
                    <div class="form_group">
                        <label for="nameInput">Name <span>*</span></label>
                        <input type="text" id='nameInput' class="form_control" placeholder="Name" name="name" required />
                    </div>
                </div>
                <div class="col-lg-6">
                    <div class="form_group">
                        <label for="emailInput">E-mail <span>*</span></label>
                        <input type="email" id='emailInput' class="form_control" placeholder="E-mail" name="email" required />
                    </div>
                </div>

                <div class="col-lg-12">
                    <div class="form_group">
                        <label for="messageInput">Message <span>*</span></label>
                        <textarea class="form_control" id='messageInput' placeholder="Your Message" name="message" required></textarea>
                    </div>
                </div>
                <div class="col-lg-12">
                    <div class="form_button text-center">
                        <button type="submit" class="shamko_btn form_btn">MESSAGE ME</button>
                    </div>
                </div>
            </div>
        </form>
    );
}