












import logo from './logo.svg';
import './App.css';
import Welcome from './pages/Welcome';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import PhoneConfirmation from './pages/PhoneConfirmation';
import PlanLayouts from './pages/layouts/PlanLayouts'
import CoderConfirm from './pages/CoderConfirm';
import AllowNotification from './pages/AllowNotification';
import AppLayout from './pages/layouts/AppLayout';
import Home from './pages/Home';





function App() {
    return ( 
      <Router>
      

        <Routes>

        
        <Route path = '/'
        element = { <Welcome/> }
        />   
        <Route path = '/invite'
        element = { <PhoneConfirmation /> }
        />

        
        <Route path = '/layout'
        element = { < PlanLayouts/> }
        />  
        <Route path = '/code'
        element = { <CoderConfirm/> }
        />  
        <Route path = '/allow-notification'
        element = { <AllowNotification/> }
        /> 

        
        </Routes> 
        <Routes>
        
        <Route path = '/applayout'
        element = { <AppLayout/> }/> 
        
        <Route path='/home' element={<Home/>}/>
       

       
      </Routes>
      

        </Router>

    );
}
export default App