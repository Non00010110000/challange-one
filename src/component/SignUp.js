import React from 'react';
import { FaCheckCircle } from 'react-icons/fa';
import { Link } from 'react-router-dom';

function SignUp() {
  return (
    <div className='sign-up'>
      <div className='header'>
        <h1>Stay Updated!</h1>
        <p>Join 60.000+ product managers receiving monthly updates on:</p>
        <ul>
          <li><FaCheckCircle className='circle'/> Product discovery and building what matters</li>
          <li><FaCheckCircle className='circle'/> Measuring to ensure updates are a success</li>
          <li><FaCheckCircle className='circle'/> And much more!</li>
        </ul>
        <form>
          <label htmlFor='email'>Email address</label>
          <input type='text' placeholder='email@company.com' name='email'/>
        </form>
        <Link className='link' to={"/succ"}>Subscribe to monthly newsletter</Link>
      </div>
      <div className='img'>
        <img src={require("../img/i.jpg")} alt="Image" />
      </div>
    </div>
  );
} 
export default SignUp