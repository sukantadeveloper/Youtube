import React, { useState } from 'react';
import { createContext } from 'react';

export const Context= createContext();
function ContextApi({children}) {
    const [loading,setLoading]=useState(false);
    const [search,setSearch]=useState([]);
    const [query,setQuery]=useState("");
  
    return (
       <Context.Provider value={{query,setQuery}}>
           {children}
       </Context.Provider>
    );
}

export default ContextApi;