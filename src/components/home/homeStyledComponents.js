import styled from 'styled-components';

export const Heading1 = styled.h1`
  font-size: 20px;
  text-align: center;
  text-transform: uppercase;
  color: #CF4338;
  min-width: 158px;
  max-height: 24px;
  margin: 3rem 0 3.5rem;

`

export const TestimonialBox = styled.div`
  border-color: #D76964;
  border: 0.5px;
  height: 206px;
  width: 295px;
  border-radius: 12px 12px 12px 12px;
  background: #ffffff;
  margin-left: 60px;
  z-index: 10;
  position: relative;
`

export const ClientNameBox = styled.div`
  border-color: #D76964;
  border: 0.5px;
  height: 100px;
  width: 228px;
  border-radius: 22px 22px 22px 22px;
  background: #D76964;
  margin-left: 61px;
  margin-top: -11%;
  position: relative;
  z-index: 9;  
`

export const ClientDesignationBox = styled.div`
  border-color: #AF5B57;
  border: 0.5px;
  height: 100px;
  width: 111px;
  border-radius: 15px 15px 15px 15px;
  background: #AF5B57;
  margin-top: -11%;
  position: relative;
  z-index: 9;
  left: 244px;
  top: -23px;
  display: flex;
  align-items: flex-end;
  justify-content: center;
  padding-bottom: 24px;

  & span {
    width: 42px;
    height: 29px;
    color: #fff;
    font-size: 11px;
    text-align: center;
  }
`

export const TestimonialBoxText = styled.span`
  width: 254px;
  height: 118px;
  font-size: 12px;
  color: #0D0D0D;
  margin-left: 19px;
  margin-right: 20px;
  position: absolute;
  top: 50px;

`

export const Quotes = styled.div`
  height: 70px;
  width: 20px;
  font-size: 56px
  position: relative;
  right: 6px;
`

export const ReadMoreBtn = styled("Button")`
  background-color: #FFFFFF;
  float: right;
  margin-top: 14px;
  height: 30px;
  position: relative;
  bottom: 5px;
  width: 92px;
  
  & span {
    font-size: 9px;
    position: relative;
    bottom: 5px;
  }
`
export const ClientName = styled.span`
  position: absolute;
  bottom: 10px;
  left: 20px;
  color: #fff;
`

export const Circle = styled.div`
  height: 8px;
  width: 8px
  background-color: #666666;

  & .slick-active {
    background-color: #FF0000;
  }
`