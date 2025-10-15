import React from 'react';
import PropTypes from 'prop-types';
import style from './SectionStyle.module.css';

export const Section = ({ title, children }) => {
  return (
    <section>
      <h3 className={style.title}>{title}</h3>
      {children}
    </section>
  );
};

Section.propTypes = {
  title: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
};
