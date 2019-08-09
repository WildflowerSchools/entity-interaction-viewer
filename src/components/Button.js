import React from 'react';
import { css, cx } from 'emotion';
import { isUndefined } from '../utils';

const styles = css`
  display: inline-block;
  position: relative;
  margin: 0;
  padding: 0.75em 1.25em;
  font-size: 1em;
  line-height: 1;
  color: #FFF;
  border: none;
  border-radius: 3px;
  background-color: #20A79F;
  box-shadow: 0 1px 2px 0 rgba(0,0,0,0.2);
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

  &.link {
    display: inline;
    padding: 0;
    color: #20A79F;
    background: transparent;
    box-shadow: none;
    text-transform: none;
    letter-spacing: 0;

    &:focus,
    &:hover {
      color: #0E928A;
      text-decoration: underline;
    }
  }
`

function Button({
  as: Element = 'button',
  variant = '',
  className = '',
  children,
  ...props
}) {

  if (Element === 'button' && isUndefined(props.type)) {
    props.type = 'button';
  }

  return (
    <Element className={cx(styles, variant, className)} {...props}>
      {children}
    </Element>
  );
};

export default Button;