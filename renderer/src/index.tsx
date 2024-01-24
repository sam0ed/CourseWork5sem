import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import "react-activity/dist/Dots.css";
import reportWebVitals from './reportWebVitals';
import { HashRouter, Route, Routes } from 'react-router-dom';
import { Sidebar } from './components/Sidebar';
import CrosswordPage from './pages/crossword-page';
import Guide from './pages/guide';
import Creator from './pages/creator';
import ComingSoon from './pages/coming-soon';
import License from './pages/license';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <HashRouter>
      <Sidebar />
      <Routes>
        <Route path="/" element={<CrosswordPage />} />
        <Route path="/guide" element={<Guide />} />
        <Route path="/creator" element={<Creator />} />
        <Route path="/coming-soon" element={<ComingSoon />} />
        <Route path="/license" element={<License />} />
      </Routes>
    </HashRouter>

  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
