import React, { useEffect, useState } from 'react';
import StudentTable from './StudentTable';
import sampledata from '../sample.json';

const Table = () => {
  const [studentData, setStudentData] = useState([]);

  useEffect(() => {
    // Fetch data from the JSON file
    setStudentData(sampledata.student);
  }, []);

  return (
    <div style={{ marginTop: 20 }}>
      <StudentTable data={studentData} />
    </div>
  );
};

export default Table;
