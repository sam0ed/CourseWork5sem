import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Sidebar } from './components/Sidebar/Sidebar';
import Crossword from './components/Crossword/Crossword';
import Guide from './pages/guide';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <div style={{ display: 'flex', flexDirection: "row", background: 'rgb(13, 26, 32)' }}>
    <React.StrictMode>
      <Sidebar />
      <BrowserRouter>
        <Routes >
          <Route path="/" element={<Crossword />} />
        </Routes>
      </BrowserRouter>
    </React.StrictMode>
  </div>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
