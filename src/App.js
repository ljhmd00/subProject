import './App.css';
import plane from './videos/plane.mp4'
import paper from './images/paper.jpg'
import React, { Component } from 'react';
import {  Routes, Route, useNavigate} from 'react-router-dom'
import Main from './components/Main'
import Tour from './components/Tour';
import Airplane from './components/Airplane'
import Hotel from './components/Hotel'
import About from './components/About'



function App() {
  let navigate = useNavigate()

  return (
    <div className="App">

      <div className='navBar'>
        <img src={paper} style={{
          width:'150px', height:'80px', backgroundColor:'white',marginLeft:'60px',marginTop:'14px'
          ,cursor:'pointer'
          }}
          onClick={()=>{navigate('/')} }></img>
          <div className='navContent'>
          <span onClick={()=>{navigate('tour')}}> TOUR</span>
          <span onClick={()=>{navigate('airplane')}}>AIRPLANE</span>
          <span onClick={()=>{navigate('hotel')}}>HOTEL</span>
          <span onClick={()=>{navigate('about')}}>ABOUT</span>
          </div>
      </div>

      <div className='Page'>
      <Routes>
          <Route path='/' element={<Main/>}></Route>
          <Route path='/tour' element={<Tour/>}></Route>
          <Route path='/airplane' element={<Airplane/>}></Route>
          <Route path='/hotel' element={<Hotel/>}></Route>
          <Route path='/about' element={<About/>}></Route>
        </Routes>
      </div>
    </div>
  );
}

export default App;
