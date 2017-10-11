import React from 'react';
import {connect} from 'react-redux';
import {Link} from 'react-router-dom';
import {deleteToken} from '../../action/auth-actions';

class Navbar extends React.Component {
  render() {
    return (
      <header>
        <nav>
          <ul>
            {this.props.auth ?
              <li onClick={this.props.deleteToken}><Link to="/welcome/logout">Logout</Link></li> :
              <div>
                <li><Link to="/welcome/signup">Signup</Link></li>
                <li><Link to="/welcome/login">Login</Link></li>
              </div>
            }
          </ul>
        </nav>
      </header >
    );
  }
}

let mapStateToProps = state => ({
  auth: state.auth,
});

let mapDispatchToProps = dispatch => ({
  deleteToken: () => dispatch(deleteToken()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Navbar);
