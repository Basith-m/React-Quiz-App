import React, { useState } from 'react'
import 'animate.css';
import { Link } from 'react-router-dom';

function Home({ onUsernameChange }) {

  const [userInput, setUserInput] = useState('')
  const [path,setPath] = useState('')

  const handleInput = (value) => {
    // console.log(value);
    value &&
    setUserInput(value)
    onUsernameChange(userInput)
    setPath('/quiz')
  }

  const handleClick = () => {
    !userInput &&
    alert("Please Enter Your Name")
  }

  const handleSubmit = (e) => {
    e.prevetntDefault()
  }

  return (
    <div style={{ height: '100vh', width: '100%' }} className='d-flex justify-content-center align-items-center'>
      <div style={{ width: '40rem' }} className='p-5 '>
        <h1 className='fw-bold text-center animate__animated animate__backInDown '>Welcome To <span className='text-success'>EasyQuiz</span></h1>
        <div className='bg-white rounded  p-5 shadow-lg mt-5 animate__animated animate__bounceInUp animate__delay-1s animate__slow w-100'>
            <form className='d-flex flex-column justify-content-center align-items-center'  onSubmit={handleSubmit}>
              <input
                onChange={(e)=>handleInput(e.target.value)}
                style={{ fontSize: '18px', width: '100%' }}
                type="text"
                className='form-control text-center fw-bold p-3 shadow'
                placeholder='Enter Your Name'
              />
              <button
                type='submit'
                onClick={handleClick}
                style={{ fontSize:'1.2rem' ,letterSpacing:'2px'}}
                variant="contained"
                className='mt-5 px-4 py-2 rounded-pill fw-bold btn btn-primary'>
                <Link style={{ textDecoration: 'none', color: 'white' }} to={path}>Start Quiz</Link>
              </button>
            </form>
        </div>
      </div>
    </div>
  )
}

export default Home