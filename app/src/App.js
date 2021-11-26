import React,{Fragment} from "react";
/* import InternalA from "./components/Internal_a";
import InternalB from "./components/Internal_b";
import InternalC from "./components/Internal_c"; */
import User from "./components/users/User";
import MyUser from "./components/myUser/MyUser";

function App() {
  return (
    <Fragment>
      {/* <User/> */}
      <MyUser/>
    </Fragment>
  );
}

export default App;
