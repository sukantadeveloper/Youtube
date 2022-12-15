import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Home from '../Pages/Home';

function AllRoutes({data}) {
    return (
        <div>
           <Routes>
            <Route path='/' element={<Home data={data}/>}> 

            </Route>
           </Routes>
        </div>
    );
}

export default AllRoutes;