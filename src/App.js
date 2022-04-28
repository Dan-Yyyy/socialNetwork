import Header from './components/Header/Header';
import './App.css'
import Navbar from './components/Navbar/Navbar';
import Profile from './components/Profile/Profile';

function App() {
  return (
    <div className="wrapper">
      <Header />
      <main className='main'>
        <Navbar />
        <Profile />
      </main>
    </div>
  );
}

export default App;
