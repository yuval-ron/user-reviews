import React, {Component} from 'react'

import NewReviewForm from './NewReviewForm'
import ReviewItem from './ReviewItem'
import {fetchReviews, addNewReview, deleteReview} from '../../services/api.js'
import '../styles/Reviews.css'

export default class Reviews extends Component {
  state = {
    reviews: {},
    isLoadingReviews: false,
    reviewInEdit: null
  }

  componentDidMount() {
    this.setState({isLoadingReviews: true})

    fetchReviews().then(reviews => {
      this.setState({reviews, isLoadingReviews: false})
    })
  }

  handleAddNewReview = (review) => {
    addNewReview(review).then((reviews) => {
      this.setState({reviews, reviewInEdit: null})
    })
  }

  handleDeleteReview = (reviewId) => {
    deleteReview(reviewId).then((reviews) => {
      this.setState({reviews})
    })
  }

  handleEditReview = (review) => {
    this.setState({reviewInEdit: review})
  }

  render() {
    const {isLoadingReviews, reviews, reviewInEdit} = this.state

    return (
      <div className="reviews-container">
        {isLoadingReviews ?
          'Loading...' :
          <List
            reviews={reviews}
            deleteReview={this.handleDeleteReview}
            editReview={this.handleEditReview}
            addNewReview={this.handleAddNewReview}
            reviewInEdit={reviewInEdit}
          />
        }

        {!reviewInEdit && <NewReviewForm addNewReview={this.handleAddNewReview} />}
      </div>
    )
  }
}

const List = ({
  reviews,
  deleteReview,
  editReview,
  addNewReview,
  reviewInEdit
}) => {
  const keysCollection = Object.keys(reviews)

  if (keysCollection.length === 0) {
    return <span>No reviews yet</span>
  }

  keysCollection.sort()


  return keysCollection.map(reviewId => {
    const review = reviews[reviewId]

    if (reviewInEdit && reviewInEdit === reviewId) {
      return <NewReviewForm key={reviewId} addNewReview={addNewReview} review={review} />
    }

    return (
      <ReviewItem
        key={reviewId}
        review={review}
        deleteReview={deleteReview}
        editReview={editReview}
      />
    )
  })
}
