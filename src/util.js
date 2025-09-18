import {BASE_URL, urlPostFix}from "./constants"
import axios from"axios"

export const scrollToTop= ()=>{
    window.scrollTo({
        top:0,
        behavior:"smooth",
    })
}


export const stringToUrl= (inputString)=>{
    return inputString.toLowerCase().replace(/ /g,'-');
}
export const IsEmptyObject=(obj)=>{
return Object.keys(obj).length===0;
}


//API 
export const getPosts=()=>{
    return axios.get(`${BASE_URL}/post${urlPostFix}`)
    .then (res=>{
        if(res.data.length >0){
            const sortedData=res.data.sort((a,b)=> new Date(b.data)- new Date(a.data))
            return sortedData
        }
    })
    .catch((error)=>{
        console.log(error)
    }
)
}

export const getImageUrl=(imagePath)=>{
    return `${BASE_URL}${imagePath}${urlPostFix}`

}

