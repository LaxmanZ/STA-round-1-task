import React, { useState } from 'react';
import AddStudentModal from './AddStudentModal';
import StudentTable from './StudentTable';

const StudentDirectory = () => {
  const [students, setStudents] = useState([]);

  const handleAddStudent = (newStudent) => {
    // Add the new student to the list of students
    setStudents([...students, newStudent]);
  };

  const handleDeleteStudent = (studentId) => {
    // Remove the student with the given ID from the list
    const updatedStudents = students.filter(
      (student) => student.studentId !== studentId
    );
    setStudents(updatedStudents);
  };

  return (
    <div>
      <AddStudentModal onAddStudent={handleAddStudent} />
      <StudentTable data={students} onDeleteStudent={handleDeleteStudent} />
    </div>
  );
};

export default StudentDirectory;
