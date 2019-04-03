import React, { Component } from "react";
import { connect } from "react-redux";
import UserProfile from "./UserProfile";
import { getUser } from "../../actions/userProfileActions";

class UserProfileContainer extends Component {
  componentDidMount() {
    this.props.getUser(this.props.auth.user.id);
    //console.log(this.props.auth.user.id);
  }
  render() {
    return (
      <UserProfile auth={this.props.auth} userData={this.props.userData} />
    );
  }
}

const mapStateToProps = state => {
  return {
    auth: state.auth,
    userData: state.userData
  };
};

const mapDispatchToProps = {
  getUser: getUser
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(UserProfileContainer);
