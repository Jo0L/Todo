import logo from './logo.svg';
import './App.css';
import React, {useCallback} from 'react';
import { FullScreen, useFullScreenHandle as FullScreenHandle } from "react-full-screen";
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Done from './components/Done'
import Uncomplish from './components/Uncomplish'
import Navigation from './components/Navigation'
import TaskProvider from './contexts/TaskProvider'

function App() {
  return(
  <TaskProvider>
    <BrowserRouter>
      <>
        <Navigation/>
          <Routes>
            <Route path="/" element={<Uncomplish/>} exact/>
            <Route path="/done" element={<Done/>}/>
          </Routes>
      </>
    </BrowserRouter>
  </TaskProvider>);
}

export default App;
