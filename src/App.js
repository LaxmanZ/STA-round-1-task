import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './components/Home';
import Footer from './components/Footer';
import AddStudentModal from './components/AddStudentModel';

const App = () => {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="addstudent" element={<AddStudentModal />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
};

export default App;
