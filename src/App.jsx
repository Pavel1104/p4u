import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Consultation from './pages/Consultation';
import SelfHelp from './pages/SelfHelp';

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/consultation" element={<Consultation />} />
        <Route path="/self-help" element={<SelfHelp />} />
      </Routes>
    </BrowserRouter>
  );
}
