import { BrowserRouter, Route, Routes } from 'react-router-dom';

import Summoner from './views/summoner';

import './App.css'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='summoner/:summonerName' element={<Summoner />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;