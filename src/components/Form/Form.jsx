import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faUser,
  faEnvelope,
  faLock,
  faCalendar,
} from "@fortawesome/free-solid-svg-icons";
import "./Form.css";
import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";

const Form = ({ setUserCreate }) => {
  //Extraigo las funciones del useForm
  const { register, handleSubmit, reset } = useForm();
  //State para el mensaje de error
  const [objEmpty, setObjEmpty] = useState(false);
  //Obj default
  const defaultValues = {
    first_name: "",
    last_name: "",
    email: "",
    password: "",
    birthday: "",
  };
  //Funcion de mi registros
  const onSubmit = (objRegister) => {
    //Validando el objRegister
    if (Object.values(objRegister).includes("")) {
      setObjEmpty(true);
      setTimeout(() => {
        setObjEmpty(false);
      }, 3000);

      return;
    }

    //Añado el obj a mi userCreate
    setUserCreate(objRegister);

    //Resetea el form
    reset(defaultValues);
  };
  return (
    <div className="form--container">
      <h2 className="form--h2">{"New User"}</h2>
      <form
        action=""
        className="form container"
        onSubmit={handleSubmit(onSubmit)}
      >
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
            {...register("first_name")}
          />
          <input
            className="campo--input"
            type="text"
            placeholder="last name"
            {...register("last_name")}
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
            {...register("email")}
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
            {...register("password")}
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
            {...register("birthday")}
          />
        </div>
        <input className="form--submit" type="submit" value="Upload" />
      </form>
    </div>
  );
};

export default Form;
