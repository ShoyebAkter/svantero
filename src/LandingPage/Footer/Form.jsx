import { useState } from "react";
import "./Form.css";

const Form = () => {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [company,setCompany]=useState('')
  const [selectedCountry, setSelectedCountry] = useState('');

  // Handler function to capture the selected value
  const handleSelectChange = (e) => {
    setSelectedCountry(e.target.value);  // Update the state with selected value
  };

  const handleSubmit=async()=>{
    

    // The URL of your deployed Apps Script Web App
    const scriptURL = 'https://script.google.com/macros/s/AKfycbxs_v293O8jXIMfPHh3eBqxMw9jhphS_ZrE-QLzvXfFTniror0bAnz8Mo8uSh5KEuEV/exec';

    const form = new FormData();
    form.append('firstName', firstName);
    form.append('lastName', lastName);
    form.append('email', email);
    form.append('company', company);
    form.append('country', selectedCountry);

    try {
      const response = await fetch(scriptURL, {
        method: 'POST',
        body: form,
      });

      if (response.ok) {
        alert('Form Submitted Successfully!');
        
      } else {
        alert('Form Submission Failed!');
      }
    } catch (error) {
      console.error('Error!', error);
      alert('Error submitting form!');
    }
  }
  return (
    <div>
      <div className="submit">Submit Your Details</div>
      <div className="submitForm">
        <div className="formSec">
          <label>First Name<span className="required">*</span></label>
          <input type="text" onChange={(e)=>setFirstName(e.target.value)} />
        </div>
        <div className="formSec">
          <label>Last Name</label>
          <input type="text"  onChange={(e)=>setLastName(e.target.value)} />
        </div>
        <div className="formSec">
          <label>Email <span className="required">*</span></label>
          <input type="text" onChange={(e)=>setEmail(e.target.value)} />
        </div>
        <div className="formSec">
          <label>Company</label>
          <input type="text" onChange={(e)=>setCompany(e.target.value)} />
        </div>
        <div className="formSec">
          <label>Country of Residence</label>
          <select value={selectedCountry} onChange={handleSelectChange}>
            <option value="">Select...</option>
            <option value="United States">United States</option>
            <option value="United Kingdom">United Kingdom</option>
            <option value="Canada">Canada</option>
            <option value="Australia">Australia</option>
            <option value="Malaysia">Malaysia</option>
          </select>
        </div>
        <div className="submitButton" onClick={handleSubmit}>Submit</div>
      </div>
    </div>
  );
};

export default Form;
