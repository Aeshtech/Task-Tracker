import React from 'react'
import { formatTime } from '../utils/Format'

export default function Task ({ props }) {
  const handleSaveTask = () => {
    props?.setTaskList([...props?.taskList, {
        timer:formatTime(props?.timer), taskDescription:props?.taskDescription, taskTitle:props?.taskTitle
    }])
    props?.setTaskDescription("");
    props?.setTaskTitle("");
    props?.handleReset();
    document.getElementById("taskModal").click();
  }

  return (
    <>
      <div
        className='modal fade'
        id='exampleModal'
        tabIndex='-1'
        aria-labelledby='exampleModalLabel'
        aria-hidden='true'
      >
        <div className='modal-dialog'>
          <div className='modal-content'>
            <div className='modal-header'>
              <h5 className='modal-title' id='exampleModalLabel'>
                Create Task
              </h5>
              <button
                type='button'
                className='btn-close'
                data-bs-dismiss='modal'
                aria-label='Close'
              ></button>
            </div>
            <div className='modal-body'>
              <div className=''>
                <input
                  type='text'
                  placeholder='Please write task title'
                  name='taskTitle'
                  value={props?.taskTitle}
                  className='form-control mb-3'
                  onChange={e => props?.setTaskTitle(e.target.value)}
                />
                <textarea
                  className='form-control'
                  placeholder='Please write task description'
                  name='taskDescription'
                  rows={5}
                  value={props?.taskDescription}
                  onChange={e => props?.setTaskDescription(e.target.value)}
                />
              </div>
            </div>
            <div className='modal-footer d-flex justify-content-between'>
              <button
                type='button'
                className='btn btn-secondary'
                data-bs-dismiss='modal'
                id="taskModal"
              >
                Close
              </button>
              <button type='button' className='btn btn-primary' onClick={handleSaveTask}>
                Save Task
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
