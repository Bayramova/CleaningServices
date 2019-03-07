import React, { Component } from "react";
import companies from "../data/companies";
import Review from './Review';

class ReviewsContainer extends Component {
  state = {
    reviews: []
  };

  async componentDidMount() {
    this.setState(() => {
      return {
        reviews: companies.reviews
      };
    });
  }
  render() {
    return (
      <React.Fragment>
        {this.state.reviews.map(review => (
          <Review
            key={review.user}
            user={review.user}
            rating={review.rating}
            feedback={review.feedback}
          />
        ))}
      </React.Fragment>
    );
  }
}

export default ReviewsContainer;
