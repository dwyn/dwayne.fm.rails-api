import React from 'react';

const UserCard = (props) => (
  <div className="UserCard">
    <h4>User Info</h4>
    user id: {props.userInfo.id} <br />
    myname: {props.userInfo.name} <br />
    myemail: {props.userInfo.email} <br />
    <br />
  </div>

)

export default UserCard