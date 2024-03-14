import './App.css';
import { BrowserRouter as Router, Routes ,Route } from 'react-router-dom';
import Login from './login';
import Gov from './gov';
function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={
          <>
            <Gov />
          </>
        } />
        <Route path="/login" element={<Login />} />
      </Routes>
    </Router>
  );
}

export default App;
