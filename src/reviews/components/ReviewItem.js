import React, {Component} from 'react'

import '../styles/ReviewItem.css'

const imgGen = require('@dudadev/random-img')

export default class ReviewItem extends Component {
  state = {
    avatarURL: ''
  }

  componentDidMount() {
    imgGen().then(avatarURL => this.setState({avatarURL}));
  }

  handleDeleteButtonClick = () => {
    const {deleteReview, review} = this.props

    deleteReview(review.id)
  }

  render() {
    const {review: {name, comment}} = this.props
    const {avatarURL} = this.state
    const avatarStyle = {backgroundImage: `url(${avatarURL})`}

    return (
      <div className="review-item-container">
        <div className="controls">
          <div className="button">Edit</div>
          <div className="button" onClick={this.handleDeleteButtonClick}>Delete</div>
        </div>
        <div className="user-avatar" style={avatarStyle}></div>
        <div className="review-details">
          <div className="name">{name}</div>
          <div className="comment">{comment}</div>
        </div>
      </div>
    )
  }
}
