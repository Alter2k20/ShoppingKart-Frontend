/**
 * 
 * @returns {Promise<Object>} - Home page data
 */
export const HomePageData = async () =>{
    let data = await fetch(`/api/homepage`)

    if(!data.ok){
        throw new Error("could not fetch")
    }
    return  data.json()
}


/**
 * 
 * @returns {Promise<Object>} - Banners
 */
export const fetchBanners = async ()=>{
    let res = await fetch('/api/banners')

    if(!data.ok){
        throw new Error("could not fetch")
    }

    return data.json()
}

export const fetchCategory = async () =>{
    let res = await fetch('/api/category')

    if(!data.ok){
        throw new Error("could not fetch")
    }
    
    return data.json()
}