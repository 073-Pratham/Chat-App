import { useContext } from "react";
import RegisterAndLoginForm from "./RegisterAndLoginForm";
import { UserContext } from "./UserContext";
import Chat from "./Chat";

export default function Routes(){
    const {username, id} = useContext(UserContext);

    console.log("Hello", username)
    
    if(username){
        return <Chat />
    }
    else
    return(
        <RegisterAndLoginForm />
    );
};