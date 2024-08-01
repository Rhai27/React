import React, { useState, useEffect } from 'react'
import Task from './Task'
import SearchFilter from './SearchFilter'
import './Tasks.css'

const Tasks = () => {
  const [tasks, setTasks] = useState([
    {
      description: 'Documenting',
      assignee: 'John',
      deadline: '08/18/2024',
      status: 'Pending',
    },
    {
      description: 'Configuring',
      assignee: 'Lisa',
      deadline: '08/21/2024',
      status: 'Completed',
    },
    {
      description: 'Coding',
      assignee: 'John',
      deadline: '08/24/2024',
      status: 'Pending',
    },
    {
      description: 'Development',
      assignee: 'Mike',
      deadline: '08/16/2024',
      status: 'Pending',
    },
    {
      description: 'Debugging',
      assignee: 'Jane',
      deadline: '08/29/2024',
      status: 'Completed',
    },
    {
      description: 'Testing',
      assignee: 'Lisa',
      deadline: '08/09/2024',
      status: 'Completed',
    },
    {
      description: 'Designing',
      assignee: 'Mike',
      deadline: '08/06/2024',
      status: 'Pending',
    },
    {
      description: 'Monitoring',
      assignee: 'Jane',
      deadline: '08/13/2024',
      status: 'Completed',
    },
    {
      description: 'Scripting',
      assignee: 'Lisa',
      deadline: '08/15/2024',
      status: 'Pending',
    },
    {
      description: 'Optimizing',
      assignee: 'Mike',
      deadline: '08/11/2024',
      status: 'Pending',
    },
  ])

  const [searchQuery, setSearchQuery] = useState('')
  const [filteredTasks, setFilteredTasks] = useState(tasks)

  useEffect(() => {
    const lowerCaseQuery = searchQuery.toLowerCase()
    const filtered = tasks.filter((task, index) => {
      return (
        task.description.toLowerCase().includes(lowerCaseQuery) ||
        task.assignee.toLowerCase().includes(lowerCaseQuery) ||
        task.deadline.includes(lowerCaseQuery) ||
        task.status.toLowerCase().includes(lowerCaseQuery) ||
        (index + 1).toString().includes(lowerCaseQuery)
      )
    })
    setFilteredTasks(filtered)
  }, [searchQuery, tasks])

  const toggleTaskStatus = description => {
    setTasks(prevTasks =>
      prevTasks.map(task =>
        task.description === description
          ? {
              ...task,
              status: task.status === 'Pending' ? 'Completed' : 'Pending',
            }
          : task
      )
    )
  }

  return (
    <div>
      <SearchFilter searchQuery={searchQuery} setSearchQuery={setSearchQuery} />
      <ul className="task_grid">
        {filteredTasks.map((task, index) => (
          <Task
            key={index}
            index={index + 1}
            description={task.description}
            assignee={task.assignee}
            deadline={task.deadline}
            status={task.status}
            toggleStatus={() => toggleTaskStatus(task.description)}
          />
        ))}
      </ul>
    </div>
  )
}

export default Tasks
