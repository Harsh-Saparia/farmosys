import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import MilkingMachines from './pages/Products/MilkingMachines';
import Contact from './pages/Contact/Contact';

const Routers = () => {
    return (
        <Routes>
            <Route path='/farmosys' element={<Home />}></Route>
            <Route path='/farmosys/milking-machines' element={<MilkingMachines />} />
            <Route path='/farmosys/contact-us' element={<Contact />} />
            <Route path='*' element={<p>No page found</p>} />
        </Routes>
    );
};

export default Routers;
