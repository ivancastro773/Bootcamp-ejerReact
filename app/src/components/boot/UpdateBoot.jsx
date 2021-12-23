import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { actionUpdatedUser } from "../../redux/store";

const initFields = {
  email: "",
  name: "",
  age: 0,
};

export default function UpdateBoot() {
  const [fields, setFields] = useState(initFields);
  const { email, name, age } = fields;

  const dispatch = useDispatch();

  const handle = (e) => {
    setFields({
      ...fields,
      [e.target.name]: e.target.value,
    });
  };

  const fnUpdated = () => {
      console.log(email,name,age);
    dispatch(actionUpdatedUser(email, name, age));
    alert("updated user...");
  };

  return (
    <div>
      <section>
        <input
          placeholder="email"
          name="email"
          value={email}
          onChange={handle}
        />
      </section>
      <section>
        <input placeholder="name" name="name" value={name} onChange={handle} />
      </section>
      <section>
        <input placeholder="age" name="age" value={age} onChange={handle} />
      </section>
      <section>
        <button onClick={fnUpdated}>Updated user user</button>
      </section>
    </div>
  );
}
