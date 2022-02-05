import React from 'react';
import './index.css';
import reportWebVitals from './reportWebVitals';

import { render } from "react-dom";
import {
    BrowserRouter,
    Routes,
    Route
} from "react-router-dom";
import MenteeDashboard from "./menteeDashboard";
import MentorDashboard from "./mentorDashboard";

import WebexMeetingsWidget from './packages/@webex/widget-meetings/src/components/MeetingsWidget';

function onClick() {
    // eslint-disable-next-line no-alert
    window.alert('onClick');
  }

const rootElement = document.getElementById("root");
render(
    <WebexMeetingsWidget accessToken="ABC123" meetingDestination="abc" onJoinClick={onClick} onLeaveClick={onClick}/>,
    rootElement
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
