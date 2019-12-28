import React from "react"
import ReactDOM from "react-dom"
import App from "./components/App"
import { Provider } from "./state"

ReactDOM.render(
  <Provider>
    <App />
  </Provider>,
  document.getElementById("root")
)
