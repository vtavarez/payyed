import React from "react"
import Slick from "react-slick"
import slides from "./slides"
import { Play } from "components/common"
import {
  Wrapper,
  Slider,
  Slide,
  Content,
  Title,
  Description,
  CTAButton,
  DemoButton
} from "./styles"

const settings = {
  accessibility: true,
  adaptiveHeight: true,
  dots: true,
  arrows: true,
  autoplay: true,
  autoplaySpeed: 8000
}

const Intro = () => (
  <Slider as={Slick} {...settings}>
    {slides.map((slide, index) => (
      <Slide key={index} image={slide.image}>
        <Wrapper align={slide.alignContent}>
          <Content align={slide.alignContent}>
            <Title className="mb-3" size={slide.titleSize}>{slide.title}</Title>
            <Description>{slide.descriptionOne}</Description>
            <Description className="mb-4">{slide.descriptionTwo}</Description>
            <CTAButton>{slide.buttonOneDescription}</CTAButton>
            <DemoButton>
              <Play size="sm" transform="left-12 top-5" />
              {slide.buttonTwoDescription}
            </DemoButton>
          </Content>
        </Wrapper>
      </Slide>
    ))}
  </Slider>
)

export default Intro
