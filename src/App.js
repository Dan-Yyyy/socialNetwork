import { Route, Routes } from 'react-router-dom';
import Header from './components/Header/Header';
import './App.css'
import Navbar from './components/Navbar/Navbar';
import Profile from './components/Profile/Profile';
import DialogsConteiner from './components/Dialogs/DialogConteiner'
import News from './components/News/News';
import Music from './components/Music/Music';
import Settings from './components/Settings/Settings';

function App(props) {
  
  return (
    <div className="wrapper">
      <Header />
      <main className='main'>
        <Navbar />
        <div className='container'>
          <Routes>
            <Route exact path='/profile' element={ <Profile/> } />
            <Route exact path='/dialogs' element={ <DialogsConteiner/> } />
            <Route exact path='/news' element={ <News/> } />
            <Route exact path='/music' element={ <Music/> } />
            <Route exact path='/settings' element={ <Settings/> } />
          </Routes>
          </div>
      </main>
    </div>
  );
}

export default App;
