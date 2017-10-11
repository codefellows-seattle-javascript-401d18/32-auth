import React from 'react';

class Dashboard extends React.Component {
  constructor(props) {
    super(props);
    console.log(props);
  }

  render() {
    return (
      <div>
        <h2>hello world from the dashboard!</h2>
      </div>
    );
  }
}

export default Dashboard;
