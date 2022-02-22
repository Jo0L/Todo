import logo from './logo.svg';
import './App.css';
import React, {useCallback} from 'react';
import { FullScreen, useFullScreenHandle as FullScreenHandle } from "react-full-screen";
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Done from './components/Done'
import Uncomplish from './components/Uncomplish'
import Navigation from './components/Navigation'

function App() {
  /*const UncomplishScreen = FullScreenHandle();
  const DoneScreen = FullScreenHandle();
  const ReportScreen = useCallback((state, handle) => {
    if (handle === UncomplishScreen) {
      console.log('Move to UncomplishScreen');
    } 
    else if (handle === DoneScreen) {
      console.log('Move to DoneScreen');
    }
  }, [UncomplishScreen, DoneScreen]);*/



  /*const Frame = <div>
    <button onClick={UncomplishScreen.enter}>Uncomplish</button>
    <button onClick={DoneScreen.enter}>Done</button>

    <FullScreen handle={UncomplishScreen} onChange={ReportScreen}>
      <div>Uncomplish</div>
    </FullScreen>

    <FullScreen handle={DoneScreen} onChange={ReportScreen}>
      <div>Done</div>
    </FullScreen>*/

  

  /*const Frame = <div>
    {AddButton}
  </div>;

  return Frame;*/

  return(
    <div>
      <BrowserRouter>
        <div>
          <Navigation/>
            <Routes>
              <Route path="/" element={<Uncomplish/>} exact/>
              <Route path="/done" element={<Done/>}/>
            </Routes>
        </div>
      </BrowserRouter>
    </div>);
}

export default App;
