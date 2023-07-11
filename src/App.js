import {
  BrowserRouter as Router,
  Routes,
  Route
} from 'react-router-dom'
import './App.css';

import TrainingPage from "./pages/TrainingPage";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path = '/training' element = {<TrainingPage/>}/>
      </Routes>
    </Router>
  );
}

export default App;
