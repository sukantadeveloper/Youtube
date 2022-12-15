import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Home from '../Pages/Home';
import Video from '../Pages/Video';

function AllRoutes({ data }) {
    return (
        <div>
            <Routes>
                <Route path='/' element={<Home />}>

                </Route>
                <Route path='/video/:id' element={<Video/>}></Route>

            </Routes>
        </div>
    );
}

export default AllRoutes;