
import React from 'react';
//import { useState } from "react";
import Header from '../Header/Header.jsx'
import './App.css';
import ItemCount from '../ItemCount/ItemCount.jsx';
import ItemForm from '../ItemForm/ItemForm.jsx';
import DomItems from '../DomItems/DomItems.jsx';
function App() {
    return (
        <div className="App">
            <Header />
            <main>
                <div>
                    <ItemForm/>
                </div>
            </main>
        </div>
    );
}

export default App;
