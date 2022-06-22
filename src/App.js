import React from 'react';
import { useEffect, useState } from 'react';
import UsersListing from './Userslist.js';
import Adduser from './Adduser.js';
import axios from 'axios';
import './style.css';

export default function App() {
  const [users, setUsers] = useState({});
  useEffect(() => {
    axios.get('https://gorest.co.in/public/v2/users',{
      headers: {
        authorization: 'Bearer ae3916446821e0cf4e3c2a4f3842984dbaffa62abfcc63ebaba25415324f6308'
      }
    }).then((res) => {
      const usersList = res.data;
      setUsers({ usersList });
    });
  }, []);

  return (
    <div>
      <h1>Users List</h1>
      <button>Add User</button>
      <Adduser />
      <UsersListing items={users} />
    </div>
  );
}


