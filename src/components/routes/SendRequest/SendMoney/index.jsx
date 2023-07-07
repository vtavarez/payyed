import React, { Fragment, useState, useContext } from "react"
import { State } from "state"
import Send from "./Send"
import Confirm from "./Confirm"
import Success from "./Success"

function SendMoney() {
  const [{ step, payload }, setStep] = useState({ step: "send", payload: {} })
  return (
    <Fragment>
     {step === "send" && <Send setStep={setStep} />}
     {step === "confirm" && <Confirm setStep={setStep} payload={payload} />}
     {step === "success" && <Success />}
    </Fragment>
  )
}

export default SendMoney
