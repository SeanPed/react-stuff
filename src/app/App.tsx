import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App(): JSX.Element {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<p>Hallo</p>} />
        <Route path="/about" element={<p>About</p>} />
        <Route path="/motivation" element={<p>Motivation</p>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
