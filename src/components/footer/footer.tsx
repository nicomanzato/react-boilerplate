import React from 'react';
import './footer.scss';
import { values } from 'defaultValues';

export const Footer = () => {
  return (
    <footer className="footer">
      <a className="footer__repository-label" href={values.URL.REPOSITORY}>
        Github Repository
      </a>
    </footer>
  );
};

export default Footer;