import React from 'react';
import { css, cx } from 'emotion';
import { isUndefined } from '../utils';

const styles = css`
  display: inline-block;
  position: relative;
  margin: 0;
  padding: 0.75em 1.25em;
  font-size: 1em;
  font-family: inherit;
  line-height: 1;
  color: #FFF;
  border: none;
  background-color: #20A79F;
  letter-spacing: 0.05em;
  text-decoration: none;
  text-transform: uppercase;
  white-space: nowrap;
  outline: none;
  cursor: pointer;
  transition: all 0.2s;
  -webkit-appearance: none;
  -moz-appearance: none;
  appearance: none;
  -webkit-touch-callout: none;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;

  &:focus,
  &:hover {
    background-color: #0E928A;
  }
`

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
    <Element className={cx(styles, className)} {...props}>
      {children}
    </Element>
  );
};

export default Button;