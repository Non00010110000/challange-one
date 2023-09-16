import React from 'react';
import { FaCheckCircle } from 'react-icons/fa';


function SuccessSubscribing() {

  return (
    <div className='center-container'>
      <div className='subscribing'>
        <FaCheckCircle  className='sub' />
        <h1>Thanks for subscribing!</h1>
        <p>A confirmation message has been sent. Please open it and click the button inside to confirm your subscription.</p>
        <a className="bla" href='/'>Dismiss message</a>
      </div>
    </div>
  );
}

export default SuccessSubscribing;