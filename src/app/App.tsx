import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Dashboard from './pages/Dashboard/Dashboard';
import Stuff from './pages/stuff/Stuff';
import AddForm from './components/AddForm/AddForm';

function App(): JSX.Element {
  return (
    <BrowserRouter>
      <h1>This is a website</h1>
      <Routes>
        <Route path="/" element={<Dashboard />} />
        {/* <Route path="/about" element={<p>About</p>} />
        <Route path="/motivation" element={<p>Motivation</p>} /> */}
        <Route path="/add" element={<AddForm />} />
        <Route path="/stuff" element={<Stuff />}>
          <Route path=":thingID" element={<Stuff />}></Route>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
