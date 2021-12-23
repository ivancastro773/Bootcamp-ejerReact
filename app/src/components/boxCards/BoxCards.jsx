import React,{useState} from "react";
import Card from "../card/Card";
import "./styleBoxCard.css";

const box = [
  { description: "hola ivan", background: "color1" },
  { description: "hola tomas", background: "color2" },
  { description: "hola juan", background: "color3" },
  { description: "hola rodri", background: "color4" },
  { description: "hola pepe", background: "color5" },
  { description: "hola ivan", background: "color6" },
];
const BoxCards = () => {
  let [data, setData] = useState(box);
  return (
    <div>
      <div className="parent">
        {data.map((items, i) => {
          return (
            <div key={i} className={`div${i + 1}`}>
              <Card text={items.description} changeStatus={setData} pos={i} background={items.background} />
            </div>
          );
        })}
        {/* <div className="div1"><Card/></div>
                <div className="div2"><Card/></div>
                <div className="div3"><Card/></div>
                <div className="div4"><Card/></div>
                <div className="div5"><Card/></div>
                <div className="div6"><Card/></div> */}
      </div>
    </div>
  );
};
export default BoxCards;
