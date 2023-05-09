import { Route, Routes } from 'react-router-dom';

import { Home } from './components/Home';
import './App.css';

function App() {

  return (
    <main className='bg-red-400'>
      <Routes>
        <Route path='/' element={<Home />} />
      </Routes>            
    </main>
  )
}

export default App
