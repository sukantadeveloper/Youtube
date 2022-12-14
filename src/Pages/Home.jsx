import React from 'react';
import { useContext } from 'react';
import { Context } from '../Context/ContextApi';

function Home() {
    const {query}=useContext(Context);
    console.log(query,"q");
    return (
        <div>
          <h1> Home Page</h1>
        </div>
    );
}

export default Home;