import React, { useContext, Fragment } from "react";
import { State } from "state";
import { Layout } from "components/common";
import {
  Landing,
  Login,
  Signup,
  Dashboard,
  Transactions,
  SendRequest,
  Settings,
  NotFound,
  Forbidden,
} from "components/routes";
import { Router } from "@reach/router";

function App() {
  const { state } = useContext(State);
  return (
    <Layout>
      <Router>
        <Landing path="/" />
        {state.authenticated ? (
          <Fragment>
            <Dashboard path="/dashboard" />
            <Transactions path="/transactions" />
            <SendRequest path="/send-request-money" />
            <Settings path="/settings" />
          </Fragment>
        ) : (
          <Fragment>
            <Login path="/login" />
            <Signup path="/signup" />
            <Forbidden path="/dashboard" />
            <Forbidden path="/transactions" />
          </Fragment>
        )}
        <NotFound default />
      </Router>
    </Layout>
  );
}

export default App;
