
import { Route,Routes } from 'react-router-dom';
import SignIn from './component/SignIn';
import SignUp from './component/SignUp';
import Navbar from './component/Navbar';
import ForgetPassword from './component/ForgetPassword';

function App() {
  return (
   
   <>
   <Navbar/>
<Routes>
<Route path='/signin' element={<SignIn/>}/>
<Route path='/signup' element={<SignUp/>}/>
<Route path='/forgetpassword' element={<ForgetPassword/>}/>
</Routes>

   </>
  );
}

export default App;
