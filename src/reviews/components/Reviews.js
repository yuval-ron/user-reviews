import React, {Component} from 'react'

import NewReviewForm from './NewReviewForm'
import ReviewItem from './ReviewItem'
import {fetchReviews, addNewReview, deleteReview} from '../../services/api.js'
import '../styles/Reviews.css'

export default class Reviews extends Component {
  state = {
    reviews: {},
    isLoadingReviews: false
  }

  componentDidMount() {
    this.setState({isLoadingReviews: true})

    fetchReviews().then(reviews => {
      this.setState({reviews, isLoadingReviews: false})
    })
  }

  handleAddNewReview = (review) => {
    this.setState({isLoadingReviews: true})

    addNewReview(review).then((reviews) => {
      this.setState({reviews, isLoadingReviews: false})
    })
  }

  handleDeleteReview = (reviewId) => {
    this.setState({isLoadingReviews: true})

    deleteReview(reviewId).then((reviews) => {
      this.setState({reviews, isLoadingReviews: false})
    })
  }

  render() {
    const {isLoadingReviews, reviews} = this.state

    return (
      <div className="reviews-container">
        <NewReviewForm addNewReview={this.handleAddNewReview} />

        {isLoadingReviews ?
          'Loading...' :
          <List reviews={reviews} deleteReview={this.handleDeleteReview} />
        }
      </div>
    )
  }
}

const List = ({reviews, deleteReview}) => {
  const keysCollection = Object.keys(reviews)

  if (keysCollection.length === 0) {
    return <span>No reviews yet</span>
  }

  keysCollection.sort()

  return keysCollection.map(reviewId => {
    return <ReviewItem key={reviewId} review={reviews[reviewId]} deleteReview={deleteReview} />
  })
}
