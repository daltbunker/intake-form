import React from 'react';

function ContactForm() {

    function handleFormSubmit(e) {
        e.preventDefault()
    }
    return(
        <div className="ContactForm">
            <h2>Contact Us</h2>
            <form onSubmit={(e) => handleFormSubmit(e)}>
                <label htmlFor="">Name</label>
                <input type="text" required />
                <label htmlFor="">Email</label>
                <input type="email" pattern=".+@.+\.com" required />
                <label htmlFor="">Birthdate</label>
                <input type="date" />
                <label htmlFor="">I agree to be contaced via email</label>
                <input type="checkbox" required />
                <button>SUBMIT</button>
            </form>
        </div>
    )
      
}

export default ContactForm;
