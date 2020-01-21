import React, { Fragment, useState } from "react"
import Send from "./Send"
import Confirm from "./Confirm"
import Success from "./Success"

function SendMoney() {
  const [step, setStep] = useState({ userDetails: {}, current: "send" })
  return (
    <Fragment>
     {step.current === "send" && <Send setStep={setStep} />}
     {step.current === "confirm" && <Confirm setStep={setStep} />}
     {step.current === "success" && <Success setStep={setStep} />}
    </Fragment>
  )
}

export default SendMoney
