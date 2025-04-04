import './App.css';
import { Routes, Route } from 'react-router-dom';
import Homepage from './pages/homepage';
import LoginAndSignPage from './pages/loginandsignpage';

function App() {
  return (
    <Routes>
      <Route path="/*" element={<Homepage />} />
      <Route path="/login" element={<LoginAndSignPage />} />
    </Routes>
  );
}

export default App;
