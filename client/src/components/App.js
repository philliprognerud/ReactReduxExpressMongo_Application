import React from "react";
import { BrowserRouter, Route } from "react-router-dom";

import Header from "./Header";
const Dashboard = () => <h2>db</h2>;
const SurveyNew = () => <h2>survey</h2>;
const Landing = () => <h2>lander</h2>;

const App = () => {
  return (
    <div className="container">
      <BrowserRouter>
        <div>
          <Header />
          <Route exact path="/" component={Landing} />
          <Route exact path="/surveys" component={Dashboard} />
          <Route path="/surveys/new" component={SurveyNew} />
        </div>
      </BrowserRouter>
    </div>
  );
};

export default App;
