import { Route, Routes } from 'react-router-dom';
import { Home } from './components/Home';
import { Navbar } from './components/NavBar';

function App() {
  return (
    <main>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
      </Routes>            
    </main>
  )
}

export default App;
