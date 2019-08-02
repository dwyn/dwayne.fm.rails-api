import React from 'react';

const UserCard = (props) => (
  <div className="UserCard">
    myname: {props.userInfo.name} <br />
    myemail: {props.userInfo.email} <br />
    <br />
  </div>

)

export default UserCard