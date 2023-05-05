import React from 'react';

const Student = ({ student, onEdit, onDelete }) => {
  return (
    <tr>
      <td>{student.name}</td>
      <td>{student.email}</td>
      <td>{student.phone}</td>
      <td>{student.status ? 'Active' : 'Inactive'}</td>
      <td>
        <button onClick={() => onEdit(student)}>Edit</button>
        <button onClick={() => onDelete(student)}>Delete</button>
      </td>
    </tr>
  );
};

export default Student;
