import React, { useState } from 'react';
import styled from 'styled-components';

import envelope from '../images/envelope.svg';

const CnInput = styled.input`
  background: #fff;
  border-radius: 20px;
  width: 100%;
  height: 40px;
  color: #000;
  padding: 10px;
  margin-bottom: 20px;
  outline: none;

  ::placeholder {
    color: grey;
  }
`;

const CnTextArea = styled.textarea`
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

const CnSubmit = styled.button`
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

// const StyledMailWidget = styled.div`
//   position: fixed;
//   z-index: 10000;
//   bottom: 50px;
//   right: 50px;
//   width: 400px;

//   transition: all 0.3s ease;
//   transform: translateY(480px);

//   &.visible {
//     transform: translateY(0px);
//   }

//   .mailWidgetImg {
//     width: 50px;
//     height: auto;
//     margin-top: 25px;
//   }

//   .toggleButton {
//     position: absolute;
//     right: 0px;
//     display: flex;
//     align-items: center;
//     flex-direction: column;
//     justify-content: center;
//     cursor: pointer;
//     transition: all 0.5s;
//     outline: none;
//     width: 80px;
//     height: 80px;

//     border-radius: 100px;
//     background: #3023ae; /* Old browsers */
//     background: -moz-linear-gradient(
//       top,
//       #3023ae 0%,
//       #c86dd7 100%
//     ); /* FF3.6-15 */
//     background: -webkit-linear-gradient(
//       top,
//       #3023ae 0%,
//       #c86dd7 100%
//     ); /* Chrome10-25,Safari5.1-6 */
//     background: linear-gradient(
//       to bottom,
//       #3023ae 0%,
//       #c86dd7 100%
//     ); /* W3C, IE10+, FF16+, Chrome26+, Opera12+, Safari7+ */
//     filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#3023ae', endColorstr='#c86dd7',GradientType=0 ); /* IE6-9 */

//     :hover {
//       opacity: 0.8;
//       transform: scale(1.1);
//     }
//   }

//   .contentMailWidget {
//     position: relative;
//     top: 70px;
//     background: #000;
//     width: 100%;
//     height: 500px;
//     margin: 40px 0 0 0;
//     border-radius: 20px;
//     padding: 20px;
//   }
// `;

const MailWidget = () => {
  const [isVisible, setIsVisible] = useState(false);

  const toggleVisible = () => {
    setIsVisible(!isVisible);
  };

  return (
    <div className={isVisible ? 'mailWidget visible' : 'mailWidget'}>
      <div
        className="toggleButton"
        onClick={toggleVisible}
        onKeyDown={toggleVisible}
        tabIndex="0"
        role="button"
      >
        <img className="mailWidgetImg" src={envelope} alt="envelope" />
      </div>
      <div className="contentMailWidget">
        <form
          name="contact"
          method="post"
          data-netlify="true"
          data-netlify-honeypot="bot-field"
        >
          <input type="hidden" name="contact" value="contact" />
          <CnInput name="name" type="text" placeholder="Name" />
          <CnInput name="email" type="text" placeholder="Email" />
          <CnTextArea name="message" placeholder="Message" />
          <CnSubmit type="submit" name="submit">
            Send Email
          </CnSubmit>
        </form>
      </div>
    </div>
  );
};

export default MailWidget;
