import styled from 'styled-components';

export const PinkDiv = styled.div`
  width: 1366px;
  height: 202px;
  background: #FFB5B5 0% 0% no-repeat padding-box;
`

export const PinkDivMobile = styled.div`
  width: 360px;
  height: 213px;
  background: #FFB5B5 0% 0% no-repeat padding-box;
`

export const H3Text = styled.h3`
  font-size: 33px;
  color:  ${props => props.color};
`

export const H4Black = styled.h4`
  color: #393939;
  font: Bold 29px/35px Lato;
`

export const StoryText = styled.div`
  font-size: ${props => props.fontSize};
`

