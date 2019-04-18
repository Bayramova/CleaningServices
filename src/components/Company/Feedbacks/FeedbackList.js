import React, { Component } from "react";
import FeedbackListItem from "./FeedbackListItem";

class FeedbackList extends Component {
  render() {
    return (
      <React.Fragment>
        {this.props.feedbacks.map(feedback => (
          <FeedbackListItem
            key={feedback.id}
            rate={feedback.rate}
            feedback={feedback.feedback}
            client={feedback.order.name}
          />
        ))}
      </React.Fragment>
    );
  }
}

export default FeedbackList;
