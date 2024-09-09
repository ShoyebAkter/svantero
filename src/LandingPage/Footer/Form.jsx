import "./Form.css";

const Form = () => {
  return (
    <div>
      <div className="submit">Submit Your Details</div>
      <div className="submitForm">
        <div className="formSec">
          <label>First Name<span className="required">*</span></label>
          <input type="text" />
        </div>
        <div className="formSec">
          <label>Last Name</label>
          <input type="text" />
        </div>
        <div className="formSec">
          <label>Email <span className="required">*</span></label>
          <input type="text" />
        </div>
        <div className="formSec">
          <label>Company</label>
          <input type="text" />
        </div>
        <div className="formSec">
          <label>Country of Residence</label>
          <select>
            <option value="">Select...</option>
            <option value="us">United States</option>
            <option value="uk">United Kingdom</option>
            <option value="ca">Canada</option>
            <option value="au">Australia</option>
            <option value="in">India</option>
          </select>
        </div>
        <div className="submitButton">Submit</div>
      </div>
    </div>
  );
};

export default Form;
