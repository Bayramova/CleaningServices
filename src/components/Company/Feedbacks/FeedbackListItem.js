import React, { Component } from "react";
import { Rate } from "antd";
import "components/UserProfile/UserProfile.css";
import "../CompanyInfo.css";

class FeedbackListItem extends Component {
  render() {
    const { rate, feedback, client_name } = this.props;
    return (
      <div className="feedback-item">
        <div className="user-profile__header--order">
          <div>
            <Rate disabled defaultValue={rate} />
          </div>
          {client_name}
        </div>
        <div className="user-profile__info">
          <p className="user-profile__name">{feedback}</p>
        </div>
      </div>
    );
  }
}

export default FeedbackListItem;
