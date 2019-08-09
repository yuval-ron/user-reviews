import React, {Component} from 'react'

import '../styles/NewReviewForm.css'

export default class NewReviewForm extends Component {
  state = {
    name: '',
    comment: '',
    id: ''
  }

  componentDidMount() {
    const {review} = this.props

    if (review) {
      console.log('NewReviewForm.js review', review)
      const {name, comment, id} = review

      this.setState({name, comment, id})
    }
  }

  createOnChangeCallback = (fieldName) => {
    return (e) => {
      this.setState({[fieldName]: e.target.value})
    }
  }

  handleSubmitClick = () => {
    const {addNewReview} = this.props
    const {name, comment, id} = this.state

    if (!name || !comment) {
      return alert('Please fill up name and comment! :)')
    }

    addNewReview({name, comment, id})
  }

  render() {
    const {name, comment} = this.state

    return (
      <div className="new-review-form-container">
        <input
          placeholder="name"
          type="text"
          className="input"
          value={name}
          onChange={this.createOnChangeCallback('name')}
        />

        <textarea
          placeholder="comment"
          type="text"
          className="input"
          value={comment}
          onChange={this.createOnChangeCallback('comment')}
        />

        <div className="submit-button" onClick={this.handleSubmitClick}>Add</div>
      </div>
    )
  }
}
