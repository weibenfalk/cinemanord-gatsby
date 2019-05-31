import React from 'react';

import MailWidget from './MailWidget';
import 'bootstrap/dist/css/bootstrap-grid.css';

const MailWidgetWrapper = ({ children }) => (
  <>
    {children}
    <MailWidget />
  </>
);

export default MailWidgetWrapper;
