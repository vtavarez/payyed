import React, { Fragment, useReducer } from "react";
import { steps } from "./steps";
import { StepProgress } from "components/common";

function RequestMoney() {
    const initialState = {
        details: {
            active: true,
            completed: false,
        },
        confirm: {
            active: false,
            completed: false,
            payload: {},
        },
        success: {
            active: false,
            completed: false,
            payload: {},
        },
    };

    const reducer = (state, action) => {
        switch (action.type) {
            case "confirm":
                return {
                    ...state,
                    details: {
                        active: false,
                        completed: true,
                    },
                    confirm: {
                        active: true,
                        completed: false,
                        payload: action.payload,
                    },
                };
            case "success":
                return {
                    ...state,
                    confirm: {
                        active: false,
                        completed: true,
                    },
                    success: {
                        active: true,
                        completed: true,
                        payload: action.payload,
                    },
                };
            case "reset":
                return {
                    ...initialState,
                };
            default:
                return state;
        }
    };

    const [state, dispatcher] = useReducer(reducer, initialState);

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
