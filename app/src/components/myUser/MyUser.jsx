import React, {useState,useEffect} from "react";
import axios from "axios";
import {GetData} from "./functions/function_get_data";
import { petition } from "./callbacks/callback_axios_api";

const baseURL = "https://api.github.com/users/ivancastro773";
const user = {email:"", name:"", bio:""};

const MyUser = ()=>{
    const [data, setData] = useState(user);
    useEffect(() => {
        axios.get(baseURL).then((response) => {
          setData(
            data.email=response.data.login,
            data.name=response.data.name,
            data.bio=response.data.bio
            );
        });
      }, []);
    
    return(
        <div>
            <h1>Mis datos</h1>
            <div>{user.email}</div>
            <div>{user.name}</div>
            <div>{user.bio}</div>
        </div>
    )
}
export default MyUser;