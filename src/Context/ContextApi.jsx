import React, { useState } from 'react';
import { createContext } from 'react';

export const Context= createContext();
function ContextApi({children}) {
    const [loading,setLoading]=useState(false);
    const [search,setSearch]=useState([]);
    const [query,setQuery]=useState("");
    const [error, seError]=useState(false);
  
    return (
       <Context.Provider value={{query,setQuery,setLoading,seError,loading,error}}>
           {children}
       </Context.Provider>
    );
}

export default ContextApi;