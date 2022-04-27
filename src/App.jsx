import { useState, useEffect } from "react";
import logo from "./logo.svg";
import Form from "./components/Form/Form";
import FormEdit from "./components/FormEdit/FormEdit";
import ListUsers from "./components/ListUsers/ListUsers";
import getAllUsers from "./services/getAllUsers";
import postUser from "./services/postUser";
import deleteUser from "./services/deleteUser";
import putUser from "./services/putUser";


function App() {
  //Estado de todos mis usuarios
  const [users, setUsers] = useState([]);
  const [userCreate, setUserCreate] = useState({});
  const [trashUser, setTrashUser] = useState(0);
  const [userEdit, setUserEdit] = useState({});
  const [userCreateEdit, setUserCreateEdit] = useState({});
  const [modeEdit, setModeEdit] = useState(false);
  //Pido todos los usuarios y seteo users
  useEffect(() => {
    getAllUsers().then((resp) => setUsers(resp.data));
  }, []);
  //Añado un user con el metodo post
  useEffect(() => {
    if (userCreate.first_name) {
      postUser(userCreate).then((resp) => setUsers([...users, resp.data]));
      setUserCreate({});
    }
  }, [userCreate]);
  //Eliminar usuario
  useEffect(() => {
    if (trashUser !== 0) {
      const usersActu = users.filter((user) => user.id !== trashUser);
      setUsers(usersActu);
      deleteUser(trashUser)
        .then((resp) => console.log(resp))
        .catch((error) => console.log(error));
      setTrashUser(0);
    }
  }, [trashUser]);
  
  //Editar usuario
  useEffect(()=>{

    if (userEdit.id && userCreateEdit.first_name) {
      putUser(userCreateEdit,userEdit.id).then((resp)=>{
        const usersEdit=users.map((user)=>{
          if (user.id===resp.data.id) {
            return resp.data
          }
          return user
        })
        setUsers(usersEdit)
      })

      setUserEdit({})
    }
     
  },[userCreateEdit])

  return (
    <div className="App div--grid">
      {modeEdit ? (
        <FormEdit setModeEdit={setModeEdit} userEdit={userEdit} setUserCreateEdit={setUserCreateEdit}></FormEdit>
      ) : (
        <Form setUserCreate={setUserCreate}></Form>
      )}

      <ListUsers
        users={users}
        setTrashUser={setTrashUser}
        setModeEdit={setModeEdit}
        setUserEdit={setUserEdit}
        modeEdit={modeEdit}
      ></ListUsers>
    </div>
  );
}

export default App;
