import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Stuff from './pages/stuff/Stuff';

function App(): JSX.Element {
  return (
    <BrowserRouter>
      <h1>This is a website</h1>
      <Routes>
        <Route path="/" element={<p>Hallo</p>} />
        <Route path="/about" element={<p>About</p>} />
        <Route path="/motivation" element={<p>Motivation</p>} />
        <Route path="/stuff" element={<Stuff />}>
          <Route path=":stuffParams" element={<Stuff />}></Route>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
