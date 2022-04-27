import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faTrash,
  faPencil,
  faCalendar,
} from "@fortawesome/free-solid-svg-icons";
import "./User.css";

const User = ({ userList, setTrashUser, users, setModeEdit, setUserEdit,modeEdit }) => {
  //Destructuracion de cada user
  const { first_name, last_name, email, birthday, id } = userList;

  //Funcion para setear el user a eliminar
  const userTrash = (idUser, e) => {
    e.preventDefault();
    if (modeEdit) {
      return
    }
    const userDelete = users.find((user) => user.id === idUser);
    setTrashUser(userDelete.id);
  };

  //Activa el modo editar
  const activeEdit = (idEdit, e) => {
    e.preventDefault();
    setUserEdit(users.find((user) => user.id === idEdit));
    setModeEdit(true);
  };

  return (
    <div className="user">
      <div className="user--info">
        <h3 className="user--h3">
          {first_name} {last_name}
        </h3>
        <p className="user--email">{email}</p>
        <p className="user--date">
          <FontAwesomeIcon icon={faCalendar} /> {birthday}
        </p>
      </div>
      <div className="user--icons">
        <a href="#">
          <FontAwesomeIcon
            icon={faTrash}
            className="icon-trash"
            onClick={(e) => userTrash(id, e)}
          />
        </a>
        <a href="#">
          <FontAwesomeIcon
            icon={faPencil}
            className="icon-edit"
            onClick={(e) => activeEdit(id, e)}
          />
        </a>
      </div>
    </div>
  );
};

export default User;
