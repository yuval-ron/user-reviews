import React, {Component} from 'react'

import NewReviewForm from './NewReviewForm'
import '../styles/Reviews.css'

export default class Reviews extends Component {
  render() {
    return (
      <div className="reviews-container">
        <span>No reviews yet</span>

        <NewReviewForm />
      </div>
    )
  }
}
