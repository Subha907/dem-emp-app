import React, { useState, useEffect } from 'react';
import { API, graphqlOperation } from 'aws-amplify';
import { listEmployees } from '../graphql/queries';
import { createEmployee } from '../graphql/mutations';
import './EmployeeTable.css';

const EmployeeTable = () => {
  const [employees, setEmployees] = useState([]);
  const [newEmployeeName, setNewEmployeeName] = useState('');
  const [newEmployeeLocation, setNewEmployeeLocation] = useState('');

  const fetchEmployees = async () => {
    try {
      const response = await API.graphql(graphqlOperation(listEmployees));
      const employeeData = response.data.listEmployees.items;
      const activeEmployees = employeeData.filter(employee => !employee._deleted);
      setEmployees(activeEmployees);
    } catch (error) {
      console.error('Error fetching employees', error);
    }
  };

  const addEmployee = async () => {
    try {
      const newEmployee = {
        empName: newEmployeeName,
        empLocation: newEmployeeLocation,
      };

      await API.graphql(graphqlOperation(createEmployee, { input: newEmployee }));

      // Reset the input fields
      setNewEmployeeName('');
      setNewEmployeeLocation('');

      // Fetch employees again to update the list
      fetchEmployees();
    } catch (error) {
      console.error('Error creating employee', error);
    }
  };

  useEffect(() => {
    fetchEmployees();
  }, []);

  return (
    <div className="employee-table-container">
      <h1>Employee List</h1>

      <table className="employee-table">
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Location</th>
          </tr>
        </thead>
        <tbody>
          {employees.map(employee => (
            <tr key={employee.id}>
              <td>{employee.id}</td>
              <td>{employee.empName}</td>
              <td>{employee.empLocation}</td>
            </tr>
          ))}
        </tbody>
      </table>

      <h2>Create Employee</h2>
      <div className="create-employee-form">
        <div className="form-group">
          <label>Name:</label>
          <input
            type="text"
            value={newEmployeeName}
            onChange={event => setNewEmployeeName(event.target.value)}
          />
        </div>
        <div className="form-group">
          <label>Location:</label>
          <input
            type="text"
            value={newEmployeeLocation}
            onChange={event => setNewEmployeeLocation(event.target.value)}
          />
        </div>
        <button className="create-button" onClick={addEmployee}>
          Create
        </button>
      </div>
    </div>
  );
};

export default EmployeeTable;
