import React from "react"
import Slick from "react-slick"
import {
  Wrapper,
  Contents,
  Row,
  ButtonLink,
  ChevronRight
} from "components/common"
import {
  Heading,
  SubHeading,
  Slider,
  Testimonial,
  Review,
  User,
  Location
} from "./styles"
import testimonials from "./testimonials"

const settings = {
  accessibility: true,
  adaptiveHeight: true,
  dots: true,
  arrows: true,
  autoplay: true,
  slidesToShow: 2,
  slidesToScroll: 2,
  autoplaySpeed: 8000,
  variableWidth: true,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2,
        infinite: true,
        dots: true,
        arrows: false
      }
    },
    {
      breakpoint: 768,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        infinite: true,
        dots: true,
        arrows: false
      }
    }
  ]
}

const WhatPeopleAreSayingAboutPayyed = () => (
  <Wrapper>
    <Contents>
      <Heading>What people are saying about Payyed</Heading>
      <SubHeading>A payments experience people love to talk about</SubHeading>
      <Slider as={Slick} {...settings}>
        {testimonials.map((testimonial, index) => (
          <Testimonial key={index}>
            <Review>{testimonial.review}</Review>
            <User>{testimonial.user}</User>
            <Location>{testimonial.location}</Location>
          </Testimonial>
        ))}
      </Slider>
      <Row justify="center">
        <ButtonLink href="#" fontSize="1.125rem">
          See more people review{" "}
          <ChevronRight transform="down-1 shrink-3 right-4" />
        </ButtonLink>
      </Row>
    </Contents>
  </Wrapper>
)

export default WhatPeopleAreSayingAboutPayyed
