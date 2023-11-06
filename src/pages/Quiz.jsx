import React, { useState } from 'react'
import Question from '../components/Question';
import { useNavigate } from 'react-router-dom';

function Quiz({checkAnswer}) {

  const [questionNumber, setQuestionNumber] = useState(1)
  const navigate = useNavigate()

  const data = [
    {
      id: 1,
      question: "What is React primarily used for?",
      options: [
        {
          option: "Server-side scripting",
          correct: false
        },
        {
          option: "Building user interfaces",
          correct: true
        },
        {
          option: "Data storage",
          correct: false
        },
        {
          option: "Machine learning",
          correct: false
        }
      ]
    },
    {
      id: 2,
      question: "Which method is used to update the state in a React component?",
      options: [
        {
          option: "this.forceUpdate()",
          correct: false
        },
        {
          option: "this.setState()",
          correct: true
        },
        {
          option: "this.updateState()",
          correct: false
        },
        {
          option: "this.modifyState()",
          correct: false
        }
      ]
    },
    {
      id: 3,
      question: "In React, what is the virtual DOM used for?",
      options: [
        {
          option: "Rendering components to the real DOM",
          correct: false
        },
        {
          option: "Managing state",
          correct: false
        },
        {
          option: "Handling HTTP requests",
          correct: false
        },
        {
          option: "Optimizing DOM updates",
          correct: true
        }
      ]
    },
    {
      id: 4,
      question: "What is JSX in React?",
      options: [
        {
          option: "JavaScript XML",
          correct: true
        },
        {
          option: "JavaScript Extensions",
          correct: false
        },
        {
          option: "JavaScript XHR",
          correct: false
        },
        {
          option: "JavaScript External Syntax",
          correct: false
        }
      ]
    },
    {
      id: 5,
      question: "What is the purpose of props in a React component?",
      options: [
        {
          option: "To define the component's state",
          correct: false
        },
        {
          option: "To define the component's methods",
          correct: false
        },
        {
          option: "To pass data from a parent component to a child component",
          correct: true
        },
        {
          option: "To define the component's style",
          correct: false
        }
      ]
    },
    {
      id: 6,
      question: "Which lifecycle method is invoked immediately after a component is inserted into the DOM?",
      options: [
        {
          option: "componentDidMount",
          correct: true
        },
        {
          option: "componentWillMount",
          correct: false
        },
        {
          option: "componentDidUpdate",
          correct: false
        },
        {
          option: "componentWillUnmount",
          correct: false
        }
      ]
    },
    {
      id: 7,
      question: "How can you conditionally render components in React?",
      options: [
        {
          option: "Using the if statement",
          correct: false
        },
        {
          option: "Using the for loop",
          correct: false
        },
        {
          option: "Using the switch statement",
          correct: false
        },
        {
          option: "Using the {condition ? component : null} pattern",
          correct: true
        }
      ]
    },
    {
      id: 8,
      question: "What is the purpose of the key prop when rendering a list of components in React?",
      options: [
        {
          option: "It sets the component's background color",
          correct: false
        },
        {
          option: "It identifies each component uniquely in the list",
          correct: true
        },
        {
          option: "It defines the component's font size",
          correct: false
        },
        {
          option: "It determines the component's z-index",
          correct: false
        }
      ]
    },
    {
      id: 9,
      question: "In React, what is the recommended way to make AJAX requests?",
      options: [
        {
          option: "Using fetch()",
          correct: true
        },
        {
          option: "Using jQuery.ajax()",
          correct: false
        },
        {
          option: "Using XMLHttpRequest",
          correct: false
        },
        {
          option: "Using async/await",
          correct: false
        }
      ]
    },
    {
      id: 10,
      question: "Which library or tool can be used for routing in a React application?",
      options: [
        {
          option: "React Router",
          correct: true
        },
        {
          option: "Redux",
          correct: false
        },
        {
          option: "Axios",
          correct: false
        },
        {
          option: "Lodash",
          correct: false
        }
      ]
    }
  ];


  const handleQuit = () => {
    navigate('/')
  }

  return (
    <div style={{ width: '100%' }} className='p-3 d-flex align-items-center justify-content-center'>
      <div style={{ width: '60rem' }} className='p-2 d-flex flex-column justify-content-center align-items-center' >
        <div style={{ background: 'linear-gradient(to right, #02fab0,#02c8fa)' }} className='px-4 py-2  rounded-pill shadow'>
          <h2 className='text-center text-white'>EasyQuiz</h2>
        </div>
        <div className='w-100 bg-white mt-4 p-5 fw-bold rounded shadow '>

          <Question
            data={data}
            questionNumber={questionNumber}
            setQuestionNumber={setQuestionNumber}
            checkAnswer={checkAnswer}
          />
          <div className='w-100 d-flex justify-content-end align-items-center'>
            <button style={{ width: '120px', height: '45px', background: 'linear-gradient(to right, #02fab0,#02c8fa)' }} className='btn mt-4 text-danger shadow border-0 fw-bold' onClick={handleQuit}>Quit</button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Quiz