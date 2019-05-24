import styled from 'styled-components';

export const PageContent = styled.article`
  margin: 20px 0 0 0;
  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    color: linear-gradient(45deg, #3023ae, #c86dd7);
    background: linear-gradient(#3023ae, #c86dd7);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    font-family: 'Quicksand', Arial, Helvetica, sans-serif;
    font-weight: 400;
  }

  p {
    font-family: Arial, Helvetica, sans-serif;
    font-size: 1.1rem;
    line-height: 1.8rem;
    color: #ddd;
  }
`;
