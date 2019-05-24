import styled from 'styled-components';

export const StyledMailWidget = styled.div`
  position: fixed;
  z-index: 100;
  bottom: 50px;
  right: 50px;
  width: 400px;
  transition: all 0.3s ease;
  transform: translateY(480px);

  .toggleButton {
    position: absolute;
    right: 0px;
    display: flex;
    align-items: center;
    flex-direction: column;
    justify-content: center;
    cursor: pointer;
    transition: all 0.5s;
    outline: none;
    width: 60px;
    height: 60px;

    border-radius: 100px;
    background: #3023ae; /* Old browsers */
    background: -moz-linear-gradient(
      top,
      #3023ae 0%,
      #c86dd7 100%
    ); /* FF3.6-15 */
    background: -webkit-linear-gradient(
      top,
      #3023ae 0%,
      #c86dd7 100%
    ); /* Chrome10-25,Safari5.1-6 */
    background: linear-gradient(to bottom, #3023ae 0%, #c86dd7 100%);
  }

  &.visible {
    transform: translateY(0px);
  }

  .mailWidgetImg {
    width: 30px;
    height: auto;
    margin-top: 25px;

    &.small {
      width: 20px;
    }
  }

  .toggleButton:hover {
    opacity: 0.8;
    transform: scale(1.1);
  }

  .contentMailWidget {
    position: relative;
    top: 70px;
    background: rgba(0, 0, 0, 0.7);
    width: 100%;
    height: 500px;
    margin: 40px 0 0 0;
    border-radius: 20px;
    padding: 20px;
  }
`;

export const CnInput = styled.input`
  font-family: 'Quicksand', Arial, Helvetica, sans-serif;
  font-size: 1rem;
  background: #fff;
  border-radius: 20px;
  width: 100%;
  height: 40px;
  color: #000;
  padding: 10px;
  margin-bottom: 20px;
  outline: none;
  border: none;

  ::placeholder {
    color: grey;
  }
`;

export const CnTextArea = styled.textarea`
  font-family: 'Quicksand', Arial, Helvetica, sans-serif;
  font-size: 1rem;
  background: #fff;
  border-radius: 20px;
  width: 100%;
  height: 150px;
  color: #000;
  padding: 10px;
  margin-bottom: 20px;
  outline: none;

  ::placeholder {
    color: grey;
  }
`;

export const CnSubmit = styled.button`
  font-family: 'Quicksand', Arial, Helvetica, sans-serif;
  font-size: 1.2rem;
  font-weight: 800;
  border-radius: 50px;
  border: 0;
  width: 100%;
  height: 60px;
  color: #fff;
  font-weight: 800;
  padding: 10px;
  margin-bottom: 20px;
  outline: none;
  cursor: pointer;
  background: #3023ae; /* Old browsers */
  background: -moz-linear-gradient(
    top,
    #3023ae 0%,
    #c86dd7 100%
  ); /* FF3.6-15 */
  background: -webkit-linear-gradient(
    top,
    #3023ae 0%,
    #c86dd7 100%
  ); /* Chrome10-25,Safari5.1-6 */
  background: linear-gradient(to bottom, #3023ae 0%, #c86dd7 100%);
  transition: all 1s ease;

  :hover {
    opacity: 0.8;
    transform: scale(1.02);
  }
`;
