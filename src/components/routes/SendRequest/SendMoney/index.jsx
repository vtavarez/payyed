import React, { Fragment } from "react";
import { useSendRequest } from "utils/hooks";
import { steps } from "./steps";
import { StepProgress } from "components/common";

function SendMoney() {
    const [state, dispatcher] = useSendRequest();

    return (
        <Fragment>
            <StepProgress dispatch={dispatcher} state={state} steps={steps} />
            {steps.map(
                ({ name, component: Component }) =>
                    state[name].active && (
                        <Component key={name} dispatch={dispatcher} payload={state[name].payload} />
                    ),
            )}
        </Fragment>
    );
}

export default SendMoney;
