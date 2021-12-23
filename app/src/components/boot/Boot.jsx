import React from "react";
import {useSelector} from 'react-redux';
import AddBoot from "./AddBoot";
import DeleteBoot from "./DeleteBoot";
import UpdateBoot from "./UpdateBoot";

export default function Boot(){
    const users = useSelector(state=>state.users)
    return(
        <div>
            <br/><br/>
            <AddBoot />
            <p>================</p>
            <DeleteBoot/>
            <p>================</p>
            <UpdateBoot/>
            <h3></h3>
            {/* {users.map((items,i)=>{
                return <li key={i}>{items.email} -- {items.name} -- {items.age}</li>
            })} */}
            {users.email}
        </div>
    )
}