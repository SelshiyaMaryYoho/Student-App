import client from '../../api/index'

export const HandelLogin=async(data:{email:string,password:string})=>{
    const res = await client.student.login(data)
    return res
}

export const ResetPassService = async(data:{password:string, token:string})=>{
    const res = await client.student.restpass(data)
    return res
}