/**
 * 
 * @returns {Promise<Object>} - Home page data
 */
export const HomePageData = async () =>{
    let data = await fetch(`/api/homepage`)

    return  data.json()
}


/**
 * 
 * @returns {Promise<Object>} - Banners
 */
export const fetchBanners = async ()=>{
    let res = await fetch('/api/banners')

    return data.json()
}