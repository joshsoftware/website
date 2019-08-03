import styled from 'styled-components';

export const Heading1 = styled.h1`
  font-size: 20px;
  text-align: center;
  text-transform: uppercase;
  color: #CF4338;
  min-width: 158px;
  max-height: 24px;
  margin: 0 0 4.5rem;
`

export const DomainCube = styled.rect`
  height: ${(props) => props.height};
  width: ${(props) => props.width};
  x: ${(props) => props.x ? props.x : props.width};
  y: ${(props) => props.y ? props.y : props.height};
  background-color: ${(props) => props.color ? props.color : null};
  background-image: ${(props) => props.logo ? 'linear-gradient(#333333, #767676)' : null};
  border-stye: solid;
  border-width: 5px;
  border-color: #656565;
  border-top-left-radius: ${(props) => props.top_left_radius ? props.top_left_radius : '16px'};
  border-top-right-radius: ${(props) => props.top_right_radius ? props.top_right_radius : '16px'};
  border-bottom-left-radius: ${(props) => props.bottom_left_radius ? props.bottom_left_radius : '16px'};
  border-bottom-right-radius: ${(props) => props.bottom_right_radius ? props.bottom_right_radius : '16px'};
  display: flex;
  align-items: center;
  justify-content: center;
  opacity: ${(props) => props.opacity ? props.opacity : null};
  blur: ${(props) => props.blur ? props.blur : null};
`
