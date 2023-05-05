import React, { useState } from 'react';
import StudentList from './StudentList';
import CreateStudent from './CreateStudent';
import EditStudent from './EditStudent';

const Dashboard = () => {
  const [students, setStudents] = useState([
    {
      id: 1,
      name: 'vino',
      email: 'vino@example.com',
      phone: '1234567890',
      status: true,
    },
    {
      id: 2,
      name: 'siva',
      email: 'siva@example.com',
      phone: '0987654321',
      status: true,
    },
    {
      id: 3,
      name: 'child',
      email: 'child@example.com',
      phone: '0987654567',
      status: false,
    },
  ]);

  const [editing, setEditing] = useState(false);
  const [selectedStudent, setSelectedStudent] = useState(null);

  const handleCreate = (student) => {
    setStudents([...students, { ...student, id: students.length + 1 }]);
  };

  const handleEdit = (student) => {
    setStudents(students.map((s) => (s.id === student.id ? student : s)));
    setSelectedStudent(null);
    setEditing(false);
  };

  const handleDelete = (student) => {
    setStudents(students.filter((s) => s.id !== student.id));
  };

  const handleEditClick = (student) => {
    setSelectedStudent(student);
    setEditing(true);
  };

  const handleCancel = () => {
    setSelectedStudent(null);
    setEditing(false);
  };

  return (
    <div>
      <h1>Student Management System</h1>
      {editing ? (
        <EditStudent student={selectedStudent} onUpdate={handleEdit} onCancel={handleCancel} />
      ) : (
        <>
          <CreateStudent onCreate={handleCreate} />
          <StudentList students={students} onEdit={handleEditClick} onDelete={handleDelete} />
        </>
      )}
    </div>
  );
};

export default Dashboard;