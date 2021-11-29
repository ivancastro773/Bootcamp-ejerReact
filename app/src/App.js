import React,{Fragment} from "react";
/* import InternalA from "./components/Internal_a";
import InternalB from "./components/Internal_b";
import InternalC from "./components/Internal_c"; */
import User from "./components/users/User";
import MyUser from "./components/myUser/MyUser";
import Foo from "./components/foo/Foo";

const data ={email:"ivan@gmail.com",name:"ivan",lastname:"castro"}
function App() {
  return (
    <Fragment>
      {/* <User/> */}
      {<MyUser/>}
      {/* <Foo {...data} apodo="chino" /> */}
    </Fragment>
  );
}

export default App;
