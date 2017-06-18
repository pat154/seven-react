import * as React from 'react';
import styled from 'styled-components';

const logo = require('../images/logo.png');

const Wrapper = styled.section`
  position: relative;
  width: 39.375em;
  height: 22.125em;
`;

const ShowDetails = styled.header`
  position: absolute;
  bottom: 0;
  width: 100%;
  background: rgba(0,0,0,0.4);
  padding: 0.5em;
`;

const ShowName = styled.h2`
  color: #FFF;
  font-family: arial, helvetica, sans-serif;
  font-weight: 200;
  display: inline-block;
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  margin: 0;
  font-size: 2em;
`;

const NetworkLogo = styled.img`
  max-width: 5.75em;
  margin-right: 1em;
`;

interface ShowPromoProps {
  img: string;
  showName: string;
}

class ShowPromo extends React.Component<ShowPromoProps, null> {
  render() {
    return (
      <Wrapper className="show-promo">
        <img src={this.props.img}/>
        <ShowDetails>
          <NetworkLogo src={logo} alt="Seven"/>
          <ShowName>{this.props.showName}</ShowName>
        </ShowDetails>
      </Wrapper>
    );
  }
}

export default ShowPromo;
