
import { Box } from '@chakra-ui/react';
import { useState } from 'react';
import './App.css';
import AllRoutes from './Components/AllRoutes';
import Navbar from './Components/Navbar';


function App() {
  return (
    <Box bg={'#0F0F0F'} w='100%' h='max-content' color={'white'} className="App" pb='50px'>
      <Navbar/>
      <AllRoutes/>
    </Box>
  );
}

export default App;
