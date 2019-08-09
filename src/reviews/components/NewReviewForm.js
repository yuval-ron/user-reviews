import React, {Component} from 'react'

import '../styles/NewReviewForm.css'

export default class NewReviewForm extends Component {
  render() {
    return (
      <div className="new-review-form-container">
        <input placeholder="name" type="text" className="input" />
        <textarea placeholder="comment" type="text" className="input" />

        <div className="submit-button">Add</div>
      </div>
    )
  }
}
