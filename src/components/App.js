import React from "react"
import { Layout } from "components/common"
import { Landing, Login, Signup } from "components/pages"
import { Router } from "@reach/router"

const App = () => (
  <Layout>
    <Router>
      <Landing path="/" />
      <Login path="/login" />
      <Signup path="/signup" />
    </Router>
  </Layout>
)

export default App
