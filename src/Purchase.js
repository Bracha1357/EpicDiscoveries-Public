import React from 'react';
import './index.css';
import {useNavigate} from 'react-router-dom';


 function PurchaseForm(){
  const navigate = useNavigate();
  const handleSubmit = (e) => {
    e.preventDefault();

    const form = e.target
    if(form.checkValidity()) {
      navigate('/logged_in');
    }else{
      form.reportValidity();
    }
  }

  return(
    <div className="container-fluid custom-height">
      <h1 className='sign'>Sign in</h1>
      <div className='d-flex justify-content-center align-items-center '>
      <div className="row">
        <div className="col-md-40 col-md-32">
        <div className="p-4 border rounded shadow-sm">
        
          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <label for='first_name' className='sign'>First Name:</label>
              <input type='text' className="form-control form-control-lg wide-input" required></input>
            </div>
            <div className="form-group">
              <label for='last_name' className='sign'>Last Name:</label>
              <input type='text' className="form-control form-control-lg wide-input" required></input>
            </div>
            <div className="form-group">
              <label for='email' className='sign'>Email:</label>
              <input type='email' className="form-control form-control-lg wide-input" required></input>
            </div> <br/>
            <button type="submit" className="btn btn-secondary form-control-lg sign">Submit</button>
          </form>
        </div>
      </div>
    </div>
    </div>
    </div>
  );
}

export default PurchaseForm