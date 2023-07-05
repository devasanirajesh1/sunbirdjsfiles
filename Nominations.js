import React, { useState, useEffect } from 'react';
import axios from 'axios';
import MaterialTable, { MTableToolbar } from 'material-table';
import RaiseNeed from '../Modifyneed/modifyNeed';
import RaiseNeedabc from '../Modifyneed/modifyNeed';


const Nominations = props => {
  const [data,setData] = useState({})

  const [userId,setUserId] = useState({})
  const [dataNomination,setDataNomination] = useState([]);
  const [dataUsers,setDataUsers] = useState([]);
  const [dataProfile,setDataUserProfile] = useState([]);

  useEffect(()=> {
    axios.get('http://localhost:3031/Nomination').then(
      response => setDataNomination(Object.values(response.data))
    );
    axios.get('http://localhost:3031/Users').then(
      response => setDataUsers(Object.values(response.data))
    )
    axios.get('http://localhost:3031/UserProfile').then(
      response => setDataUserProfile(Object.values(response.data))
    )
  },[props.statusPopup])

  // const [dataNomination,setDataNomination] = useState([]);
  // const [dataUsers,setDataUsers] = useState([]);
  // const [dataProfile,setDataUserProfile] = useState([]);



  const columns = [
    { title: 'Volunteer Name', field: 'numvlntr' },
    { title: 'Location', field: 'Location' },
    { title: 'Date of Birth', field: 'dateofbirth' },
    { title: 'Contact Info', field: 'contactinfo' },
    { title: 'Skills', field: 'skills' },
    { title: 'Status', field: 'status' },
  ];





  return (
    <div className="wrapNeedTable">
    <div className="needTable">
     <MaterialTable title="" 
        data={ data }
        columns={ columns }
        enableRowSelection
       

        options={ {selection:true,search:true, paging:true, sorting:true} }
        components={{
          Toolbar: (props) => (
            <div
              style={{
                display: "flex",
                justifyContent: "left"
              }}
            >
              <MTableToolbar {...props} />
            </div>
          )
        }}
      />
    </div>
    </div>
  );
};

export default Nominations;
