import React, { Fragment } from "react"
import "bootstrap-css-only";
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"
import "./fonts.css"
import Global from "./styles"

export const Layout = props => (
  <Fragment>
    <Global />
    {props.children}
  </Fragment>
)