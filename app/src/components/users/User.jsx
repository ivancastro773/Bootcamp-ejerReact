import React from "react";
import { Routes,Route,Link } from "react-router-dom";
//components
import AddUser from "./Add_user";
//callback
import {listObject} from "./callbacks/callback_map";

const User = ()=>{
    return (
        <div>
            <Link to="/add">user</Link>
        </div>
    )
}

export default User;