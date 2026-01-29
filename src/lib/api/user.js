/**
 * User.js
 * Defines User data
 * 
 */


/**
 * 
 * @typedef {Object} data - payload
 * @property {String} id - id
 * ......others
 * 
 * @returns {Promise<Boolean>}
 */
export const UserRegister = async (data)=>{
    let res = await fetch('/api/auth/register',{
        method: "post",
        "body": data.stringify(),
    })

    if(res.ok){
        return res.json();
    }else{
        return Error("Submission problem");
    }
}

/**
 * 
 * @typedef {Object} data 
 * @returns {Promise<Boolean>}
 */
export const UserLogin = async (data) => {
    let res = await fetch('/api/auth/login',{
        method: "post",
        "body": data,
    })

    if(!res.ok){
        throw new Error("Error fetching data");
    }

    return res.json()
}

/**
 * 
 * @param {String} id 
 * @returns {Promise<Object>} - User Data
 */
export const GetUser = async (id) => {
    let res = await fetch(`/api/users/${id}`)

    if(!res.ok){
        throw new  Error("Submission problem");
    }

    return res.json()
}


/**
 * 
 * @typedef {Object} data - payload
 * @param {String} id - User Id
 * @returns {Promise<Boolean>}
 */
export const UpdateUser = async (data,id) => {
    let res = await fetch(`/api/users/${id}`,{
        method : "PUT",
        body : data
    })

    if(!res.ok){
        throw new Error("Submission problem");
    }

    return res.json();
}

/**
 * 
 * @param {String} id - User Id
 * @returns {Promise<boolean>}
 */
export const DeleteUser = async (id) => {
    let res = await fetch(`/api/users/${data}`,{
        method : "delete",
    })

    if(!res.ok){
        throw new Error("Submission problem");
    }

    return res.json();
}