import './App.css';
import WalletConnectPage from './components/WalletConnect';
import ManageSniperPage from './components/Configuration';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<WalletConnectPage />}></Route>
        <Route path='/manage' element={<ManageSniperPage />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
