import { Route, Routes } from 'react-router-dom';
import RegisterPage from './pages/register';
import LoginPage from './pages/login';

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<RegisterPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/dashboard" element={<h1>Hello</h1>} />
      </Routes>
    </>
  );
}

export default App;
