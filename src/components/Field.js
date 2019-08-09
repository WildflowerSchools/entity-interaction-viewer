import React from 'react';
import { css, cx } from 'emotion';

const styles = css`
  .wfs-label {
    display: block;
    font-size: 0.9375em;
    color: #666;
  }
`

function Field({label, children}) {
  return (
    <div className={cx(styles, 'wfs-field')}>
      <label className="wfs-label">
        {label}
      </label>
      <div className="wfs-input">
        {children}
      </div>
    </div>
  );
}

export default Field;