import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
// import App from './App';
import reportWebVitals from './reportWebVitals';
import { Suspense } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import ProgressBar from "react-topbar-progress-indicator";
const LoanComponent = React.lazy(() => import('./components/LoanCalculatorComponent'));


ReactDOM.render(
  <Router>
    <div>
      <Suspense fallback={<ProgressBar color="#f11946" />}>
        <Route exact path="/" component={LoanComponent} />
        <Route exact path="/loan" component={LoanComponent} />
      </Suspense>
    </div>
  </Router>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
