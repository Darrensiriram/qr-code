import React, { useState } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import { FaUser, FaCalendarAlt, FaFileAlt, FaListAlt, FaHourglassHalf, FaClock } from 'react-icons/fa';
import './css/Form.css';
import { FaNoteSticky } from 'react-icons/fa6';

const FormComponent = () => {
  const [date, setDate] = useState(new Date());
  const [formData, setFormData] = useState({
    name: '',
    workorder: '',
    activity: '',
    timeSpent: '2',
    timeCode: 'AD',
    description: 'Meeting:Allstaff meeting with all of AIM'
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form Data:', formData);
    alert('Form Submitted Successfully!');
  };

  return (
    <div className="container">
      <div className="form-wrapper">
        <form onSubmit={handleSubmit}>
          <div>
            <FaUser />
            <select name="name" value={formData.name} onChange={handleChange} required>
              <option value="">AutomationTeam</option>
              <option value="2220921">Darren Siriram</option>
              <option value="xxx">Bryan de Kwant</option>
              <option value="xxx">Iustin Mujdei</option>
              <option value="xxx">Jessey Stoof</option>
              <option value="xx">Jits van Zuijlen</option>
              <option value="xx">Johan Vrijsen</option>
              <option value="xx">Laurentiu-Bogdan Moscalu</option>
             <option value="xxxx">Lucian Stefan Casiean</option>
            </select>
          </div>

          <div>
            <FaCalendarAlt />
            <DatePicker selected={date} onChange={(date) => setDate(date)} />
          </div>

          <div>
            <FaFileAlt />
            <select name="workorder" value={formData.workorder} onChange={handleChange} required>
                <option value="">Select Work Order</option>
                <option value="GECFL581.003">BE</option>
                <option value="GECNL581.003">NL</option>
                <option value="GECCO560.003">RO</option>
            </select>
            
          </div>

          <div>
            <FaListAlt />
            <select name="activity" value={formData.activity} onChange={handleChange} required>
              <option value="">Select Activity</option>
              <option value="">Activity 1</option>
                <option value="n/a">n/a</option>
            </select>
          </div>

          <div>
            <FaHourglassHalf />
            <input
              type="number"
              name="timeSpent"
              value={formData.timeSpent}
              onChange={handleChange}
              placeholder="Time Spent (hours)"
              required
            />
          </div>

          <div>
            <FaClock />
            <input
              type="text"
              name="timeCode"
              value={formData.timeCode}
              onChange={handleChange}
              placeholder="Time Code"
              required
            />
          </div>

          <div>
            <FaNoteSticky />
            <textarea
              name="description"
              value={formData.description}
              onChange={handleChange}
              placeholder="Description"
              readOnly
            ></textarea>
          </div>

          <button type="submit">Submit</button>
        </form>
      </div>
    </div>
  );
};

export default FormComponent;
