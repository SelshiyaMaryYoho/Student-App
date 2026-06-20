import client from '../../../api/index'

export const DashboardService =async()=>{
    const res = await client.dashboard.get()
    return res
}

