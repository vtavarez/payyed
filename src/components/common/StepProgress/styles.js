import styled from 'styled-components'

export const Wrapper = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    margin-inline: auto;
    margin-top: 1.5rem;
    margin-bottom: 3rem;
`

export const Step = styled.div`
    display: flex;
    flex-direction: column;
    flex-grow: 1;
`

export const Name = styled.small`
    font-size: 14px;
    font-weight: 450;
    line-height: 1.5;
    margin-bottom: 10px;
    text-transform: capitalize;
    text-align: center;
`

export const Progress = styled.div`
    display: flex;
    position: relative;
    width: 100%;
    flex-direction: row;
    align-items: center;
    justify-content: center;
`

export const Line = styled.div`
    position: absolute;
    width: 100%;
    height: 1px;
    left: 50%;
    background-color: ${({ completed }) => completed ? '#28a745' : '#bbb'};
`

export const Circle = styled.button`
    position: relative;
    z-index: 1;
    width: 30px;
    height: 30px;
    border-radius: 50%;
    border-width: 1px;
    border-style: solid;
    border-color: ${({ active, completed }) => active || completed ? '#28a745' : '#bbb'};
    background-color: #fff;

    &::after {
        content: '';
        display: ${({ active }) => active ? 'block' : 'none'};
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        width: 10px;
        height: 10px;
        border-radius: 50%;
        background-color: ${({ active }) => active ? '#28a745' : '#bbb'};
    }
`

export const Completed = styled.svg`
    position: absolute;
    font-size: 1.9rem;
    top: 0;
    left: 0;
    margin-left: -1px;
    margin-top: -1px;
    path {
        fill: #28a745;
    }
`