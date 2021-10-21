
import './App.css';

import 'bootstrap/dist/css/bootstrap.min.css';
import Home from './pages/Home/Home';
import About from './pages/About/About';
import Single from './pages/Singlepage/Single';
import {BrowserRouter as Router,Route} from 'react-router-dom'



function App() {
  return (

    <>
    <Router>
      <Route path="/home" component={Home}/>
      <Route path="/about" component={About}/>
      <Route path="/single" component={Single}/>
   
    </Router>
   
    </>

  );
}

export default App;


