import React from 'react';
import './App.css';
import { TableView } from './screens/tableView';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';


function App() {
    return (
        <div className="App">
            <Router>
                <Routes>
                    <Route path="/" element={<TableView/>}></Route>
                </Routes>
            </Router>
        </div>
    );
}

export default App;
