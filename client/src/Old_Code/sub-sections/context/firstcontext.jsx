import { useContext,createContext } from "react";
export const UserContext=createContext({
    margin:'',
    setMargin:(auth)=>{}
})