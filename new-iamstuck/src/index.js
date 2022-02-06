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
import CallPage from "./callPage";
import UserDashboard from "./UserDashboard";

const rootElement = document.getElementById("root");

ReactDOM.render(
  <React.StrictMode>
      <BrowserRouter>
          <Routes>
              <Route path="/" element={<UserDashboard />} />
              <Route path="mentor" element={<MentorDashboard />} />
              <Route path="call" element={<CallPage />} />
              <Route path="user" element={<UserDashboard />} />
          </Routes>
      </BrowserRouter>
  </React.StrictMode>,
  rootElement
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
