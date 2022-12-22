import { BrowserRouter, Route, Routes } from 'react-router-dom';

import  Home  from './components/homePage';
import  EditProfile  from './components/Auth/editProfile';
import  SignUp  from './components/Auth/signUp';

const App=()=> {
  return (
    <BrowserRouter>
       <Routes>
        <Route  path="/"element={<Home/>} />
        <Route path="/edit-Profile"element={<EditProfile/>} />
        <Route path="/sign-up"element={<SignUp/>} />
      </Routes>
    </BrowserRouter>
 
  );
}

export default App;
