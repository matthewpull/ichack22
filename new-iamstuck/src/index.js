import React from 'react';
import ReactDOM from 'react-dom';
import {
    BrowserRouter,
    Routes,
    Route
} from "react-router-dom";

import './index_compiled.css';
import reportWebVitals from './reportWebVitals';
import HelperDashboard from "./HelperDashboard";
import CallPage from "./callPage";
import UserDashboard from "./UserDashboard";
import Browse from "./Browse";

const rootElement = document.getElementById("root");

ReactDOM.render(
  <React.StrictMode>
      <BrowserRouter>
          <Routes>
              <Route path="/" element={<UserDashboard />} />
              <Route path="helper" element={<HelperDashboard />} />
              <Route path="call" element={<CallPage />} />
              <Route path="user" element={<UserDashboard />} />
              <Route path="browse" element={<Browse />} />
          </Routes>
      </BrowserRouter>
  </React.StrictMode>,
  rootElement
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
