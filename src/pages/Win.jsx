import React from 'react'
import 'animate.css';
import { useNavigate } from 'react-router-dom';

function Win({ username , correctAnswerCount , wrongAnswerCount }) {

  const navigate = useNavigate()

  const handleClick = () => {
    navigate('/quiz')
  }

  return (
    <div style={{height:'100vh' , width:'100%',background:'url("/images/winner-img.jpg")',backgroundSize:'cover'}} className='d-flex align-items-center justify-content-center'>
      <div style={{width:'50rem'}} className='p-5 d-flex flex-column justify-content-center align-items-center' >
        <div style={{backgroundImage:'linear-gradient(to right, #02fab0,#02c8fa)'}}  className='px-4 py-2 bg-white rounded-pill shadow'>
          <h2 className='text-center text-black'>EasyQuiz</h2>
        </div>
        <div className='w-100 bg-white text-center mt-5 px-5 py-4 fw-bold rounded shadow animate__animated animate__bounceInLeft animate__slow'>
            <h5 className='mb-3'>Result</h5>
            <h3 className='mb-3 text-success'>{username}</h3>
            <p>Score</p>
            <p style={{fontSize:'2rem'}} className='mt-3 mb-3'><span style={{fontSize:'3rem'}}>{eval(correctAnswerCount*5)}/</span>50</p>
            <div className='d-flex justify-content-center align-items-center mt-3'>
              <p className='me-4'>Correct Answers : <span className='text-danger fs-5'>{ correctAnswerCount }</span></p>
              <p>Wrong Answers : <span className='text-success fs-5'>{ wrongAnswerCount }</span></p>
            </div>
            <button className='btn btn-primary mt-3' onClick={handleClick}>Play Again</button>
        </div>
      </div>
    </div>
  )
}

export default Win