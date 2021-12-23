import React,{Fragment} from "react";
import User from "./components/users/User";
import MyUser from "./components/myUser/MyUser";
import Foo from "./components/foo/Foo";
import Origin from "./components/form/origin";
import Card from "./components/card/Card";
import BoxCards from "./components/boxCards/BoxCards";
import Boot from "./components/boot/Boot";
/* const data ={email:"ivan@gmail.com",name:"ivan",lastname:"castro"} */
function App() {
  return (
      <div className="body">
        {/* <User/> */}
        {/* <MyUser/> */}
        {/* <Foo {...data} apodo="chino" /> */}
        {/* <Origin/> */}
        {/* <BoxCards/> */}
        <Boot/>
      </div>
  );
}

export default App;
