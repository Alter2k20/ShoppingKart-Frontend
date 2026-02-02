/**
 * User.js
 * Defines User data
 * 
 */


/**
 * @typedef {Object} data - payload
 * @property {String} name
 * @property {String} phone : not null
 * @property {String} email
 * @property {String} address
 * @property {string} city
 * @property {String} state
 * @property {String} pincode
 * @property {String} password
 * @returns {Promise<Boolean>}
 */
export const UserRegister = async (data)=>{
    console.log("data");
    let res = await fetch('http://localhost:8081/api/users',{
        method: "POST",
        body: JSON.stringify(data),
        headers: {
            "Content-Type": "application/json",
        },
    })

     if (!res.ok) {
        const err = await res.text()
        throw new Error(err)
    }

    return await JSON.parse(res)   
}

/**
 * 
 * @typedef {Object} data 
 * @property {String} email
 * @property {String} password
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