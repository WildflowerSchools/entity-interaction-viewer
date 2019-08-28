import React from 'react';
import { useAuth } from '../hooks';

function Footer(props) {

  const { logout } = useAuth();

  return (
    <div className="wfs-footer">
      <span>Reporting by <a href="https://wildflowerschools.org/" target="_blank">Wildflower Schools</a></span>
      <a href="#" onClick={e => (e.preventDefault(), logout())}>Logout</a>
    </div>
  );
}

export default Footer;