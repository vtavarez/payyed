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
      {steps.map(({ name }, index) => (
        <Step
          key={name}
          onClick={(e) => index === 0 && dispatch({ type: "reset" })}
        >
          <Name>{name}</Name>
          <Progress>
            <Circle
              active={Boolean(state[name].active && index !== steps.length - 1)}
              completed={Boolean(
                state[name].completed && index !== steps.length - 1
              )}
            >
              {state[name].completed && (
                <Completed as={FontAwesomeIcon} icon="check-circle" />
              )}
            </Circle>
            {index !== steps.length - 1 && (
              <Line completed={Boolean(state[name].completed)} />
            )}
          </Progress>
        </Step>
      ))}
    </Wrapper>
  );
}
