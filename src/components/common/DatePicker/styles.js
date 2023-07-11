export const Container = styled.div`
    position: absolute;
    left: 0
    bottom: 5px;
    z-index: 3001;
    box-shadow: 0 0 0 1px rgba(0, 0, 0, 0.1);
    border-radius: 4px;
`

export const Wrapper = styled.div`
    position: relative;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    align-items: start;

    &::after {
        content: '';
        position: absolute;
        top: -6px;
        left: 15px;
        transform: translateX(-50%);
        border-width: 0.4rem 0.4rem 0;
        border-top-color: #fff;
        border-right-color: transparent;
        border-bottom-color: transparent;
        border-left-color: transparent;
        border-style: solid;
        transition: all 0.35s ease;
        opacity: 0;
        visibility: hidden;
    }
`

export const Ranges = styled.div`
  border-right: 1px solid #bbb;   
`

export const Calendars = styled.div``