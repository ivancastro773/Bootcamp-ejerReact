import React,{useState} from "react";
import "./style.css";
/* import {box} from '../boxCards/BoxCards'; */
import { element } from "prop-types";

const Card = (props) => {
    const fnDelete =(val)=>{
      props.changeStatus(
        cache=>cache.filter((el,i)=>i!=val)
      )
    }
  return (
    <section className={`${props.background} container`}>
        <div>
            <i onClick={()=>fnDelete(props.pos)} className="fas fa-times right"></i>
        </div>
         <div className="text">
            <i className="fas fa-bolt"></i>
            <p>{props.text}</p>
            <span>
            Apply Now<i className="fas fa-arrow-right"></i>
            </span>
        </div>
    </section>
  );
};
export default Card;
