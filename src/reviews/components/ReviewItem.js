import React, {Component} from 'react'

import '../styles/ReviewItem.css'

export default class Reviews extends Component {
  render() {
    const {review: {name, comment}} = this.props

    return (
      <div className="review-item-container">
        <div className="user-avatar"></div>
        <div className="review-details">
          <div className="name">{name}</div>
          <div className="comment">{comment}</div>
        </div>
      </div>
    )
  }
}
