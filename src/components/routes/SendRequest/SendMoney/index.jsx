import React, { Fragment, useState, useContext } from "react"
import { State } from "state"
import Details from "./Details"
import Confirm from "./Confirm"
import Success from "./Success"

function SendMoney() {
  const [{ step, payload }, setStep] = useState({ step: "details", payload: {} })
  return (
    <Fragment>
     {step === "details" && <Details setStep={setStep} />}
     {step === "confirm" && <Confirm setStep={setStep} payload={payload} />}
     {step === "success" && <Success setStep={setStep} payload={payload} />}
    </Fragment>
  )
}

export default SendMoney
