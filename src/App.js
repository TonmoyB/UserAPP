import './App.css';
import Create from './components/create';
import Read from './components/read';
import Update from './components/update';
import { BrowserRouter as Router, Routes, Route, Navigate, useNavigate } from 'react-router-dom';
import { Button } from 'semantic-ui-react';

function AddUserButton() {
  const navigate = useNavigate();

  const handleAddClick = () => {
    navigate('/create');
  };

  return (
    <Button primary onClick={handleAddClick}>
      Add User
    </Button>
  );
}

function App() {
  return (
    <Router>
      <div className="main">
        <h2>User List</h2>
        <AddUserButton /> { }
        <Routes>
          <Route path="/" element={<Navigate to="/read" />} />
          <Route path="/create" element={<Create />} />
          <Route path="/read" element={<Read />} />
          <Route path="/update" element={<Update />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
