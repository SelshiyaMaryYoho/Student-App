import client from '../../../api/index'

export const getTodayClassService = async(classtype:string)=>{
    const res = await client.classes.get(classtype)
    return res
}