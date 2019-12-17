import React from "react"
import { Layout } from "components/common"
import { Landing } from "components/pages"
import { Router } from "@reach/router"

const App = () => (
  <Layout>
    <Router>
      <Landing path="/" />
    </Router>
  </Layout>
)

export default App
