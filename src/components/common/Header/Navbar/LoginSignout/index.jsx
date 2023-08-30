import React, { Fragment, useContext } from "react"
import { State } from "utils/providers"
import { Link, navigate } from "@reach/router"
import { NavLink, SignupButton, SignoutButton } from "./styles"

function LoginSignout() {
  const { state, dispatch } = useContext(State)

  const signOut = () => {
    dispatch({ type: "SIGNED_OUT" })
    return navigate("/")
  }

  if (state.authenticated) {
    return (
      <Fragment>
        <NavLink as={Link} to="/settings" aria-label="Your account settings">
          Settings
        </NavLink>
        <SignoutButton aria-label="Sign out of your account" onClick={signOut}>
          Sign out
        </SignoutButton>
      </Fragment>
    )
  }

  return (
    <Fragment>
      <NavLink as={Link} to="/login" aria-label="login to your dashboard">
        Login
      </NavLink>
      <SignupButton as={Link} to="/signup" aria-label="Sign up for payyed">
        Sign up
      </SignupButton>
    </Fragment>
  )
}

export default LoginSignout
