import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Game from './pages/Game';
import GameOver from './pages/GameOver';
import HighScores from './pages/HighScores';
import Home from './pages/Home';
import Navbar from './components/Navbar';
import { Container } from './components/styled/Container';


function App() {
  return (
    <Router>
 <Navbar>
  <Container>
      <Routes>
        <Route path='/game' element={<Game/>}></Route>
        <Route path='/highScores' element={<HighScores/>}></Route>
        <Route path='/gameOver' element={<GameOver/>}></Route>
        <Route path='/gameOver' element={<GameOver/>}></Route>
        <Route path='/gameOver' element={<GameOver/>}></Route>
        <Route path="/" element={<Home />} />
      </Routes>
      </Container>
      </Navbar>
      
    </Router>
    
  );
}

export default App;
