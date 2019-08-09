import React, {Component} from 'react'

import NewReviewForm from './NewReviewForm'
import {addNewReview} from '../../services/api.js'
import '../styles/Reviews.css'

export default class Reviews extends Component {
  state = {
    reviews: {}
  }

  handleAddNewReview = (review) => {
    addNewReview(review).then((reviews) => {
      this.setState({reviews})
      console.log('SUCCESS!!!!')
    })
  }

  render() {
    return (
      <div className="reviews-container">
        <NewReviewForm addNewReview={this.handleAddNewReview} />

        <span>No reviews yet</span>
      </div>
    )
  }
}
