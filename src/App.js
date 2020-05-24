import React from 'react';
import {BrowserRouter}  from 'react-router-dom'
import './App.css';

function App() {
  return (
    <BrowserRouter>
        <Route path="/" component={null} />
        <Route path="/auth" component={null} />
        <Route path="/post" component={null} />
        <Route path="/admin" component={null} />
    </BrowserRouter>
  );
}

export default App;
