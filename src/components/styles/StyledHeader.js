import styled from 'styled-components';

export const StyledHeader = styled.div`
  margin: 0 auto;
  padding: 40px 0px 10px 20px;
  display: flex;
  justify-content: space-between;

  img {
    max-width: 150px;
    height: auto;
    align-self: start;
  }

  @media (max-width: 576px) {
    padding: 40px 0 0 0px;
  }

  @media (min-width: 992px) {
    padding: 40px 80px 10px 80px;
    img {
      max-width: 200px;
      height: auto;
      align-self: start;
    }
  }
`;
