import styled from "styled-components"

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
  background-color: #ffffff;
  text-align: center;
  padding: 1rem;
  box-shadow: 0 0.125rem 0.25rem rgba(0,0,0,0.075);
  border-radius: 0.25rem;
  margin-bottom: 1.5rem;

  @media (min-width: 1024px){
    min-width: 263px
  }
`

export const ProfileImage = styled.div`
  position: relative;
  width: 100px;
  height: 100px;
  margin: 1rem 0 1.5rem;
`

export const Image = styled.img`
  position: absolute;
  display: block;
  width: 100%;
  height: 100%;
  border-radius: 50%;
  background-color: grey;
`

export const EditImageInput = styled.input.attrs({ title: ''})`
  position: absolute;
  opacity: 0;
  z-index: 2;
  width: 100%;
  height: 100%;
`

export const EditImage = styled.div`
  position: absolute;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 37px;
  height: 37px;
  bottom: 0;
  right: 0;
  border-radius: 50%;
  background-color: #2dbe60;

  &::before {
    content: 'Change Profile Image';
    position: absolute;
    width: 155px;
    height: 30px;
    top: -35px;
    left: -55px;
    padding: 0.25rem 0.5rem;
    color: #ffffff;
    text-align: center;
    background-color: rgba(0,0,0,0.85);
    border-radius: 0.25rem;
    transition: all 0.35s ease;
    opacity: 0;
    visibility: hidden;
  }

  &::after {
    content: '';
    position: absolute;
    top: -5px;
    left: 12px;
    border-width: 0.4rem 0.4rem 0;
    border-top-color: rgba(0,0,0,0.85);
    border-right-color: transparent;
    border-bottom-color: transparent;
    border-left-color: transparent;
    border-style: solid;
    transition: all 0.35s ease;
    opacity: 0;
    visibility: hidden;
  }

  &:hover {
    &::before,
    &::after {
      opacity: 1;
      visibility: visible;
    }
  }

  ${({ focused }) => focused && `
  &::before,
  &::after {
    opacity: 1;
    visibility: visible;
  }
`}
`

export const User = styled.p`
  font-family: "rubikmedium", sans-serif;
  font-size: 1rem;
  margin-bottom: 0.9rem;
`

export const EditProfile = styled.button`
  position: relative;
  cursor: pointer;
  width: fit-content;
  padding: 0;
  background-color: transparent;
  margin-bottom: 0.5rem;
  border: none;
  line-height: 1.9;

  &::before {
    font-family: "rubikregular", sans-serif;
    content: 'Edit Profile';
    position: absolute;
    width: 90px;
    height: 30px;
    top: -35px;
    left: -30px;
    padding: 0.25rem 0.5rem;
    color: #ffffff;
    text-align: center;
    background-color: rgba(0,0,0,0.85);
    border-radius: 0.25rem;
    transition: all 0.35s ease;
    cursor: default;
    opacity: 0;
    visibility: hidden;
  }

  &::after {
    content: '';
    position: absolute;
    top: -5px;
    left: 8px;
    border-width: 0.4rem 0.4rem 0;
    border-top-color: rgba(0,0,0,0.85);
    border-right-color: transparent;
    border-bottom-color: transparent;
    border-left-color: transparent;
    border-style: solid;
    transition: all 0.35s ease;
    opacity: 0;
    visibility: hidden;
  }

  &:hover {
    &::before,
    &::after {
      opacity: 1;
      visibility: visible;
    }
    svg {
      color: #cbd3da
    }
  }

  &:focus {
    outline: none;
    &::before,
    &::after {
      opacity: 1;
      visibility: visible;
    }
    svg {
      color: #cbd3da
    }
  }
`