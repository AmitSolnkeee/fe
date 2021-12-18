 import {BrowserRouter , Routes , Route} from 'react-router-dom'
import FetchPost from './components/fetchPost/FetchPost';
import Home from './components/Home/HomePage';
import Navbar from './components/Navigation/Navbar';
import PrivateProtectedRoute from './components/Navigation/protected route/PrivateProtectedRoute';
import CreatePost from './components/post/CreatePost';
import UpdatePost from './components/updatePost/UpdatePost';
import Login from './components/users/Login/Login';
import Register from './components/users/Register/Register';


function App() {
  return (
    <BrowserRouter>
    <Navbar/>
       <Routes>
          <Route exact path ='/' element={<Home/>}/>
          <Route exact path ='/create-post' element={  <CreatePost/>   }/>
          <Route exact path ='/register' element={<Register/>}/>
          <Route exact path ='/login' element={<Login/>}/>
          <Route exact path ='/fetch-post' element={<FetchPost/>}/>
          <Route exact path ='/update-post' element={<UpdatePost/>}/>
          
       </Routes>
    </BrowserRouter>
  );
}

export default App;
