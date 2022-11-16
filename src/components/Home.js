import React, { useState } from 'react'
import { formatTime } from '../utils/Format'
import useTimer from '../utils/Timer'
import Task from './Task'
export default function Home () {
  const {
    timer,
    isActive,
    isPaused,
    handleStart,
    handlePause,
    handleReset
  } = useTimer(0)
  const [taskTitle, setTaskTitle] = useState('')
  const [taskDescription, setTaskDescription] = useState('')
  const [taskList, setTaskList] = useState([])
  return (
    <>
      <div className='container-fluid py-2'>
        <div className='col pb-2 border-bottom position-fixed w-100 start-0 end-0'>
          <div className='d-flex justify-content-evenly align-items-center'>
            <h3 className='text-white d-inline'>{formatTime(timer)}</h3>
            <button
              type='button'
              className='btn btn-primary'
              onClick={handleStart}
              disabled={isActive && isPaused}
            >
              Start
            </button>
            <button
              type='button'
              className='btn btn-danger'
              onClick={handlePause}
              disabled={!isPaused}
            >
              Stop
            </button>
            <button
              type='button'
              className='btn btn-warning'
              data-bs-toggle='modal'
              data-bs-target='#exampleModal'
            >
              Save
            </button>
          </div>
        </div>

        <div className='col text-white mt-5'>
          <h1 className=''>Task List 📃</h1>
          {taskList?.length ?
           <div className='overflow-auto mt-2' style={{height:"76vh"}}>
           {taskList?.map((item, i) => (
             <div
               className='taskBar my-2 p-2 rounded shadow ooverflow-aut text-wrap text-break'
               key={`${item?.timer + i}`}
             >
               <span className='float-end d-inline-block text-light fw-bold bg-primary rounded-pill px-2'>
               <strong className='fs-6 me-1'>{"⌚"}</strong>{item?.timer}
               </span>
               <h3>{item?.taskTitle}</h3>
               <p>
                 <button
                   className='btn btn-primary'
                   type='button'
                   data-bs-toggle='collapse'
                   data-bs-target={`#id${i}`}
                   aria-expanded='false'
                   aria-controls='collapseExample'
                 >
                   View Description
                 </button>
               </p>
               <div className='collapse' id={`id${i}`}>
                 <div className='card card-body text-dark'>
                   {item?.taskDescription}
                 </div>
               </div>
             </div>
           ))}
         </div>
         : (
            <h3 className='text-dark text-center mt-5 bg-warning rounded py-3'>
              Ups, No task yet. Please add some task.
            </h3>
          )}
         
         
        </div>

        <footer className='bg-light p-2 w-100  position-fixed bottom-0 start-0 end-0 text-center'>
          <a
            href='https://starlit-gingersnap-479050.netlify.app/'
            className='text-primary fw-bold'
          >
            Visit my Portfolio
          </a>
          <span className='text-danger ms-3'>©️ 2022 Ashish </span>
          <span className='text-primary ms-3 fw-bold'>Made by ❤️</span>
        </footer>
      </div>

      <Task
        props={{
          taskTitle,
          setTaskTitle,
          taskDescription,
          setTaskDescription,
          timer,
          taskList,
          setTaskList,
          handleReset
        }}
      />
    </>
  )
}
