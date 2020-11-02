import  PropTypes  from 'prop-types';
import React from 'react';

function Section({ title, children}) {
  return (
    <section>
      {title && <h2>{title}</h2>}
      {children}
    </section>
  );
}

Section.defaultProps = {
  title: '',
};

Section.propTypes = {
  title: PropTypes.string,
  children: PropTypes.node.isRequired
};

export default Section