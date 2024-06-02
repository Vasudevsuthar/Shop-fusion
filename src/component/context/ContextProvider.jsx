import { Children, useContext } from "react";
import MyContext from "./MyContext";
import AuthContext from "../store/auth-context";


const ContextProvider = (props) => {
    const authCtx = useContext(AuthContext);
    const email = authCtx.email;
    const cleanedEmail = email.replace(/[@.]/g, "");
    

    const contextValue = {
        userData: email,
    }

  return (
    <MyContext.Provider value={contextValue}>
      {props.children}
    </MyContext.Provider>
  )
}

export default ContextProvider;

