import * as expostorage from "expo-secure-store"

export async function GetLocalStorage(key:string){
    return await expostorage.getItemAsync(key)
}

export async function StoreLocalStorage(key:string,data:any){
   await expostorage.setItemAsync(key,data)
}

export async function RemoveLocalStorage(key:string){
   await expostorage.deleteItemAsync(key)
}