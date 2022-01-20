import { Routes, Route } from 'react-router-dom';
import Auth from './pages/Auth/Auth';
import Main from './pages/Main/Main';

function App() {
  return (
    <>
      <Routes>
        <Route path='/auth' element={<Auth />} />
        <Route path='/account/*' element={<Main />} />
      </Routes>
    </>
  );
}

export default App;
