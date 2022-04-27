import axios from "axios";

const postUser =async (user) => {
   const URL="https://users-crud1.herokuapp.com/users/"
   const req=await axios.post(URL,user)
   return req
}

export default postUser