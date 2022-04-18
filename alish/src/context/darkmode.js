import react, { useState } from "react";
export const Darkcontext = react.createContext();
const Darkcontextprovider =(props) =>{
    const [Lightteme , setLightteme] =useState(false);
    const [dark] = useState({
        bg:'#fff',
        syntax:'#000'
    });
    const [light] = useState({
        bg:'#0C151D',
        syntax:'#fff'
    });
    const changedtheme = () =>{
        setLightteme(!Lightteme);
    }

    return(
        <Darkcontext.Provider value={{changedtheme , light , dark , Lightteme}}>
            {props.children}
        </Darkcontext.Provider>
    )
}
export default Darkcontextprovider;