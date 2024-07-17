import React from 'react'

const Employee = ({ index, name, position, salary, status }) => {
  return (
    <tr>
      <td>{index + 1}</td>
      <td>{name}</td>
      <td>{position}</td>
      {status === 'Active' ? <td>{salary}</td> : <td></td>}
      <td>{status}</td>
    </tr>
  )
}

export default Employee
