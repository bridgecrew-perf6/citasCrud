import React from "react";
import User from "../User/User";
import "./ListUsers.css";
const ListUsers = ({ users, setTrashUser,setModeEdit,setUserEdit,modeEdit }) => {
  //Lista de usuarios
  const list = users.map((userList) => (
    <User
      userList={userList}
      setTrashUser={setTrashUser}
      users={users}
      setModeEdit={setModeEdit}
      setUserEdit={setUserEdit}
      modeEdit={modeEdit}
      key={userList.id}
    ></User>
  ));
  return (
    <div className="users-list">
      <div className="users"> {list}</div>
    </div>
  );
};

export default ListUsers;
