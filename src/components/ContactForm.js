import React, {useState} from 'react'

function ContactForm() {

    const defaultFormInput = {
        name: "",
        email: "",
        birthdate: "",
        contactAgreement: false
    }

    const [formInput, setFormInput] = useState(defaultFormInput)

    function handleInputChange(e) {
        const {name, value, checked} = e.target
        setFormInput(prevFormInput => {
            return {
                ...prevFormInput,
                [name]: name === "contactAgreement" ? checked : value
            }
        })
    }

    function handleFormSubmit(e) {
        e.preventDefault()
    }

    return(
        <div className="ContactForm">
            <h2>Contact Us</h2>
            <form onSubmit={(e) => handleFormSubmit(e)}>
                <div className="input-container">
                    <label>Name</label>
                    <input 
                        type="text" 
                        name="name" 
                        value={formInput.name} 
                        onChange={(e) => handleInputChange(e)} 
                        required 
                    />
                </div>
                <div className="input-container">
                    <label>Email</label>
                    <input 
                        type="email" 
                        name="email" 
                        value={formInput.email} 
                        onChange={(e) => handleInputChange(e)} 
                        pattern=".+@.+\.[A-Za-z]{2,4}" 
                        required 
                    />
                </div>
                <div className="input-container">
                    <label>Birthdate</label>
                    <input 
                        type="date" 
                        name="birthdate" 
                        value={formInput.birthdate} 
                        onChange={(e) => handleInputChange(e)} 
                    />
                </div>
                <div className="input-container">
                    <label>I agree to be contacted via email</label>
                    <input 
                        type="checkbox" 
                        name="contactAgreement" 
                        value={formInput.contactAgreement} 
                        onChange={(e) => handleInputChange(e)} 
                        required 
                    />
                </div>
                <button className="form-btn">SUBMIT</button>
                <button className="form-btn">CLEAR</button>
            </form>
        </div>
    )
      
}

export default ContactForm;
