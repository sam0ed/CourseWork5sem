

import React from 'react';
import { Outlet } from 'react-router-dom';



export default function Layout() {
  return (
    <div className="layout">
      <p>This is a Layout</p>
      <ul>
        <li>
            <a href="/">Home</a>
        </li>
        <li>
            <a href='/about'>About</a>
        </li>
      </ul>
      <Outlet />
    </div>
  );
}