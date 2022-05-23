import { Route, Routes, useNavigate } from 'react-router-dom';
import HeaderContainer from './components/Header/HeaderContainer';
import './App.css'
import Navbar from './components/Navbar/Navbar';
import ProfileContainer from './components/Profile/ProfileContainer';
import DialogsConteiner from './components/Dialogs/DialogConteiner'
import News from './components/News/News';
import Music from './components/Music/Music';
import Settings from './components/Settings/Settings';
import UsersContainer from './components/Users/UsersContainer';
import LoginContainer from './components/Login/Login';
import { useSelector } from 'react-redux';
import { useEffect } from 'react';

function App(props) {
  const {isAuth} = useSelector(state => state.auth)
  const navigate = useNavigate();
  useEffect(() => {
    if (isAuth){
       return navigate("/profile");
    } else {
      return navigate("/login");
    }
 },[isAuth]);
  return (
    <div className="wrapper">
      <HeaderContainer />
      <main className='main'>
        <Navbar />
        <div className='container'>
          <Routes>
            {isAuth ? 
              <>
              <Route path='/profile/:id' element={ <ProfileContainer/> } />
            <Route exact path='/dialogs' element={ <DialogsConteiner/> } />
            <Route exact path='/news' element={ <News/> } />
            <Route exact path='/music' element={ <Music/> } />
            <Route exact path='/users' element={ <UsersContainer/> } />
            <Route exact path='/settings' element={ <Settings/> } />
              </> : <>
                <Route exact path='/login' element={ <LoginContainer/> } />
            <Route exact path='*' element={ <LoginContainer/> } />
              </>}
            
          </Routes>
          </div>
      </main>
    </div>
  );
}

export default App;
