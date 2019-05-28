import styled from 'styled-components';

export const QuoteWrapper = styled.div`
  font-family: 'Glegoo', Arial, Helvetica, sans-serif;
  font-size: 0.85rem;
  font-style: italic;
  line-height: 1.6rem;
  max-width: 500px;
  position: relative;
  margin: 0 0 60px 40px;
  padding: 20px 20px 20px 0;
  text-shadow: 2px 2px black;

  @media (max-width: 768px) {
    display: none;
  }

  @media (min-width: 992px) {
    display: block;
    margin: 200px 0 0 45px;
  }

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

    @media (min-width: 992px) {
    }
  }
`;
