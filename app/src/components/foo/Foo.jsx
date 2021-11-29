import React from "react";
import Type from "prop-types";
const Foo=(props)=>{
    return(
        <div>
            <h1>Nombre:</h1>
            <div>{props.name}</div>
            <h1>Email:</h1>
            <div>{props.email}</div>
            <h1>Apellido:</h1>
            <div>{props.lastname}:</div>
            <h1>Apodo:</h1>
            <div>{props.apodo}</div>
        </div>
    )
}
Foo.propTypes = {
    apodo: Type.string.isRequired
}
export default Foo;