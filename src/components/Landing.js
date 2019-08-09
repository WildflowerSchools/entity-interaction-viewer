import React from 'react';
import { useAuth } from '../context/auth';
import { useQuery } from '../context/data';
import Button from './Button';
import Filters from './Filters';
import Chart from './Chart';

// function Heading(props) {
//   return <h1>{props.children}</h1>
// }
// function Text(props) {
//   const { as: Element = 'span', children } = props;
//   return <Element>{children}</Element>
// }

// import { css } from 'emotion';
// const headerStyles = css`
//   display: flex;
// `

// function Header(props) {
//   return (
//     <header className={headerStyles}>
//       {props.children}
//     </header>
//   );
// }

function Landing(props) {

  const { logout } = useAuth();
  const { data } = useQuery('some query here...');

  const students = Object.values(data.reduce((result, {person}) => {
    const { person_id: id, name } = person;
    if (!result[id]) result[id] = {value: id, label: name};
    return result;
  }, {}));

  console.log(students)

  return (
    <React.Fragment>

      <h1>Material Interaction Details</h1>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore.</p>

      <Filters students={students} />
      <Chart data={data} />

      <div className="wfs-footer">
        Interaction reporting by <a href="https://wildflowerschools.org/" target="_blank">Wildflower Schools</a>
        &nbsp;&nbsp;&bull;&nbsp;&nbsp;
        <Button variant="link" onClick={logout}>Logout</Button>
      </div>

      {window.debug(data)}

    </React.Fragment>
  );
}

export default Landing;