import React, { useContext } from "react"
import { State } from "state"
import { Layout } from "components/common"
import {
  Landing,
  Login,
  Signup,
  Dashboard,
  Transactions,
  SendRequest,
  NotFound,
  Forbidden
} from "components/routes"
import { Router } from "@reach/router"

function App() {
  const { state } = useContext(State)

  if (state.authenticated) {
    return (
      <Layout>
        <Router>
          <Landing path="/" />
          <Dashboard path="/dashboard" />
          <Transactions path="/transactions" />
          <SendRequest path="/send-request-money" />
          <NotFound default />
        </Router>
      </Layout>
    )
  }

  return (
    <Layout>
      <Router>
        <Landing path="/" />
        <Login path="/login" />
        <Signup path="/signup" />
        <Forbidden path="/dashboard" />
        <Forbidden path="/transactions" />
        <NotFound default />
      </Router>
    </Layout>
  )
}

export default App
