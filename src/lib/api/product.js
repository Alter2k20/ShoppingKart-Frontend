/**
 * Product.js
 * Defines Product api
 * 
 */

const baseString = 'http://localhost:8081'
import dummydata from "@/lib/dummy/products.json"

/**
 * Get all products in db
 * @returns {Promise}
 */
export const getProducts = async () =>{
    // let res = await fetch(baseString+"/api/products")

    // if (!res.ok) {
    //     const err = await res.text();
    //     throw new Error(err);
    // }

    // console.log(res.json())
    return dummydata
}

/**
 * 
 * @param {Sreing} id 
 * @returns {Promise}
 */
export const getProduct = async (id)=>{
    let res = await fetch(baseString+'/'+id)

    if(!res.ok){
        const err = await res.text();
        throw new Error(err);
    }

    return JSON.parse(res.json())
}

/**
 * 
 * @param {String} categoryId 
 * @returns {Promise}
 */
export const getProductsByCategory = async (categoryId) =>{
    let res = await fetch(baseString+'/category/'+categoryId)

    if(!res.ok){
        const err = await res.text();
        throw new Error(err);
    }

    return JSON.parse(res.json())
}

// export const 

