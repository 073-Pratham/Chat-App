import {createContext, useEffect, useState} from "react";
import axios from "axios";

export const UserContext = createContext({});

export function UserContextProvider({children}) {
  const [username, setUsername] = useState(null);
  const [id, setId] = useState(null);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('/profile');
        setId(response.data.userId);
        setUsername(response.data.username);
      } catch (error) {
        // Handle errors, e.g., log or show a user-friendly message
        console.error("Error fetching profile:", error);
      }
    };

    fetchData();
  }, [setId, setUsername]);
  return (
    <UserContext.Provider value={{username, setUsername, id, setId}}>
      {children}
    </UserContext.Provider>
  );
}