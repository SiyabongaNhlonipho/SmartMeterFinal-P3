import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Register from './Pages/Register.js'
import Landing from './Pages/Landing.js'
import Error from './Pages/Error.js'
import {Notifications,Query,Recharge,Profile,SharedLayout,Stats} from './Pages/dashboard'
import ProtectedRoute from './Pages/ProtectedRoute.js'
import AdminPage from './Pages/AdminPage.js'

function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path='/' element={
      <ProtectedRoute>
        <SharedLayout/>
      </ProtectedRoute>
      }>
<Route index element = {<Stats/>}  /> 
<Route path ="notifications" element = {<Notifications/>} /> 
<Route path ="recharge" element = {<Recharge/>}  />
<Route path ="query" element = {<Query/>}  />
<Route path ="profile" element = {<Profile/>}  />
</Route>  
<Route path='/register' element = {<Register/>} />
<Route path='/admin' element = {<AdminPage/>} />
<Route path='/login' element = {<Register/>} />
<Route path='/landing' element = {<Landing/>} />
<Route path='*' element = {<Error />} />
    </Routes>
    </BrowserRouter>
      
  );
}

export default App;
