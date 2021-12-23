import { element } from 'prop-types';
import React, { useState } from 'react';

const profiles = [{ name: "foonzi", address: "banaland", planet: "martes" }];
const inputState = { name: "", address: "", planet: "" };
const placeInput = {address: "adress", planet: "planet" };
/* 
const style = { "margin-left": "10px", "margin-right": "10px" }; */

const Origin =()=> {
    let [data, setData] = useState(profiles);
    let [inputs, setInputs] = useState(inputState);
    let [placeHolder, setPlaceHolder] = useState(placeInput);
    let { name, address, planet } = inputs;

    const handle = (e) => {
        setInputs({
            ...inputs,
            [e.target.name]: e.target.value
        })
    }

    const cbData=(el,idx)=>{
        return <li key={idx}>{`[ PROFILE ]: ${el.name} - ${el.address} - ${el.planet}`}</li>
    }

    const fnAdd=()=>{
        setData([...data,inputs]);
        setInputs(inputState);
    }

    const fnDelete=()=>{
        setData(
            data.filter(element =>{
                if (element.name!=name) {
                    return element;
                }
            }) 
        ) 
    }
    const fnUpdated =()=>{
        setData(
            data.map((items)=> {
                if (items.name==name) {
                    items.address=address;
                    items.planet=planet;
                }
                return items;
            })
        )
    }

    const fnSearch=()=>{
        setPlaceHolder(
            data.map((items)=> {
                if (items.name==name) {
                    placeHolder.address= items.address;
                    placeHolder.planet=items.planet;
                }
            })
        )
    }

    return(
        <div>
            <h3>form data</h3>
            {data.map(cbData)}
            <Repeat/>
            <section>
                <div>
                    <input placeholder="name" name="name" value={name} onChange={handle}/>
                </div>
                <div>
                    <input placeholder={placeHolder.address} name="address" value={address} onChange={handle}/>
                </div>
                <div>
                    <input placeholder={placeHolder.planet} name="planet" value={planet} onChange={handle}/>
                </div>
            </section>
            <button onClick= {fnAdd}>add</button>
            <button onClick= {fnUpdated}>Actualizar</button>
            <button onClick= {fnDelete}>Delete</button>
            <button onClick= {fnSearch}>Search</button>
        </div>
    )

};

const Repeat=()=><div><br/><span>{"=".repeat("50")}</span></div>
export default Origin;