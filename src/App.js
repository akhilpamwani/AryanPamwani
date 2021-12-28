
import { BrowserRouter as Router,Routes , Route } from 'react-router-dom';
import { Mainpage } from './Components/Pages/Mainpage';

 export const App=()=> {
  return (
   <>
   <Router>
   <Routes>
     <Route path='/' element={<Mainpage/>}  exact/>
     </Routes>
   </Router>
 
   </>
  );
}


