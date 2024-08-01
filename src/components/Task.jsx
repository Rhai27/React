import React from 'react'

const Task = ({
  index,
  description,
  assignee,
  deadline,
  status,
  toggleStatus,
}) => {
  return (
    <div className="task_tile">
      <li>
        <div className="task_dtl">
          No. {index} <br />
          Task Description: {description} <br />
          Assignee: {assignee} <br />
          {status === 'Pending' ? (
            <span>
              Deadline: {deadline}
              <br />
              Status: <span style={{ color: 'yellow' }}>{status}</span>
            </span>
          ) : (
            <span>
              Status: <span style={{ color: 'green' }}>{status}</span>
            </span>
          )}
        </div>
        <div className="task_btncon">
          <button className="task_statusbtn" onClick={toggleStatus}>
            Toggle Status
          </button>
        </div>
      </li>
    </div>
  )
}

export default Task
