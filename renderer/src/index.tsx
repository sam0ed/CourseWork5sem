import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import { HashRouter, Route, Routes } from 'react-router-dom';
import { Sidebar } from './components/Sidebar/Sidebar';
import Crossword from './components/Crossword/Crossword';
import Guide from './pages/guide';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <HashRouter>
      <div style={{ display: 'flex', flexDirection: "row" }}>
        <Sidebar />
        <Routes>
          <Route path="/" element={<Crossword />} />
          <Route path="/guide" element={<Guide />} />
        </Routes>
      </div>
    </HashRouter>

  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
