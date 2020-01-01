import React, { useState } from "react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { Wrapper, Contents, Row, Modal, ButtonOutlinePrimary } from "components/common"
import {
  IFrame,
  Video,
  Placeholder,
  PlayButton,
  Info,
  Heading,
  SubHeading,
  Icon,
  List,
  AccessibleText
} from "./styles"
import placeholder from "assets/images/placeholder.webp"

function HowDoesItWork() {
  const [showModal, setShowModal] = useState(false)
  const closeModal = () => setShowModal(false)
  const openModal = () => setShowModal(true)

  return (
    <Wrapper bgColor="#f5f5f5">
      <Contents>
        <Row>
          <Video onClick={openModal}>
            <Placeholder src={placeholder} alt="Payyed Demo Video" />
            <PlayButton aria-label="Play Demo Video">
              <FontAwesomeIcon
                icon="play"
                size="lg"
                color="#2dbe60"
                transform="right-2"
              />
              <AccessibleText>Play</AccessibleText>
            </PlayButton>
          </Video>
          <Info>
            <Heading>How does it work?</Heading>
            <SubHeading>
              Quidam lisque persius interesset his et, in quot quidam
              persequeris essent possim iriure. Lorem Ipsum is simply dummy text
              of the printing and typesetting industry.
            </SubHeading>
            <List>
              <li>
                <Icon>
                  <FontAwesomeIcon icon="check" size="1x" />
                </Icon>
                Sign Up Account
              </li>
              <li>
                <Icon>
                  <FontAwesomeIcon icon="check" size="1x" />
                </Icon>
                Receive & Send Payments from worldwide
              </li>
              <li>
                <Icon>
                  <FontAwesomeIcon icon="check" size="1x" />
                </Icon>
                Your funds will be transferred to your local bank account
              </li>
            </List>
            <ButtonOutlinePrimary>Open a Free Account</ButtonOutlinePrimary>
          </Info>
        </Row>
        {showModal && (
          <Modal closeModal={closeModal}>
            <IFrame
              title="banking like it should be"
              src="https://player.vimeo.com/video/333218343?autoplay=0&color=2dbe60&title=0&byline=0&portrait=0"
              frameBorder="0"
              allow="fullscreen"
              allowFullScreen
            ></IFrame>
          </Modal>
        )}
      </Contents>
    </Wrapper>
  )
}

export default HowDoesItWork
