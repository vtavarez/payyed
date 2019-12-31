import React, { Fragment, useContext } from "react"
import { State } from "state"
import { Link, Location } from "@reach/router"
import { NavLink } from "./styles"
import { home, dashboard } from "./links"

function NavbarLinks() {
  const { state } = useContext(State)

  return (
    <Location>
      {({ location }) => {
        if (state.authenticated) {
          return (
            <Fragment>
              {dashboard.map(({ to, ariaLabel, title }, index) => (
                <NavLink
                  key={index}
                  as={Link}
                  to={to}
                  aria-label={ariaLabel}
                  pathname={location.pathname}
                >
                  {title}
                </NavLink>
              ))}
            </Fragment>
          )
        }

        return (
          <Fragment>
            {home.map(({ to, ariaLabel, title }, index) => (
              <NavLink
                key={index}
                as={Link}
                to={to}
                aria-label={ariaLabel}
                pathname={location.pathname}
              >
                {title}
              </NavLink>
            ))}
          </Fragment>
        )
      }}
    </Location>
  )
}

export default NavbarLinks
