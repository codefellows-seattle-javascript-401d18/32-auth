import React from 'react';
import AuthForm from '../auth-form';

class Dashboard extends React.Component {
  constructor(props) {
    super(props);
    console.log(this.props.auth);
  }

  render() {
    return (
      <div>
        <h2>hello world from the dashboard!</h2>
  //took out any code that renders other complicated stuff because I just want it to render something
      </div>
    );
  }
}

export default Dashboard;
