import React from 'react';
import './App.css';
import { ComplexDropdownSelect, DropdownSelect } from './downshift/DropdownSelect';

function App() {
    return (
        <div className="App">
            <DropdownSelect/>
            <ComplexDropdownSelect/>
        </div>
    );
}

export default App;
