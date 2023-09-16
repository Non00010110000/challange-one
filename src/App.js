import React, { useState, useEffect } from 'react'
import SignUp from './component/SignUp'
import SuccessSubScribing from './component/SuccessSubScribing';
import { Route, Routes } from 'react-router-dom';
function App() {

  
  return (
    <>
 
      
 
      <Routes>
        <Route path='/' element={<SignUp/>}/>
        <Route path='/succ' element={<SuccessSubScribing/>}/>
      </Routes>
    

    </>
  )
}

export default App