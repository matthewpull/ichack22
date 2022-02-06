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

const user = {
    name: 'Sam Trew',
    email: 'sam@example.com',
    imageUrl:
        'https://scontent-lhr8-1.xx.fbcdn.net/v/t1.6435-9/178581459_2189625051179840_7814560823471489211_n.jpg?_nc_cat=100&ccb=1-5&_nc_sid=09cbfe&_nc_ohc=tpnrP53DFnAAX93Ss4y&tn=-udhKjWfubTp03iO&_nc_ht=scontent-lhr8-1.xx&oh=00_AT8_z6tgZH-wGs1pZAlSrs9_fes8y3Eh6vhhtO3cmTqlow&oe=622420F1'
}

ReactDOM.render(
  <React.StrictMode>
      <BrowserRouter>
          <Routes>
              <Route path="/" element={<UserDashboard />} />
              <Route path="helper" element={<HelperDashboard />} />
              <Route path="call" element={<CallPage />} />
              <Route path="user" element={<UserDashboard />} />
              <Route path="profiles" element={<Browse />} />
          </Routes>
      </BrowserRouter>
  </React.StrictMode>,
  rootElement
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
