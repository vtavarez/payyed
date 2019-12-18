import React from "react"
import { Copy, Payyed } from "./styles"

function Copyright() {
  return (
    <Copy>
      Copyright © {new Date().getFullYear()} <Payyed href="#">Payyed</Payyed>.
      All Rights Reserved.
    </Copy>
  )
}

export default Copyright
