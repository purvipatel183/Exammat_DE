import React from "react";
import { Link } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.css';

const Signin = () => {
  return (
    <>
   <div className="card shadow-sm border-0 px-3 rounded-2 mb-3 py-4 mx-auto mt-5 bg-light" style={{width:"500px"}}>
    <div className="card-header bg-transparent border-0 text-center text-uppercase"><h3>Welcome to Exam_material.edu</h3></div>
    <div className="card-body">
        
      <form action="/"  encType="multipart/form-data" autoComplete="off">
        <div className="form-group">
          <label className="mb-0">Enrollment no<span className="text-danger">*</span></label>
          <input name="enrollment" type="number" className="form-control" placeholder="Enrollment no" />
          
        </div>
        <div className="form-group">
          <label className="mb-0">Password<span className="text-danger">*</span></label>
          <input name="password" type="password" className="form-control" placeholder="Password" />
          
        </div>
        <p className="text-center mb-0 mt-4"><Link type="submit" to="/home" className="btn btn-primary btn-lg w-100 text-uppercase" >Login</Link></p>
        <h3 style={{textAlign:'center'}}>or</h3>
        <p className="text-center mb-0 mt-4"><Link type="submit" to="/Signup" className="btn btn-primary btn-lg w-100 text-uppercase" >Sign up</Link></p>

      </form>
      
    </div>
  </div>
    </>
  );
};

export default Signin;
