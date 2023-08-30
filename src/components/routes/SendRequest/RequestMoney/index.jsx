import React, { Fragment } from "react";
import { useSendRequestReducer } from "utils/hooks";
import { steps } from "./steps";
import { StepProgress } from "components/common";

function RequestMoney() {
    const [state,  dispatcher] = useSendRequestReducer();

    return (
        <Fragment>
            <StepProgress dispatch={dispatcher} state={state} steps={steps} />
            {steps.map(
                ({ name, component: Component }) =>
                    state[name].active && (
                        <Component key={name} dispatch={dispatcher} state={state} />
                    ),
            )}
        </Fragment>
    );
}

export default RequestMoney;
