import { Outlet } from 'react-router-dom';
import style from './App.module.css';
import Footer from './components/Footer';
import Navbar from './components/Navbar';

function App() {
  return (
    <div className={style.App}>
      <Navbar />
      <Outlet />
      <Footer />
    </div>
  );
}

export default App;
