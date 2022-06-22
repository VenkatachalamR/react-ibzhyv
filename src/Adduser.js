import React, { useEffect, useState } from 'react';
import axios from 'axios';

const Adduser = () => {
  const [submitting, setSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    name: "react1",
    email: "react1@gm.com",
    gender: "male",
    status: "active"
  });

  const handleSubmit = event => {
    event.preventDefault();
    console.log(formData);
    setSubmitting(true);

    axios.post('https://gorest.co.in/public/v2/users',formData,{
      headers: {
        authorization: 'Bearer ae3916446821e0cf4e3c2a4f3842984dbaffa62abfcc63ebaba25415324f6308'
      }
    })
      .then(res=>{
        console.log(res);
      })

   setTimeout(() => {
     setSubmitting(false);
   }, 3000);
  }

  const handleChangeName = (e) => {
    setFormData({...formData, name: e.target.value});
  }

  const handleChangeEmail = (e) => {
    setFormData({...formData, email: e.target.value});
  }

  const handleChangeGender = (e) => {
    setFormData({...formData, gender: e.target.value});
  }

  const handleChangeStatus = (e) => {
    setFormData({...formData, status: e.target.value});
  }
  

  return (
    <div>
        {submitting &&
       <div>Submtting Form...</div>
     }
      <form onSubmit={handleSubmit}>
      <label>Name:</label>
      <input onChange​={handleChangeName} type="text" value={formData.name} />
      <label>Email:</label>
      <input onChange​={handleChangeEmail} type="text" value={formData.email} />
      <label>Gender:</label>
      <input onChange​={handleChangeGender} type="text" value={formData.gender} />
      <label>Status:</label>
      <input onChange​={handleChangeStatus} type="text" value={formData.status} />
      <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default Adduser;
