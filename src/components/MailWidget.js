import React, { useState } from 'react';
import { navigateTo } from 'gatsby-link';

import envelope from '../images/envelope.svg';
import x from '../images/x.png';

import {
  StyledMailWidget,
  CnInput,
  CnTextArea,
  CnSubmit,
} from './styles/StyledMailWidget';

const MailWidget = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [formState, setFormState] = useState({});
  const [formSent, setFormSent] = useState(false);

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
      // .then(() => navigateTo(form.getAttribute('action')))
      .then(setFormSent(true))
      .catch(error => alert(error));
  };

  const handleChange = e => {
    const event = e.target;
    setFormState(prev => ({ ...prev, [event.name]: event.value }));
  };

  return (
    <StyledMailWidget className={isVisible ? 'visible' : ''}>
      <div
        className="toggleButton"
        onClick={toggleVisible}
        onKeyDown={toggleVisible}
        tabIndex="0"
        role="button"
      >
        <img
          className={isVisible ? 'mailWidgetImg small' : 'mailWidgetImg'}
          src={isVisible ? x : envelope}
          alt="envelope"
        />
      </div>
      <div className="contentMailWidget">
        {!formSent ? (
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
              Don’t fill this out:{' '}
              <CnInput name="bot-field" onChange={handleChange} />
            </p>
            <p>
              <CnInput
                type="text"
                name="name"
                onChange={handleChange}
                placeholder="First and Last Name"
              />
            </p>
            <p>
              <CnInput
                type="email"
                name="email"
                onChange={handleChange}
                placeholder="E-mail Adress"
              />
            </p>
            <p>
              <CnTextArea
                name="message"
                onChange={handleChange}
                placeholder="Your Message"
              />
            </p>
            <p>
              <CnSubmit type="submit">Send email</CnSubmit>
            </p>
          </form>
        ) : (
          <p>Thank you for emailing us.</p>
        )}
      </div>
    </StyledMailWidget>
  );
};

export default MailWidget;
