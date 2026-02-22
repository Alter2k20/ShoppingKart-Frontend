/**
 * Merchant.js
 * Defines Merchant data
 * 
 */

const baseString = 'http://localhost:8081'

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
export const MerchantRegister = async (data)=>{
    console.log("data");
    let res = await fetch(baseString+'/api/auth/register',{
        method: "POST",
        body: JSON.stringify(data),
        headers: {
            "Content-Type": "application/json",
        },
    });

    if (!res.ok) {
        const err = await res.text();
        throw new Error(err);
    }

    return await res.json()    
}

/**
 * 
 * @typedef {Object} data 
 * @property {String} email
 * @property {String} password
 * @returns {Promise<Boolean>}
 */
export const MerchantLogin = async (data) => {
    let res = await fetch(baseString+'/api/Merchants',{
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
 * @returns {Promise<Object>} - Merchant Data
 */
export const GetMerchant = async (id) => {
    let res = await fetch(baseString+`/api/Merchants/${id}`)

    if(!res.ok){
        throw new  Error("Submission problem");
    }

    return res.json()
}


/**
 * 
 * @typedef {Object} data - payload
 * @param {String} id - Merchant Id
 * @returns {Promise<Boolean>}
 */
export const UpdateMerchant = async (data,id) => {
    let res = await fetch(baseString+`/api/Merchants/${id}`,{
        method : "PUT",
        body : data
    })

    if(!res.ok){
        throw new Error("Submission problem");
    }

    return res.json();
}

/**
 * @param {String} id - Merchant Id
 * @returns {Promise<boolean>}
 */
export const DeleteMerchant = async (id) => {
    let res = await fetch(baseString+`/api/Merchants/${data}`,{
        method : "delete",
    })

    if(!res.ok){
        throw new Error("Submission problem");
    }

    return res.json();
}