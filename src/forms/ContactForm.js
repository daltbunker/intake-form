import axios from 'axios'
import React, {useState} from 'react'
import './ContactForm.css'
import InputContainer from './InputContainer'

function ContactForm() {

    const defaultFormInput = {
        name: "",
        email: "",
        birthdate: "",
        emailConsent: false
    }

    const [formInput, setFormInput] = useState(defaultFormInput)

    function handleInputChange(e) {
        const {name, value, checked} = e.target
        setFormInput(prevFormInput => {
            return {
                ...prevFormInput,
                [name]: name === "emailConsent" ? checked : value
            }
        })
    }

    function handleFormSubmit(e) {
        e.preventDefault()
        const randomId = Math.floor(Math.random * 100000)
        const userData = {
            id: randomId,
            ...formInput
        }
        axios.post("https://my-json-server.typicode.com/JustUtahCoders/interview-users-api/users", userData)
            .then(() => alert("Your message was successfully sent, we will get back to you shortly!"))
            .catch(() => alert("Sorry, something went wrong. Please try again.")) 

        clearForm()
    }

    function clearForm() {
        setFormInput(defaultFormInput)
    }

    return(
        <div className="ContactForm">
            <div className="form-title">Contact Us</div>
            <form onSubmit={(e) => handleFormSubmit(e)}>
                <InputContainer label="Name">
                    <input 
                        type="text" 
                        name="name" 
                        value={formInput.name} 
                        onChange={(e) => handleInputChange(e)} 
                        required 
                    />
                </InputContainer>
                <InputContainer label="Email">
                        <input 
                            type="email" 
                            name="email" 
                            value={formInput.email} 
                            onChange={(e) => handleInputChange(e)} 
                            pattern=".+@.+\.[A-Za-z]{2,4}" 
                            required 
                        />
                </InputContainer>
                <InputContainer label="Birthdate">
                    <input 
                        type="date" 
                        name="birthdate" 
                        value={formInput.birthdate} 
                        onChange={(e) => handleInputChange(e)} 
                    />
                </InputContainer>
                <InputContainer label="I agree to be contacted via email">
                    <input 
                        type="checkbox" 
                        name="emailConsent" 
                        checked={formInput.emailConsent} 
                        onChange={(e) => handleInputChange(e)} 
                        required 
                    />
                </InputContainer>
                <div className="form-btns">
                    <button className="form-btn">SUBMIT</button>
                    <button className="form-btn" onClick={clearForm} type="button">CLEAR</button>
                </div>
            </form>
        </div>
    )
      
}

export default ContactForm;
