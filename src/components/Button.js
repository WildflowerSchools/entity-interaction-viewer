import React from 'react';
import { isUndefined } from '../utils';

function Button({
  as: Element = 'button',
  className = '',
  children,
  ...props
}) {

  if (Element === 'button' && isUndefined(props.type)) {
    props.type = 'button';
  }

  return (
    <Element className="wfs-btn" {...props}>
      {children}
    </Element>
  );
};

export default Button;