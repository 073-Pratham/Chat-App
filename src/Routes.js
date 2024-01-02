import { useContext } from "react";
import Register from "./Register";
import { UserContext } from "./UserContext";

export default function Routes(){
    const {username, id} = useContext(UserContext);

    if(username){
        return "Logged in"
    }
    return(
        <Register />
    );
};