import './App.css';
import { Route,Routes } from 'react-router-dom';
import Home from "./pages/Home";
import UserAuth from './pages/userAuth/UserAuth';
import NotFound from './pages/PageNotFound';
import HomeFeed from './features/HomeFeed';



function App() {
  
  return (
    <Routes>
      <Route path='/' element={<Home/>}>
        <Route index element={<HomeFeed/>}/>
      </Route>


      <Route path='/auth/:userType' element={<UserAuth/>}/>
      <Route path='*' element={<NotFound/>}/>
    </Routes>
  );
}

export default App;




























