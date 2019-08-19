import React from 'react';
import { useAuth } from '../context/auth';

function Footer(props) {

  const { logout } = useAuth();

  return (
    <div className="wfs-footer">
      Reporting by <a href="https://wildflowerschools.org/" target="_blank">Wildflower Schools</a>
      &nbsp;&nbsp;&bull;&nbsp;&nbsp;
      <a href="#" onClick={logout}>Logout</a>
    </div>
  );
}

export default Footer;