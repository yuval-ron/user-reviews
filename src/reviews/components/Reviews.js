import React, {Component} from 'react'

import NewReviewForm from './NewReviewForm'
import '../styles/Reviews.css'

export default class Reviews extends Component {
  render() {
    return (
      <div className="reviews-container">
        <NewReviewForm />

        <span>No reviews yet</span>
      </div>
    )
  }
}
