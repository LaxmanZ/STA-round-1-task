import React from 'react';
import Paper from '@mui/material/Paper';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import IconButton from '@mui/material/IconButton';
import DeleteIcon from '@mui/icons-material/Delete';

const columns = [
  { id: 'studentId', label: 'Student ID' },
  { id: 'studentName', label: 'Student Name' },
  { id: 'dateOfBirth', label: 'Date of Birth' },
  { id: 'phoneNumber', label: 'Phone Number' },
  { id: 'gender', label: 'Gender' },
  { id: 'fatherName', label: 'Father Name' },
  { id: 'motherName', label: 'Mother Name' },
  { id: 'emailId', label: 'Email ID' },
  { id: 'actions', label: 'Actions' },
];

const cellStyle = {
  padding: '10px',
  whiteSpace: 'nowrap',
};

function StudentTable({ data }) {
  const handleDelete = (studentId) => {
    console.log(`Delete student with ID: ${studentId}`);
  };

  return (
    <TableContainer component={Paper}>
      <Table>
        <TableHead>
          <TableRow>
            {columns.map((column) => (
              <TableCell key={column.id}>{column.label}</TableCell>
            ))}
          </TableRow>
        </TableHead>
        <TableBody>
          {data.map((student) => (
            <TableRow key={student.studentId}>
              {columns.map((column) => (
                <TableCell key={column.id} style={cellStyle}>
                  {column.id === 'actions' ? (
                    <IconButton
                      color="error"
                      onClick={() => handleDelete(student.studentId)}
                    >
                      <DeleteIcon />
                    </IconButton>
                  ) : column.id === 'studentName' ? (
                    <div
                      style={{
                        display: 'flex',
                        alignItems: 'center',
                      }}
                    >
                      <img
                        src={student.profileImageUrl}
                        alt={student.studentName}
                        width="30"
                        height="30"
                        style={{ marginRight: '5px', borderRadius: '50%', objectFit: 'cover' }}
                      />
                      {student[column.id]}
                    </div>
                  ) : column.id === 'phoneNumber' ? (
                    <span style={{ marginLeft: '5px' }}>
                      {student[column.id]}
                    </span>
                  ) : (
                    student[column.id]
                  )}
                </TableCell>
              ))}
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}

export default StudentTable;
