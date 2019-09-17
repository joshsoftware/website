import styled from 'styled-components';
import { Card } from 'reactstrap';

export const Heading1 = styled.h1`
  font-size: 43px;
  text-align: center;
  text-transform: uppercase;
  color: #CF4338;
  min-width: 158px;
  max-height: 24px;
  margin: 2rem 0 5.5rem;
  @media(max-width: 600px) {
    font-size: 30px;
  }
`

export const InnovationHeading1 = styled.h1`
  font-size: ${props => props.fontSize};
  text-align: center;
  // text-transform: uppercase;
  color: #FF7B71;
  min-width: 158px;
  max-height: 24px;
  margin: 2rem 0 3.5rem;
`

export const Circle = styled.div`
  height: 8px;
  width: 8px
  background-color: #666666;

  & .slick-active {
    background-color: #FF0000;
  }
`
export const BannerText = styled.span`
  font-size: 52px;
  // padding-left: 19px;
  font-family: lato, black;
  line-height: 62px;
  color: #A8A8A8;
`

export const BannerSubText = styled.div`
  min-width: 230px; 
  min-height: 55px;
  text-align: left;
  font-size: 24px;
  font-weight: 300;
  color: #FFFFFF;
`

export const ConctactUsRightText = styled.span`
  color: #FFFFFF;
`

export const ParallaxImg = styled.div`
  background-image: ${(props) => `url(${props.logo})`} ;
  width: 100%;
  height: ${(props) => props.height};
  background-repeat: no-repeat;
  background-size: 100%;
`

export const CurvedCard = styled(Card)`
  border-radius: 16px 16px 16px 16px;
`

export const CompanyDetailsText = styled.div`
  float: ${(props) => props.pull};
  width: ${(props) => props.width};
  color: #fff;
  & span {
    font-size: 14px;
    // font-weight: 100;
  }

  & h5 {
    font-size: 20px;
    
  }

  & b {
    font-weight: 400;
  }

  @media(max-width: 900px) {
    & span {
      font-size: 11px;
      // font-weight: 100;
    }
    & h5 {
      font-size: 16px;
      font-weight: 400;
      margin-bottom: 4px;
    }
    line-height: 24px;
  }
`
export const InnovationBox = styled.span`
  height: 124px;
  width: 159px;
  border-radius: 8px 8px 8px 8px;
`

export const Heading1Orange = styled.h1`
  font-size: ${(props) => props.fontSize ? `${props.fontSize}px` : "51px"};
  text-align: -webkit-right;
  font-family: lato light;
  color: #FF7B71;
`
export const Heading1Black = styled.h1`
  font-size: ${(props) => props.fontSize ? `${props.fontSize}px` : "27px"};
  text-align: -webkit-right;
  font-family: lato light;
  color: #666666;
  width: 446px;
  height: 66px;
  word-wrap: break-work;
`
export const DomainText = styled.div`
  font-size: ${(props) => props.fontSize ? `${props.fontSize}px` : "17px"};
  color: #FFFFFF;
  height: 20px;
  font-family: lato light;
`

export const Text = styled.span`
  color: ${(props) => props.color};
  font-size: ${(props) => props.fontSize ? `${props.fontSize}px` : "17px"};
  &:before {
    content: ${(props) => `url(${props.url})`};
    padding-right: 20px;
    vertical-align: middle;
  }
`

export const Paragraph = styled.p`
  font-size: ${(props) => props.fontSize ? `${props.fontSize}px` : "17px"}
`

