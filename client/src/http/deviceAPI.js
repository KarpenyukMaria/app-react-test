import {$authHost, $host} from "./index";

//type
export const createType = async(type)=>{
    const {data}=await  $authHost.post('api/type',type)
    return data
}

export const fetchTypes=async () =>{
    const {data}= await $host.get('api/type')
    return data
}
//brand
export const createBrand = async(brand)=>{
    const {data}=await  $authHost.post('api/brand',brand)
    return data
}

export const fetchBrand=async () =>{
    const {data}= await $host.get('api/brand')
    return data
}
//device
export const createDevice = async(device)=>{
    const {data}=await  $authHost.post('api/device',device)
    return data
}
export const fetchDevice=async () =>{
    const {data}= await $host.get('api/device')
    return data
}

export const fetchOneDevice=async (id) =>{
    const {data}= await $host.get('api/device/'+id)
    return data
}