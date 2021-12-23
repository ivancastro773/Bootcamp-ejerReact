import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { actionDeleteUser } from "../../redux/store";

const initDelete=[{
    email:""
}];

export default function DeleteBoot(){
    const [valEmail, setValEmail] = useState(initDelete);
    const { email } = valEmail;
    const dispatch = useDispatch();

    const handle = (e) => {
        setValEmail({
            ...valEmail,
            [e.target.name]: e.target.value,
        });
      };

      const fnDeleteForEmail = () => {
          console.log(email)
        dispatch(actionDeleteUser(email));
        alert("Delete user...");
      };

      return (
        <div>
          <section>
            <input placeholder="email" name="email" value={email} onChange={handle}/>
          </section>
          <section>
            <button onClick={fnDeleteForEmail}>Delete user</button>
          </section>
        </div>
      );
    
}