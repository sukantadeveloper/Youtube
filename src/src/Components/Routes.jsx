import React from 'react'
import { Route, Routes, useParams } from 'react-router-dom'
import { Dashboard } from '../Pages/Dashboard'
import { Login } from '../Pages/Login'
import { Registration } from '../Pages/Registration'
import { PrivateRoute } from './PrivateRoute'

export const AllRoutes = () => {
  return (
    <Routes>
        <Route path='/dashboard' element={<PrivateRoute><Dashboard></Dashboard></PrivateRoute>}></Route>
        <Route path='/registration' element={<Registration></Registration>}></Route>
        <Route path='/login' element={<Login></Login>}></Route>
    </Routes>
  )
}
