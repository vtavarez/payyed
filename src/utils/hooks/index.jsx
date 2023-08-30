import React, { useReducer } from "react";

export function useSendRequest() {
    const initialState = {
        details: {
            active: true,
            completed: false,
            payload: {}
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

    return useReducer(reducer, initialState);
}