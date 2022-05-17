import { Route, Routes } from 'react-router-dom';
import HeaderContainer from './components/Header/HeaderContainer';
import './App.css'
import Navbar from './components/Navbar/Navbar';
import ProfileContainer from './components/Profile/ProfileContainer';
import DialogsConteiner from './components/Dialogs/DialogConteiner'
import News from './components/News/News';
import Music from './components/Music/Music';
import Settings from './components/Settings/Settings';
import UsersContainer from './components/Users/UsersContainer'

function App(props) {
  
  return (
    <div className="wrapper">
      <HeaderContainer />
      <main className='main'>
        <Navbar />
        <div className='container'>
          <Routes>
            <Route path='/profile/:id' element={ <ProfileContainer/> } />
            <Route exact path='/dialogs' element={ <DialogsConteiner/> } />
            <Route exact path='/news' element={ <News/> } />
            <Route exact path='/music' element={ <Music/> } />
            <Route exact path='/users' element={ <UsersContainer/> } />
            <Route exact path='/settings' element={ <Settings/> } />
          </Routes>
          </div>
      </main>
    </div>
  );
}

export default App;
