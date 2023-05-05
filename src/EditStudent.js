import React, { useState, useEffect } from 'react';

const EditStudent = ({ student, onUpdate, onCancel }) => {
  const [name, setName] = useState(student.name);
  const [email, setEmail] = useState(student.email);
  const [phone, setPhone] =  useState(student.phone);
  const [status, setStatus] = useState(student.status);
  
  useEffect(() => {
  setName(student.name);
  setEmail(student.email);
  setPhone(student.phone);
  setStatus(student.status);
  }, [student]);
  
  const handleSubmit = (e) => {
  e.preventDefault();
  onUpdate({ id: student.id, name, email, phone, status });
  };
  
  return (
  <div>
  <h2>Edit Student</h2>
  <form onSubmit={handleSubmit}>
  <label>
  Name:
  <input type="text" value={name} onChange={(e) => setName(e.target.value)} />
  </label>
  <br />
  <label>
  Email:
  <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
  </label>
  <br />
  <label>
  Phone:
  <input type="tel" value={phone} onChange={(e) => setPhone(e.target.value)} />
  </label>
  <br />
  <label>
  Status:
  <input
  type="checkbox"
  checked={status}
  onChange={(e) => setStatus(e.target.checked)}
  />
  </label>
  <br />
  <button type="submit">Save</button>
  <button type="button" onClick={onCancel}>
  Cancel
  </button>
  </form>
  </div>
  );
  };
  
  export default EditStudent;
