import React from 'react';
import AuthForm from '../auth-form';
import {connect} from 'react-redux';
import * as utils from '../../lib/utils';
import {signupRequest, loginRequest, tokenSet} from '../../action/auth-actions';

class LandingContainer extends React.Component {
  render() {
    let {params} = this.props.match;
    let handleComplete = params.auth === 'login' ?
      this.props.login :
      this.props.signup;

    return(
      <div>
        {this.props.auth ?
          <h4>You are signed in!</h4> :
          <AuthForm
            auth={params.auth}
            onComplete={handleComplete}/>
        }
      </div>
    );
  }
}

let mapStateToProps = state => ({
  auth: state.auth,
});

let mapDispatchToProps = dispatch => ({
  signup: user => dispatch(signupRequest(user)),
  login: user => dispatch(loginRequest(user)),
});

export default connect(mapStateToProps, mapDispatchToProps)(LandingContainer);
