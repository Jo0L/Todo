import logo from './logo.svg';
import './App.css';
import React, {useCallback} from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Done from './components/Done'
import Uncomplish from './components/Uncomplish'
import Navigation from './components/Navigation'
import TaskProvider from './contexts/TaskContext';

function App() {
  return(
    <TaskProvider>
      <BrowserRouter>
        <div style={{margin: "auto", width: "50%", padding: "10px"}}>
          <Navigation/>
            <Routes>
              <Route path="/" element={<Uncomplish/>} exact/>
              <Route path="/done" element={<Done/>}/>
            </Routes>
        </div>
      </BrowserRouter>
    </TaskProvider>
  );
}

export default App;
