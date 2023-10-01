// src/App.js
import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './Layout';
import UserList from './components/userlist'; // UserList componentini import ettik

const App = () => {
  return (
    <Router>
      <Layout username="Hello, User">
        <Routes>
          <Route path="/home" element={<UserList />} /> {/* Yeni route eklendi */}
          {/* Diğer route'lar burada yer alabilir */}
        </Routes>
      </Layout>
    </Router>
  );
};

export default App;
