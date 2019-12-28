import React, { useContext } from "react"
import { State } from "state"
import { Layout } from "components/common"
import {
  Landing,
  Login,
  Signup,
  Dashboard,
  NotFound,
  Forbidden
} from "components/pages"
import { Router } from "@reach/router"

const App = () => {
  const { state } = useContext(State)
  return (
    <Layout>
      <Router>
        <Landing path="/" />
        <Login path="/login" />
        <Signup path="/signup" />
        {state.authenticated ? (
          <Dashboard path="/dashboard" />
        ) : (
          <Forbidden path="/dashboard" />
        )}
        <NotFound default />
      </Router>
    </Layout>
  )
}

export default App
