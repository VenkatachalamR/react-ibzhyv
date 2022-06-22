
import React, { useEffect, useState } from 'react';

const UsersListing = (props) => {
  
  const uu = props.items.usersList;
  const userlist = ( typeof (uu) != 'undefined') ? [...uu] : [];
  return (
<table><thead>
        <tr><th>ID</th><th>Name</th><th>Email</th><th>Gender</th><th>Status</th></tr></thead><tbody>
        {
          userlist.map((item) => 
<tr><td>{item.id}</td>
<td>{item.name}</td>
<td>{item.email}</td>
<td>{item.gender}</td>
<td>{item.status}</td>
</tr>

)
        }
        </tbody>
      </table>
  );
}

export default UsersListing;