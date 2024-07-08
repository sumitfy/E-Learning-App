// import { formToJSON } from 'axios';
import {createContext , useContext, useEffect, useState} from 'react'


export const AuthContext = createContext();

export const AuthProvider = ({children}) =>{

    const [token , setToken] = useState(localStorage.getItem('token'))
    const [user , setUser] = useState('')
    const [isAdmin , setIsAdmin] = useState(false);
    const [isloading , setIsloading] = useState(true);

    const userAutharization = async()=>{       // GETTING THE LOGINED USE DATA TO SHOW IT ON PAGES
        try {
            const response = await fetch('http://localhost:5000/api/user' , {
                method:'GET',
                headers:{
                    Authorization:`Bearer ${token}`
                },
            })
            if(response.ok){
                const data = await response.json();
                setUser(data);
                setIsAdmin(data.isAdmin)
                console.log("this is in context",data)
                setIsloading(false)
            }
            else{
                console.log('Error in loading')
                setIsloading(false)
            }
        } catch (error) {
            console.log('error in user authraization in context')
        }
    }

    const StoreTokenInLS = (token) =>{
        setToken(token)
        return localStorage.setItem('token' , token)
    }
    // const isloggedin = ( token == "") ? false : true; //yaha error ho skata hai 
    const isloggedin = !! token //yaha error ho skata hai 

    const RemoveTokenFromLS = () =>{
        setToken("")
        setIsAdmin(false)
        return localStorage.removeItem('token')
    }

    useEffect(()=>{
        userAutharization();
    },[])



    return (
    <AuthContext.Provider value={{StoreTokenInLS , RemoveTokenFromLS, token , isloggedin, isloading  , user, isAdmin , userAutharization}}>
        {children}
    </AuthContext.Provider>
    )
}

export const useAuth = () => {
    const authContextValue = useContext(AuthContext);
    if (!authContextValue) {
      throw new Error("useAuth used outside of the Provider");
    }
    return authContextValue;
  };