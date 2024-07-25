import React, { useState, useEffect } from 'react';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import axios from 'axios';
import './modifyNeed.css';
import { Redirect } from 'react-router';
import NeedsList from '../NeedsList/NeedsList'; // Import the NeedsList component
import Nominations from '../Nominations/Nominations';

const RaiseNeed = props => {
  const { name, entityId, needTypeId, description, skillsreq, preq } = props.data;

  const [formData, setFormData] = useState({
    name: name || '',
    entityId: entityId || '',
    needTypeId: needTypeId || '',
    description: description || '',
    preq: preq || '',
    skillsreq: skillsreq || '',
  });

  const [selectedTab, setSelectedTab] = useState('RaiseNeed'); // Default to RaiseNeed tab

  var toolbarOptions = [
    ['bold', 'italic', 'underline', 'strike'],
    [{ list: 'ordered' }, { list: 'bullet' }],
  ];

  const rajesh = [
  ]

  const module = {
    toolbar: toolbarOptions,
  };

  const handleQuillEdit = value => {
    setFormData({ ...formData, description: value });
  };

  const changeHandler = e => {
    setFormData({ ...formData, [e.

  const submitHandler = e => {
    e.preventDefault();
    props.handleRowUpdate(formData);
    console.log(formData)
  };

  const [home, setHome] = useState(false);
  if (home) {
    return <Redirect to="/needs" />;
  }

  return (
    <div className="wrapRaiseNeed">
      <div className="btnClose">
        <="raiseNeed">
        <div className="raiseNeedBar">
          <div className="wrapNeedBar">
            <div className="tabButtons">
              <button onClick={() => setSelectedTab('RaiseNeed')}>Need Info</button>
              <button onClick={() => setSelectedTab('NeedsList')}>Nominations</button>
            </div>
          </div>
        </div>
        
        <div className="raiseNeedContent">
      
          {selectedTab === 'RaiseNeed' ? (
            <div className="raiseNeedForm" >
                  <div className="wrapBtnRaiseNeed">
                  <button className="btnRaiseNeed" type="submit" form="myForm" onSubmit={submitHandler}>
                    modify 
                  </button>
                </div>
              <form className="needForm" onSubmit={submitHandler}>
                <div className="formLeftSide">
               put
                      type="text"
                      placeholder="Ex. Avila Beach Cleaning"
                      name="name"
                      value={formData.name}
                      onChange={changeHandler}
                    />
                  </div>
                  <div className="itemDescrip">
                    <label>Need Description</label>
                    <div className="itemDescripText">
                      <ReactQuill
                        modules={module}
                        placeholder="Write a small brief about the Need"
                        theme="snow"
                        value={formData.description}
                        onChange={handleQuillEdit}
                        className="quillEdit"
                      />
                    </div>
                  </div>
                  <div className="itemForm">
                    <label>Prerequisites</label>
                    <input
                      type="text"
                      name="preq"
                      value={formData.preq}
                      onChange={changeHandler}
                    />
                  </div>
                </div>
                <div className="formRightSide">
                  <div className="itemForm">
                    <label>Need Type</label>
                    <select
                      className="selNeedType"
                      name="needTypeId"
                      value={for
                      <option value="" defaultValue>
                        Select Need type
                      </option>
                      {/* Add more options as needed */}
                    </select>
                  </div>
                  <div className="itemForm">
                    <label>Entity Name</label>
                    <input
                      type="text"
                      placeholder="Ex. Abdul Kalam Club"
                      name="entityId"
                      value={formData.entityId}
                      onChange={changeHandler}
                    />
                  </div>
                  <div className="itemForm">
                    <label>Skills Required</label>
                    <input
                      type="text"
                      placeholder="Add Skills"
                      name="skillsreq"
                      value={formData.skillsreq}
                      onChange={changeHandler}
                    />
                  </div>
                </div>             
              </form>
            </div>
          ) : (
            <NeedsListTable />
          )}
        </div>
      </div>
    </div>
  );
};

// Create a new component for the NeedsList table
const NeedsListTable = () => {
  // Add your NeedsList component content here or import it directly
  return <Nominations />;
};

export default RaiseNeed;
