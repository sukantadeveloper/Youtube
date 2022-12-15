import React, { useState } from 'react';
import { createContext } from 'react';

export const Context= createContext();
function ContextApi({children}) {
    const [loading,setLoading]=useState(false);
    const [search,setSearch]=useState("New");
    const [data,setData]=useState("");
    const [error, seError]=useState(false);
  
    return (
       <Context.Provider value={{data,setData,search,setSearch,setLoading,seError,loading,error}}>
           {children}
       </Context.Provider>
    );
}

export default ContextApi;