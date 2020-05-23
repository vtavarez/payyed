import React, { Fragment, useState, useContext } from "react"
import { State } from "state"
import Send from "./Send"
import Confirm from "./Confirm"
import Success from "./Success"

function SendMoney() {
  const [{ step, details }, setStep] = useState({ step: "send", details: {} })
  return (
    <Fragment>
     {step === "send" && <Send setStep={setStep} />}
     {step === "confirm" && <Confirm details={details} />}
     {step === "success" && <Success />}
    </Fragment>
  )
}

export default SendMoney
