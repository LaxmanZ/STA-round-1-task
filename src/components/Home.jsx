import React from 'react';
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import Table from './Table';
import '../styles/home.css';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div className="home">
      <div className="homeTop">
        <h2>Student Directories</h2>
        <button className="headerButton">
          <Link
            style={{ textDecoration: 'none', color: '#fff' }}
            to="/addstudent"
          >
            + Add Student
          </Link>
        </button>
      </div>
      <button className="inputField">
        <SearchOutlinedIcon className="search-icon" />
        <input type="text" className="search-input" placeholder="Search" />
      </button>
      <Table />
    </div>
  );
};

export default Home;
