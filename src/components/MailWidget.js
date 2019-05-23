import React, { useState } from 'react';
import styled from 'styled-components';
import { navigateTo } from 'gatsby-link';

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

const MailWidget = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [formState, setFormState] = useState({});

  function encode(data) {
    return Object.keys(data)
      .map(key => `${encodeURIComponent(key)}=${encodeURIComponent(data[key])}`)
      .join('&');
  }

  const toggleVisible = () => {
    setIsVisible(!isVisible);
  };

  const handleSubmit = e => {
    e.preventDefault();
    const form = e.target;
    fetch('/', {
      method: 'POST',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      body: encode({
        'form-name': form.getAttribute('name'),
        ...formState,
      }),
    })
      .then(() => navigateTo(form.getAttribute('action')))
      .catch(error => alert(error));
  };

  const handleChange = e => {
    console.log(formState)
    setFormState({
      ...formState,
      [e.target.name]: e.target.value,
    });
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
          action="/"
          data-netlify="true"
          data-netlify-honeypot="bot-field"
          onSubmit={handleSubmit}
        >
          <input type="hidden" name="form-name" value="contact" />
          <p hidden>
            <label>
              Don’t fill this out:{' '}
              <input name="bot-field" onChange={handleChange} />
            </label>
          </p>

          <CnInput
            name="name"
            type="text"
            placeholder="Name"
            onChange={handleChange}
          />
          <CnInput
            name="email"
            type="text"
            placeholder="Email"
            onChange={handleChange}
          />
          <CnTextArea
            name="message"
            placeholder="Message"
            onChange={handleChange}
          />
          <CnSubmit type="submit" name="submit">
            Send Email
          </CnSubmit>
        </form>
      </div>
    </div>
  );
};

export default MailWidget;
