import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  Wrapper,
  Step,
  Name,
  Progress,
  Line,
  Circle,
  Completed,
} from "./styles";

export function StepProgress({ steps, state, dispatch }) {
  return (
    <Wrapper>
      {steps.map(({ name }) => (
        <Step
          key={name}
          onClick={(e) => name === "details" && dispatch({ type: "reset" })}
        >
          <Name>{name}</Name>
          <Progress>
            <Circle
              active={state[name].active}
              completed={state[name].completed}
            >
              {state[name].completed && (
                <Completed as={FontAwesomeIcon} icon="check-circle" />
              )}
            </Circle>
            {name !== "success" && <Line completed={state[name].completed} />}
          </Progress>
        </Step>
      ))}
    </Wrapper>
  );
}
