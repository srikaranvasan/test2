import React, {useState} from 'react';
import './App.css';
import Scan from './pages/qrscan';
import Myqr from './pages/myqr';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import StickyNote2Icon from '@mui/icons-material/StickyNote2';
import QrCodeScannerIcon from '@mui/icons-material/QrCodeScanner';
import PersonIcon from '@mui/icons-material/Person';

function App() {


  return (
    <div>
      <header>
      <h1>Check-In</h1>
      <a><AccessTimeIcon fontSize='large'/></a>
      
    </header>
    <body>
    <center>
    <Scan/>
    <Myqr/>
    <br></br><br></br><br></br>
    <a className='pm'>CREATE A PRIVATE MEETING</a>
    </center>
    </body>
    <footer>
      <a><StickyNote2Icon fontSize='large'/></a>
      <a><QrCodeScannerIcon fontSize='large'/></a>
      <a><PersonIcon fontSize='large'/></a>
    </footer>
  </div>
  );
}

export default App;
