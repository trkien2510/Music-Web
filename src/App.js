import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './Pages/Home';
import Login from './Pages/Login';
import Signup from './Pages/Signup';
import { createContext, useState } from 'react';
import Main from './Component/Main';
import Profile from './Pages/Profile';
import Upload from './Pages/Upload';
import Search from './Pages/Search';
import EditProfile from './Pages/EditProfile';


export const AudioContext = createContext();
const AudioContextProvider = ({ children }) => {
  const [audio, setAudio] = useState([]);

  return (
      <AudioContext.Provider value={{ audio, setAudio }}>
          {children}
      </AudioContext.Provider>
  );
};
function App() {
  return (
    <AudioContextProvider>
      <Router>
          <Routes>
            <Route path="/" element={<Home />}>
              <Route index element={<Main />} />
              <Route path="profile" element={<Profile/>}/>
              <Route path="upload" element={<Upload/>}/>
              <Route path="search" element={<Search/>}/>
              <Route path="edit-profile" element={<EditProfile/>}/>
            </Route>
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<Signup />} />
          </Routes>
      </Router>
    </AudioContextProvider>
  );
}

export default App;
