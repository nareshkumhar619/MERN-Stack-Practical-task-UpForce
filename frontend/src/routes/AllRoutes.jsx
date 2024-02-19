import React from 'react';
import {Routes, Route} from "react-router-dom";
import Home from '../pages/Home';
import AddDetails from '../pages/AddDetails';
import SingleView from '../pages/SingleView';

const AllRoutes = () => {
  return (
    <div>
      <Routes>
        <Route path='/' element={<Home/>}></Route>
        <Route path='/register' element={<AddDetails/>}></Route>
        <Route path="/user/:id" element={<SingleView/>}></Route>
      </Routes>
    </div>
  )
}

export default AllRoutes