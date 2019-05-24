import styled from 'styled-components';

export const QuoteWrapper = styled.div`
  font-family: Arial, Helvetica, sans-serif;
  font-style: italic;
  max-width: 400px;
  position: relative;
  margin: 200px 0 0 45px;

  ::before {
    content: '';
    position: absolute;
    width: 40px;
    top: 4px;
    bottom: 0;
    display: inline-block;
    background: url(${props => props.img});
    background-repeat: no-repeat;
    margin: 0 0 0 -45px;
  }
`;
