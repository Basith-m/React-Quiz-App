import React, { useEffect, useState } from 'react'
import './Question.css'
import { useNavigate } from 'react-router-dom'

function Question({ data, questionNumber, setQuestionNumber, checkAnswer }) {

    const navigate = useNavigate()

    const [question, setQuestion] = useState(null)
    const [selectedOption, setSelectedOption] = useState(null)
    const [className, setClassName] = useState("answer")
    const [correctCount, setCorrectCount] = useState(0)
    const [wrongCount, setWrongCount] = useState(0)

    const delay = (duration, callback) => {
        setTimeout(() => {
            callback();
        }, duration)
    };

    useEffect(() => {
        if (question && question.id === 10) {
            checkAnswer(correctCount, wrongCount)
        }
    }, [question, correctCount, wrongCount, checkAnswer, navigate])

    const handleClick = (a) => {
        setSelectedOption(a);
        setClassName(a.correct ? "answer correct" : "answer wrong")
        if(a.correct)
        {
            setCorrectCount(prev => prev + 1)
        }
        else{
            setWrongCount(prev => prev + 1) 
        }

        delay(1500, () => {
            if (a && question.id < 10) {
                setQuestionNumber(prev => prev + 1)
                setSelectedOption(null)
            }
            else{
                navigate('/win')
            }
        })
    }

    useEffect(() => {
        setQuestion(data[questionNumber - 1])
    }, [data, questionNumber])

    return (
        <div>
            <p className='mb-3'><span style={{ fontSize: '1.4rem' }}>{question?.id <= 9 ? `0${question?.id}` : question?.id}/10</span></p>
            <div className='question'>
                <p style={{ fontSize: '1.5rem' }} className='mt-3 mb-3 '>{question?.question}</p>
            </div>
            <div className='answers p-2'>
                {
                    question?.options.map((ans, index) => (
                        <div key={index} className={
                            selectedOption === ans ? `${className} px-3 py-2 rounded shadow mt-4`
                                :
                                'answer px-3 py-2 rounded shadow mt-4 d-flex align-items-center'
                        }
                            onClick={() => handleClick(ans)}>
                            <p>{index + 1}. {ans.option}</p>
                        </div>
                    ))
                }

            </div>
        </div>
    )
}

export default Question