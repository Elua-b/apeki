import React,{useState} from 'react'
import './Form.css'

function Form() {
    const[values,setValues] = useState({
        name:"",
        number:"",
        mail:"",
        subject:"",
        message:''
     });
     const handleFormSubmit = (event) => {
         event.preventDefault();
         setSubmitted(true);
     };
     const[submitted,setSubmitted] = useState(false);
     const handleChange = (event) => {
         setValues({
             ...values,
             [event.target.name] : event.target.value,
         })
     };
  return (
    <div>
      <div className="contact-form-details-form">
                
                {/* the start of the form  */}

                <div className='form-container'>
                    <h3>Get in Touch</h3>
        <form className='register-form'>
            {submitted ? <div className='success-message'>Success! Thank you for registering</div>:null}
        {/* <img src={name} alt="call"  className='form-svg'/> */}
            
            {/* the first 2 inputs are for the name and number */}
                     
                     <div className="first-contact-inputs">
                     <input
            value={values.name}
            className='form-name'
            placeholder='Your name'
            name='name'
            onChange={handleChange}
            />
            {/* <img src={call} alt="call"  className='form-svg'/> */}
            <input
            value={values.number}
            className='form-number'
            placeholder='Telephone number'
            name='number'
            onChange={handleChange}
            />
                     </div>
            {/* the first 2 inputs are for the name and number */}
            

            {/* <img src={mail} alt="call"  className='form-svg'/> */}
            <input
            value={values.mail}
            className='form-field'
            placeholder='Email address'
            name='mail'
            onChange={handleChange}
            /><br/>
            {/* <img src={subject} alt="call"  className='form-svg'/> */}
            <input
            value={values.subject}
            className='form-field'
            placeholder='Subject'
            name='subject'
            onChange={handleChange}
            /><br/>
             {/* <img src={message} alt="call"  className='form-svgg'/> */}
            <textarea
            value={values.message}
            className='form-field-textarea'
            placeholder='Your message'
            name='message'
            onChange={handleChange}
            /><br/>
            <div className="form-button-submit-container">
                <button className='form-button-submit' onClick={handleFormSubmit}>Submit</button>
            </div>
        </form>
    </div>

                {/* the end of the form  */}
                
                </div>    
    </div>
  )
}

export default Form
