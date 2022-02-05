import React from 'react';
import ReactDOM from 'react-dom';
import {
    BrowserRouter,
    Routes,
    Route
} from "react-router-dom";

import './index_compiled.css';
import reportWebVitals from './reportWebVitals';
import MentorDashboard from "./mentorDashboard";

const rootElement = document.getElementById("root");

ReactDOM.render(
  <React.StrictMode>
      <BrowserRouter>
          <Routes>
              <Route path="/" element={<h2>Hello</h2>} />
              <Route path="mentor" element={<MentorDashboard />} />
          </Routes>
      </BrowserRouter>
  </React.StrictMode>,
  rootElement
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
