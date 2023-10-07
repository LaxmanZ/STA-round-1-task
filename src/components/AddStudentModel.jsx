import React, { useState } from 'react';
import '../styles/addstudentmodel.css';
import { Link } from 'react-router-dom';

const AddStudentModal = ({ isOpen, onClose, onAddStudent }) => {
  const [formData, setFormData] = useState({
    studentName: '',
    dob: '',
    gender: '',
    fatherName: '',
    motherName: '',
    email: '',
    phoneNumber: '',
    address: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = () => {
    if (
      formData.studentName === '' ||
      formData.dob === '' ||
      formData.gender === '' ||
      formData.fatherName === '' ||
      formData.motherName === '' ||
      formData.email === '' ||
      formData.phoneNumber === '' ||
      formData.address === ''
    ) {
      alert('Please fill in all required fields.');
      return;
    }
    const dobDate = new Date(formData.dob);
    const currentDate = new Date();
    const ageInYears = Math.floor(
      (currentDate - dobDate) / (365.25 * 24 * 60 * 60 * 1000)
    );

    if (ageInYears < 3) {
      alert('Student must be at least 3 years old.');
      return;
    }
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      alert('Please enter a valid email address.');
      return;
    }
    if (!/^\d{10}$/.test(formData.phoneNumber)) {
      alert('Please enter a valid 10-digit phone number.');
      return;
    }

    onAddStudent(formData);

    setFormData({
      studentName: '',
      dob: '',
      gender: '',
      fatherName: '',
      motherName: '',
      email: '',
      phoneNumber: '',
      address: '',
    });

    onClose();
  };

  return (
    <div className={`modal ${isOpen ? 'is-active' : ''}`}>
      <div className="modal-background"></div>
      <div className="modal-card">
        <header className="modal-card-head">
          <p className="modal-card-title">Add Student Modal</p>
          <button
            className="delete"
            aria-label="close"
            onClick={onClose}
          ></button>
        </header>
        <section className="modal-card-body">
          <form>
            <div className="field">
              <label className="label">Student Name</label>
              <div className="control">
                <input
                  type="text"
                  className="input"
                  name="studentName"
                  value={formData.studentName}
                  onChange={handleChange}
                  required
                />
              </div>
            </div>
            <div className="field">
              <label className="label">Date of Birth</label>
              <div className="control">
                <input
                  type="date"
                  className="input"
                  name="dob"
                  value={formData.dob}
                  onChange={handleChange}
                  required
                />
              </div>
            </div>
            <div className="field">
              <label className="label">Gender</label>
              <div className="control">
                <div className="select">
                  <select
                    name="gender"
                    value={formData.gender}
                    onChange={handleChange}
                    required
                  >
                    <option value="">Select Gender</option>
                    <option value="male">Male</option>
                    <option value="female">Female</option>
                    <option value="other">Other</option>
                  </select>
                </div>
              </div>
            </div>
            <div className="field">
              <label className="label">Father Name</label>
              <div className="control">
                <input
                  type="text"
                  className="input"
                  name="fatherName"
                  value={formData.fatherName}
                  onChange={handleChange}
                  required
                />
              </div>
            </div>
            <div className="field">
              <label className="label">Mother Name</label>
              <div className="control">
                <input
                  type="text"
                  className="input"
                  name="motherName"
                  value={formData.motherName}
                  onChange={handleChange}
                  required
                />
              </div>
            </div>
            <div className="field">
              <label className="label">Email Id</label>
              <div className="control">
                <input
                  type="email"
                  className="input"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
              </div>
            </div>
            <div className="field">
              <label className="label">Phone Number</label>
              <div className="control">
                <input
                  type="tel"
                  className="input"
                  name="phoneNumber"
                  value={formData.phoneNumber}
                  onChange={handleChange}
                  required
                />
              </div>
            </div>
            <div className="field">
              <label className="label">Address</label>
              <div className="control">
                <input
                  type="text"
                  className="input"
                  name="address"
                  value={formData.address}
                  onChange={handleChange}
                  required
                />
              </div>
            </div>
          </form>
        </section>
        <footer className="modal-card-foot">
          <button className="headerButton" onClick={handleSubmit}>
            Submit
          </button>
          <button className="headerButton">
            <Link style={{ textDecoration: 'none', color: 'white' }} to="/">
              Go Back
            </Link>
          </button>
        </footer>
      </div>
    </div>
  );
};

export default AddStudentModal;
