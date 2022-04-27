import axios from 'axios'

const putUser =async (objUser,id) => {

    const URL=`https://users-crud1.herokuapp.com/users/${id}/`
    const req=await axios.put(URL,objUser)
    return req
}

export default putUser