import React, {Component} from 'react'

import '../styles/NewReviewForm.css'

export default class NewReviewForm extends Component {
  state = {
    name: '',
    comment: ''
  }

  createOnChangeCallback = (fieldName) => {
    return (e) => {
      this.setState({[fieldName]: e.target.value})
    }
  }

  handleSubmitClick = () => {
    const {addNewReview} = this.props
    const {name, comment} = this.state

    if (!name || !comment) {
      return alert('Please fill up name and comment! :)')
    }

    addNewReview({name, comment})
  }

  render() {
    return (
      <div className="new-review-form-container">
        <input
          placeholder="name"
          type="text"
          className="input"
          onChange={this.createOnChangeCallback('name')}
        />

        <textarea
          placeholder="comment"
          type="text"
          className="input"
          onChange={this.createOnChangeCallback('comment')}
        />

        <div className="submit-button" onClick={this.handleSubmitClick}>Add</div>
      </div>
    )
  }
}
