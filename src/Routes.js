import { useContext } from "react";
import RegisterAndLoginForm from "./RegisterAndLoginForm";
import { UserContext } from "./UserContext";

export default function Routes(){
    const {username, id} = useContext(UserContext);

    // console.log("Hello", username)

    if(username){
        return `Logged in ${username}`
    }
    else
    return(
        <RegisterAndLoginForm />
    );
};