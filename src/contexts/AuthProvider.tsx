import React, { useEffect, useState, type ReactNode } from "react";
import { GetLocalStorage, RemoveLocalStorage, StoreLocalStorage } from "../utils/localstorage";
import { AuthContext } from "./AuthContext";

export const AuthProvider:React.FC<{children:ReactNode}>=({children})=>{
    const [isAuthenticated, setisAuthenticated] = useState(false);

    useEffect(() => {
        (async()=>{
            const token = await GetLocalStorage('t_s_tk')
            setisAuthenticated(!!token)
        })()
    }, []);

    const login = async(token:string)=>{
        await StoreLocalStorage("t_s_tk",token)
        setisAuthenticated(true)
    };

    const logout=()=>{
        RemoveLocalStorage('t_s_tk')
        setisAuthenticated(false)
    }

    const value = {
        isAuthenticated,
        login,
        logout,
    }

    return (
        <AuthContext.Provider value={value}>
            {children}
        </AuthContext.Provider>
    )
}