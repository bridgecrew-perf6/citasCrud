import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faUser,
  faEnvelope,
  faLock,
  faCalendar,
} from "@fortawesome/free-solid-svg-icons";
import "../Form/Form.css";
import { useEffect, useState } from "react";

const FormEdit = ({ setModeEdit, userEdit, setUserCreateEdit }) => {
  //State para el mensaje de error
  const [objEmpty, setObjEmpty] = useState(false);
  //Estados para el modo edit
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [birthday, setBirthday] = useState("");

  //Para que se llene los inputs
  useEffect(() => {
    if (userEdit.id) {
      setFirstName(userEdit.first_name);
      setLastName(userEdit.last_name);
      setEmail(userEdit.email);
      setPassword(userEdit.password);
      setBirthday(userEdit.birthday);
    }
  }, []);

  //Funcion de mi registros
  const validSubmit = () => {
    const objRegister = {
      first_name: firstName,
      last_name: lastName,
      email,
      password,
      birthday
    };
    //Validando el objRegister
    if (Object.values(objRegister).includes("")) {
      setObjEmpty(true);
      setTimeout(() => {
        setObjEmpty(false);
      }, 3000);

      return;
    }

    setUserCreateEdit(objRegister);
    setModeEdit(false);
    //Limpiar obj y values
    setFirstName("");
    setLastName("");
    setEmail("");
    setPassword("");
    setBirthday("");
  };
  return (
    <div className="form--container">
      <h2 className="form--h2">{"Edit User"}</h2>
      <form action="" className="form container" onSubmit={validSubmit}>
        {objEmpty ? (
          <p className="form--error">Todos los campos son necesarios</p>
        ) : (
          ""
        )}
        <div className="campo">
          <label htmlFor="name">
            <FontAwesomeIcon icon={faUser} />
          </label>
          <input
            className="campo--input"
            id="name"
            type="text"
            placeholder="first name"
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
          />
          <input
            className="campo--input"
            type="text"
            placeholder="last name"
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
          />
        </div>
        <div className="campo">
          <label htmlFor="email">
            <FontAwesomeIcon icon={faEnvelope} />
          </label>
          <input
            className="campo--input"
            id="email"
            type="email"
            placeholder="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div className="campo">
          <label htmlFor="password">
            <FontAwesomeIcon icon={faLock} />
          </label>
          <input
            className="campo--input"
            id="password"
            type="password"
            placeholder="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <div className="campo">
          <label htmlFor="date">
            <FontAwesomeIcon icon={faCalendar} />
          </label>
          <input
            className="campo--input"
            type="date"
            id="date"
            value={birthday}
            onChange={(e) => setBirthday(e.target.value)}
          />
        </div>
        <input className="form--submit" type="submit" value="Upload" />
      </form>
    </div>
  );
};

export default FormEdit;
