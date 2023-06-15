import { Route, Routes } from 'react-router-dom';
import { Login } from './components/Login';
import './index.css';
import { Search } from './components/Search';

function App() {
  return (
    <Routes>
      <Route path="/" element={ <Login /> } />
      <Route path="/search" element={ <Search /> } />
      {/* <Route path="/album/:id" element={<Album />} /> */}
    </Routes>
  );
}

export default App;
