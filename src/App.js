
import { Box } from '@chakra-ui/react';
import './App.css';
import AllRoutes from './Components/AllRoutes';
import Navbar from './Components/Navbar';

function App() {
  return (
    <Box bg={'#0F0F0F'} h='100vh' color={'white'} className="App">
      <Navbar/>
      <AllRoutes/>
    </Box>
  );
}

export default App;
