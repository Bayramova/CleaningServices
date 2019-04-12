import React, { Component } from "react";
import FeedbackListItem from "./FeedbackListItem";

class FeedbackList extends Component {
  render() {
    return (
      <React.Fragment>
        {this.props.feedbacks.map(feedback => (
          <FeedbackListItem
            key={feedback.id}
            client_name={
              this.props.clients.find(
                client => client.id === feedback.order.client_id
              ).name
            }
            rate={feedback.rate}
            feedback={feedback.feedback}
          />
        ))}
      </React.Fragment>
    );
  }
}

export default FeedbackList;
