import { Route, Routes } from 'react-router-dom';
import RegisterPage from './pages/register';
import LoginPage from './pages/login';
import Profile from './components/template/Profile/Profile';
import MainLayouts from './components/layouts/Main/MainLayouts';
import MainScreens from './components/template/Screens/MainScreens';

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<RegisterPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/dashboard" element={<MainLayouts />}>
          <Route index element={<MainScreens />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
