import React from 'react'
import Employee from './Employee'
import './Employees.css'

const Employees = () => {
  const employees = [
    { name: 'Bob', position: 'Manager', salary: '2847', status: 'Active' },
    { name: 'Val', position: 'Developer', salary: '2764', status: 'Active' },
    { name: 'Ken', position: 'Designer', salary: '1256', status: 'Active' },
    { name: 'Tim', position: 'Developer', salary: '7412', status: 'Active' },
    { name: 'Sal', position: 'Designer', salary: '8966', status: 'Not Active' },
    { name: 'Gab', position: 'Manager', salary: '5267', status: 'Active' },
    { name: 'Dan', position: 'Designer', salary: '4532', status: 'Active' },
    { name: 'Jon', position: 'Designer', salary: '2112', status: 'Active' },
    { name: 'Nic', position: 'Developer', salary: '1234', status: 'Active' },
    { name: 'Ron', position: 'Designer', salary: '7885', status: 'Not Active' },
  ]

  return (
    <div>
      <table>
        <thead>
          <tr>
            <th>No.</th>
            <th>Name</th>
            <th>Position</th>
            <th>Salary</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody>
          {employees.map((employee, index) => (
            <Employee
              index={index}
              name={employee.name}
              position={employee.position}
              salary={employee.salary}
              status={employee.status}
            />
          ))}
        </tbody>
      </table>
    </div>
  )
}

export default Employees
